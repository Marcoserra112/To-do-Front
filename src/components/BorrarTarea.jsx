const BorrarTarea = ({idTareaBorrar, setActive, setTareas, tareas}) => {
    const borrarTarea = async ()=>{
        const response = await fetch(`https://to-do-server-5xce.onrender.com/api/tarea/${idTareaBorrar}`, {
            method: 'DELETE'
        });
        setActive(false);
        // setUpdate(prevState => prevState + 1);
        setTareas(tareas.filter(tarea => tarea.id !== idTareaBorrar)); // Sincronizar cambios backend con frontend
    }

    return ( 
        
        <div>
            <h1>¿Desea eliminar esta tarea?</h1>
            <button className="button is-danger" onClick={borrarTarea}>Eliminar</button>
            <button className="button" onClick={()=> setActive(false)}>Cancelar</button>
        </div> 
    );
}
 
export default BorrarTarea;