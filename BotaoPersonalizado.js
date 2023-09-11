import React from 'react';
import styled from 'styled-components/native';

const Botao = styled.Button`
  /* Aqui você pode definir estilos adicionais */
`;

export default function BotaoPersonalizado({ titulo, aoPressionar }) {
  return <Botao title={titulo} onPress={aoPressionar} />;
}
