import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Datos y lógica del juego ---
const datosNivel1 = [
  { id: 1, tipo: 'estrella' }, { id: 2, tipo: 'circulo' },
  { id: 3, tipo: 'estrella' }, { id: 4, tipo: 'circulo' },
  { id: 5, tipo: 'estrella' },
];

const datosNivel2 = [
  { id: 6, tipo: 'triangulo' }, { id: 7, tipo: 'estrella' },
  { id: 8, tipo: 'triangulo' }, { id: 9, tipo: 'circulo' },
  { id: 10, tipo: 'circulo' }, { id: 11, tipo: 'estrella' },
  { id: 12, tipo: 'triangulo' }, { id: 13, tipo: 'circulo' },
  { id: 14, tipo: 'triangulo' }, { id: 15, tipo: 'estrella' },
];

// Nuevos datos para la simulación de clasificación final
const datosClasificacionFinal = [
  { id: 16, tipo: 'circulo' },
  { id: 17, tipo: 'estrella' },
  { id: 18, tipo: 'triangulo' },
  { id: 19, tipo: 'estrella' },
  { id: 20, tipo: 'circulo' },
  { id: 21, tipo: 'triangulo' },
];

const ObjetoVisual = ({ tipo, isLoading = false }) => {
  const emoji = {
    estrella: '⭐',
    circulo: '🔴',
    triangulo: '🔺',
  };
  return (
    <div className={`w-20 h-20 flex items-center justify-center text-4xl shadow-lg bg-green-600 rounded-lg ${isLoading ? 'animate-pulse' : ''}`}>
      {emoji[tipo]}
    </div>
  );
};

