import { useState } from "react";

const Tarea = ({
  tareas,
  setActiveBorrar,
  setActive,
  setIdTareaBorrar,
  setActiveEditar,
  setIdTareaEditar,
}) => {
    const [ isTachar, setIsTachar ] = useState(false);

  const handleBorrar = () => {
    setActiveBorrar(true);
    setActive(true);
    setIdTareaBorrar(tareas.id);
  };

  const tacharTarea = () =>{
    setIsTachar(!isTachar);
  }

  const handleEditar = () => {
    setActiveEditar(true);
    setActive(true);
    setIdTareaEditar(tareas.id);
  };

  return (
    <div
      className="container  is-flex field box is-flex-direction-column  animate__animated animate__bounce"
      id={tareas.id}
    >
      <div className="container is-flex is-justify-content-space-between p-2 is-align-items-center ">
        <input type="checkbox" style={{transform: "scale(2.5)"}} className="px-6" onClick={tacharTarea}/>

        {isTachar ? <h1 className="is-flex content  is-large px-6"  style={{textDecoration: "line-through" }} >{tareas.nombreTarea}</h1> 
        
        : <h1 className="is-flex content  is-large px-6"  >{tareas.nombreTarea}</h1> }
        

        <div className="content is-flex ml-6">
          <button
            className="p-2 button is-link is-flex m-4"
            onClick={handleEditar}
          >
            Editar
          </button>
          <button
            className="p-2 button is-danger is-flex m-4"
            onClick={handleBorrar}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarea;
