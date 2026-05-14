import { useNavigate } from "react-router-dom";

function Sobre() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sobre</h1>

      <button onClick={() => {
        navigate('/'); {/*somente isso vai para home*/}
      }}>Home</button>

      <button onClick={() => {
        navigate('/contato');
      }}>Contato</button>
    </div>
  )
}

export default Sobre;