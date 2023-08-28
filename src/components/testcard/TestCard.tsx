import "./testcard.scss";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const TestCard = () => {

  const navigate = useNavigate();

  const handleBoxClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="testcard">
      <div className="tests">
        <div className="title">Progreso</div>
        <div className="box box-pbll" onClick={() => handleBoxClick('/noticias')}>
          <h3>Test Persona Bajo la lluvia</h3>
          <div className="details">
            <span>nivel 2</span>
          </div>
        </div>
        <div className="box box-emo" onClick={() => handleBoxClick('/box1-route')}>
          <h3>Test Psico-emocional</h3>
          <div className="details">
            <span>niveles 3 al 7</span>
          </div>
        </div>
        <div className="box box-ryr" onClick={() => handleBoxClick('/box1-route')}>
          <h3>Test Roberto y Rosita</h3>
          <div className="details">
            <span>niveles 8 al 13</span>
          </div>
        </div>
        <div className="box box-wisc" onClick={() => handleBoxClick('/box1-route')}>
          <h3>Test WISC IV</h3>
          <div className="details">
            <span>niveles 14 al 21</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
