import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">
          <img src="/logo.svg" alt="logo" />
          Mind Guardian
        </div>
        <div className="navbar__search">
          <input type="text" placeholder="Buscar" className="search-input" />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__item">
            <div className="notifications">
                <img src="/notifications.svg" alt="" />
                <span>&nbsp;1&nbsp;</span>
            </div>
        </div>
        <Link to="/psicologo" className="navbar__user">
          <img src="/profile.svg" alt="" />
          Vania
        </Link>
        <div className="navbar__item">
            <img src="/settings.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
