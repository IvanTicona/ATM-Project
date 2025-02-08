import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import { KeyboardProvider } from './contexts/KeyboardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <KeyboardProvider>
        <App />
      </KeyboardProvider>
    </BrowserRouter>
  </StrictMode>,
)
