import React, { useState } from "react";

export default function Predictor() {
  const [sequence, setSequence] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [history, setHistory] = useState("");
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const predictNextNumber = () => {
    setError("");
    setShowResult(false);

    const input = sequence.trim();
    if (!input) {
      setError("Por favor, introduce una secuencia de números.");
      return;
    }

    const parsed = input
      .replace(/,/g, " ")
      .split(/\s+/)
      .map(Number)
      .filter((n) => !isNaN(n));

    if (parsed.length < 3) {
      setError("Por favor, introduce al menos 3 números para detectar un patrón.");
      return;
    }

    const result = detectPatternAndPredict(parsed);
    setPrediction(result.prediction);
    setExplanation(result.explanation);
    setHistory(`Secuencia introducida: ${parsed.join(", ")}`);
    setShowResult(true);
  };

  const detectPatternAndPredict = (seq) => {
    const isAlmostEqual = (a, b) => Math.abs(a - b) < 0.00001;

    const checkArithmetic = () => {
      const d = seq[1] - seq[0];
      return seq.every((v, i, a) => i === 0 || isAlmostEqual(v - a[i - 1], d))
        ? d
        : null;
    };

    const checkGeometric = () => {
      if (seq.includes(0)) return null;
      const r = seq[1] / seq[0];
      return seq.every((v, i, a) => i === 0 || isAlmostEqual(v / a[i - 1], r))
        ? r
        : null;
    };

    const checkSquares = () =>
      seq.every((n, i) => isAlmostEqual(n, (i + 1) ** 2));
    const checkCubes = () =>
      seq.every((n, i) => isAlmostEqual(n, (i + 1) ** 3));
    const checkFibonacci = () =>
      seq.slice(2).every((n, i) => isAlmostEqual(n, seq[i] + seq[i + 1]));

    const checkQuadratic = () => {
      const diffs1 = seq.slice(1).map((v, i) => v - seq[i]);
      const diffs2 = diffs1.slice(1).map((v, i) => v - diffs1[i]);
      return diffs2.every((d) => isAlmostEqual(d, diffs2[0]))
        ? seq.at(-1) + diffs1.at(-1) + diffs2[0]
        : null;
    };

    const arith = checkArithmetic();
    if (arith !== null) {
      return {
        prediction: seq.at(-1) + arith,
        explanation: `Progresión aritmética con diferencia ${arith}.`,
      };
    }

    const geo = checkGeometric();
    if (geo !== null) {
      return {
        prediction: seq.at(-1) * geo,
        explanation: `Progresión geométrica con razón ${geo}.`,
      };
    }

    if (checkSquares()) {
      const n = seq.length + 1;
      return {
        prediction: n ** 2,
        explanation: `Secuencia de cuadrados perfectos: ${n}² = ${n ** 2}.`,
      };
    }

    if (checkCubes()) {
      const n = seq.length + 1;
      return {
        prediction: n ** 3,
        explanation: `Secuencia de cubos perfectos: ${n}³ = ${n ** 3}.`,
      };
    }

    if (checkFibonacci()) {
      const next = seq.at(-1) + seq.at(-2);
      return {
        prediction: next,
        explanation: `Secuencia de Fibonacci: ${seq.at(-2)} + ${seq.at(-1)} = ${next}.`,
      };
    }

    const quadratic = checkQuadratic();
    if (quadratic !== null) {
      return {
        prediction: quadratic,
        explanation: `Patrón cuadrático detectado.`,
      };
    }

    const avgDiff =
      seq.slice(1).reduce((sum, val, i) => sum + (val - seq[i]), 0) /
      (seq.length - 1);
    const fallback = seq.at(-1) + avgDiff;
    return {
      prediction: fallback,
      explanation: `Predicción basada en la tendencia general (promedio de diferencias: ${avgDiff.toFixed(
        2
      )}).`,
    };
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 text-center border border-green-200">
        <h1 className="text-2xl font-bold text-indigo-800 mb-4">
          MATEIA Predictor de Patrones Numéricos
        </h1>
        <p className="text-gray-600 mb-6">
          Introduce una secuencia de números separados por espacios o comas. La
          IA intentará predecir el siguiente número.
        </p>
        <input
          type="text"
          value={sequence}
          onChange={(e) => setSequence(e.target.value)}
          placeholder="Ej: 2, 4, 6, 8"
          className="w-full border border-green-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-800"
        />
        {error && (
          <div className="mb-4 text-red-600 font-medium">{error}</div>
        )}
        <button
          onClick={predictNextNumber}
          className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Adivinar el siguiente número
        </button>
        {showResult && (
          <div className="mt-6 bg-green-100 border border-green-300 rounded-xl p-4 shadow-inner">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Resultado:
            </h3>
            <p className="text-indigo-800 font-bold mb-2">
              El siguiente número podría ser: {prediction}
            </p>
            <p className="text-gray-700 mb-2">{explanation}</p>
            <small className="text-gray-500">{history}</small>
          </div>
        )}
      </div>
    </div>
  );
}
