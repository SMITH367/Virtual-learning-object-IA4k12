import React, { useState, useEffect } from 'react';

// --- DATOS CENTRALES DEL JUEGO (6 GRADOS - Grado 6 es el RETO) ---
const gameData = {
    // GRADO 1: Visión (Clasificación simple - se mantiene simple)
    grado1: { 
        target: 'perro', 
        prompt: '¿Qué figura es la más FÁCIL para la IA (forma simple)?',
        visuals: { perro: '🟦', gato: '🐈' }, 
        options: [{ id: 'perro', label: 'Simple' }, { id: 'gato', label: 'Complejo' }],
        color: 'bg-red-600', 
        bg: 'bg-red-50',
        leccion: 'Lección: La IA percibe formas simples (GEOMETRÍA) más rápido.',
    },
    // GRADO 2: Audición (Reconocimiento de sonidos clave - se mantiene simple)
    grado2: { 
        target: 'campana', 
        prompt: '¿Qué SONIDO es CLAVE (Alerta)?',
        visuals: { campana: '🔔', ruido: '🪨' }, 
        options: [{ id: 'campana', label: 'Alerta' }, { id: 'ruido', label: 'Ruido' }],
        color: 'bg-yellow-600', 
        bg: 'bg-yellow-50',
        leccion: 'Lección: La IA percibe solo los sonidos que busca (CLAVE).',
    },
    
    // GRADO 3: Datos (Predicción COMPUESTA)
    grado3: { 
        target: 'circulorojo', 
        prompt: 'Basado en los DATOS, ¿qué combinación debe elegir la IA?',
        visuals: { 
            patron: '🔴🟦 🔴🟦 🟢⬜ 🔴🟦', 
            op1: '🔴🟦', 
            op2: '🟢⬜', 
            op3: '🔴⬜', 
        }, 
        options: [
            { id: 'circulorojo', label: '🔴🟦' }, 
            { id: 'cuadradoazul', label: '🟢⬜' },
            { id: 'triangulorojo', label: '🔴⬜' }
        ],
        color: 'bg-green-600', 
        bg: 'bg-green-50',
        leccion: 'Lección: La IA percibe patrones COMPUESTOS contando la data.',
    },

    // GRADO 4: Interacción (Mini-Laberinto)
    grado4: { 
        target: 'rutaB', 
        prompt: '¿Cuál es la RUTA que la IA aprendió que da PREMIO?',
        visuals: { 
            rutaA: '🛑', 
            rutaB: '⭐', 
            caminoA: '⬅️',
            caminoB: '⬇️',
        }, 
        options: [
            { id: 'rutaA', label: 'RUTA A (⬅️)' }, 
            { id: 'rutaB', label: 'RUTA B (⬇️)' }
        ],
        color: 'bg-blue-600', 
        bg: 'bg-blue-50',
        leccion: 'Lección: La IA percibe la ruta correcta por RECOMPENSA/ERROR.',
    },
    
    // GRADO 5: Olfato/Gusto (Percepción de Secuencia)
    grado5: { 
        target: '3', 
        prompt: 'Para percibir el GUSTO, ¿qué elemento falta en la secuencia química (Sabor Salado)?',
        visuals: { 
            secuencia: '💧 + 🟫 + ? = 🧂', 
            op1: '❌', 
            op2: '☢️', 
            op3: '🧂',
        }, 
        options: [
            { id: '1', label: '❌' }, 
            { id: '2', label: '☢️' }, 
            { id: '3', label: '🧂' }
        ],
        color: 'bg-orange-600', 
        bg: 'bg-orange-50',
        leccion: 'Lección: La IA percibe por COMPOSICIÓN química y SECUENCIA.',
    },
    
    // 👑 GRADO 6: El Reto: Sentido Propio y Contexto 👑
    grado6: { 
        target: 'desvio', // La respuesta correcta es la desvío, la ruta segura (percepción de riesgo)
        prompt: 'La tarea es llegar a la meta. El camino directo está BLOQUEADO. ¿Qué RUTA debe ELEGIR la IA para completar la TAREA?',
        visuals: { directo: '🚧', desvio: '✅' }, 
        options: [
            { id: 'directo', label: 'DIRECTO' }, 
            { id: 'desvio', label: 'DESVÍO' }
        ],
        color: 'bg-purple-600', 
        bg: 'bg-purple-50',
        leccion: 'Lección: La IA percibe el RIESGO (CONTEXTO) y prioriza la TAREA.',
    },
};

