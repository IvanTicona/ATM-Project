import { createContext, useState } from "react";

export const KeyboardContext = createContext();

// eslint-disable-next-line react/prop-types
export const KeyboardProvider = ({ children }) => {
  
  const [keyboardValue, setKeyboardValue] = useState("");

  return (
    <KeyboardContext.Provider value={{ keyboardValue, setKeyboardValue }}>
      {children}
    </KeyboardContext.Provider>
  );
};
