/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Home } from "@/pages/home";
import { Chat } from "@/pages/chat";
import { Settings } from "@/pages/settings";
import { Layout } from "./layout";

const theme = {
  colors: {
    primary: "#7289da",
    secondary: "#99aab5",
    dark: "#2c2f33",
    darker: "#23272a",
    white: "#ffffff",
  },
  fonts: {
    primary: "'Open Sans', sans-serif",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
`;

// Inicializa a aplicação React
const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Layout>
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>,
  );
}

console.log("👋 React application is now running in the renderer process");
