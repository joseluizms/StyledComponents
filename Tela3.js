import React from 'react';
import styled from 'styled-components/native';
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

export default function Tela3() {
  return (
    <Container>
      <CabecalhoPersonalizado titulo="Tela 3" />
      <Texto>Você chegou na tela final.</Texto>
    </Container>
  );
}

