import { useNavigate } from "react-router-dom"
import '../styles/Menu.css'

function Menu() {
    const navigate = useNavigate();

    return (
        <div className="body">
            <div className="box">
                <h1>Jogo Da Memória</h1>

                <button onClick={() => {
                    navigate('/memoria');
                }}>Iniciar</button>
            </div>
        </div>
    )
}

export default Menu;