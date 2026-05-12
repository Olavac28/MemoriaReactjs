import { useState } from "react";
import Tasks from "./components/Tasks"; //importa o componente
import AddTask from "./components/AddTask";

function App() {
  //    [nome da variável, nome da Função](estado inicial da variável)
  const [mensagem, setMensagem] = useState('Olá Mundo'); //state

  const [tasks, setTask] = useState([
      {
        id: 1,
        objetivo: 'estudar',
        isCompleted: false
      },
      {
        id: 2,
        objetivo: 'passear com o cachorro',
        isCompleted: false
      }
    ]
  );

  return ( //nn pode retornar mais de 1 elemento
    <div>
      <h1>{mensagem}</h1> {/*assim funciona o uso de variáveis*/}
      <button onClick={() => { {/*função de clique*/}
        setMensagem('Fui Clickado'); {/*função que muda o state*/}
      }}>Clique para mudar a menssagem</button>

      <hr />

      <div>
        <h1>Gerenciador de tarefas</h1>
        <AddTask/> {/*importando um componente*/}
        {/*}{componente props variável}*/}
        <Tasks tasks={tasks} banana={"banana"}/>
        </div>
    </div>
  );
}

export default App;