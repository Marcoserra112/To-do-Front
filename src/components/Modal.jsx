const Modal = ({ active, setActive, children, setActiveCrear, setActiveBorrar }) => {

   const handleClose = () =>{
        setActive(false)
        setActiveBorrar(false)
        setActiveCrear(false)
   }



  return (
    <div className={ active ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title"></p>
          <button className="delete" aria-label="close" onClick={handleClose}></button>
        </header>
        <section className="modal-card-body">
            {children}
        </section>
        <footer className="modal-card-foot">
          <div className="buttons">
            
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
