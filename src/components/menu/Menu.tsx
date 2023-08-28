import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = () => { 
    return (
        <div className="menu">
            <div className="item">
                <span className="title">INICIO</span>
                <Link to="/" className="listItem">
                    <img src="/home.svg" alt=""/>
                    <span className="description">Noticias</span>
                </Link>
                <Link to="/publicar" className="listItem">
                    <img src="/cohete.svg" alt=""/>
                    <span className="description">Publicar</span>
                </Link>
                <span className="title">DASHBOARD</span>
                <Link to="/pacientes" className="listItem">
                    <img src="/paciente.svg" alt=""/>
                    <span className="description">Pacientes</span>
                </Link>
                <Link to="/agenda" className="listItem">
                    <img src="/calendar.svg" alt=""/>
                    <span className="description">Agenda</span>
                </Link>
                <Link to="/juegos" className="listItem">
                    <img src="/phone.svg" alt=""/>
                    <span className="description">Juegos</span>
                </Link>
            </div>
        </div>
    )
};

export default Menu;