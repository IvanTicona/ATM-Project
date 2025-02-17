/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensures Jest recognizes toBeInTheDocument
import { CambioDePin } from "../screens/CambioDePin"; 
import { KeyboardContext } from "../contexts/KeyboardContext";
import 'react-toastify/dist/ReactToastify.css';

// Mocking context and components
jest.mock('../components/common/Keyboard', () => ({
    Keyboard: ({ limit, action }) => (
        <button onClick={() => action()}>{`Mock Keyboard with limit ${limit}`}</button>
    )
}));
// Mocking the toast container
describe("Pruebas en <CambioDePin />", () => {

    test("Debe mostrar el título correctamente", () => {
        render(
            <KeyboardContext.Provider value={{ keyboardValue: "", setState: jest.fn() }}>
                <CambioDePin />
            </KeyboardContext.Provider>
        );

        // Verifica que el título "INGRESE SU NUEVO PIN:" se muestre
        expect(screen.getByText("INGRESE SU NUEVO PIN:")).toBeInTheDocument();
    });
    
    test("Debe mostrar el valor del teclado correctamente", () => {
        render(
            <KeyboardContext.Provider value={{ keyboardValue: "1234", setState: jest.fn() }}>
                <CambioDePin />
            </KeyboardContext.Provider>
        );

        // Verifica que el valor del teclado sea "1234"
        expect(screen.getByText("1234")).toBeInTheDocument();
    });

})