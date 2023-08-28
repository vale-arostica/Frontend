import "./single.scss";
import TestCard from "../testcard/TestCard";

type Props = {
  id: number;
  nombre: string;
  edad: number;
  fechaNacimiento: string;
  nivelActual: number;
  mailApoderado: string;
};

//props: Props

const Single = () => {

  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img
              src={`/monstruos/m1.png`} /*${props.id} */
              alt=""
              className="profileImg"
            />
            <h1>{/*props.nombre*/}  Juan Pineda</h1>
            <button>Editar</button>
          </div>
          <div className="details">
            {/* fetch data from api and set to details doing a map */}
            <div className="item">
              <span className="itemTitle">Nombre:</span>
              <span className="itemValue">{/*props.nombre*/} Juan Pineda </span>
            </div>
            <div className="item">
              <span className="itemTitle">Edad:</span>
              <span className="itemValue">{/*props.edad*/} 12 </span>
            </div>
            <div className="item">
              <span className="itemTitle">Fecha de nacimiento:</span>
              <span className="itemValue">{/*props.fechaNacimiento*/} 25/05/2017 </span>
            </div>
            <div className="item">
              <span className="itemTitle">Nivel actual:</span>
              <span className="itemValue">{/*props.nivelActual*/} 10 </span>
            </div>
            <div className="item">
              <span className="itemTitle">Mail apoderado:</span>
              <span className="itemValue">{/*props.mailApoderado*/} varo@mail.com </span>
            </div>
          </div>
        
        <div className="action_buttons">
          <button className="profile_button">Sesiones de paciente</button>
          <button className="profile_button">Bitácora</button>
          <button className="profile_button">Diagnóstico</button>
          <button className="profile_button">Calificaciones</button>
        </div>
        </div>
        <div className="progreso"><TestCard /></div>
        
      </div>
    </div>
  );
};

export default Single;
