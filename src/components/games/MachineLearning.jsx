import React, { useState, useEffect, useCallback } from 'react';

// --- DATOS ÚNICOS POR GRADO Y FASE ---
const GRADO_CHALLENGES = {
    grado1: { 
        color: 'bg-indigo-600', bg: 'bg-indigo-50',
        titulo: 'GRADO 1: INICIACIÓN (Ciclo Básico)',
        descripcion: 'Aprende los 4 pasos fundamentales del Machine Learning. ¡La base!',
        claseVisual: "text-[140px] animate-bounce-slow",
        fases: {
            fase1: { // INPUT
                prompt: '¿Qué alimenta al cerebro de la IA?', visuals: { data: '📊', basura: '🗑️' }, target: 'data', leccion: 'INPUT: La IA necesita DATOS limpios para aprender.',
            },
            fase2: { // SUPERVISADO (Clasificación por color)
                prompt: 'Profesor: "Esto es una 🟥". ¿Qué clasifica la IA?', visuals: { cuadrado: '🟥', circulo: '🔵' }, target: 'cuadrado', leccion: 'SUPERVISADO: Clasificación por color, ya conoce la etiqueta.',
            },
            fase3: { // NO SUPERVISADO (Agrupación por forma)
                prompt: 'La IA agrupa sola. ¿Qué figuras van JUNTAS?', visuals: { triangulos: '🔺🔺', cuadrados: '🟦🟦', mezclado: '🔺🟦' }, target: 'triangulos', leccion: 'NO SUPERVISADO: Agrupación por FORMA (Clúster).',
            },
            fase4: { // PREDICCIÓN (Patrón Básico: ABAB)
                prompt: 'Patrón (🍎🍊🍎🍊). ¿Qué viene ahora (OUTPUT)?', visuals: { item1: '🍎', item2: '🍊' }, target: 'item1', leccion: 'OUTPUT: La IA usa lo aprendido para PREDECIR el futuro.',
            },
        }
    },
    grado2: { 
        color: 'bg-teal-600', bg: 'bg-teal-50',
        titulo: 'GRADO 2: INTERMEDIO (Enfoque en Datos)',
        descripcion: 'Repasa el ciclo enfocándote en la calidad y el tipo de datos.',
        claseVisual: "text-[120px] animate-pulse-fast",
        fases: {
            fase1: { // INPUT (Diferentes)
                prompt: '¿Qué puede procesar la IA?', visuals: { voz: '🗣️', silencio: '🔇' }, target: 'voz', leccion: 'INPUT: La IA procesa la voz y el sonido útil.',
            },
            fase2: { // SUPERVISADO (Clasificación por tipo de animal)
                prompt: 'Profesor: "Esto es una 🐈". ¿Qué clasifica la IA?', visuals: { gato: '🐈', avion: '✈️' }, target: 'gato', leccion: 'SUPERVISADO: Clasificación por TIPO (Animales), conoce la etiqueta.',
            },
            fase3: { // NO SUPERVISADO (Agrupación por velocidad/tema)
                prompt: 'La IA agrupa sola. ¿Qué conceptos van JUNTOS?', visuals: { rapido: '🏎️🚀', lento: '🐌🐢', mezclado: '🏎️🐌' }, target: 'rapido', leccion: 'NO SUPERVISADO: Agrupación por CONCEPTO (Velocidad).',
            },
            fase4: { // PREDICCIÓN (Patrón de Crecimiento: A, AAB, AAABB)
                prompt: 'Patrón (1, 3, 5, ?). ¿Qué número predice la IA?', visuals: { num1: '7️⃣', num2: '8️⃣' }, target: 'num1', leccion: 'OUTPUT: La IA predice la secuencia numérica.',
            },
        }
    },
    grado3: { 
        color: 'bg-pink-600', bg: 'bg-pink-50',
        titulo: 'GRADO 3: AVANZADO (Enfoque en Procesamiento)',
        descripcion: 'Analiza a fondo las diferencias entre Aprendizaje Supervisado y No Supervisado.',
        claseVisual: "text-[100px] animate-spin-slow",
        fases: {
            fase1: { // INPUT (Código vs. Error)
                prompt: '¿Qué entrada es útil para un robot de programación?', visuals: { codigo: '💻', error: '🚨' }, target: 'codigo', leccion: 'INPUT: El código es dato útil; el error es solo ruido.',
            },
            fase2: { // SUPERVISADO (Clasificación de Emociones)
                prompt: 'Profesor: "Esto es Tristeza 😭". ¿Qué clasifica la IA?', visuals: { triste: '😭', feliz: '😊' }, target: 'triste', leccion: 'SUPERVISADO: Clasificación por EMOCIÓN, conoce la etiqueta.',
            },
            fase3: { // NO SUPERVISADO (Agrupación por tamaño)
                prompt: 'La IA agrupa sola. ¿Qué objetos van JUNTOS?', visuals: { grande: '⛰️🚢', pequeño: '🐜⚽', mezclado: '⛰️🐜' }, target: 'grande', leccion: 'NO SUPERVISADO: Agrupación por TAMAÑO.',
            },
            fase4: { // PREDICCIÓN (Patrón de Alternancia compleja: AABC AABC)
                prompt: 'Patrón (🌧️🌧️☀️🌧️🌧️). ¿Qué viene ahora?', visuals: { sol: '☀️', lluvia: '🌧️' }, target: 'sol', leccion: 'OUTPUT: La IA predice el cambio de patrón.',
            },
        }
    },
    grado4: { 
        color: 'bg-amber-600', bg: 'bg-amber-50',
        titulo: 'GRADO 4: MAESTRÍA (El Ciclo Completo)',
        descripcion: '¡El reto final! Demuestra que entiendes el flujo completo de la IA.',
        claseVisual: "text-[100px] animate-none", 
        fases: {
            fase1: { // INPUT (Datos de Sensores)
                prompt: '¿Qué dato es más confiable de un sensor de temperatura?', visuals: { numerico: '🌡️', letras: '🔡' }, target: 'numerico', leccion: 'INPUT: Los datos NUMÉRICOS son los más fáciles de procesar.',
            },
            fase2: { // SUPERVISADO (Clasificación de utilidad)
                prompt: 'Profesor: "Esto es una 🔧". ¿Qué clasifica la IA?', visuals: { martillo: '🔨', flor: '🌸' }, target: 'martillo', leccion: 'SUPERVISADO: Clasificación por UTILIDAD (Herramientas).',
            },
            fase3: { // NO SUPERVISADO (Agrupación por función)
                prompt: 'La IA agrupa sola. ¿Qué objetos tienen la misma FUNCIÓN?', visuals: { vestir: '🧤👒', comer: '🍴🥄', mezclado: '🧤🍴' }, target: 'comer', leccion: 'NO SUPERVISADO: Agrupación por FUNCIÓN.',
            },
            fase4: { // PREDICCIÓN (El Ciclo Final Visual)
                prompt: 'Patrón (⚽⚽🏀⚽). ¿Qué PREDICE la IA (Output)?', 
                visuals: { 
                    input_icon: '📦⚽🏀', proceso_icon: '🧠🔄', historial: '⚽⚽🏀⚽',
                    pelota: '⚽', basket: '🏀' 
                }, 
                target: 'pelota', 
                leccion: 'OUTPUT: La IA completa el ciclo: INPUT -> PROCESO -> OUTPUT.',
            },
        }
    },
};

