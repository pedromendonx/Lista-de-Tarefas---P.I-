import "./lista-de-tarefas.css";


function lista (props) {
    

    return (
        <div className="tarefas">
            <h2>Lista de tarefas</h2>
           <lu> {props.children} </lu>
        </div>
        
    )
}

export default lista