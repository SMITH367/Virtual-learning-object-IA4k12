import React, { useState } from "react";

export default function HablemosRobot({ niveles, portada, grado }) {
  const [showIntro, setShowIntro] = useState(true);
  const [activeLevel, setActiveLevel] = useState("nivel1");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  const levels = niveles;

  // Render multimedia (imagen, gif, video o texto)
  function renderMedia(question) {
    if (typeof question !== "string") return null;
    if (
      question.endsWith(".gif") ||
      question.endsWith(".jpg") ||
      question.endsWith(".jpeg") ||
      question.endsWith(".png") ||
      question.endsWith(".webp")
    ) {
      return (
        <div className="flex justify-center my-4">
          <img
            src={question}
            alt="Escenario"
            width={200}
            height={200}
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    }
    if (question.endsWith(".mp4") || question.endsWith(".webm")) {
      return (
        <div className="flex justify-center my-4">
          <video
            src={question}
            width={200}
            height={200}
            className="rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: "cover" }}
          />
        </div>
      );
    }
    // Si no es multimedia, mostrar como texto
    return (
      <p className="text-xl font-medium text-center my-4 p-4 bg-blue-50 rounded-lg">
        "{question}"
      </p>
    );
  }

  // Pantalla de introducción
  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 relative">
        {/* Botón Volver al curso */}
        <div className="absolute top-8 left-8">
          <a
            href={`/curso/${grado}`}
            className="bg-white px-6 py-3 rounded-lg shadow text-lg font-medium"
            style={{ display: "inline-block" }}
          >
            Volver al curso
          </a>
        </div>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src={portada || "/placeholder.svg"}
                alt="RoboAmigo"
                width={120}
                height={120}
                className="rounded-full bg-white p-2 shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">¡Hablemos, Robot!</h1>
            <p className="text-xl text-gray-700 mb-8">
              Ayuda a RoboAmigo a entender la comunicación humana en diferentes situaciones
            </p>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎯 Objetivo del juego</h2>
              <p className="text-gray-600">
                Comprender que los agentes inteligentes necesitan interpretar múltiples formas de comunicación humana
                (voz, texto, gestos, emociones) para interactuar naturalmente, y que esto no es tan fácil como parece.
              </p>
            </div>

            <button
              onClick={() => setShowIntro(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 rounded-lg font-semibold transition"
            >
              ¡Comenzar a jugar!
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Juego principal
  const currentLevelData = levels[activeLevel];
  const currentQuestionData = currentLevelData.questions[currentQuestion];
  const totalQuestions = Object.values(levels).reduce((sum, level) => sum + level.questions.length, 0);
  const answeredQuestions = score + (showFeedback && !isCorrect ? 1 : 0);
  const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);

  if (gameCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 py-12 relative">
        {/* Botón Volver a Introducción */}
        <button
          className="bg-white px-6 py-3 rounded-lg shadow text-lg font-medium absolute top-8 left-8"
          style={{ display: "inline-block" }}
          onClick={() => {
            setShowIntro(true);
            setActiveLevel("nivel1");
            setScore(0);
            setCurrentQuestion(0);
            setShowFeedback(false);
            setIsCorrect(false);
            setGameCompleted(false);
          }}
        >
          Volver a Introducción
        </button>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <img
                src={portada || "/placeholder.svg"}
                alt="RoboAmigo feliz"
                width={150}
                height={150}
                className="mx-auto rounded-full bg-white p-2 shadow-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-3xl font-bold text-blue-600 mb-4">¡Felicidades!</h1>
            <p className="text-xl mb-4">Has completado todos los niveles de ¡Hablemos, Robot!</p>
            <p className="text-2xl font-semibold mb-6">
              Tu puntuación: {score}/{totalQuestions}
            </p>
            <p className="mb-8 text-gray-600">
              Ahora comprendes mejor los desafíos que enfrentan los robots al intentar entender la comunicación humana.
            </p>
            <a href="/cursos">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg">
                Volver al inicio
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 relative">
      {/* Botón Volver a Introducción */}
      <button
        className="bg-white px-6 py-3 rounded-lg shadow text-lg font-medium absolute top-8 left-8"
        style={{ display: "inline-block" }}
        onClick={() => {
          setShowIntro(true);
          setActiveLevel("nivel1");
          setScore(0);
          setCurrentQuestion(0);
          setShowFeedback(false);
          setIsCorrect(false);
          setGameCompleted(false);
        }}
      >
        Volver a Introducción
      </button>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-600">¡Hablemos, Robot!</h1>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium">
              Puntuación: {score}/{totalQuestions}
            </p>
          </div>
        </div>

        <div className="mb-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-2 mb-6">
            {Object.keys(levels).map((nivel, idx) => (
              <button
                key={nivel}
                className={`py-2 rounded ${activeLevel === nivel ? "bg-blue-200 font-bold" : "bg-gray-100"} cursor-default`}
                disabled
              >
                Nivel {idx + 1}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <img
                  src={portada || "/placeholder.svg"}
                  alt="RoboAmigo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">{currentLevelData.title}</h2>
                <p className="text-gray-600">{currentLevelData.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <p className="text-gray-600 mb-2">{currentQuestionData.scenario}</p>
              {renderMedia(currentQuestionData.question)}
            </div>

            {!showFeedback ? (
              <div className="space-y-3">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full text-left h-auto py-3 px-4 border rounded-lg bg-gray-50 hover:bg-blue-100 transition"
                    onClick={() => handleAnswer(option.isCorrect)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            ) : (
              <div
                className={`p-4 rounded-lg mb-4 ${
                  isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                }`}
              >
                <h3 className={`font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                  {isCorrect ? "¡Correcto!" : "Incorrecto"}
                </h3>
                <p className="mt-2">{currentQuestionData.explanation}</p>
                <button
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                  onClick={handleNextQuestion}
                >
                  Continuar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function handleAnswer(isCorrect) {
    setIsCorrect(isCorrect);
    setShowFeedback(true);
    if (isCorrect) setScore(score + 1);
  }

  function handleNextQuestion() {
    setShowFeedback(false);
    const currentLevelQuestions = levels[activeLevel].questions.length;
    if (currentQuestion + 1 < currentLevelQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Move to next level or complete game
      const levelKeys = Object.keys(levels);
      const currentLevelIndex = levelKeys.indexOf(activeLevel);
      if (currentLevelIndex + 1 < levelKeys.length) {
        setActiveLevel(levelKeys[currentLevelIndex + 1]);
        setCurrentQuestion(0);
      } else {
        setGameCompleted(true);
      }
    }
  }
}