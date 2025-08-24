import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const objectsDatabase = [
  {
    name: "Llaves",
    attributes: { weight: "ligero", temperature: "frío", texture: "áspero", sound: "metálico" },
    emoji: "🔑",
  },
  {
    name: "Vaso de metal",
    attributes: { weight: "medio", temperature: "frío", texture: "liso", sound: "metálico" },
    emoji: "🥤",
  },
  {
    name: "Pelota de goma",
    attributes: { weight: "ligero", temperature: "tibio", texture: "rugoso", sound: "silencioso" },
    emoji: "🏀",
  },
  {
    name: "Libro",
    attributes: { weight: "medio", temperature: "tibio", texture: "áspero", sound: "silencioso" },
    emoji: "📚",
  },
  {
    name: "Moneda",
    attributes: { weight: "muy ligero", temperature: "frío", texture: "liso", sound: "metálico" },
    emoji: "🪙",
  },
  // --- ELEMENTOS AJUSTADOS PARA AMBIGÜEDAD FORZADA ---
  {
    name: "Anillo de metal",
    attributes: { weight: "muy ligero", temperature: "frío", texture: "áspero", sound: "metálico" },
    emoji: "💍",
  },
  {
    name: "Ladrillo",
    attributes: { weight: "pesado", temperature: "frío", texture: "áspero", sound: "silencioso" },
    emoji: "🧱",
  },
  {
    name: "Naranja",
    // Ajustado de "ligero" a "medio" para no ser idéntico a la Pelota
    attributes: { weight: "medio", temperature: "tibio", texture: "rugoso", sound: "silencioso" },
    emoji: "🍊",
  },
  {
    name: "Paquete de cartas",
    attributes: { weight: "medio", temperature: "tibio", texture: "liso", sound: "silencioso" },
    emoji: "🃏",
  },
  {
    name: "Vela",
    attributes: { weight: "ligero", temperature: "tibio", texture: "liso", sound: "silencioso" },
    emoji: "🕯️",
  },
];

const SENSOR_MAP = {
  weight: { label: "PESO", emoji: "⚖️" },
  temperature: { label: "TEMP.", emoji: "🌡️" },
  texture: { label: "TEXTURA", emoji: "✋" },
  sound: { label: "SONIDO", emoji: "👂" },
};