export const JuegoRobot = () => {
  const [fase, setFase] = useState('introduccion');
  const [datosEntrenamiento, setDatosEntrenamiento] = useState(datosNivel1);
  const [indiceActual, setIndiceActual] = useState(0);
  const [aciertosIA, setAciertosIA] = useState(0);
  // Nuevo estado para la habilidad de la IA, influenciada por el entrenamiento
  const [iaSkillLevel, setIaSkillLevel] = useState(0.2); // Empezamos con una habilidad baja (20% de acierto base)

  // Nuevos estados para la simulación final
  const [objetoFinalActual, setObjetoFinalActual] = useState(null);
  const [prediccionFinal, setPrediccionFinal] = useState(null);
  const [aciertosFinales, setAciertosFinales] = useState(0);
  const [indiceFinal, setIndiceFinal] = useState(0);
  const [esCorrecto, setEsCorrecto] = useState(null);

  const objetoActual = datosEntrenamiento[indiceActual];

  // Modificado: Ahora la clasificación del usuario simula un acierto o error de la IA
  // Dependiendo de si la IA "acertaría" el tipo de objeto.
  const handleClasificacion = (tipoClasificado) => {
    // Si la IA acierta, incrementa su habilidad percibida para el entrenamiento.
    // Esto es solo para la simulación, no es un modelo real.
    const esAciertoUsuario = objetoActual.tipo === tipoClasificado;
    if (esAciertoUsuario) {
      setAciertosIA(prev => prev + 1);
    }

    if (indiceActual < datosEntrenamiento.length - 1) {
      setIndiceActual(indiceActual + 1);
    } else {
      setFase('procesando');
    }
  };

  useEffect(() => {
    if (fase === 'procesando') {
      const timer = setTimeout(() => {
        if (datosEntrenamiento.length === 5) {
          simularPrueba(1);
        } else {
          simularPrueba(2);
        }
      }, 2000); // 2 segundos de animación de procesamiento
      return () => clearTimeout(timer);
    }
    
    if (fase === 'clasificacionFinal') {
      if (indiceFinal < datosClasificacionFinal.length) {
        const timer = setTimeout(() => {
          simularClasificacionFinal();
        }, 1500); // Retraso para cada clasificación
        return () => clearTimeout(timer);
      } else {
        // Al final de la simulación
        setFase('final');
      }
    }
  }, [fase, datosEntrenamiento, indiceFinal, iaSkillLevel]); // iaSkillLevel como dependencia

  const simularPrueba = (nivel) => {
    let aciertos;
    let totalEsperado;

    if (nivel === 1) {
      totalEsperado = datosNivel1.length;
      // La IA "muestra" la precisión basada en cómo de bien fue el entrenamiento del usuario
      aciertos = aciertosIA; // Usamos los aciertos del usuario como los aciertos de la IA en esta prueba
      // Ajustar iaSkillLevel basado en el primer nivel
      setIaSkillLevel(0.2 + (aciertos / totalEsperado) * 0.3); // Base 0.2 + hasta 0.3 más
    } else {
      totalEsperado = datosNivel2.length;
      aciertos = aciertosIA; // Usamos los aciertos del usuario como los aciertos de la IA en esta prueba
      // Ajustar iaSkillLevel basado en el segundo nivel
      setIaSkillLevel(prev => prev + (aciertos / totalEsperado) * 0.4); // Suma hasta 0.4 más al nivel anterior
    }

    setAciertosIA(aciertos); // Actualiza los aciertosIA para mostrar el resultado de la "prueba"
    setFase(nivel === 1 ? 'prueba1' : 'prueba2');
  };

  const simularClasificacionFinal = () => {
    const objeto = datosClasificacionFinal[indiceFinal];
    setObjetoFinalActual(objeto);
    setPrediccionFinal(null); // Limpiar predicción anterior para animar

    // La probabilidad de acierto ahora depende del iaSkillLevel
    const probabilidadAcierto = Math.min(Math.max(iaSkillLevel, 0.2), 0.95); // Asegura que esté entre 0.2 y 0.95
    
    // Simular la predicción de la IA
    const tipos = ['estrella', 'circulo', 'triangulo'];
    let prediccion;
    if (Math.random() < probabilidadAcierto) {
      prediccion = objeto.tipo; // Predicción correcta
    } else {
      const tiposIncorrectos = tipos.filter(t => t !== objeto.tipo);
      prediccion = tiposIncorrectos[Math.floor(Math.random() * tiposIncorrectos.length)]; // Predicción incorrecta
    }

    setPrediccionFinal(prediccion);
    const esCorrecta = prediccion === objeto.tipo;
    setEsCorrecto(esCorrecta);
    if (esCorrecta) {
      setAciertosFinales(prev => prev + 1);
    }

    // Pequeño retraso antes de pasar al siguiente objeto para ver la predicción
    setTimeout(() => {
        setIndiceFinal(prev => prev + 1);
    }, 1000); // Muestra la predicción por 1 segundo
  };

  const avanzarJuego = () => {
    if (fase === 'prueba1') {
      setFase('entrenamiento2');
      setDatosEntrenamiento(datosNivel2);
      setIndiceActual(0);
      setAciertosIA(0); // Reiniciar aciertos para el siguiente nivel de entrenamiento
    } else if (fase === 'prueba2') {
      setFase('clasificacionFinal');
      setIndiceFinal(0);
      setAciertosFinales(0);
      setEsCorrecto(null);
      setObjetoFinalActual(null); // Limpiar objeto para el inicio de la simulación
      setPrediccionFinal(null); // Limpiar predicción para el inicio de la simulación
    }
  };

  const getTextoGuia = () => {
    switch (fase) {
      case 'introduccion': return '¡Hola! Soy Robo-Bot. Ayúdame a aprender a reconocer objetos. Haz clic en "Comenzar" para iniciar.';
      case 'entrenamiento1': return `Entrenamiento Nivel 1. Ayúdame a clasificar el objeto correctamente. Mis aciertos: ${aciertosIA}/${datosEntrenamiento.length}`;
      case 'procesando': return 'Procesando los datos... ¡Estoy aprendiendo! 🤖';
      case 'prueba1': return `Mi precisión fue de ${aciertosIA} de ${datosNivel1.length}. No es perfecta, pero ya tengo una idea. ¡Necesito más datos!`;
      case 'entrenamiento2': return `Entrenamiento Nivel 2. ¡Más objetos! Y un nuevo tipo. Ayúdame a clasificarlos todos. Mis aciertos: ${aciertosIA}/${datosEntrenamiento.length}`;
      case 'prueba2': return `¡Mi precisión es ahora de ${aciertosIA} de ${datosNivel2.length}! Con más datos, mi aprendizaje mejoró. 🚀`;
      case 'clasificacionFinal': return '¡Ahora soy lo suficientemente inteligente para clasificar por mi cuenta! Mira cómo lo hago...';
      case 'final': return `¡Has completado el entrenamiento! Así es como la IA aprende a reconocer patrones y a ser más inteligente. ✨ Mi precisión final fue de ${aciertosFinales} de ${datosClasificacionFinal.length}.`;
      default: return '';
    }
  };

  const getEmojiPrediccion = (prediccion) => {
    const emoji = {
      estrella: '⭐',
      circulo: '🔴',
      triangulo: '🔺',
    };
    return emoji[prediccion] || '';
  };
  
  const getPrediccionTexto = (prediccion) => {
    if (!prediccion) return '';
    const texto = {
      estrella: 'Estrella',
      circulo: 'Círculo',
      triangulo: 'Triángulo',
    };
    return texto[prediccion] || '';
  };

  return (
    <div className="flex flex-col items-center justify-start bg-indigo-800 text-white p-4">
      <div className="bg-indigo-900 rounded-2xl shadow-2xl p-6 md:p-8 max-w-xl w-full border border-green-600/50 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          El Clasificador de la IA
        </h1>
        <p className="text-base sm:text-lg mb-4 leading-relaxed">{getTextoGuia()}</p>

        <AnimatePresence mode="wait">
          {(fase === 'entrenamiento1' || fase === 'entrenamiento2') && (
            <motion.div
              key={objetoActual.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="relative mx-auto my-4"
            >
              <ObjetoVisual tipo={objetoActual.tipo} />
            </motion.div>
          )}

          {fase === 'procesando' && (
            <motion.div
              key="procesando"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center my-4 h-20"
            >
              <div className="w-16 h-16 border-4 border-solid border-green-600/50 rounded-full animate-spin border-t-green-600"></div>
            </motion.div>
          )}

          {fase === 'clasificacionFinal' && (
            <motion.div
              key={`clasificacion-${indiceFinal}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center my-4 min-h-[120px]" // Ajustar altura para contenido dinámico
            >
              {objetoFinalActual ? (
                <>
                  <ObjetoVisual tipo={objetoFinalActual.tipo} isLoading={!prediccionFinal} />
                  {!prediccionFinal && (
                      <p className="text-xl mt-2 animate-pulse">Clasificando...</p>
                  )}
                  {prediccionFinal && (
                    <motion.p
                      key={`prediccion-texto-${indiceFinal}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`text-2xl mt-2 font-bold ${esCorrecto ? 'text-green-400' : 'text-red-400'}`}
                    >
                      Predicción: {getEmojiPrediccion(prediccionFinal)} Es un {getPrediccionTexto(prediccionFinal)}
                    </motion.p>
                  )}
                </>
              ) : (
                <div className="w-16 h-16 border-4 border-solid border-green-600/50 rounded-full animate-spin border-t-green-600"></div>
              )}
               {indiceFinal < datosClasificacionFinal.length && (
                    <p className="text-xl mt-4">
                        Objeto {indiceFinal} de {datosClasificacionFinal.length}
                    </p>
                )}
            </motion.div>
          )}

          {fase === 'final' && (
            <motion.div
              key="resultadoFinal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <p className="text-xl font-semibold text-green-400">
                ¡Clasificación final completada!
              </p>
              <p className="text-5xl font-extrabold text-green-600 my-4">
                {aciertosFinales} / {datosClasificacionFinal.length}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {fase === 'introduccion' && (
          <button
            onClick={() => setFase('entrenamiento1')}
            className="px-6 py-3 font-bold rounded-lg shadow-lg bg-green-600 hover:opacity-80 transition-opacity mt-4"
          >
            Comenzar
          </button>
        )}

        {(fase === 'entrenamiento1' || fase === 'entrenamiento2') && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <button
              onClick={() => handleClasificacion('estrella')}
              className="flex-1 min-w-0 px-4 py-2 font-bold rounded-lg shadow-lg bg-green-600 hover:opacity-80 transition-opacity"
            >
              ⭐ Es una Estrella
            </button>
            <button
              onClick={() => handleClasificacion('circulo')}
              className="flex-1 min-w-0 px-4 py-2 font-bold rounded-lg shadow-lg bg-green-600 hover:opacity-80 transition-opacity"
            >
              🔴 Es un Círculo
            </button>
            {fase === 'entrenamiento2' && (
              <button
                onClick={() => handleClasificacion('triangulo')}
                className="flex-1 min-w-0 px-4 py-2 font-bold rounded-lg shadow-lg bg-green-600 hover:opacity-80 transition-opacity"
              >
                🔺 Es un Triángulo
              </button>
            )}
          </div>
        )}

        {(fase === 'prueba1' || fase === 'prueba2') && (
          <div className="my-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-bold text-green-600 my-4"
            >
              {aciertosIA} / {fase === 'prueba1' ? datosNivel1.length : datosNivel2.length}
            </motion.div>
            <button
              onClick={avanzarJuego}
              className="px-6 py-3 font-bold rounded-lg shadow-lg bg-green-600 hover:opacity-80 transition-opacity mt-4"
            >
              Continuar
            </button>
          </div>
        )}

        {fase === 'final' && (
            <button
              onClick={() => {
                  setFase('introduccion');
                  setIaSkillLevel(0.2); // Reiniciar habilidad para volver a jugar
                  setAciertosIA(0); // Reiniciar aciertos de entrenamiento
                  setDatosEntrenamiento(datosNivel1); // Volver al nivel 1
                  setIndiceActual(0); // Reiniciar índice
              }}
              className="px-6 py-3 font-bold rounded-lg shadow-lg bg-green-600 hover:opacity-80 transition-opacity mt-4"
            >
              Jugar de nuevo
            </button>
        )}
      </div>
    </div>
  );
};