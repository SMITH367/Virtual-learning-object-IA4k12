import React, { useState } from 'react';
import StepNarrator from '../ova/StepNarrator.jsx';
import Trainer from '../ova/Trainer.jsx';
import Predictor from '../ova/Predictor.jsx';

export default function OVAWrapper({ items, target }) {
  const [step, setStep] = useState(0);
  const [labeledItems, setLabeledItems] = useState([]);
  const [predictedItems, setPredictedItems] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleTrainComplete = (labeled) => {
    const filtered = labeled
      .filter((i) => i.userLabel === true || i.userLabel === false)
      .map((i) => ({ ...i }));

    setLabeledItems(filtered);
    setStep(1);
  };

  const handlePredictionFinish = (results) => {
    setPredictedItems(results);
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-extrabold text-center text-purple-700">
        🧠 Predicciones con IA
      </h1>
      <p className="text-center text-sm text-gray-500 mb-4">
        Entrenamiento de Clasificación con Inteligencia Artificial
      </p>

      {step === 0 && (
        <Trainer items={items} target={target} onComplete={handleTrainComplete} />
      )}

      {step === 1 && (
        <>
          {!showResults ? (
<StepNarrator step={showResults ? "Resultados" : "🧠 Ahora veamos cómo clasifica la IA"} />


          ) : (
            <h2 className="text-2xl font-bold text-center text-purple-700">
              Resultados
            </h2>
          )}

       <Predictor
          items={labeledItems}
          target={target}
          onFinish={handlePredictionFinish}
          showResults={showResults}
      />


          {predictedItems.length === labeledItems.length && !showResults && (
            <div className="text-center mt-6">
              <p className="text-xl mb-4">¡Gracias por entrenar a la IA! 🧠✨</p>
              <button
                onClick={handleShowResults}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Ver resultados
              </button>
            </div>
          )}

          {showResults && (
            <div className="mt-6 space-y-4">
              <h2 className="text-xl font-bold">Resultados de la Clasificación</h2>
              <table className="w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Imagen</th>
                    <th className="p-2 border">Real</th>
                    <th className="p-2 border">Usuario</th>
                    <th className="p-2 border">IA</th>
                  </tr>
                </thead>
                <tbody>
                  {predictedItems.map((item, i) => (
                    <tr key={i} className="text-center">
                      <td className="p-2 border">
                        <img
                          src={item.image}
                          alt=""
                          className="w-16 h-16 object-contain mx-auto"
                        />
                      </td>
                      <td className="p-2 border">{item.realLabel === 'manzana' ? '✅' : '❌'}</td>
                      <td className="p-2 border">{item.userLabel === 'manzana' ? '✅' : '❌'}</td>
                      <td className="p-2 border">{item.predictedLabel === 'manzana' ? '✅' : '❌'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
