import { useEffect, useState, useRef } from "react";
import { trivias } from "../../data/trivia.js";

export default function Trivia({ course = "primero" }) {
  const [questions, setQuestions] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const triviaData = trivias.find(
      (t) =>
        t.course.toLowerCase() === course.toLowerCase() &&
        t.activity.toLowerCase() === "trivia"
    );
    if (triviaData) {
      setQuestions(triviaData.questions);
    } else {
      setQuestions([]);
    }
  }, [course]);

  useEffect(() => {
    if (gameStarted && !showResults) {
      audioRef.current = new Audio("/sounds/click.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch((e) => console.log("Audio error:", e));
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [gameStarted, showResults]);

  const currentQuestion = questions[currentIdx];

  const handleStart = () => {
    setGameStarted(true);
    setCurrentIdx(0);
    setUserAnswers({});
    setShowResults(false);
  };

  const handleAnswer = (qId, value) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const isCorrect = (q, answer) => {
    if (q.type === "open") return null;
    if (q.type === "multi-select") {
      return (
        Array.isArray(answer) &&
        Array.isArray(q.answer) &&
        answer.sort().toString() === q.answer.sort().toString()
      );
    }
    return answer === q.answer;
  };

  const renderOptions = (q) => {
    if (!q) return null;

    if (q.type === "multiple") {
      return q.options.map((opt, idx) => (
        <label
          key={idx}
          className="block mb-2 p-3 border rounded-lg cursor-pointer hover:bg-indigo-50 transition-all"
        >
          <input
            type="radio"
            name={`q-${q.id}`}
            value={opt}
            checked={userAnswers[q.id] === opt}
            onChange={() => handleAnswer(q.id, opt)}
            className="mr-2 accent-indigo-600"
          />
          {opt}
        </label>
      ));
    }

    if (q.type === "multi-select") {
      return q.options.map((opt, idx) => (
        <label
          key={idx}
          className="block mb-2 p-3 border rounded-lg cursor-pointer hover:bg-indigo-50 transition-all"
        >
          <input
            type="checkbox"
            checked={userAnswers[q.id]?.includes(opt) || false}
            onChange={() => {
              const selected = userAnswers[q.id] || [];
              const updated = selected.includes(opt)
                ? selected.filter((o) => o !== opt)
                : [...selected, opt];
              handleAnswer(q.id, updated);
            }}
            className="mr-2 accent-indigo-600"
          />
          {opt}
        </label>
      ));
    }

    if (q.type === "boolean") {
      return ["true", "false"].map((opt, idx) => (
        <label
          key={idx}
          className="block mb-2 p-3 border rounded-lg cursor-pointer hover:bg-indigo-50 transition-all"
        >
          <input
            type="radio"
            name={`q-${q.id}`}
            value={opt}
            checked={userAnswers[q.id] === (opt === "true")}
            onChange={() => handleAnswer(q.id, opt === "true")}
            className="mr-2 accent-indigo-600"
          />
          {opt === "true" ? "Verdadero" : "Falso"}
        </label>
      ));
    }

    if (q.type === "open") {
      return (
        <input
          type="text"
          value={userAnswers[q.id] || ""}
          onChange={(e) => handleAnswer(q.id, e.target.value)}
          className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Escribe tu respuesta..."
        />
      );
    }

    return null;
  };

  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center h-[300px] space-y-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 animate-bounce">
          ¡Bienvenido al Quiz!
        </h2>
        <button
          onClick={handleStart}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Iniciar Juego
        </button>
        <a
        href="/cursos"
        className="mt-4 inline-block text-indigo-600 underline hover:text-indigo-800 transition"
      >
        ← Volver a los cursos
      </a>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-indigo-800">
          Resultados del Quiz
        </h2>
        {questions.map((q) => {
          const userAnswer = userAnswers[q.id];
          const correct = isCorrect(q, userAnswer);
          return (
            <div
              key={q.id}
              className={`p-4 border rounded-lg ${
                correct === null
                  ? "bg-yellow-50"
                  : correct
                  ? "bg-green-50"
                  : "bg-red-50"
              }`}
            >
              <p className="font-semibold mb-2">{q.question}</p>
              <p>
                <strong>Tu respuesta:</strong>{" "}
                <span className="text-indigo-700">
                  {Array.isArray(userAnswer)
                    ? userAnswer.join(", ")
                    : String(userAnswer)}
                </span>
              </p>
              {q.type !== "open" && (
                <p>
                  <strong>Respuesta correcta:</strong>{" "}
                  <span className="text-green-700">
                    {Array.isArray(q.answer)
                      ? q.answer.join(", ")
                      : String(q.answer)}
                  </span>
                </p>
              )}
              {q.explanation && (
                <p className="mt-2 italic text-gray-600">
                  Explicación: {q.explanation}
                </p>
              )}
              {correct === true && (
                <p className="text-green-700 font-semibold mt-1">¡Correcto!</p>
              )}
              {correct === false && (
                <p className="text-red-700 font-semibold mt-1">Incorrecto</p>
              )}
            </div>
          );
        })}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setShowResults(false);
              setGameStarted(false); 
            }}
             className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">
            Volver a jugar
          </button>

        </div>
      </div>
    );
  }

  const answered = userAnswers[currentQuestion?.id] !== undefined;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow space-y-4">
      <div className="flex justify-between items-center text-indigo-700 mb-4">
        <h3 className="font-bold">
          Pregunta {currentIdx + 1} de {questions.length}
        </h3>
        <span className="font-semibold">Responde🧠</span>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 shadow-inner h-[300px] overflow-y-auto transition-opacity duration-300">
        <p className="font-semibold text-lg text-indigo-700 break-words whitespace-pre-wrap">
          {currentQuestion?.question}
        </p>
        <div className="mt-4">{renderOptions(currentQuestion)}</div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!answered}
          className={`px-4 py-2 rounded ${
            answered
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-indigo-200 cursor-not-allowed"
          }`}
        >
          {currentIdx + 1 === questions.length ? "Finalizar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
}
