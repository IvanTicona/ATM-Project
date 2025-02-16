/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import { CambioDePin } from "../../src/screens/CambioDePin";
import { KeyboardContext } from "../../src/contexts/KeyboardContext";
import { ToastContainer } from "react-toastify";

// Función mock para evitar errores con navigate
jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
}));

describe("Pruebas en <CambioDePin />", () => {
let setStateMock;

beforeEach(() => {
    setStateMock = jest.fn();
    render(
        <KeyboardContext.Provider value={{ setState: setStateMock }}>
            <CambioDePin />
            <ToastContainer /> {}
        </KeyboardContext.Provider>
    );
});

test("Debe mostrar el título 'INGRESAR NUEVO PIN'", () => {
    expect(screen.getByText("INGRESAR NUEVO PIN")).toBeInTheDocument();
});

test("Debe mostrar los botones numéricos", () => {
    for (let i = 0; i <= 9; i++) {
        expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
});

test("Debe mostrar un mensaje si el PIN es menor a 4 dígitos", () => {
    const button1 = screen.getByText("1");
    fireEvent.click(button1);
    fireEvent.click(screen.getByText("✔")); 

    expect(screen.getByText("El PIN debe tener 4 dígitos.")).toBeInTheDocument();
});

test("Debe mostrar un mensaje si el PIN es '1234' (igual al actual)", async () => {
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(screen.getByText("✔")); 

    expect(await screen.findByText("Por favor, ingrese un PIN distinto al actual.")).toBeInTheDocument();
});    
});