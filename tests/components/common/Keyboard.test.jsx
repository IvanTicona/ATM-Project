/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Keyboard } from '../../../src/components/common/Keyboard';
import { KeyboardContext } from '../../../src/contexts/KeyboardContext';

jest.mock('react-toastify', () => ({
  toast: {
    info: jest.fn(),
  },
}));

const renderWithContext = (
  ui,
  { initialValue = '', providerProps = {} } = {}
) => {
  const Wrapper = ({ children }) => {
    const [keyboardValue, setKeyboardValue] = useState(initialValue);
    return (
      <KeyboardContext.Provider
        value={{ keyboardValue, setKeyboardValue, ...providerProps }}
      >
        {children}
      </KeyboardContext.Provider>
    );
  };
  return render(ui, { wrapper: Wrapper });
};

describe('Keyboard Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('al hacer clic en un número se actualiza el valor', () => {
    const DisplayValue = () => {
      const { keyboardValue } = React.useContext(KeyboardContext);
      return <p data-testid="value">{keyboardValue}</p>;
    };

    renderWithContext(
      <>
        <Keyboard />
        <DisplayValue />
      </>
    );

    fireEvent.click(screen.getByTestId('keyboard-1'));
    expect(screen.getByTestId('value')).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('keyboard-2'));
    expect(screen.getByTestId('value')).toHaveTextContent('12');
  });

  test('al hacer clic en el botón cancelar se reinicia el valor', () => {
    const DisplayValue = () => {
      const { keyboardValue } = React.useContext(KeyboardContext);
      return <p data-testid="value">{keyboardValue}</p>;
    };

    renderWithContext(
      <>
        <Keyboard />
        <DisplayValue />
      </>,
      { initialValue: "" }
    );

    fireEvent.click(screen.getByTestId('keyboard-1'));
    fireEvent.click(screen.getByTestId('keyboard-2'));
    const cancelButton = screen.getByAltText('cancel');
    fireEvent.click(cancelButton);
    expect(screen.getByTestId('value')).toHaveTextContent('');
  });

  test('al hacer clic en aceptar con longitud exacta se llama la acción y se reinicia el valor', () => {
    const mockAction = jest.fn();
    const DisplayValue = () => {
      const { keyboardValue } = React.useContext(KeyboardContext);
      return <p data-testid="value">{keyboardValue}</p>;
    };

    renderWithContext(
      <>
        <Keyboard limit={4} exactLenght={true} action={mockAction} />
        <DisplayValue />
      </>
    );

    fireEvent.click(screen.getByTestId('keyboard-1'));
    fireEvent.click(screen.getByTestId('keyboard-2'));
    fireEvent.click(screen.getByTestId('keyboard-3'));
    fireEvent.click(screen.getByTestId('keyboard-4'));
    expect(screen.getByTestId('value')).toHaveTextContent('1234');

    const acceptButton = screen.getByAltText('accept');
    fireEvent.click(acceptButton);

    expect(mockAction).toHaveBeenCalled();
    expect(screen.getByTestId('value')).toHaveTextContent('');
  });
});