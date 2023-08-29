import React from "react";
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa"; // Import your icons
import "./registro.scss";

const Registro: React.FC = () => {
  return (
    <div className="registro">
      <div className="register-card">
        
        <div className="logo">
          <img className="MG" src="/LogoMG.svg" alt="" width="250" />
          <img src="/logo.svg" alt="Logo" width="100" />
        </div>
        <h3>¡Crea una cuenta!</h3>
        <form>
          <div className="fields">
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" id="username" placeholder="Nombre" />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input type="password" id="password" placeholder="Contraseña" />
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirmar contraseña"
              />
            </div>
            <div className="input-group">
              <img src="/gender.svg" className="input-icon" />
              <select id="gender" className="seleccion">
                <option value="" disabled selected>
                  Género
                </option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
                <option value="Other">Otro</option>
              </select>
            </div>
            <div className="input-group">
              <FaUserPlus className="input-icon" />
              <select id="profession" className="seleccion">
                <option value="" disabled selected>
                  Relación con niños/as
                </option>
                <option value="Psicólogo/a">Psicólogo/a</option>
                <option value="Psiquiatra">Psiquiatra</option>
                <option value="Médico/a">Médico/a</option>
                <option value="Terapista ocupacional">
                  Terapeuta ocupacional
                </option>
                <option value="Terapista ocupacional">
                  Terapeuta complementario
                </option>
                <option value="Terapista ocupacional">Psicopedagogo/a</option>
                <option value="Terapista ocupacional">Profesor/a</option>
                <option value="Tutor legal">Tutor/a</option>
              </select>
            </div>
          </div>
          <label>
            <input
              type="checkbox"
              id="children-played"
              // ... other attributes
            />
            ¿Mis niños/as han jugado Mind GuardIAN?
          </label>
          <label>
            <input
              type="checkbox"
              id="receive-feedback"
              // ... other attributes
            />
            Quiero recibir feedback por email.
          </label>
          <button type="submit">Registrarse</button>
        </form>
        <div className="actions">
          <a className="action-link" href="/login">
            ¿Ya tienes una cuenta? Entrar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registro;
