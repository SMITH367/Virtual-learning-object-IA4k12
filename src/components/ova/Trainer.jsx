import React, { useState } from 'react';

export default function Trainer({ items, target, onComplete }) {
  const [index, setIndex] = useState(0);
  const [labeled, setLabeled] = useState([]);

  const handleLabel = (label) => {
    const currentItem = items[index];
    const updatedItem = { ...currentItem, userLabel: label };
    const updatedLabeled = [...labeled, updatedItem];

    setLabeled(updatedLabeled);

    if (index + 1 < items.length) {
      setIndex(index + 1);
    } else {
      onComplete(updatedLabeled);
    }
  };

  const current = items[index];
  const progress = ((index + 1) / items.length) * 100;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-3xl shadow-xl text-center space-y-6">
      <div>
        <p className="text-sm font-medium text-purple-600">
          Pregunta {index + 1} de {items.length}
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
          <div
            className="h-2 bg-purple-500 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

    
      <div className="bg-gray-50 rounded-xl p-4 shadow-inner">
        <p className="text-lg font-semibold mb-2">
          ¿Es esto un(a) <span className="text-blue-600 font-bold">{target}</span>?
        </p>
        <div className="flex justify-center mb-4">
          <img
            src={current.image}
            alt="Item"
            className="w-52 h-52 object-contain rounded-lg border"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleLabel(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-2 rounded-full shadow"
          >
            ✅ Sí es
          </button>
          <button
            onClick={() => handleLabel(false)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-full shadow"
          >
            ❌ No es
          </button>
        </div>
      </div>
    </div>
  );
}
