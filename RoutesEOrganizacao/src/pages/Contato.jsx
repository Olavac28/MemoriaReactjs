import { useNavigate } from "react-router-dom";

function Contato() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contato</h1>

      <button onClick={() => {
        navigate('/');
      }}>Home</button>

      <button onClick={() => {
        navigate('/sobre');
      }}>Sobre</button>
    </div>
  )
}

export default Contato;