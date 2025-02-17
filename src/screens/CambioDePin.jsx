import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CambioDePin } from './CambioDePin';
import { getAccountData, updateAccountData } from "../../src/services/account";
import { KeyboardContext } from "../../src/contexts/KeyboardContext";
import "@testing-library/jest-dom";

jest.mock("../../src/services/account", () => ({
  getAccountData: jest.fn(),
  updateAccountData: jest.fn(),
}));

describe("CambioDePin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should update pin correctly", async () => {
    const fakeData = { pin: 1234 };
    getAccountData.mockResolvedValue(fakeData);
    updateAccountData.mockResolvedValue();

    // Simular contexto del teclado
    const keyboardContextValue = { keyboardValue: "4321" };

    render(
      <KeyboardContext.Provider value={keyboardContextValue}>
        <CambioDePin />
      </KeyboardContext.Provider>
    );

    // Esperar a que se cargue el estado de la cuenta
    await waitFor(() => {
      expect(getAccountData).toHaveBeenCalledTimes(1);
    });

    // Buscar el teclado en el DOM (si hay un botón que lo acciona)
    const keyboardDisplay = screen.getByText("4321"); // Verifica que el teclado muestra el PIN ingresado
    expect(keyboardDisplay).toBeInTheDocument();

    // Simular confirmación
    await waitFor(() => {
      updateAccountData.mock.calls.length > 0;
    });

    expect(updateAccountData).toHaveBeenCalledTimes(1);
    expect(updateAccountData).toHaveBeenCalledWith({ pin: 4321 });
  });
});


