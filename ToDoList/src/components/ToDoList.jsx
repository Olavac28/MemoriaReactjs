import { useEffect } from 'react';
import './componentsStyle.css'

function ToDoList(props) {
    //verifica se o array é vazio
    if(props.tasks.length === 0)
        //se for, nn retorna o componente
        return null;

    return(
        <div className='box'>
            {props.tasks.map((task) => {
                return <div className='iten-box'>
                    <h2>{task.title}</h2>
                    <span>{task.description}</span>
                </div>
            })}
        </div>
    )
}

export default ToDoList;