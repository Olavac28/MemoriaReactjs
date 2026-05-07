import { useState } from "react";
import Tasks from "./components/Tasks"; //importa o componente
import AddTask from "./components/AddTask";

function App() {
  //    [nome da variável, nome da Função](estado inicial da variável)
  const [mensagem, setMensagem] = useState('Olá Mundo'); //state

  return ( //nn pode retornar mais de 1 elemento
    <div>
      <h1>{mensagem}</h1> {/*assim funciona o uso de variáveis*/}
      <button onClick={() => { {/*função de clique*/}
        setMensagem('Fui Clickado'); {/*função que muda o state*/}
      }}>Clique para mudar a menssagem</button>

      <hr />

      <h1>Gerenciador de tarefas</h1>
      <AddTask/> {/*importando um componente*/}
      <Tasks />
    </div>
  );
}

export default App;