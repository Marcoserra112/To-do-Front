const Header = ({ setActive ,setActiveCrear }) => {
    const handlerActive = ()=>{
        setActive(true) 
        setActiveCrear(true)
    }

    return <div className="container is-fluid is-flex  is-flex-direction-row is-justify-content-space-between buttons is-align-items-center are-medium has-background-success is-align p-6		" >
        <h1 className="title is-1 is-primary has-text-white">LISTA DE TAREAS</h1>
        <button className="button is-outlined is-white" onClick={handlerActive}>Crear Tarea +</button>

    </div>
}
 
export default Header;