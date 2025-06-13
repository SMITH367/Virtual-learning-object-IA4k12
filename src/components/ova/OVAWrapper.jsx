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
    <div className="p-4 space-y-6 relative">
      {/* Botón flotante animado, colorido y atractivo para niños, al lado de la tarjeta */}
      {step === 0 && (
        <div className="fixed top-1/2 left-[calc(50%+320px)] transform -translate-y-1/2 z-50 animate-bounce"
          style={{ minWidth: 260 }}>
          <button
            className="flex items-center gap-2 bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 text-purple-900 px-6 py-3 rounded-full shadow-2xl font-extrabold text-lg border-4 border-white outline-none ring-4 ring-pink-200 hover:scale-105 transition-all duration-300"
            title="Ayuda: Elige la respuesta correcta"
            style={{
              boxShadow: '0 8px 24px 0 rgba(255, 192, 203, 0.4), 0 1.5px 6px 0 rgba(0,0,0,0.08)',
              textShadow: '0 2px 8px #fff, 0 1px 0 #fff'
            }}
          >
            <span className="text-2xl animate-spin-slow">🎈</span>
            <span className="drop-shadow font-extrabold">Haga click en la opción correcta</span>
            <span className="text-2xl animate-bounce">🤔</span>
          </button>
        </div>
      )}

      <h1 className="text-3xl font-extrabold text-center text-purple-700 flex items-center justify-center gap-3">
        <span className="text-3xl animate-spin-slow">🤖</span>
        🧠 Predicciones con IA
      </h1>
      <p className="text-center font-extrabold mb-4 px-4 py-2 text-black" style={{ background: 'none', textShadow: 'none', fontSize: '1rem' }}>
        Entrenamiento de Clasificación con Inteligencia Artificial
      </p>

      {step === 0 && (
        <Trainer items={items} target={target} onComplete={handleTrainComplete} />
      )}

   {step === 1 && (
  <>
    {!showResults ? (
      <>
        {predictedItems.length < labeledItems.length && (
          <div className="flex items-center my-6">
            <span className="text-2xl mr-2">🤖</span>
            <span className="px-4 py-2 rounded-xl font-bold text-blue-800 bg-gradient-to-r from-pink-100 via-purple-100 to-green-100 shadow-md border border-pink-200 flex items-center gap-2">
              <span className="text-purple-700">Ahora veamos cómo clasifica la IA sobre</span>
              <span className="underline text-green-700">{target}</span>
            </span>
          </div>
        )}
        {predictedItems.length === labeledItems.length && (
          <div className="text-center mt-8">
            <div className="inline-block px-6 py-4 rounded-2xl shadow-xl bg-gradient-to-r from-yellow-100 via-pink-100 to-green-100 border-2 border-pink-200 animate-fade-in flex flex-col items-center gap-2">
              <span className="text-3xl animate-bounce">🎉</span>
              <p className="text-xl font-extrabold text-purple-700 drop-shadow animate-pulse">
                ¡Gracias por entrenar a la IA! <span className="animate-wiggle inline-block">🧠✨</span>
              </p>
              <button
                onClick={handleShowResults}
                className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 text-white font-bold text-lg shadow-lg border-2 border-blue-200 hover:scale-105 hover:from-blue-600 hover:to-pink-500 transition-all duration-300 animate-bounce"
              >
                Observa tus resultados 🚀
              </button>
            </div>
          </div>
        )}
        <Predictor
          items={labeledItems}
          target={target}
          onFinish={handlePredictionFinish}
          showResults={false}
        />
      </>
    ) : (
      <Predictor
        items={labeledItems}
        target={target}
        predictions={predictedItems}
        showResults={true}
      />
    )}
  </>
)}
    </div>
  );
}
