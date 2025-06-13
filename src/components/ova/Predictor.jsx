import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Predictor({ items, target = 'manzana', showResults, onFinish, predictions: predictionsProp }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [emojiList, setEmojiList] = useState(["🎉", "✨", "🏆", "🥳", "👏"]); // por defecto, felices

  // Lluvia de emojis al acertar la mayoría
  useEffect(() => {
    if (showResults && predictions.length > 0) {
      const correct = predictions.filter(p => p.userLabel === p.realLabel).length;
      if (correct / predictions.length >= 0.6) {
        setEmojiList(["🎉", "✨", "🏆", "🥳", "👏"]); // emojis felices
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        setEmojiList(["😢", "😞", "😔", "😟", "😕"]); // emojis tristes
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
  }, [showResults, predictions]);

  useEffect(() => {
    // Si estamos mostrando resultados y recibimos predicciones por props, usarlas directamente
    if (showResults && predictionsProp) {
      setPredictions(predictionsProp);
      setFinished(true);
      return;
    }

    // Solo ejecuta la animación si no ha terminado
    if (!items || items.length === 0 || finished) return;

    const extendedItems = items.map((item, i) => ({
      ...item,
      id: `${item.image}-${i}`,
      predicted: false,
      removing: false,
      predictedLabel: null
    }));

    setVisibleItems(extendedItems);

    const classifySequentially = async () => {
      const newPredictions = [];

      for (const current of extendedItems) {
        const prediction = current.userLabel ? target : `no-${target}`;

        setVisibleItems(prev =>
          prev.map(img =>
            img.id === current.id
              ? {
                  ...img,
                  predicted: true,
                  predictedLabel: prediction
                }
              : img
          )
        );

        newPredictions.push({
          image: current.image,
          userLabel: current.userLabel ? target : `no-${target}`,
          predictedLabel: prediction,
          realLabel: current.label
        });

        await new Promise(res => setTimeout(res, 2000));

        setVisibleItems(prev =>
          prev.map(img =>
            img.id === current.id ? { ...img, removing: true } : img
          )
        );

        await new Promise(res => setTimeout(res, 1000));

        setVisibleItems(prev =>
          prev.filter(img => img.id !== current.id)
        );
      }

      setPredictions(newPredictions);
      setFinished(true);

      // Llama a onFinish cuando termina
      if (typeof onFinish === 'function') {
        onFinish(newPredictions);
      }
    };

    classifySequentially();
  }, [items, target, showResults, predictionsProp, finished, onFinish]);

  if (showResults) {
    return (
      <div className="min-h-screen py-10 px-4">
        {/* Lluvia de emojis de felicitación */}
        {showConfetti && (
          <div className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center">
            {[...Array(30)].map((_, i) => (
              <span
                key={i}
                className="absolute text-4xl animate-emoji-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random()}s`,
                }}
              >
                {emojiList[Math.floor(Math.random() * emojiList.length)]}
              </span>
            ))}
          </div>
        )}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-xl animate-fade-in">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Comparación: Tu elección vs IA vs Respuesta Correcta
          </h2>
          <div className="h-1 w-32 bg-pink-500 mx-auto mb-6 rounded-full" />
          <div className="flex flex-col items-center mb-6">
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-100 via-purple-100 to-green-100 border border-pink-200 shadow font-extrabold text-2xl text-purple-700 animate-fade-in">
              <span className="text-3xl">📊</span>
              Mira tus resultados
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-center">
                  <th className="p-3 border">👁️ Imagen</th>
                  <th className="p-3 border text-purple-600 font-semibold">
                    Tu elección
                  </th>
                  <th className="p-3 border text-blue-600 font-semibold">IA</th>
                  <th className="p-3 border text-green-600 font-semibold">
                    Respuesta correcta
                  </th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((item, idx) => (
                  <tr
                    key={idx}
                    className="text-center border-t hover:bg-pink-50 transition"
                  >
                    <td className="p-2 border">
                      <img
                        src={item.image}
                        alt={`img-${idx}`}
                        className="w-32 h-32 object-contain mx-auto rounded-xl"
                      />
                    </td>
                    <td className="p-2 border">
                      {item.userLabel === target ? (
                        <span className="text-green-600 font-semibold">
                          Sí ✅
                        </span>
                      ) : (
                        <span className="text-red-500 font-semibold">No ❌</span>
                      )}
                    </td>
                    <td className="p-2 border">
                      {item.predictedLabel === target ? (
                        <span className="text-green-600 font-semibold">
                          Sí ✅
                        </span>
                      ) : (
                        <span className="text-red-500 font-semibold">No ❌</span>
                      )}
                    </td>
                    <td className="p-2 border">
                      {item.realLabel === target ? (
                        <span className="inline-block px-2 py-1 text-green-700 bg-green-100 rounded-full text-xs font-medium">
                          Sí
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-1 text-red-700 bg-red-100 rounded-full text-xs font-medium">
                          No
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              {/* Tu precisión */}
              <div className="bg-purple-100 rounded-xl py-6 shadow-md">
                <p className="text-2xl font-bold text-purple-700">
                  {
                    predictions.length > 0
                      ? Math.round(
                          (predictions.filter(p => p.userLabel === p.realLabel).length / predictions.length) * 100
                        )
                      : 0
                  }%
                </p>
                <p className="text-sm text-purple-700 mt-1">Tu precisión</p>
              </div>

              {/* Precisión IA */}
              <div className="bg-blue-100 rounded-xl py-6 shadow-md">
                <p className="text-2xl font-bold text-blue-700">
                  {
                    predictions.length > 0
                      ? Math.round(
                          (predictions.filter(p => p.predictedLabel === p.userLabel).length / predictions.length) * 100
                        )
                      : 0
                  }%
                </p>
                <p className="text-sm text-blue-700 mt-1">Precisión IA</p>
              </div>

              {/* Coincidencias */}
              <div className="bg-green-100 rounded-xl py-6 shadow-md">
                <p className="text-2xl font-bold text-green-700">
                  {
                    predictions.length > 0
                      ? predictions.filter(p =>
                          p.userLabel === p.predictedLabel &&
                          p.userLabel === p.realLabel
                        ).length
                      : 0
                  }/{predictions.length}
                </p>
                <p className="text-sm text-green-700 mt-1">Respuestas Correctas</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => window.location.reload()} // Puedes cambiar esto por una función de navegación si usas React Router
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-green-400 text-white font-extrabold text-lg shadow-lg border-2 border-pink-200 hover:scale-105 transition-all duration-300"
          >
            Volver a jugar 🔄
          </button>
        </div>
      </div>
    );
  }

  // Solo muestra la animación si no ha terminado
  if (!showResults && !finished) {
    return (
      <div className="relative min-h-[600px] bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl overflow-hidden p-4">
        <div className="absolute inset-0 bg-blue-200/30 pointer-events-none animate-pulse" />
        {/* Robot narrador y mensaje */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-100 via-pink-100 to-green-100 border-2 border-pink-200 shadow font-bold text-lg text-purple-700 animate-fade-in">
            {/* SVG de robot */}
            <span className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
                <rect x="8" y="16" width="48" height="36" rx="12" fill="#a78bfa"/>
                <rect x="20" y="8" width="24" height="16" rx="8" fill="#fbbf24"/>
                <circle cx="20" cy="34" r="4" fill="#fff"/>
                <circle cx="44" cy="34" r="4" fill="#fff"/>
                <circle cx="20" cy="34" r="2" fill="#6366f1"/>
                <circle cx="44" cy="34" r="2" fill="#6366f1"/>
                <rect x="28" y="40" width="8" height="4" rx="2" fill="#fff"/>
                <rect x="6" y="28" width="4" height="12" rx="2" fill="#fbbf24"/>
                <rect x="54" y="28" width="4" height="12" rx="2" fill="#fbbf24"/>
              </svg>
            </span>
            <span className="text-xl font-extrabold text-purple-700 animate-bounce">
              ¡Estoy pensando!
            </span>
          </div>
          <span className="mt-2 text-base bg-blue-100 rounded-xl px-4 py-1 shadow animate-fade-in">
            La IA está clasificando las imágenes una por una...<br />
            Observa cómo cada imagen desaparece cuando la IA toma su decisión.<br />
            <span className="text-pink-400 font-bold">¿Adivinará igual que tú?</span>
          </span>
        </div>
        {/* Animación de imágenes */}
        <div className="relative flex flex-wrap gap-8 justify-center items-center">
          <AnimatePresence>
            {visibleItems.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} // Solo animación de entrada simple
                exit={{ opacity: 0, scale: 0.6, y: 40 }} // Animación de salida solo para la que se elimina
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut'
                }}
                className={`relative w-32 h-32 rounded-2xl shadow-lg flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ${
                  item.predicted
                    ? item.userLabel
                      ? 'bg-green-200 border-2 border-green-500'
                      : 'bg-red-200 border-2 border-red-500'
                    : 'bg-white border border-gray-300'
                }`}
              >
                <img
                  src={item.image}
                  alt="item"
                  className="w-full h-full object-contain p-2"
                />
                {item.predicted && (
                  <div className="absolute bottom-1 text-sm font-semibold text-gray-800 bg-white/80 px-2 py-0.5 rounded">
                    {item.userLabel ? `Sí ✅` : `No ❌`}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Si terminó la predicción pero aún no se muestran resultados, no muestres nada
  return null;
}