export default function IaMachineLearning({ grado }) {
    const [estadoJuego, setEstadoJuego] = useState('inicio'); 
    const [faseActual, setFaseActual] = useState(1); 
    const [mensajeResultado, setMensajeResultado] = useState('');
    const [intento, setIntento] = useState(0);

    const gradoData = GRADO_CHALLENGES[grado] || GRADO_CHALLENGES.grado1;
    const faseKey = `fase${faseActual}`;
    const faseData = gradoData.fases[faseKey];

    // Reinicia el estado al cambiar de grado
    useEffect(() => {
        setEstadoJuego('inicio');
        setFaseActual(1);
        setMensajeResultado('');
        setIntento(0);
    }, [grado]);

    // Clases de botón dinámicas
    const buttonClasses = `${gradoData.color} px-10 py-5 rounded-3xl hover:opacity-90 transition duration-300 m-4 font-extrabold text-3xl shadow-2xl border-4 border-${gradoData.color.replace('bg-', '').replace('600', '400')} transform hover:scale-105`;

    // Lógica para manejar la elección del usuario
    const handleGameChoice = useCallback((eleccion) => {
        const esCorrecto = eleccion === faseData.target;
        let resultadoIcono = esCorrecto ? '✅' : '❌';
        let resultadoTexto = esCorrecto ? "¡SÍ! " : "¡NO! ";

        setMensajeResultado(`${resultadoIcono} ${resultadoTexto} ${faseData.leccion}`);
        setEstadoJuego(esCorrecto ? 'ganado' : 'perdido');
    }, [faseData]);

    // Lógica para avanzar de fase o terminar el grado
    const handleNext = () => {
        if (faseActual < 4) {
            setFaseActual(faseActual + 1);
            setEstadoJuego('inicio');
            setMensajeResultado('');
        } else {
            // El usuario completó las 4 fases
            setFaseActual(5); // Indicador de Fin de Grado
        }
    };

    // Renderizado del Resultado
    const renderResultado = () => {
        const esGanado = estadoJuego === 'ganado';
        const resultadoClases = esGanado
            ? 'bg-green-200 text-green-900 border-green-600 shadow-lg animate-pulse-once'
            : 'bg-red-200 text-red-900 border-red-600 shadow-lg';

        return (
            <div className={`p-8 mt-5 rounded-xl border-4 ${resultadoClases} transition-all duration-500 transform scale-105`}>
                <p className="text-5xl font-black mb-6">{mensajeResultado}</p>
                
                {esGanado && faseActual < 4 && (
                    <button 
                        onClick={handleNext}
                        className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 mt-4"
                    >
                        Siguiente Fase ({faseActual + 1} de 4) ➡️
                    </button>
                )}

                {esGanado && faseActual === 4 && (
                    // Redirige a la página genérica de Cursos (asumiendo que es /ml/cursos)
                    <a 
                        href={grado === 'grado4' ? '/ml/cursos' : `/ml/grado${parseInt(grado.replace('grado', '')) + 1}`}
                        className="bg-purple-600  px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 mt-4 inline-block"
                    >
                        {grado === 'grado4' ? '¡GRADO 4 LOGRADO! Volver a Cursos 🏆' : `Ir al Grado ${parseInt(grado.replace('grado', '')) + 1}° 🎉`}
                    </a>
                )}
                
                {!esGanado && (
                    <button 
                        onClick={() => { setEstadoJuego('inicio'); setMensajeResultado(''); setIntento(i => i + 1); }}
                        className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 mt-4"
                    >
                        Reintentar Fase {faseActual} 🔄
                    </button>
                )}
            </div>
        );
    };

    // Renderizado de las Fases del Juego
    const renderFase = () => {
        if (estadoJuego !== 'inicio') {
            return renderResultado();
        }

        const promptClasses = "mb-8 text-3xl font-extrabold text-gray-800 p-2 border-b-2 border-gray-300";

        let contenidoVisual;
        let iconoPrincipal;

      switch (faseActual) {
        case 1: // INPUT
            iconoPrincipal = <span className={gradoData.claseVisual}>🧠</span>;
            contenidoVisual = (
                <div className="flex justify-center flex-wrap">
                    <button onClick={() => handleGameChoice(faseData.target)} className={buttonClasses}>
                        <span className="text-7xl block mb-2">{faseData.visuals.data || faseData.visuals.voz || faseData.visuals.codigo || faseData.visuals.numerico}</span>OPCIÓN A
                    </button>
                    <button onClick={() => handleGameChoice('basura')} className={buttonClasses}>
                        <span className="text-7xl block mb-2">{faseData.visuals.basura || faseData.visuals.silencio || faseData.visuals.error || faseData.visuals.letras}</span>OPCIÓN B
                    </button>
                </div>
            );
            break;
        case 2: // SUPERVISADO (Clasificación)
            iconoPrincipal = <span className={gradoData.claseVisual}>🧑‍🏫</span>;
            contenidoVisual = (
                <div className="flex flex-col items-center">
                    <div className={`bg-white border-4 border-gray-500 p-6 mb-8 rounded-xl shadow-inner text-5xl font-black text-${gradoData.color.replace('bg-', '').replace('600', '700')} w-full`}>
                        PROFESOR: {faseData.visuals.cuadrado || faseData.visuals.gato || faseData.visuals.triste || faseData.visuals.martillo}
                    </div>
                    <div className="flex justify-center flex-wrap">
                        <button onClick={() => handleGameChoice(faseData.target)} className={buttonClasses}>
                            <span className="text-7xl block mb-2">{faseData.visuals.cuadrado || faseData.visuals.gato || faseData.visuals.triste || faseData.visuals.martillo}</span>
                        </button>
                        <button onClick={() => handleGameChoice(Object.keys(faseData.visuals).find(key => key !== faseData.target && !key.includes('label')))} className={buttonClasses}>
                            <span className="text-7xl block mb-2">{Object.values(faseData.visuals).find(val => val !== faseData.visuals.cuadrado && val !== faseData.visuals.gato && val !== faseData.visuals.triste && val !== faseData.visuals.martillo && typeof val === 'string')}</span>
                        </button>
                    </div>
                </div>
            );
            break;
        case 3: // NO SUPERVISADO (Agrupación)
            iconoPrincipal = <span className={gradoData.claseVisual}>🧩</span>;
            contenidoVisual = (
                <div className="flex flex-col items-center">
                    <div className={`bg-white border-4 border-gray-500 p-6 mb-8 rounded-xl shadow-inner text-5xl font-black text-${gradoData.color.replace('bg-', '').replace('600', '700')} w-full`}>
                        AGRUPAR: {Object.values(faseData.visuals).filter(val => typeof val === 'string').slice(0,2).join(' ')}
                    </div>
                    <div className="flex justify-center flex-wrap">
                        <button onClick={() => handleGameChoice(faseData.target)} className={buttonClasses}>
                            <span className="text-7xl block mb-2">{faseData.visuals['triangulos'] || faseData.visuals['rapido'] || faseData.visuals['grande'] || faseData.visuals['vestir'] || ''}</span>A
                        </button>
                        <button onClick={() => handleGameChoice(Object.keys(faseData.visuals).find(key => key !== faseData.target && !key.includes('mezclado')))} className={buttonClasses}>
                            <span className="text-7xl block mb-2">{faseData.visuals['cuadrados'] || faseData.visuals['lento'] || faseData.visuals['pequeño'] || faseData.visuals['comer'] || ''}</span>B
                        </button>
                        <button onClick={() => handleGameChoice('mezclado')} className={buttonClasses}>
                            <span className="text-7xl block mb-2">{faseData.visuals['mezclado'] || ''}</span>C
                        </button>
                    </div>
                </div>
            );
            break;
        case 4: // PREDICCIÓN (Ciclo Completo y Patrones)
            iconoPrincipal = null;
            let predictionContent;
            const pattern = gradoData.fases.fase4.prompt.split('(')[1]?.split(')')[0];

            predictionContent = (
                <div className="bg-white border-4 border-gray-500 p-6 mb-8 rounded-xl shadow-inner text-5xl font-black">
                    PATRÓN VISTO: {pattern}
                </div>
            );

            if (grado === 'grado4') {
                predictionContent = (
                    <div className="flex items-center justify-center space-x-8 mb-10">
                        <div className="flex flex-col items-center"><span className="text-5xl font-bold text-gray-700 mb-2">INPUT</span><span className="text-7xl animate-pulse">{gradoData.fases.fase4.visuals.input_icon}</span></div>
                        <span className="text-8xl text-gray-400">➡️</span>
                        <div className="flex flex-col items-center"><span className="text-5xl font-bold text-gray-700 mb-2">PROCESO</span><span className="text-7xl animate-spin-slow">{gradoData.fases.fase4.visuals.proceso_icon}</span></div>
                        <span className="text-8xl text-gray-400">➡️</span>
                         <div className="flex flex-col items-center">
                            <span className="text-5xl font-bold text-gray-700 mb-2">PATRÓN</span>
                            <div className={`bg-white border-4 border-gray-500 p-3 rounded-xl shadow-inner text-4xl font-black`}>{gradoData.fases.fase4.visuals.historial}</div>
                        </div>
                    </div>
                );
            }

            contenidoVisual = (
                <div className="flex flex-col items-center p-4">
                    {predictionContent}
                    <p className={promptClasses}>{faseData.prompt}</p>
                    <div className="flex justify-center flex-wrap">
                        <button onClick={() => handleGameChoice(faseData.target)} className={buttonClasses}>
                            <span className="text-7xl block mb-2">{faseData.visuals.item1 || faseData.visuals.num1 || faseData.visuals.sol || gradoData.fases.fase4.visuals.pelota}</span>
                        </button>
                        <button onClick={() => handleGameChoice(Object.keys(faseData.visuals).find(key => key !== faseData.target && !key.includes('input') && !key.includes('proceso') && !key.includes('historial')))} className={buttonClasses}>
                            <span className="text-7xl block mb-2">{faseData.visuals.item2 || faseData.visuals.num2 || faseData.visuals.lluvia || gradoData.fases.fase4.visuals.basket}</span>
                        </button>
                    </div>
                </div>
            );
            break;
        default:
            return null;
    }

    return (
        <div className="flex flex-col items-center p-4">
            {iconoPrincipal && <div className="mb-8">{iconoPrincipal}</div>}
            <h3 className={`text-3xl font-extrabold mb-4 border-b-2 pb-2 text-${gradoData.color.replace('bg-', '').replace('600', '800')}`}>{faseData.titulo}</h3>
            <p className={promptClasses}>{faseData.prompt}</p>
            {contenidoVisual}
        </div>
    );
};
    // Renderizado del Contenedor Principal (Fin del Grado)
    const renderGradoCompleto = () => {
        if (faseActual === 5) {
            // Lógica de redirección basada en el Grado
            const isFinalGrado = grado === 'grado4';
            const nextLink = isFinalGrado ? '/ml/cursos' : `/ml/grado${parseInt(grado.replace('grado', '')) + 1}`;
            const buttonText = isFinalGrado ? 'Volver a Cursos 🏆' : `Ir al Grado ${parseInt(grado.replace('grado', '')) + 1}° 🎉`;

            return (
                <div className={`p-10 my-8 rounded-3xl shadow-2xl text-center border-4 border-purple-600 bg-purple-100`}>
                    <h2 className="text-5xl font-black text-purple-900 mb-6">¡GRADO {grado.replace('grado', '')}° MAESTRÍA LOGRADA!</h2>
                    <p className="text-2xl text-gray-700 mb-8">Has completado los 4 retos del ciclo de Machine Learning: **Input, Supervisado, No Supervisado y Predicción.**</p>
                    <a href={nextLink} 
                       className="bg-purple-600  px-8 py-4 rounded-full hover:bg-purple-700 transition duration-300 font-bold text-xl shadow-xl transform hover:scale-105 inline-block"
                    >
                        {buttonText}
                    </a>
                </div>
            );
        }
        
        const headerColorClass = `text-${gradoData.color.replace('bg-', '').replace('600', '900')} border-${gradoData.color.replace('bg-', '').replace('600', '500')}`;

        return (
            <div className={`ia-container p-8 my-8 rounded-3xl shadow-2xl ${gradoData.bg} text-center border-4 border-${gradoData.color.replace('bg-', '').replace('600', '400')}`} key={faseActual}>
                <h2 className={`text-4xl font-extrabold ${headerColorClass} border-b-4 pb-4 mb-6`}>
                    {gradoData.titulo}
                </h2>
                <p className="descripcion-juego text-2xl mb-8 text-gray-700 font-semibold p-2 bg-white rounded-lg shadow-inner">
                    {gradoData.descripcion}
                </p>
                
                {renderFase()}
            </div>
        );
    }
    
    return renderGradoCompleto();
}