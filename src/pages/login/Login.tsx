import React from 'react';
import './Login.scss';
import { FaUser, FaLock } from 'react-icons/fa'; // Import your icons

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login-card">
        <div className="logo">
          <img src="/logo.svg" alt="Logo" width="80" />
        </div>
        <h1>¡Hola de nuevo!</h1>
        <form>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="input-group">
          <FaLock className="input-icon" />
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="actions">
          <a className="action-link" href="/registro">
            Registro
          </a>
          <span>|</span>
          <a className="action-link" href="/forgot-password">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
