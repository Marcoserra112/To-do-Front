import { useEffect } from "react";

const CrearTarea = ({ setContentInput, contentInput, setActive, setTareas, tareas}) => {
    const escribirInput = (event)=>{
        setContentInput(event.target.value)
    }

    const enviarTarea = async () =>{

        if(contentInput !== ""){
            const response = await fetch('https://to-do-server-5xce.onrender.com/api/tarea/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({"nombreTarea": contentInput}) 
            });
            
            const newTarea = await response.json();
            setActive(false)
            setTareas([...tareas, newTarea ])
        }else{
            alert("debe ingresar una tarea")
        }

       
    }


    
    return ( 
    <div className="is-flex is-flex-direction-column m-4  is-align-items-center">
           <h1 className="m-4" >CREAR TAREA</h1>
           <input type="text" className="m-4 p-2 input " onChange={escribirInput} placeholder="Ingrese Tarea"/>
           <button className="button is-link" onClick={enviarTarea}>Guardar Tarea</button>
           
    </div> 
    );
}
 
export default CrearTarea;