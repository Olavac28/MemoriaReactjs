import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  useEffect (() => { //serve para fazer algo quando um elemento resderiza
    document.getElementById('segundoMostraCount').innerHTML = count;
  }, [count]) //especificamente esse elemento aqui

  //-------------------------------------------------------------------------

  const [segundoCount, setSegundoCount] = useState(0); //nn pode ser uma variável normal, pois elas resetam após uma renderização
  
  useEffect (() => {
    setSegundoCount(count + 1);
    document.getElementById('rederizada').innerHTML = segundoCount;
  }) //como nn tem o [], qualquer atualização é valida para fazer algo

  //------------------------------------------------------------------------

  return (
    <div>
      <div>{count}</div>

      <button onClick={() => {
        setCount(count + 1); //por algum motivo nn funciona count++
      }}>Clique aqui</button>

      <div id='segundoMostraCount'>0</div>

      <hr />

      <div>
        <h1>Quatidade de vezes da tela renderizada</h1>
        <span id='rederizada'>0</span> {/*sempre vai ter um valor a mais que o outro contador*/}
      </div>
    </div>
  )
}

export default App;
