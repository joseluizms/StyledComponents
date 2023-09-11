import React from 'react';
import styled from 'styled-components/native';
import BotaoPersonalizado from './BotaoPersonalizado';
import CabecalhoPersonalizado from './CabecalhoPersonalizado';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const Texto = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: #333;
`;

export default function Tela1({ proximaTela }) {
  return (
    <Container>
      <CabecalhoPersonalizado titulo="Tela 1" />
      <Texto>Bem-vindo à Tela 1</Texto>
      <BotaoPersonalizado titulo="Ir para Tela 2" aoPressionar={proximaTela} />
    </Container>
  );
}
