function Tasks(props) { //props = nome.parametro
    return (
        <div className="tasks">
            {/*   {props2}; exemplo menos confuso*/}
            <span>{props.banana}</span> {/*retorna 1*/}
            
            <h1>
                {props.tasks.map((task) => { //usa o map() que é quase um foreach(); usado o map() pq precisa de um retorno
                    return <p>{task.objetivo}</p>
                })}
            </h1>
        </div>
    );
}

export default Tasks;
