import React, { useState } from 'react';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';

export default function App() {
  const [tela, setTela] = useState(1);

  return (
    <>
      {tela === 1 && <Tela1 proximaTela={() => setTela(2)} />}
      {tela === 2 && <Tela2 proximaTela={() => setTela(3)} />}
      {tela === 3 && <Tela3 />}
    </>
  );
}
