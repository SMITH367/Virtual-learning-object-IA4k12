import React, { useState, useEffect, useCallback } from 'react';

// --- DATOS ÚNICOS POR GRADO Y FASE ---
// Se recomienda mantener los datos fuera del componente para mejor organización y reusabilidad
const GRADO_CHALLENGES = {
    primero: {
        color: 'bg-indigo-600', bg: 'bg-indigo-50',
        titulo: 'GRADO 1: INICIACIÓN (Ciclo Básico)',
        descripcion: 'Aprende los 2 pasos fundamentales del Machine Learning. ¡La base!',
        claseVisual: "text-[140px] animate-bounce-slow",
        fases: {
            fase1: {
                prompt: '¿Qué alimenta al cerebro de la IA?',
                leccion: 'INPUT: La IA necesita DATOS limpios para aprender.',
                choices: [
                    { key: 'data', label: 'OPCIÓN A', visual: '📊', isCorrect: true },
                    { key: 'basura', label: 'OPCIÓN B', visual: '🗑️', isCorrect: false }
                ]
            },
            fase2: {
                prompt: 'Profesor: "Esto es una 🟥". ¿Qué clasifica la IA?',
                leccion: 'SUPERVISADO: Clasificación por color, ya conoce la etiqueta.',
                choices: [
                    { key: 'cuadrado', label: 'OPCIÓN A', visual: '🟥', isCorrect: true },
                    { key: 'circulo', label: 'OPCIÓN B', visual: '🔵', isCorrect: false }
                ]
            },
            fase3: {
                prompt: 'La IA agrupa sola. ¿Qué figuras van JUNTAS?',
                leccion: 'NO SUPERVISADO: Agrupación por FORMA (Clúster).',
                choices: [
                    { key: 'triangulos', label: 'OPCIÓN A', visual: '🔺🔺', isCorrect: true },
                    { key: 'cuadrados', label: 'OPCIÓN B', visual: '🟦🟦', isCorrect: false },
                    { key: 'mezclado', label: 'OPCIÓN C', visual: '🔺🟦', isCorrect: false }
                ]
            },
            fase4: {
                prompt: 'Patrón (🍎🍊🍎🍊). ¿Qué viene ahora (OUTPUT)?',
                leccion: 'OUTPUT: La IA usa lo aprendido para PREDECIR el futuro.',
                choices: [
                    { key: 'item1', label: 'OPCIÓN A', visual: '🍎', isCorrect: true },
                    { key: 'item2', label: 'OPCIÓN B', visual: '🍊', isCorrect: false }
                ]
            }
        }
    },
    segundo: {
        color: 'bg-teal-600', bg: 'bg-teal-50',
        titulo: 'GRADO 2: INTERMEDIO (Enfoque en Datos)',
        descripcion: 'Repasa el ciclo enfocándote en la calidad y el tipo de datos.',
        claseVisual: "text-[120px] animate-pulse-fast",
        fases: {
            fase1: {
                prompt: '¿Qué puede procesar la IA?',
                leccion: 'INPUT: La IA procesa la voz y el sonido útil.',
                choices: [
                    { key: 'voz', label: 'OPCIÓN A', visual: '🗣️', isCorrect: true },
                    { key: 'silencio', label: 'OPCIÓN B', visual: '🔇', isCorrect: false }
                ]
            },
            fase2: {
                prompt: 'Profesor: "Esto es una 🐈". ¿Qué clasifica la IA?',
                leccion: 'SUPERVISADO: Clasificación por TIPO (Animales), conoce la etiqueta.',
                choices: [
                    { key: 'gato', label: 'OPCIÓN A', visual: '🐈', isCorrect: true },
                    { key: 'avion', label: 'OPCIÓN B', visual: '✈️', isCorrect: false }
                ]
            },
            fase3: {
                prompt: 'La IA agrupa sola. ¿Qué conceptos van JUNTOS?',
                leccion: 'NO SUPERVISADO: Agrupación por CONCEPTO (Velocidad).',
                choices: [
                    { key: 'rapido', label: 'OPCIÓN A', visual: '🏎️🚀', isCorrect: true },
                    { key: 'lento', label: 'OPCIÓN B', visual: '🐌🐢', isCorrect: false },
                    { key: 'mezclado', label: 'OPCIÓN C', visual: '🏎️🐌', isCorrect: false }
                ]
            },
            fase4: {
                prompt: 'Patrón (1, 3, 5, ?). ¿Qué número predice la IA?',
                leccion: 'OUTPUT: La IA predice la secuencia numérica.',
                choices: [
                    { key: 'num1', label: 'OPCIÓN A', visual: '7️⃣', isCorrect: true },
                    { key: 'num2', label: 'OPCIÓN B', visual: '8️⃣', isCorrect: false }
                ]
            }
        }
    },
    tercero: {
        color: 'bg-pink-600', bg: 'bg-pink-50',
        titulo: 'GRADO 3: AVANZADO (Enfoque en Procesamiento)',
        descripcion: 'Analiza a fondo las diferencias entre Aprendizaje Supervisado y No Supervisado.',
        claseVisual: "text-[100px] animate-spin-slow",
        fases: {
            fase1: {
                prompt: '¿Qué entrada es útil para un robot de programación?',
                leccion: 'INPUT: El código es dato útil; el error es solo ruido.',
                choices: [
                    { key: 'codigo', label: 'OPCIÓN A', visual: '💻', isCorrect: true },
                    { key: 'error', label: 'OPCIÓN B', visual: '🚨', isCorrect: false }
                ]
            },
            fase2: {
                prompt: 'Profesor: "Esto es Tristeza 😭". ¿Qué clasifica la IA?',
                leccion: 'SUPERVISADO: Clasificación por EMOCIÓN, conoce la etiqueta.',
                choices: [
                    { key: 'triste', label: 'OPCIÓN A', visual: '😭', isCorrect: true },
                    { key: 'feliz', label: 'OPCIÓN B', visual: '😊', isCorrect: false }
                ]
            },
            fase3: {
                prompt: 'La IA agrupa sola. ¿Qué objetos van JUNTOS?',
                leccion: 'NO SUPERVISADO: Agrupación por TAMAÑO.',
                choices: [
                    { key: 'grande', label: 'OPCIÓN A', visual: '⛰️🚢', isCorrect: true },
                    { key: 'pequeño', label: 'OPCIÓN B', visual: '🐜⚽', isCorrect: false },
                    { key: 'mezclado', label: 'OPCIÓN C', visual: '⛰️🐜', isCorrect: false }
                ]
            },
            fase4: {
                prompt: 'Patrón (🌧️🌧️☀️🌧️🌧️). ¿Qué viene ahora?',
                leccion: 'OUTPUT: La IA predice el cambio de patrón.',
                choices: [
                    { key: 'sol', label: 'OPCIÓN A', visual: '☀️', isCorrect: true },
                    { key: 'lluvia', label: 'OPCIÓN B', visual: '🌧️', isCorrect: false }
                ]
            }
        }
    },
    cuarto: {
        color: 'bg-amber-600', bg: 'bg-amber-50',
        titulo: 'GRADO 2: MAESTRÍA (El Ciclo Completo)',
        descripcion: '¡El reto final! Demuestra que entiendes el flujo completo de la IA.',
        claseVisual: "text-[100px] animate-none",
        fases: {
            fase1: {
                prompt: '¿Qué dato es más confiable de un sensor de temperatura?',
                leccion: 'INPUT: Los datos NUMÉRICOS son los más fáciles de procesar.',
                choices: [
                    { key: 'numerico', label: 'OPCIÓN A', visual: '🌡️', isCorrect: true },
                    { key: 'letras', label: 'OPCIÓN B', visual: '🔡', isCorrect: false }
                ]
            },
            fase2: {
                prompt: 'Profesor: "Esto es una 🔧". ¿Qué clasifica la IA?',
                leccion: 'SUPERVISADO: Clasificación por UTILIDAD (Herramientas).',
                choices: [
                    { key: 'martillo', label: 'OPCIÓN A', visual: '🔨', isCorrect: true },
                    { key: 'flor', label: 'OPCIÓN B', visual: '🌸', isCorrect: false }
                ]
            },
            fase3: {
                prompt: 'La IA agrupa sola. ¿Qué objetos tienen la misma FUNCIÓN?',
                leccion: 'NO SUPERVISADO: Agrupación por FUNCIÓN.',
                choices: [
                    { key: 'vestir', label: 'OPCIÓN A', visual: '🧤👒', isCorrect: true },
                    { key: 'comer', label: 'OPCIÓN B', visual: '🍴🥄', isCorrect: false },
                    { key: 'mezclado', label: 'OPCIÓN C', visual: '🧤🍴', isCorrect: false }
                ]
            },
            fase4: {
                prompt: 'Patrón (⚽⚽🏀⚽). ¿Qué PREDICE la IA (Output)?',
                leccion: 'OUTPUT: La IA completa el ciclo: INPUT -> PROCESO -> OUTPUT.',
                choices: [
                    { key: 'pelota', label: 'OPCIÓN A', visual: '⚽', isCorrect: true },
                    { key: 'basket', label: 'OPCIÓN B', visual: '🏀', isCorrect: false }
                ]
            }
        }
    }
};