export default function IaPercepcion({ grado, titulo, descripcion }) {
    const [estadoJuego, setEstadoJuego] = useState('inicio');
    const [mensajeResultado, setMensajeResultado] = useState('');
    const [intento, setIntento] = useState(0);

    // Reinicia el estado al cambiar de grado/prop
    useEffect(() => {
        setEstadoJuego('inicio');
        setMensajeResultado('');
        setIntento(0);
    }, [grado]);

    const currentData = gameData[grado] || gameData.grado1; 
    const buttonClasses = `${currentData.color} text-white px-10 py-5 rounded-3xl hover:opacity-90 transition duration-300 m-4 font-extrabold text-3xl shadow-2xl border-4 border-${currentData.color.replace('bg-', '').replace('600', '400')} transform hover:scale-105`;

    // --- MANEJO DEL JUEGO ---
    const handleGameChoice = (eleccion) => {
        const esCorrecto = eleccion === currentData.target;
        let resultadoIcono = esCorrecto ? '✅' : '❌';
        let resultadoTexto = esCorrecto ? "¡SÍ!" : "¡NO!";

        // Asignación de mensaje MUY CORTO según el grado
        switch(grado) {
            case 'grado1': resultadoTexto += " VIO la forma simple."; break;
            case 'grado2': resultadoTexto += " ESCUCHÓ la alerta."; break;
            case 'grado3': resultadoTexto += " PREDIJO la combinación correcta."; break; 
            case 'grado4': resultadoTexto += " ENCONTRÓ el camino de recompensa."; break; 
            case 'grado5': resultadoTexto += " IDENTIFICÓ el elemento faltante."; break; 
            case 'grado6': resultadoTexto += " PERCIBIÓ el riesgo y tomó el desvío."; break; // Cambiado para el reto
        }
        
        setMensajeResultado(`${resultadoIcono} ${resultadoTexto}`);
        setEstadoJuego(esCorrecto ? 'ganado' : 'perdido');
    };

    // Renderizado del Resultado (Visual)
    const renderResultado = () => {
        const esGanado = estadoJuego === 'ganado';
        const resultadoClases = esGanado 
            ? 'bg-green-200 text-green-900 border-green-600 shadow-lg animate-pulse-once' 
            : 'bg-red-200 text-red-900 border-red-600 shadow-lg';
        
        return (
            <div className={`p-8 mt-5 rounded-xl border-4 ${resultadoClases} transition-all duration-500 transform scale-105`}>
                <p className="text-5xl font-black mb-6">{mensajeResultado}</p>
                <p className="text-xl font-bold mb-6 text-gray-700">{currentData.leccion}</p>
                <button 
                    onClick={() => { setEstadoJuego('inicio'); setMensajeResultado(''); setIntento(i => i + 1); }}
                    className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105"
                >
                    Repetir 🔄
                </button>
            </div>
        );
    };

    // Renderizado del Juego (Icónico)
    const renderJuego = () => {
        if (estadoJuego !== 'inicio') {
            return renderResultado();
        }

        const iconSize = "text-[140px]";
        const promptClasses = "mb-8 text-3xl font-extrabold text-gray-800 p-2 border-b-2 border-gray-300";

        switch (grado) {
            case 'grado1':
                return (
                    <div className="flex flex-col items-center p-4">
                        <div className={`${iconSize} mb-8 animate-bounce-slow`}>
                            <span role="img" aria-label="robot-ia">🤖</span>
                        </div>
                        <p className={promptClasses}>{currentData.prompt}</p>
                        <div className="flex justify-center flex-wrap">
                            {currentData.options.map(opt => (
                                <button key={opt.id} onClick={() => handleGameChoice(opt.id)} className={buttonClasses}>
                                    <span className="text-7xl block mb-2">{currentData.visuals[opt.id]}</span>{opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'grado2':
                return (
                    <div className="flex flex-col items-center p-4">
                        <div className={`flex space-x-16 mb-8 ${iconSize.replace('140', '120')} animate-pulse-fast`}>
                            {currentData.visuals.campana} <span className="text-gray-400">|</span> {currentData.visuals.ruido}
                        </div>
                        <p className={promptClasses}>{currentData.prompt}</p>
                        <div className="flex justify-center flex-wrap">
                            {currentData.options.map(opt => (
                                <button key={opt.id} onClick={() => handleGameChoice(opt.id)} className={buttonClasses}>
                                    <span className="text-7xl block mb-2">{currentData.visuals[opt.id]}</span>{opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'grado3':
                return (
                    <div className="flex flex-col items-center p-4">
                        <div className="bg-green-300 border-4 border-green-700 p-6 mb-8 rounded-xl shadow-inner text-5xl font-black transform scale-110">
                            PATRÓN VISTO: {currentData.visuals.patron}
                        </div>
                        <p className={promptClasses}>¡Busca el par que más se repite!</p>
                        <div className="flex justify-center flex-wrap">
                            {currentData.options.map(opt => (
                                <button key={opt.id} onClick={() => handleGameChoice(opt.id)} className={buttonClasses}>
                                    <span className="text-7xl block mb-2">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 'grado4':
                return (
                    <div className="flex flex-col items-center p-4">
                        <div className="flex space-x-12 mb-8 text-[120px] font-black">
                            <div className="p-4 border-4 border-red-500 rounded-lg">{currentData.visuals.rutaA}</div>
                            <div className="p-4 border-4 border-green-500 rounded-lg">{currentData.visuals.rutaB}</div>
                        </div>
                        <p className={promptClasses}>¿Cuál es la RUTA que aprendió a elegir?</p>
                        <div className="flex justify-center flex-wrap">
                            <button onClick={() => handleGameChoice('rutaA')} className={buttonClasses}>
                                <span className="text-7xl block mb-2">{currentData.visuals.caminoA}</span>RUTA A
                            </button>
                            <button onClick={() => handleGameChoice('rutaB')} className={buttonClasses}>
                                <span className="text-7xl block mb-2">{currentData.visuals.caminoB}</span>RUTA B
                            </button>
                        </div>
                    </div>
                );
            case 'grado5':
                return (
                    <div className="flex flex-col items-center p-4">
                        <div className="bg-orange-300 border-4 border-orange-700 p-6 mb-8 rounded-xl shadow-inner text-5xl font-black flex items-center justify-center space-x-4">
                            {currentData.visuals.secuencia}
                        </div>
                        <p className={promptClasses}>¿Qué sabor falta para que el robot perciba "SALADO"?</p>
                        <div className="flex justify-center flex-wrap">
                            {currentData.options.map(opt => (
                                <button key={opt.id} onClick={() => handleGameChoice(opt.id)} className={buttonClasses}>
                                    <span className="text-7xl block mb-2">{currentData.visuals[`op${opt.id}`]}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            
            // 👑 GRADO 6: EL RETO 👑
            case 'grado6':
                return (
                    <div className="flex flex-col items-center p-4">
                        <div className="flex space-x-12 mb-8 text-[120px] font-black animate-pulse-slow">
                            {currentData.visuals.desvio} <span className="text-gray-400">|</span> {currentData.visuals.directo}
                        </div>
                        <p className={promptClasses}>{currentData.prompt}</p>
                        <div className="flex justify-center flex-wrap">
                            {currentData.options.map(opt => (
                                <button key={opt.id} onClick={() => handleGameChoice(opt.id)} className={buttonClasses}>
                                    <span className="text-7xl block mb-2">{currentData.visuals[opt.id]}</span>{opt.label}
                                </button>
                            ))}
                        </div>
                    </div>
                );
            default:
                return <p className="text-3xl text-gray-700 font-bold p-6 bg-white rounded-lg shadow-inner">¡Toca un grado arriba para empezar!</p>;
        }
    };

    // --- RENDERIZADO FINAL DEL CONTENEDOR ---
    const headerColorClass = `text-${currentData.color.replace('bg-', '').replace('600', '900')} border-${currentData.color.replace('bg-', '').replace('600', '500')}`;

    return (
        <div className={`ia-container p-8 my-8 rounded-3xl shadow-2xl ${currentData.bg} text-center border-4 border-${currentData.color.replace('bg-', '').replace('600', '400')}`} key={intento}>
            <h2 className={`text-4xl font-extrabold ${headerColorClass} border-b-4 pb-4 mb-6`}>
                {titulo}
            </h2>
            <p className="descripcion-juego text-2xl mb-8 text-gray-700 font-semibold p-2 bg-white rounded-lg shadow-inner">
                {descripcion}
            </p>
            {renderJuego()}
        </div>
    );
}