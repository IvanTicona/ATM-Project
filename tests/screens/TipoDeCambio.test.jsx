/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { TipoDeCambio } from '../../src/screens/TipoDeCambio';
import '@testing-library/jest-dom';

describe('TipoDeCambio', () => {
  it('debe mostrar los tipos de cambio correctamente', () => {
    // Arrange: 
    // No es necesario mockear

    // Act: Renderizar el componente
    render(<TipoDeCambio />);

    // Assert: Verificación de que el título "Tipo de Cambio" aparece en pantalla
    expect(screen.getByText(/tipo de cambio/i)).toBeInTheDocument();

    // Assert: Verificación de que las divisas y sus valores se muestran correctamente usando regex
    expect(screen.getByText(/dólar/i)).toBeInTheDocument();
    expect(screen.getByText(/Compra = Bs\s*6.95/i)).toBeInTheDocument();
    expect(screen.getByText(/Venta = Bs\s*6.97/i)).toBeInTheDocument();

    expect(screen.getByText(/euro/i)).toBeInTheDocument();
    expect(screen.getByText(/Compra = Bs\s*7.21/i)).toBeInTheDocument();
    expect(screen.getByText(/Venta = Bs\s*7.23/i)).toBeInTheDocument();

    expect(screen.getByText(/sol/i)).toBeInTheDocument();
    expect(screen.getByText(/Compra = Bs\s*1.85/i)).toBeInTheDocument();
    expect(screen.getByText(/Venta = Bs\s*1.86/i)).toBeInTheDocument();
  });
});
