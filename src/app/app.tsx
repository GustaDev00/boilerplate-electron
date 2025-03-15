import React from "react";
import { styled } from "styled-components";

// Usando styled-components em vez de CSS
const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  margin: auto;
  max-width: 38rem;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Title>💖 Hello World!</Title>
      <p>Welcome to your Electron application with React and styled-components.</p>
    </Container>
  );
};

export default App;
