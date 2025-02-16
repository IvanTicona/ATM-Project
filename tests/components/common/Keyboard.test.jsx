/* eslint-disable react/prop-types */
// Keyboard.test.jsx
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Keyboard } from '../../../src/components/common/Keyboard';
import { KeyboardContext } from '../../../src/contexts/KeyboardContext';
import { toast } from 'react-toastify';

// Mock para toast.info
jest.mock('react-toastify', () => ({
  toast: {
    info: jest.fn(),
  },
}));

// Crea un wrapper que provea el contexto
const renderWithContext = (
  ui,
  { initialValue = '', providerProps = {} } = {}
) => {
  const Wrapper = ({ children }) => {
    const [keyboardValue, setKeyboardValue] = useState(initialValue);
    return (
      <KeyboardContext.Provider value={{ keyboardValue, setKeyboardValue, ...providerProps }}>
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
    // Para poder ver el valor, creamos un consumidor simple que lo muestre
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

    // Simula hacer clic en el botón "1"
    fireEvent.click(screen.getByText('1'));
    expect(screen.getByTestId('value')).toHaveTextContent('1');

    // Hacemos clic en el botón "2"
    fireEvent.click(screen.getByText('2'));
    expect(screen.getByTestId('value')).toHaveTextContent('12');
  });

  test('al hacer clic en el botón cancelar se reinicia el valor', () => {
    // Inicializamos el estado con un valor
    const DisplayValue = () => {
      const { keyboardValue } = React.useContext(KeyboardContext);
      return <p data-testid="value">{keyboardValue}</p>;
    };

    renderWithContext(
      <>
        <Keyboard />
        <DisplayValue />
      </>,
      { initialValue: '1234' }
    );

    expect(screen.getByTestId('value')).toHaveTextContent('1234');

    // Busca el botón de cancelar por su alt text y haz clic
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

    // Establecemos un límite de 4 dígitos y exactLenght=true
    renderWithContext(
      <>
        <Keyboard limit={4} exactLenght={true} action={mockAction} />
        <DisplayValue />
      </>
    );

    // Simulamos ingresar 4 dígitos
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('4'));
    expect(screen.getByTestId('value')).toHaveTextContent('1234');

    // Hacemos clic en el botón aceptar (buscamos el botón por el alt text de la imagen)
    const acceptButton = screen.getByAltText('accept');
    fireEvent.click(acceptButton);

    // Se debe llamar a la acción y el valor debe reiniciarse
    expect(mockAction).toHaveBeenCalled();
    expect(screen.getByTestId('value')).toHaveTextContent('');
  });

  test('al hacer clic en aceptar sin tener la longitud exacta se muestra un toast', () => {
    renderWithContext(<Keyboard limit={4} exactLenght={true} action={() => {}} />);

    // Simulamos ingresar 3 dígitos (no es suficiente)
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));

    const acceptButton = screen.getByAltText('accept');
    fireEvent.click(acceptButton);

    expect(toast.info).toHaveBeenCalledWith('Deben introducirse 4 dígitos');
  });

  test('al intentar ingresar más dígitos que el límite se muestra un toast', () => {
    renderWithContext(<Keyboard limit={3} action={() => {}} />);

    // Ingresamos 3 dígitos válidos
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    // Intentamos ingresar un dígito adicional
    fireEvent.click(screen.getByText('4'));

    expect(toast.info).toHaveBeenCalledWith('El número máximo de dígitos es 3');
  });
});
