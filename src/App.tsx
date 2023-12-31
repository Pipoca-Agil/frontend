
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import { GlobalStyle } from "./styles/Global";
import Login from "./pages/Login";
import RegisterProvider from "./context/registerProvider";
import ModalProvider from "./context/ModalProvider";
import Aside from "./components/aside/Index";
import AudioMessage from "./pages/AudioMessage";

function App() {
  return (
    <>
      <GlobalStyle />
      <RegisterProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Aside" element={<Aside />} />
              <Route path="/audiomessage" element={<AudioMessage />} />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </RegisterProvider>
    </>
  );
}

export default App;
