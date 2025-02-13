import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensures Jest recognizes `toBeInTheDocument`
import { TipoDeCambio } from "../screens/TipoDeCambio"; // ✅ Use named import

jest.mock("../../assets/nextIcon.svg", () => "mock-image"); // ✅ Mock SVG imports

test("Debe mostrar el tipo de cambio correcto", () => {
    render(<TipoDeCambio />);
    
    // Verifies that the exchange rate text appears on the screen
    expect(screen.getByText("Compra = 6.95")).toBeInTheDocument();
    expect(screen.getByText("Venta = 6.97")).toBeInTheDocument();
});
