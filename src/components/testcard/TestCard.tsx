import "./testcard.scss";

const TestCard = () => {
  return (
    <div className="testcard">
      <div className="tests">
        <div className="title">Progreso</div>
        <div className="box box-pbll">
          <h3>Test Persona Bajo la lluvia</h3>
          <div className="details">
            <span>nivel 2</span>
            <button>Analizar</button>
          </div>
        </div>
        <div className="box box-emo">
          <h3>Test Psico-emocional</h3>
          <div className="details">
            <span>niveles 3 al 7</span>
            <button>Analizar</button>
          </div>
        </div>
        <div className="box box-ryr">
          <h3>Test Roberto y Rosita</h3>
          <div className="details">
            <span>niveles 8 al 13</span>
            <button>Analizar</button>
          </div>
        </div>
        <div className="box box-wisc">
          <h3>Test WISC IV</h3>
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
