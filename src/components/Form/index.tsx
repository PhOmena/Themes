import React from 'react';

import { Container, Form, Inputs } from './styles';

const Box: React.FC = () => {
  return (
    <Container>
        <Form>
            <h1>Login</h1>
            <Inputs>
                <input placeholder="E-mail" type="text"/>
                <input  placeholder="Senha" type="password"/>
                <button type="submit">Entrar</button>
            </Inputs>
            <span>Esqueceu a senha?</span>
        </Form>
    </Container>
  );
};

export default Box;