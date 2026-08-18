import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>

      <button onClick={() => {
        navigate('/sobre'); {/*usar o path='' de AppRoutes*/}

        {/*
          ./ usado para acessar a msm pasta
          ../ usado para acessar a a pasta anterior
          / usado para a raiz do site ou rotas
          "nada" usado para bibliotecas
        */}

      }}>Sobre</button>

      <button onClick={() => {
        navigate('/contato');
      }}>Contato</button>
    </div>
  )
}

export default Home;