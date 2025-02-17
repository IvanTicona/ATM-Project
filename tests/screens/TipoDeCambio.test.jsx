/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { VerEnPantalla } from '../../src/screens/VerEnPantalla';
import { getAccountData } from '../../src/services/account';
import '@testing-library/jest-dom';

// Este test debe verificar que el componente VerEnPantalla renderiza correctamente
// y que muestra el tipo de cambio en pantalla
describe('VerEnPantalla', () => {
  // Mock para los servicios
  jest.mock('../../src/services/account', () => ({
    getAccountData: jest.fn(),
  }));

  // Test para verificar que el componente VerEnPantalla renderiza correctamente
  it('should render VerEnPantalla', async () => {
    // Mock de la respuesta del servicio getAccountData
    getAccountData.mockResolvedValue({
      tipoDeCambio: 20,
    });

    // Renderizamos el componente
    render(<VerEnPantalla />);

    // Verificamos que el componente se renderizó correctamente
    expect(screen.getByText('Tipo de cambio')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
  });
});
