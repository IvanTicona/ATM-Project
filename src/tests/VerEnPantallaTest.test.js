/*// Polyfill para TextEncoder y TextDecoder (debe estar antes de cualquier otra importación)
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

import React from 'react';
import renderer from 'react-test-renderer';
import { VerEnPantalla } from '../screens/VerEnPantalla';
import { MemoryRouter } from 'react-router-dom';
import { getAccountData } from '../services/account';

describe('VerEnPantalla Snapshot Test', () => {
  test('should render correctly and match the snapshot', async () => {
    // Arrange: Configurar el estado simulado
    const data = await getAccountData();
    // Act: Renderizar el componente con react-test-renderer
    //renderizar componente ver en pantalla
    render
    const component = 
    const tree = component.toJSON();

    // Assert: Comparar con snapshot
    expect(tree).toMatchSnapshot();
  });
});*/
