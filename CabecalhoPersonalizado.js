import React from 'react';
import styled from 'styled-components/native';

const Cabecalho = styled.View`
  /* Estilos para o cabeçalho */
`;

const Titulo = styled.Text`
  /* Estilos para o título */
`;

export default function CabecalhoPersonalizado({ titulo }) {
  return (
    <Cabecalho>
      <Titulo>{titulo}</Titulo>
    </Cabecalho>
  );
}
