function UsaMapDentro(props) {
    return (
        <>
            {props.pessoa.map((pessoa) => {
                return <div>
                    <h1>Nome: {pessoa.nome}</h1>
                    <p>idade: {pessoa.idade}</p>
                    <br />
                </div>
            })}
        </>
    );
}

export default UsaMapDentro;