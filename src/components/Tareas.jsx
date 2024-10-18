import Tarea from "./Tarea";
import { useState, useEffect } from "react";

const Tareas = ({
    setActive, 
    setActiveBorrar, 
    setIdTareaBorrar, 
    active, 
    setActiveEditar, 
    setIdTareaEditar,
    tareas
}) => {
    return <div className="container is-fluid is-flex is-flex-direction-row is-justify-content-space-between buttons is-align-items-center are-medium  mgb-small columns is-gapless p-6" >
        {tareas.map((tareas)=>{
            return (
                <Tarea
                    tareas={tareas}
                    setActive={setActive}
                    setActiveBorrar={setActiveBorrar}
                    setIdTareaBorrar={setIdTareaBorrar}
                    active={active}
                    setActiveEditar={setActiveEditar}
                    setIdTareaEditar={setIdTareaEditar}
                />
            );
        })}
    </div>;
}
 
export default Tareas;