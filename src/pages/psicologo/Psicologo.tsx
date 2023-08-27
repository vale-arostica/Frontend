import "./psicologo.scss";

const Psicologo = () => {
  return (
    <div className="psicologo">
        <div className="info">
          <div className="topInfo">
            <img src={`/noavatar.png`} alt="" className="profileImg" />
            <h1>Nombre</h1>
            <button>Editar</button>
          </div>
          <div className="details">
            {/* fetch data from api and set to details doing a map */}
            <div className="item">
              <span className="itemTitle">Nombre:</span>
              <span className="itemValue">nombre</span>
            </div>
            <div className="item">
              <span className="itemTitle">Edad:</span>
              <span className="itemValue">edad</span>
            </div>
            <div className="item">
              <span className="itemTitle">Fecha de nacimiento:</span>
              <span className="itemValue">fechaNacimiento</span>
            </div>
            <div className="item">
              <span className="itemTitle">Nivel actual:</span>
              <span className="itemValue">nivelActual</span>
            </div>
            <div className="item">
              <span className="itemTitle">Mail apoderado:</span>
              <span className="itemValue">mailApoderado</span>
            </div>
          </div>
        </div>
        <div className="action_buttons">
          <button className="profile_button">Sesiones de paciente</button>
          <button className="profile_button">Bitácora</button>
          <button className="profile_button">Diagnóstico</button>
          <button className="profile_button">Calificaciones</button>
        </div>
      </div>
  );
};

export default Psicologo;