export default function IaMachineLearning({ grado }) {
    const [estadoJuego, setEstadoJuego] = useState('inicio');
    const [faseActual, setFaseActual] = useState(1);
    const [mensajeResultado, setMensajeResultado] = useState('');

    const gradoData = GRADO_CHALLENGES[grado] || GRADO_CHALLENGES.grado1;
    const faseKey = `fase${faseActual}`;
    const faseData = gradoData.fases[faseKey];
    
    // Extraemos la opción correcta para uso posterior
    const opcionCorrecta = faseData?.choices.find(c => c.isCorrect);

    // Reinicia el estado al cambiar de grado
    useEffect(() => {
        setEstadoJuego('inicio');
        setFaseActual(1);
        setMensajeResultado('');
    }, [grado]);

    // Lógica para manejar la elección del usuario
    const handleGameChoice = useCallback((eleccion) => {
        const esCorrecto = eleccion === opcionCorrecta?.key;
        let resultadoIcono = esCorrecto ? '✅' : '❌';
        let resultadoTexto = esCorrecto ? "¡SÍ! " : "¡NO! ";

        setMensajeResultado(`${resultadoIcono} ${resultadoTexto} ${faseData.leccion}`);
        setEstadoJuego(esCorrecto ? 'ganado' : 'perdido');
    }, [faseData, opcionCorrecta]);

    // Lógica para avanzar de fase o terminar el grado
    const handleNext = () => {
        if (faseActual < Object.keys(gradoData.fases).length) {
            setFaseActual(faseActual + 1);
            setEstadoJuego('inicio');
            setMensajeResultado('');
        } else {
            setFaseActual(Object.keys(gradoData.fases).length + 1); // Indicador de Fin de Grado
        }
    };
    
    // Clases de botón dinámicas
    const buttonClasses = `${gradoData.color} px-10 py-5 rounded-3xl hover:opacity-90 transition duration-300 m-2 font-extrabold text-3xl shadow-2xl border-2 border-${gradoData.color.replace('bg-', '').replace('600', '400')} transform hover:scale-105`;

    // Renderizado del Resultado
    const renderResultado = () => {
        const esGanado = estadoJuego === 'ganado';
        const resultadoClases = esGanado
            ? 'bg-green-200 text-green-900 border-green-600 shadow-lg animate-pulse-once'
            : 'bg-red-200 text-red-900 border-red-600 shadow-lg';
        
        const isFinalPhase = faseActual === Object.keys(gradoData.fases).length;

        return (
            <div className={`p-8 rounded-xl border-2 ${resultadoClases} transition-all duration-500 transform scale-105`}>
                <p className="text-5xl font-black mb-6">{mensajeResultado}</p>
                
                {esGanado && !isFinalPhase && (
                    <button
                        onClick={handleNext}
                        className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 mt-2"
                    >
                        Siguiente Fase ({faseActual + 1} de {Object.keys(gradoData.fases).length}) ➡️
                    </button>
                )}

                {esGanado && isFinalPhase && (
                    <a
                        href={grado === 'grado4' ? '/ml/cursos' : `/ml/grado${parseInt(grado.replace('grado', '')) + 1}`}
                        className="bg-purple-600 px-8 py-2 rounded-full hover:bg-purple-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 mt-2 inline-block"
                    >
                        {grado === 'grado4' ? '¡GRADO 2 LOGRADO! Volver a Cursos 🏆' : `Ir al Grado ${parseInt(grado.replace('grado', '')) + 1}° 🎉`}
                    </a>
                )}                
                {!esGanado && (
                    <button
                        onClick={() => { setEstadoJuego('inicio'); setMensajeResultado(''); }}
                        className="bg-red-600 text-white px-8 py-2 rounded-full hover:bg-red-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 mt-2"
                    >
                        Reintentar Fase {faseActual} 🔄
                    </button>
                )}
            </div>
        );
    };

    // Renderizado del Contenido Principal de la Fase (sin el switch)
    const renderFase = () => {
        if (estadoJuego !== 'inicio') {
            return renderResultado();
        }

        const promptClasses = "mb-2 text-3xl font-extrabold text-gray-800 p-2 border-b-2 border-gray-300";

        // Estructura visual para el profesor en la fase 2
        const profesorDisplay = faseActual === 2 && (
            <div className={`bg-white border-2 border-gray-500 p-6 mb-2 rounded-xl shadow-inner text-5xl font-black text-${gradoData.color.replace('bg-', '').replace('600', '700')} w-full`}>
                PROFESOR: {opcionCorrecta?.visual}
            </div>
        );

        return (
            <div className="flex flex-col items-center p-2">
                {faseActual !== 2 && <div className="mb-2"><span className={gradoData.claseVisual}>{faseActual === 1 ? '🧠' : faseActual === 2 ? '🧑‍🏫' : faseActual === 3 ? '🧩' : ''}</span></div>}
                
                {faseActual === 2 && (
                    <div className="flex items-center justify-center space-x-8 mb-10">
                        <div className="flex flex-col items-center">
                            <span className="text-5xl font-bold text-gray-700 mb-2">INPUT</span>
                            <span className="text-7xl animate-pulse">📦</span>
                        </div>
                        <span className="text-8xl text-gray-400">➡️</span>
                        <div className="flex flex-col items-center">
                            <span className="text-5xl font-bold text-gray-700 mb-2">PROCESO</span>
                            <span className="text-7xl animate-spin-slow">🔄</span>
                        </div>
                        <span className="text-8xl text-gray-400">➡️</span>
                        <div className="flex flex-col items-center">
                            <span className="text-5xl font-bold text-gray-700 mb-2">PATRÓN</span>
                            <div className={`bg-white border-2 border-gray-500 p-3 rounded-xl shadow-inner text-4xl font-black`}>
                                {faseData.prompt.split('(')[1]?.split(')')[0]}
                            </div>
                        </div>
                    </div>
                )}
                
                <h3 className={`text-3xl font-extrabold mb-2 border-b-2 pb-2 text-${gradoData.color.replace('bg-', '').replace('600', '800')}`}>
                    {faseData.titulo}
                </h3>
                <p className={promptClasses}>{faseData.prompt}</p>
                
                {profesorDisplay}

                <div className="flex justify-center flex-wrap">
                    {faseData.choices.map(choice => (
                        <button
                            key={choice.key}
                            onClick={() => handleGameChoice(choice.key)}
                            className={buttonClasses}
                        >
                            <span className="text-7xl block mb-2">{choice.visual}</span>
                            {choice.label}
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderGradoCompleto = () => {
        const isFinalGrado = faseActual > Object.keys(gradoData.fases).length;

        if (isFinalGrado) {
            const nextLink = grado === 'grado4' ? '/ml/cursos' : `/ml/grado${parseInt(grado.replace('grado', '')) + 1}`;
            const buttonText = grado === 'grado4' ? 'Volver a Cursos 🏆' : `Ir al Grado ${parseInt(grado.replace('grado', '')) + 1}° 🎉`;

            return (
                <div className={`p-10 my-8 rounded-3xl shadow-2xl text-center border-2 border-purple-600 bg-purple-100`}>
                    <h2 className="text-5xl font-black text-purple-900 mb-6">¡GRADO {grado.replace('grado', '')}° MAESTRÍA LOGRADA!</h2>
                    <p className="text-2xl text-gray-700 mb-8">Has completado los 2 retos del ciclo de Machine Learning: **Input, Supervisado, No Supervisado y Predicción.**</p>
                    <a href={nextLink}
                        className="bg-purple-600 px-8 py-2 rounded-full hover:bg-purple-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 inline-block"
                    >
                        {buttonText}
                    </a>
                </div>
            );
        }

        const headerColorClass = `text-${gradoData.color.replace('bg-', '').replace('600', '900')} border-${gradoData.color.replace('bg-', '').replace('600', '500')}`;

        return (
            <div className={`ia-container p-8 my-8 rounded-3xl shadow-2xl ${gradoData.bg} text-center border-2 border-${gradoData.color.replace('bg-', '').replace('600', '400')}`} key={faseActual}>
                <h2 className={`text-4xl font-extrabold ${headerColorClass} border-b-2 pb-2 mb-6`}>
                    {gradoData.titulo}
                </h2>
                <p className="descripcion-juego text-2xl mb-2 text-gray-700 font-semibold p-2 bg-white rounded-lg shadow-inner">
                    {gradoData.descripcion}
                </p>
                {renderFase()}
            </div>
        );
    }
    
    return renderGradoCompleto();
}