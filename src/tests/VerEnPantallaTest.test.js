// Polyfill para TextEncoder y TextDecoder (debe estar antes de cualquier otra importación)
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import React from 'react';
import renderer from 'react-test-renderer';
import { VerEnPantalla } from '../screens/VerEnPantalla';
import { MemoryRouter } from 'react-router-dom';

describe('VerEnPantalla Snapshot Test', () => {
  test('should render correctly and match the snapshot', () => {
    // Arrange: Configurar el estado simulado
  

    // Act: Renderizar el componente con react-test-renderer
    const component = renderer.create(
      <MemoryRouter>
        <VerEnPantalla />
      </MemoryRouter>
    );
    const tree = component.toJSON();

    // Assert: Comparar con snapshot
    expect(tree).toMatchSnapshot();
  });
});
