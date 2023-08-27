import "./testcard.scss";

const TestCard = () => {
  return (
    <div className="testcard">
      <div className="tests">
        <div className="title">Progreso</div>
        <div className="box box-pbll">
          <h4>Test Persona Bajo la lluvia</h4>
          <div className="details">
            <span>nivel 2</span>
            <button>Analizar</button>
          </div>
        </div>
        <div className="box box-emo">
          <h4>Test Psico-emocional</h4>
          <div className="details">
            <span>niveles 3 al 7</span>
            <button>Analizar</button>
          </div>
        </div>
        <div className="box box-ryr">
          <h4>Test Roberto y Rosita</h4>
          <div className="details">
            <span>niveles 8 al 13</span>
            <button>Analizar</button>
          </div>
        </div>
        <div className="box box-wisc">
          <h4>Test WISC IV</h4>
          <div className="details">
            <span>niveles 14 al 21</span>
            <button>Analizar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