export default function CerebroDetectivo() {
  const [gameState, setGameState] = useState({
    activatedSensors: [],
    currentObject: null,
    isGameStarted: false,
    targetRevealed: false,
    logs: [],
    possibleObjects: [],
    isGuessed: false,
    guessResult: null, 
    showSensors: false, 
  });

  const addLog = (msg, type = "IA") => {
    setGameState((prev) => ({ ...prev, logs: [...prev.logs, { msg, type, timestamp: Date.now() }] }));
  };

  const startGame = () => {
    const randomObject = objectsDatabase[Math.floor(Math.random() * objectsDatabase.length)];

    setGameState({
      activatedSensors: [],
      currentObject: randomObject,
      isGameStarted: true,
      targetRevealed: false,
      logs: [],
      possibleObjects: objectsDatabase, 
      isGuessed: false,
      guessResult: null,
      showSensors: true,
    });

    addLog("🔮 ¡Caja lista! Pide una Pista.", "system");
  };

  const revealObject = () => {
    if (!gameState.currentObject || gameState.isGuessed) return;
    setGameState((prev) => ({ ...prev, targetRevealed: true }));
    addLog(`🤫 SECRETO: ${gameState.currentObject.emoji} <strong>${gameState.currentObject.name}</strong>`, "debug");
  };

  const activateSensor = (sensor) => {
    if (!gameState.isGameStarted || gameState.activatedSensors.includes(sensor) || gameState.isGuessed) return;

    const sensorLabel = SENSOR_MAP[sensor].label;
    const value = gameState.currentObject.attributes[sensor];

    addLog(`➡️ ${sensorLabel}: <strong>${value}</strong>.`, "user");

    const newSensors = [...gameState.activatedSensors, sensor];
    setGameState((prev) => ({ ...prev, activatedSensors: newSensors }));

    setTimeout(() => runDeduction(newSensors), 500);
  };

  const deduceCompoundClue = (possibleObjects, sensors) => {
    if (sensors.includes('sound') && sensors.includes('temperature')) {
        const currentSound = gameState.currentObject.attributes.sound;
        const currentTemp = gameState.currentObject.attributes.temperature;

        // Si la combinación es metálico + frío, es metal
        if (currentSound === 'metálico' && currentTemp === 'frío') {
             const metalCount = possibleObjects.filter(obj => obj.attributes.material === 'metal').length;
             if (metalCount === possibleObjects.length) {
                return { value: '¡Es <strong>METAL</strong>!', type: "IA_hint" };
             }
        }
    }
    // Si la combinación es tibio + silencioso, es algo blando (goma, papel, fruta, cera)
    if (sensors.includes('temperature') && sensors.includes('sound')) {
        const currentSound = gameState.currentObject.attributes.sound;
        const currentTemp = gameState.currentObject.attributes.temperature;
        
        if (currentSound === 'silencioso' && currentTemp === 'tibio') {
            const softCount = possibleObjects.filter(obj => 
                obj.attributes.material === 'goma' || 
                obj.attributes.material === 'papel' || 
                obj.attributes.material === 'fruta' || 
                obj.attributes.material === 'cera'
            ).length;
             if (softCount === possibleObjects.length) {
                return { value: '¡Probablemente es algo BLANDO!', type: "IA_hint" };
             }
        }
    }
    
    return null;
  };

  const runDeduction = (sensors) => {
    if (!gameState.currentObject) return;

    const newPossibleObjects = objectsDatabase.filter((obj) =>
      sensors.every((s) => obj.attributes[s] === gameState.currentObject.attributes[s])
    );

    const remainingObjects = newPossibleObjects.length;

    const compoundClue = deduceCompoundClue(newPossibleObjects, sensors);
    if (compoundClue) {
        addLog(`💡 ${compoundClue.value}`, compoundClue.type);
    }

    if (remainingObjects === 1) {
      const finalObject = newPossibleObjects[0].name;
      // MENSAJE CORREGIDO: Indica que la IA ya resolvió el misterio
      addLog(`⭐ ¡YO GANÉ! Solo queda <strong>${finalObject}</strong>. ¡Mira el resultado!`, "IA_win"); 
      setGameState(prev => ({...prev, showSensors: false, isGuessed: true })); 
    } else if (remainingObjects === 0) {
      addLog("🚫 ¡ERROR! Objeto desconocido.", "IA_error");
      setGameState(prev => ({...prev, showSensors: false, isGuessed: true })); 
    } else {
      addLog(`🤔 Quedan <strong>${remainingObjects}</strong>. Dame otra.`, "IA");
    }
    
    setGameState((prev) => ({ ...prev, possibleObjects: newPossibleObjects }));
  };


  const handleObjectGuess = (guessedObject) => {
    if (!gameState.isGameStarted || gameState.isGuessed) return;

    const correctObject = gameState.currentObject;
    let result = null;

    if (guessedObject.name === correctObject.name) {
      addLog(`🎉 ¡TÚ GANASTE! ¡SÍ! Era <strong>${correctObject.name}</strong>.`, "player_win");
      result = 'win';
    } else {
      addLog(`😭 ¡FALLASTE! Era <strong>${correctObject.name}</strong>.`, "player_fail");
      result = 'lose';
    }

    setGameState((prev) => ({ 
        ...prev, 
        isGuessed: true, 
        guessResult: result,
        showSensors: false,
    }));
  };

  const getLogStyle = (type) => {
    switch (type) {
      case "IA":
        return "text-indigo-800 font-bold text-base";
      case "system":
        return "text-indigo-800 font-extrabold text-base";
      case "user":
        return "text-indigo-800 italic text-base";
      case "IA_hint":
        return "text-indigo-800 font-bold text-base";
      case "IA_win":
        return "bg-green-500 text-white font-extrabold p-2 rounded-lg text-lg border border-indigo-800";
      case "player_win":
        return "bg-green-500 text-white font-extrabold p-2 rounded-lg text-lg border border-indigo-800";
      case "player_fail":
        return "bg-indigo-800 text-white font-bold p-2 rounded-lg text-lg border border-green-500";
      case "IA_error":
        return "bg-indigo-800 text-white font-bold p-2 rounded-lg text-lg border border-green-500";
      case "debug":
        return "text-gray-400 text-sm";
      default:
        return "text-gray-700";
    }
  };

  const isCorrectGuess = (obj) => {
    return gameState.isGuessed && gameState.currentObject && obj.name === gameState.currentObject.name;
  }
  
  const handleRestart = () => {
    setGameState({
      activatedSensors: [],
      currentObject: null,
      isGameStarted: false,
      targetRevealed: false,
      logs: [],
      possibleObjects: [],
      isGuessed: false,
      guessResult: null,
      showSensors: false,
    });
    startGame();
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-green-50 p-6">
      <motion.div
        className="bg-green-50 rounded-3xl shadow-2xl p-6 max-w-xl w-full relative overflow-hidden mt-6 border-4 border-indigo-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute top-0 left-0 w-full h-3 bg-indigo-800"></div>

        <h1 className="text-4xl font-extrabold text-indigo-800 mt-1 mb-6 text-center">
          🧠 CEREBRO MÁGICO🔍
        </h1>

        {/* 1. Caja Misteriosa / Botón de inicio */}
        <motion.div
          className={`p-5 rounded-xl cursor-pointer mb-6 shadow-lg transition text-center ${
            !gameState.isGameStarted || gameState.isGuessed
              ? "bg-indigo-800 text-white hover:bg-indigo-700"
              : "bg-green-50 text-indigo-800 border-4 border-indigo-800"
          }`}
          whileHover={{ scale: !gameState.isGameStarted || gameState.isGuessed ? 1.03 : 1.01 }}
          whileTap={{ scale: !gameState.isGameStarted || gameState.isGuessed ? 0.98 : 1 }}
          onClick={!gameState.isGameStarted || gameState.isGuessed ? startGame : undefined}
        >
          {(!gameState.isGameStarted || gameState.isGuessed) ? (
            <p className="font-extrabold text-2xl">¡EMPEZAR JUEGO!</p>
          ) : (
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <span className="text-5xl">🎁</span>
                    <p className="font-bold text-xl text-indigo-800">CAJA SECRETA</p>
                </div>
              <motion.button
                onClick={revealObject}
                className="bg-gray-400 hover:bg-gray-500 px-3 py-1 rounded-lg text-white font-semibold text-sm"
                whileHover={{ scale: 1.1 }}
                disabled={gameState.targetRevealed}
              >
                {gameState.targetRevealed ? 'SECRETO' : 'DEBUG'}
              </motion.button>
            </div>
          )}
        </motion.div>
        
        {/* 2. Sensores y Diario */}
        {gameState.isGameStarted && !gameState.isGuessed && (
          <motion.div 
            className="flex flex-col md:flex-row gap-4 mb-6" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.3 }}
          >
            {/* Sensores - Columna Izquierda */}
            <div className="md:w-1/3 flex flex-col items-center p-3 border border-indigo-800 rounded-xl bg-white">
                <div className="flex flex-col gap-2 w-full items-center">
                {Object.keys(SENSOR_MAP).map((key) => (
                    <motion.button
                    key={key}
                    onClick={() => activateSensor(key)}
                    className={`px-3 py-1.5 rounded-full font-extrabold transition text-base w-full shadow-md ${
                        gameState.activatedSensors.includes(key)
                        ? "bg-indigo-800 text-white shadow-lg"
                        : "bg-green-50 text-indigo-800 hover:bg-white border-2 border-indigo-800"
                    }`}
                    whileHover={{ scale: gameState.activatedSensors.includes(key) ? 1.0 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={gameState.activatedSensors.includes(key) || !gameState.showSensors}
                    >
                    {SENSOR_MAP[key].label} {SENSOR_MAP[key].emoji}
                    </motion.button>
                ))}
                </div>
            </div>

            {/* Diario del Cerebro - Columna Derecha */}
            <div className="md:w-2/3 flex flex-col">
                <motion.div
                    className="bg-white border-4 border-indigo-800 p-3 rounded-xl h-40 overflow-y-auto shadow-inner flex-grow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {gameState.logs.slice().reverse().map((log, i) => ( 
                        <motion.p 
                            key={log.timestamp + i} 
                            className={`py-1 ${getLogStyle(log.type)}`}
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            dangerouslySetInnerHTML={{ __html: log.msg }}
                        ></motion.p>
                    ))}
                </motion.div>
            </div>
          </motion.div>
        )}
        
        {/* Panel de resultados/logs si el juego terminó */}
        {gameState.isGuessed && (
             <motion.div
                className="bg-white border-4 border-indigo-800 p-4 rounded-xl shadow-inner mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
             >
                <h3 className="text-2xl font-bold text-indigo-800 text-center mb-2">
                    ¡JUEGO TERMINADO!
                </h3>
                {gameState.logs.slice().reverse().filter(log => log.type.includes('win') || log.type.includes('fail') || log.type.includes('error') || log.type.includes('IA_win')).slice(0, 1).map((log, i) => (
                     <motion.p 
                        key={log.timestamp + i} 
                        className={`py-1 text-center ${getLogStyle(log.type)}`}
                        dangerouslySetInnerHTML={{ __html: log.msg }}
                    ></motion.p>
                ))}
            </motion.div>
        )}

        {/* 3. Objetos Posibles (Mecanismo de Conjetura) */}
        {gameState.isGameStarted && (
            <motion.div className="mt-4 border-t-2 border-indigo-800 pt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h3 className="text-2xl font-bold text-indigo-800 text-center mb-4">
                    {!gameState.isGuessed ? `${gameState.possibleObjects.length} OPCIONES` : null}
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-center mt-2 text-center min-h-[50px]">
                    <AnimatePresence initial={false}>
                    {objectsDatabase.map((obj) => {
                        const isVisible = gameState.possibleObjects.some(p => p.name === obj.name);
                        
                        if (gameState.isGuessed) {
                            if (gameState.currentObject && gameState.currentObject.name === obj.name) {
                                
                                let finalClassName = "px-4 py-2 rounded-xl text-lg font-extrabold transition shadow-lg bg-indigo-800 text-white shadow-xl ring-4 ring-green-500";
                                
                                return (
                                    <motion.button
                                        key={obj.name}
                                        className={finalClassName}
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1.1, opacity: 1 }}
                                        exit={{ scale: 0.5, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        disabled={true} 
                                    >
                                        {obj.emoji} {obj.name}
                                    </motion.button>
                                );
                            }
                            return null;
                        }


                        if (isVisible) {
                             let className = "px-4 py-2 rounded-xl text-lg font-extrabold transition cursor-pointer shadow-lg bg-green-50 text-indigo-800 hover:bg-white border-2 border-indigo-800";

                             return (
                                <motion.button
                                    key={obj.name}
                                    className={className}
                                    onClick={() => handleObjectGuess(obj)}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    {obj.emoji} {obj.name}
                                </motion.button>
                            );
                        } else {
                            return (
                                <motion.div 
                                    key={obj.name}
                                    initial={{ opacity: 1, scale: 1 }}
                                    animate={{ opacity: 0, scale: 0.8 }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                </motion.div>
                            );
                        }

                    })}
                    </AnimatePresence>
                </div>
            </motion.div>
        )}

        {/* Botón de Reinicio (Jugar Otra Vez) */}
        {gameState.isGuessed && (
            <motion.button
                onClick={handleRestart}
                className="w-full mt-6 py-4 rounded-xl font-extrabold text-2xl bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                Jugar Otra Vez 🚀
            </motion.button>
        )}
      </motion.div>
    </div>
  );
}