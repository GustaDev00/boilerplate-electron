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
  margin-top: 20px;
`;

export const Chat: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Chat</h1>
      <p>Esta é a página de chat!</p>
      <Button onClick={() => navigate("/")}>Voltar para Home</Button>
    </Container>
  );
};
