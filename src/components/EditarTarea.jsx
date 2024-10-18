import { useState } from "react";

const EditarTarea = ({setActive, idTareaEditar, setTareas, tareas }) => {
    const [tareaEditada, setTareaEditada] = useState("");

    const handlerhange = (event) =>{
        setTareaEditada(event.target.value);
    }
    
    
    const editarTarea = async ()=>{


        if(tareaEditada !== ""){
            const response = await fetch(`https://to-do-server-5xce.onrender.com/api/tarea/${idTareaEditar}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "nombreTarea": tareaEditada})
            })
            setActive(false);
            setTareas(tareas.map((tarea)=>{
                return tarea.id === idTareaEditar ? { id: idTareaEditar, nombreTarea:  tareaEditada }  : tarea
            }))
    
        }else{
            alert("Debes ingresar una tara para poder editar")
        }
                
        
    }


    return ( 
        <div>
            <input type="text" className="input is-link" onChange={handlerhange}/>
            <button className="button" onClick={editarTarea}>Editar</button>
        </div>
     );
}
 
export default EditarTarea;