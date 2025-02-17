/* eslint-disable no-unused-vars */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensures Jest recognizes toBeInTheDocument
import { TipoDeCambio } from "../screens/TipoDeCambio"; 

jest.mock("../../assets/nextIcon.svg", () => "mock-image"); // Mock SVG imports

describe("Pruebas en <TipoDeCambio />", () => {
   test("Debe mostrar el tipo de cambio correcto", () => {
    render(<TipoDeCambio />);
    
    expect(screen.getByText("Compra = 6.95")).toBeInTheDocument();
    expect(screen.getByText("Venta = 6.95")).toBeInTheDocument();
});});