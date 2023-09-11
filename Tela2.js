import React from 'react';
import styled from 'styled-components/native';
import BotaoPersonalizado from './BotaoPersonalizado';
import CabecalhoPersonalizado from './CabecalhoPersonalizado';

const Container = styled.View`
  /* Estilos para o container */
`;

const Texto = styled.Text`
  /* Estilos para o texto */
`;

export default function Tela2({ proximaTela }) {
  return (
    <Container>
      <CabecalhoPersonalizado titulo="Tela 2" />
      <Texto>Alguns Dados</Texto>
      <BotaoPersonalizado titulo="Ir para Tela 3" aoPressionar={proximaTela} />
    </Container>
  );
}
