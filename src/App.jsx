import { useEffect, useState } from 'react'
import './App.css'
import CrearTarea from './components/CrearTarea'
import Header from './components/Header'
import Modal from './components/Modal'
import Tareas from './components/Tareas'
import BorrarTarea from './components/BorrarTarea'
import EditarTarea from './components/EditarTarea'
import 'animate.css';

function App() {
  const [ contentInput, setContenetInput] = useState("");
  const [ active, setActive ] = useState(false);
  const [ activeCrear, setActiveCrear] = useState(false)
  const [ activeBorrar, setActiveBorrar ] = useState(false);
  const [ activeEditar, setActiveEditar ] = useState(false);
  const [idTareaBorrar, setIdTareaBorrar ] = useState(null);
  const [idTareaEditar, setIdTareaEditar ] = useState(null)
  

  const [tareas, setTareas] = useState([])
    
  useEffect(()=>{
      traerTareas();
  },[])

  // useEffect(() => {
  //   traerTareas();
  // }, [update]);

  const traerTareas = async ()=>{
      const response = await fetch("https://to-do-server-5xce.onrender.com/api/tarea")
      const tareas = await response.json();
      setTareas(tareas)
  }

  


  console.log(contentInput);
  return <div className='hero is-fullheight '>
      <Modal active={active} setActive={setActive} setActiveCrear={setActiveCrear} setActiveBorrar={setActiveBorrar} > 

        {
        
        activeCrear ? <CrearTarea 
          setContentInput={setContenetInput} 
          setActive={setActive} 
          active={active} 
          contentInput={contentInput}
          setTareas={setTareas}
          tareas={tareas}
        /> 
        : 

        activeBorrar ? <BorrarTarea 
        idTareaBorrar={idTareaBorrar}
        setActive={setActive}
        setTareas={setTareas}
        tareas={tareas}
        /> 
        : 
        
        activeEditar ? <EditarTarea 
        idTareaEditar={idTareaEditar}
        setActive={setActive} 
        setTareas={setTareas}
        tareas={tareas}
        />
        
        : null
        
        
        }
        
      </Modal>
      <Header setActive={setActive} activeCrear={activeCrear} setActiveCrear={setActiveCrear}/>
      <Tareas setActive={setActive} 
        setActiveBorrar={setActiveBorrar} 
        setIdTareaBorrar={setIdTareaBorrar} 
        active={active} 
        setActiveEditar={setActiveEditar} 
        setIdTareaEditar={setIdTareaEditar} 
        tareas={tareas}
        setTareas={setTareas}
        
        />
  </div>
}


export default App
