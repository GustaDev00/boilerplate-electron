import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: ${(props) => props.theme.colors.darker};
  padding: 20px;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  overflow: auto;
`;

const NavLink = styled(Link)`
  display: block;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Sidebar>
        <h3>Discord 2.0</h3>
        <nav style={{ marginTop: 20 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/settings">Configurações</NavLink>
        </nav>
      </Sidebar>
      <Content>{children}</Content>
    </Container>
  );
};
