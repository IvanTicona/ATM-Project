/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { VerEnPantalla } from '../../src/screens/VerEnPantalla';
import { getAccountData } from '../../src/services/account';
import '@testing-library/jest-dom';

jest.mock('../../src/services/account', () => ({
  getAccountData: jest.fn(),
}));

describe('VerEnPantalla Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Renderizado básico: se muestra el título "Extracto"', async () => {
    getAccountData.mockResolvedValue({
      balance: 100,
      lastTransaction: { toDate: () => new Date('2025-02-16T12:00:00') },
      owner: 'Test User',
    });

    render(<VerEnPantalla />);

    const title = await screen.findByText(/Extracto/);
    expect(title).toBeInTheDocument();
  });

  test('Contenido inicial: se muestran los valores por defecto antes de la respuesta de la API', async () => {
    getAccountData.mockResolvedValue({
      balance: 100,
      lastTransaction: { toDate: () => new Date('2025-02-16T12:00:00') },
      owner: 'Test User',
    });

    render(<VerEnPantalla />);

    await waitFor(() => {
      expect(screen.getByText(/Saldo Disponible:/)).toHaveTextContent('Bs.0');
    });

    expect(screen.getByText(/Propietario:/)).toHaveTextContent('Test User');
  });

  test('Llamada a getAccountData y actualización del contenido con datos de la API', async () => {
    const fakeDate = new Date('2025-02-16T12:00:00');
    const fakeData = {
      balance: 100,
      lastTransaction: { toDate: () => fakeDate },
      owner: 'Test User',
    };

    getAccountData.mockResolvedValue(fakeData);

    render(<VerEnPantalla />);

    await waitFor(() => {
      expect(screen.getByText(/Saldo Disponible:/)).toHaveTextContent('Bs.100');
    });

    const formattedDate = fakeDate.toLocaleString();
    expect(screen.getByText(/Última transaccion:/)).toHaveTextContent(formattedDate);
    expect(screen.getByText(/Propietario:/)).toHaveTextContent('Test User');
    expect(getAccountData).toHaveBeenCalledTimes(1);
  });
});
