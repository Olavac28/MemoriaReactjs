import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' //importa o App.jsx

createRoot(document.getElementById('root')).render( //renderize isso na #root do index.html
  <StrictMode>
    <App /> {/*renderiza o componente App.jsx*/}
  </StrictMode>,
)
