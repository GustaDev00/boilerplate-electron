import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Discord 2.0</h1>
      <p>Uma versão melhorada do Discord!</p>
      <div style={{ marginTop: 20 }}>
        <Button onClick={() => navigate("/chat")}>Ir para Chat</Button>
        <Button onClick={() => navigate("/settings")}>Configurações</Button>
      </div>
    </Container>
  );
};
