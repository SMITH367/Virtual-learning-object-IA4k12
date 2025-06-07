import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Ahora recibimos target como prop
export default function Predictor({ items, target = 'manzana' }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!items || items.length === 0) return;

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
        // Usamos target dinámico
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
    };

    classifySequentially();
  }, [items, target]);

  const finished = visibleItems.length === 0;

  if (showResults) {
    return (
      <div className="min-h-screen py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-xl animate-fade-in">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
            Comparación: Tu elección vs IA vs Respuesta Correcta
          </h2>
          <div className="h-1 w-32 bg-pink-500 mx-auto mb-6 rounded-full" />
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
        Math.round(
          (predictions.filter(p => p.userLabel === p.realLabel).length / predictions.length) * 100
        )
      }%
    </p>
    <p className="text-sm text-purple-700 mt-1">Tu precisión</p>
  </div>

  {/* Precisión IA */}
  <div className="bg-blue-100 rounded-xl py-6 shadow-md">
    <p className="text-2xl font-bold text-blue-700">
      {
        Math.round(
          (predictions.filter(p => p.predictedLabel === p.userLabel).length / predictions.length) * 100
        )
      }%
    </p>
    <p className="text-sm text-blue-700 mt-1">Precisión IA</p>
  </div>

  {/* Coincidencias */}
  <div className="bg-green-100 rounded-xl py-6 shadow-md">
    <p className="text-2xl font-bold text-green-700">
      {
        predictions.filter(p =>
          p.userLabel === p.predictedLabel &&
          p.userLabel === p.realLabel
        ).length
      }/{predictions.length}
    </p>
    <p className="text-sm text-green-700 mt-1">Respuestas Correctas</p>
  </div>
</div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[600px] bg-gradient-to-b from-blue-100 to-blue-300 rounded-xl overflow-hidden p-4">
      <div className="absolute inset-0 bg-blue-200/30 pointer-events-none animate-pulse" />
      <div className="relative flex flex-wrap gap-8 justify-center items-center">
        <AnimatePresence>
          {visibleItems.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -40, scale: 0.8 }}
              animate={{
                opacity: 1,
                y: [0, -10, 10, -5, 0],
                rotate: [0, 1.5, -1.5, 1, 0]
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{
                duration: 1.5,
                repeat: item.predicted ? 0 : Infinity,
                repeatType: 'reverse',
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

      {finished && (
        <div className="mt-6 text-center space-y-4 animate-fade-in">
          <p className="text-green-800 font-bold text-lg">
            ¡Gracias por entrenar a la IA! 🧠✨
          </p>
          <button
            className="mt-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
            onClick={() => setShowResults(true)}
          >
            Ver resultados de predicción
          </button>
        </div>
      )}
    </div>
  );
}
