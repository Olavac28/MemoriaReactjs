import { useState } from 'react';
import './App.css'
import UsaMapDentro from './components/UsaMapDentro';
import UsaMapFora from './components/UsaMapFora';

function App() {
  const [listaDePessoas, setPessoa] = useState([
    {
      nome: 'Ana',
      idade: 22
    },
    {
      nome: 'Jorge',
      idade: 33
    },
    {
      nome: 'Marcia',
      idade: 44
    }
  ])

  return (
    <>
      <UsaMapDentro pessoa={listaDePessoas} />

      {listaDePessoas.map((pessoa) => {
        return <UsaMapFora nome={pessoa.nome} idade={pessoa.idade} />
      })}
    </>
  )
}

export default App;
