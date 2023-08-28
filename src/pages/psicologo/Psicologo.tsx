import "./psicologo.scss";

const Psicologo = () => {
  return (
    <div className="view">
      <div className="psicologo">
        <div className="info">
          <div className="topInfo">
            <img src={`/noavatar.png`} alt="" className="profileImg" />
            <div className="title_container">
              <h1>Vania Carrasco</h1>
              <p className="bajada">Psicóloga</p>
            </div>
            <button>Editar</button>
          </div>
          <div className="details">
            {/* fetch data from api and set to details doing a map */}
            <div className="item">
              <span className="itemTitle">Título profesional:</span>
              <span className="itemValue">Psicóloga clínica</span>
            </div>
            <div className="item">
              <span className="itemTitle">Modalidad de atención:</span>
              <span className="itemValue">Online y presencial</span>
            </div>
            <div className="item">
              <span className="itemTitle">Email:</span>
              <span className="itemValue">vania.carrasco@mail.com</span>
            </div>
            <div className="item">
              <span className="itemTitle">Atiende a:</span>
              <span className="itemValue">
                Niños de cualquier edad, adultos
              </span>
            </div>
            <div className="item">
              <span className="itemTitle">Número:</span>
              <span className="itemValue">9 96949965</span>
            </div>
            <div className="item">
              <span className="itemTitle">Coverturas:</span>
              <span className="itemValue">FONASA, ISAPRE</span>
            </div>
          </div>
        </div>
        <div className="action_buttons">
          <button className="doctor_button">
            {" "}
            <img src="/rrss/doctoralia.png" /> Doctoralia
          </button>
          <button className="linkedin_button">
            <img src="/rrss/linkedin.webp" />
            LinkedIn
          </button>
          <button className="web_button">
            <img src="/rrss/globe.svg" />
            Web
          </button>
          <button className="danger_button">Eliminar cuenta</button>
        </div>
      </div>
      <div className="adicional">
        <h3>Sobre mí</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          quidem, voluptatum voluptatibus, voluptatem, quibusdam quod voluptas,
          dolorum quia quae fugit voluptate? Quod, quibusdam voluptate.
          Quisquam, voluptate. Quisquam, voluptate.
        </p>
        <h3>Consultas</h3>
        <ul className="consultas">
          <li>
            <span className="bold">Presencial:</span> Address 1
          </li>
          <li>
            <span className="bold">Presencial:</span> Address 2
          </li>
          <li>
            <span className="bold">Online:</span>{" "}
            <a href="https://example.com">Google Meet</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Psicologo;
