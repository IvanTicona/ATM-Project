/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CambioDePin } from '../../src/screens/CambioDePin';
import { getAccountData, updateAccountData } from '../../src/services/account';
import { KeyboardContext } from '../../src/contexts/KeyboardContext';
import '@testing-library/jest-dom';

//Test para verificar que el pin fue actualizado correctamente

jest.mock('../../src/services/account', () => ({
  getAccountData: jest.fn(),
  updateAccountData: jest.fn(),
}));

describe('CambioDePin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update pin correctly', async () => {
    const fakeData = {
      pin: 1234,
    };

    getAccountData.mockResolvedValue(fakeData);
    updateAccountData.mockResolvedValue();

    render(
      <KeyboardContext.Provider value={{ keyboardValue: '4321' }}>
        <CambioDePin />
      </KeyboardContext.Provider>
    );

    const confirmButton = screen.getByText('Confirmar');
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(updateAccountData).toHaveBeenCalledTimes(1);
      expect(updateAccountData).toHaveBeenCalledWith({ pin: 4321 });
    });
  });
}); 