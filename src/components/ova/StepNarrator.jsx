import React from 'react';

export default function StepNarrator({ step }) {
  console.log("Paso recibido:", step); // 👈 Verifica en consola
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded shadow">
      <p className="font-semibold">{step}</p>
    </div>
  );
}

