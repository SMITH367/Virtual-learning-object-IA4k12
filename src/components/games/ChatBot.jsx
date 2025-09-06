import React, { useState, useEffect, useRef } from 'react';

// --- Diccionario de Respuestas Específicas (QA: Pregunta/Respuesta Fija) ---
const SPECIFIC_RESPONSES_QA = {
    'que es ia': {
        response: "La **Inteligencia Artificial (IA)** es el campo de la informática dedicado a la creación de sistemas que pueden realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, la percepción y la toma de decisiones. Es, en esencia, software que imita el razonamiento humano.",
        newTopic: 'aprende' // Sugiere un tema relacionado para el contexto
    },
    'que es inteligencia artificial': {
        response: "La **Inteligencia Artificial (IA)** es el campo de la informática dedicado a la creación de sistemas que pueden realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, la percepción y la toma de decisiones. Es, en esencia, software que imita el razonamiento humano.",
        newTopic: 'aprende'
    },
    'que son los datos': {
        response: "En el contexto de la IA, los **datos** son la materia prima fundamental. Son la colección de información digital que los algoritmos procesan para encontrar patrones, hacer predicciones y tomar decisiones. Sin datos, los modelos de IA no pueden aprender ni operar.",
        newTopic: 'datos'
    },
    'para que sirve la ia': {
        response: "La IA sirve principalmente para **automatizar, optimizar y predecir**. Automatiza tareas repetitivas (físico/datos), optimiza procesos complejos (logística, normas) y predice tendencias futuras (mercado, clima). Su objetivo es aumentar las capacidades humanas.",
        newTopic: 'aprende'
    },
    'como interactua la ia': {
        response: "La IA interactúa con el medio de diversas formas: procesando **datos** (sistemas de recomendación), realizando acciones **físicas** (robótica), a través de **sentidos** (visión/audio), comunicándose **socialmente** (este chat), y mediante el **aprendizaje** y la aplicación de **normas**.",
        newTopic: 'interaccion'
    },
    'que es percepcion': {
        response: "En la IA, la **percepción** se refiere a la capacidad de un sistema para interpretar y comprender información del mundo real (imágenes, sonidos, texto) a través de sensores y algoritmos, lo que es esencial para la interacción sensorial. Es el proceso de convertir la realidad en datos útiles.",
        newTopic: 'sentidos' 
    },
    'que es interaccion natural': {
        response: "La **Interacción Natural** (NUI) es la forma en que la IA y las personas se comunican utilizando métodos intuitivos como la voz, los gestos, la mirada o el lenguaje escrito, imitando la comunicación humana. Los asistentes de voz y los chatbots avanzados son ejemplos clave de NUI.",
        newTopic: 'social' 
    },
    'ia4k12': {
        response: "El término **IA para K-12 (IA4K12)** se refiere a la iniciativa global para integrar los conceptos fundamentales de la Inteligencia Artificial en los currículos de educación primaria y secundaria. Busca preparar a los estudiantes no solo como usuarios, sino como creadores y ciudadanos informados sobre el impacto de la IA.",
        newTopic: 'social' 
    },
    'que es ia4k12': {
        response: "El término **IA para K-12 (IA4K12)** se refiere a la iniciativa global para integrar los conceptos fundamentales de la Inteligencia Artificial en los currículos de educación primaria y secundaria. Busca preparar a los estudiantes no solo como usuarios, sino como creadores y ciudadanos informados sobre el impacto de la IA.",
        newTopic: 'social' 
    },
};

// --- Diccionario de Respuestas Temáticas Aumentado (Con enfoque en la respuesta a la pregunta) ---
const THEME_RESPONSES = {
  // 1. Interacción por DATOS y Predicción (ML)
  'datos': [
    "¿Preguntas cómo la IA interactúa digitalmente? ¡Muy simple! Lo hace al **analizar billones de datos** para predecir tendencias o comportamientos futuros. Es una interacción basada en el flujo de información.",
    "La IA interactúa con el medio digital **refinando modelos constantemente**. ¿Sabías que cada nueva pieza de datos que introduces mejora su capacidad de predicción?",
    "Si te refieres a la IA que toma decisiones, interactúa con el medio al **filtrar, clasificar y etiquetar la información**. Es como un guardián digital.",
    "Cuando la IA predice algo (ej. demanda de productos), su interacción con el medio se convierte en una **modificación de la logística y la economía**. ¿Quieres un ejemplo de cómo esto afecta tu vida diaria?",
    "La IA interactúa con el medio **creando bucles de retroalimentación**. Tus interacciones pasadas (datos) dan forma a tus interacciones futuras (servicios de recomendación).",
    "¿Cómo nos afecta? La interacción basada en datos **personaliza el medio digital** a tal punto que dos personas ven 'mundos' diferentes en línea.",
    "La interacción clave en este tema es la **anticipación**. La IA no solo reacciona, sino que **se adelanta a los eventos** al procesar datos en tiempo real.",
    "La interacción a nivel de datos permite a la IA **identificar anomalías** o fraudes, protegiendo el medio financiero sin intervención humana inmediata.",
  ],
  // 2. Interacción FÍSICA (Robótica, Actuadores, IOT)
  'fisico': [
    "¿Quieres saber sobre la IA que toca el mundo? Esto se logra a través de **actuadores y robots**. Es la forma más directa de **interacción física** con el medio.",
    "La IA interactúa con el medio físico en **cirugías robóticas** o **vehículos autónomos**, donde las decisiones digitales se traducen en movimientos precisos en el mundo real. ¿Qué tipo de robot te interesa más?",
    "La interacción física en el sector industrial se basa en la **transformación del medio**. La IA dirige máquinas que ensamblan, cortan o mueven materiales.",
    "En la robótica, la IA **percibe el entorno y lo cambia en respuesta**. Es una interacción de **causa y efecto** inmediato en el medio material.",
    "¿Cómo interactúa tu casa? El IoT es IA interactuando físicamente: **ajustando termostatos, cerrando puertas o encendiendo luces**.",
    "La interacción física requiere una **simulación constante del medio** para que la IA entienda el riesgo y el impacto de sus acciones.",
    "La forma más avanzada de interacción física es la **manipulación en tiempo real**, como un brazo robótico agarrando un objeto en movimiento.",
    "Esta IA afecta el medio al **automatizar tareas peligrosas** o repetitivas, cambiando las dinámicas laborales y de seguridad.",
  ],
  // 3. Interacción SENSORIAL y Percepción (Visión, Audio)
  'sentidos': [
    "¿Cómo la IA siente el medio? A través de la **percepción sensorial**. Por ejemplo, la Visión por Computadora le permite **'ver' e interpretar** imágenes y videos.",
    "La IA interactúa con nuestro entorno acústico al **procesar y responder al lenguaje hablado**. ¡Los asistentes de voz son el mejor ejemplo de esto!",
    "La interacción sensorial convierte la **realidad física en datos**. Esto permite a la IA reaccionar a un **peatón** o un **semáforo** en la carretera.",
    "Los sistemas de reconocimiento de imágenes demuestran cómo la IA **clasifica el medio percibido**. No solo ve, ¡sino que entiende lo que ve!",
    "La interacción sensorial es la base de la IA. Es el **puente** entre el mundo real y el procesamiento algorítmico. ¿Tienes dudas sobre el Procesamiento de Lenguaje Natural?",
    "¿Qué significa 'interacción de percepción'? Significa que la IA **filtra la realidad** y solo procesa lo relevante, una forma de interacción muy humana.",
    "El reconocimiento facial es una interacción sensorial que ha **modificado la seguridad** y la privacidad en el medio urbano. ¿Qué opinas de esto?",
    "Al monitorear la calidad del aire o el agua, la IA interactúa con el medio **detectando cambios** y alertando a los humanos sobre peligros ambientales.",
  ],
  // 4. Interacción SOCIAL y Comunicación (NLP, Ética)
  'social': [
    "Si te refieres a la interacción con humanos, la IA **modifica el medio social** al influir en cómo las personas se comunican y acceden a la información.",
    "Nuestra conversación es una **interacción comunicativa**. La IA afecta el medio social al **eliminar barreras de idioma** y al proporcionar acceso 24/7 a la información.",
    "La IA en redes sociales es una **interacción de influencia**. Los algoritmos deciden qué ves, **moldeando la opinión pública** y el discurso social.",
    "¿Cómo interactúa éticamente? La IA afecta el medio social al **automatizar decisiones críticas** (ej. decisiones de contratación o préstamos), lo que exige una regulación clara.",
    "La interacción social de la IA **genera debates sobre sesgo y equidad**. Esto es una forma de interacción normativa con el medio humano.",
    "La IA está **cambiando la naturaleza del trabajo** al automatizar tareas. Esta es una interacción social con el medio laboral que requiere adaptación.",
    "La interacción social más sutil es la **generación de contenido**. La IA está creando textos, música y arte que se integran en el medio cultural.",
    "Los asistentes virtuales no solo responden, sino que **establecen un tono de conversación**, creando una nueva forma de interacción interpersonal.",
  ],
  // 5. Interacción de APRENDIZAJE y Adaptación
  'aprende': [
    "La IA interactúa con el medio al **adaptarse a él dinámicamente**. No es estática; cada interacción la hace más inteligente.",
    "¿Qué es la interacción de aprendizaje? Es cuando la IA **usa el error como retroalimentación**. Cada falla es una interacción que refina su comportamiento futuro en el medio.",
    "En el aprendizaje por refuerzo, la IA **interactúa con un medio simulado** (como un juego) para optimizar sus reglas de decisión. Es una interacción de prueba y error.",
    "La interacción de aprendizaje asegura que la IA **mantenga su relevancia** en un medio en constante evolución. Si deja de aprender, deja de ser útil.",
    "La IA aprende al **identificar las regularidades** en las interacciones y aplicarlas a casos nuevos. Esto es una interacción de generalización.",
    "¿Cómo afecta el medio? La IA **interviene menos con el tiempo** en la toma de decisiones, ya que se vuelve más autónoma al aprender.",
    "Los sistemas de recomendación aprenden de tu **interacción pasada** (lo que viste, lo que compraste) para **modificar el medio futuro** que te presenta.",
    "La capacidad de aprender es la **interacción más poderosa** de la IA, ya que le permite mejorar exponencialmente sin intervención del programador.",
  ],
  // 6. Interacción NORMATIVA y de Control
  'normas': [
    "La IA interactúa con el medio al **aplicar y hacer cumplir reglas** automáticamente, como en sistemas de monitoreo de tráfico o control de calidad.",
    "La interacción de control se basa en la **regulación de sistemas complejos** (ej. redes de energía o suministro de agua) para mantener su estabilidad.",
    "¿Preguntas por la regulación? La IA está **forzando al medio legal** a crear nuevas normas, lo que es una interacción de alto nivel entre tecnología y sociedad.",
    "La IA puede interactuar con el medio **fiscalizando el cumplimiento** de contratos o regulaciones financieras sin la necesidad de supervisión humana constante.",
    "La interacción normativa también incluye la **auditoría y el rastreo de procesos** para asegurar la transparencia de las operaciones.",
    "La IA actúa como un **vigilante** al interactuar con el medio. Su objetivo es mantener los parámetros dentro de los límites establecidos.",
    "¿Cómo afecta esto al medio social? Crea una **interacción de confianza y verificación**, donde el algoritmo se convierte en el juez de la norma.",
    "El control de calidad en la manufactura es IA interactuando con el medio para **mantener estándares y reducir el desperdicio** de materiales.",
  ]
};

// Función para seleccionar una respuesta aleatoria de una categoría
const getRandomResponse = (category) => {
  const responses = THEME_RESPONSES[category];
  if (!responses || responses.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

// Mapeo de Palabras Clave a Categorías (más robusto para abarcar más preguntas)
const KEYWORD_MAP = {
  // Datos/ML
  'datos': 'datos', 'prediccion': 'datos', 'analisis': 'datos', 'algoritmo': 'datos', 'patron': 'datos', 'informacion': 'datos', 'big data': 'datos', 'modelo': 'datos',
  // Físico/Robótica
  'fisico': 'fisico', 'robot': 'fisico', 'actuar': 'fisico', 'vehiculo': 'fisico', 'movimiento': 'fisico', 'brazo': 'fisico', 'maquina': 'fisico', 'iot': 'fisico',
  // Sensorial/Percepción
  'sentido': 'sentidos', 'ver': 'sentidos', 'imagen': 'sentidos', 'oir': 'sentidos', 'camara': 'sentidos', 'vision': 'sentidos', 'audio': 'sentidos', 'percepcion': 'sentidos',
  // Social/Comunicación
  'social': 'social', 'conversar': 'social', 'chat': 'social', 'comunicacion': 'social', 'etica': 'social', 'sociedad': 'social', 'lenguaje': 'social', 'cultura': 'social',
  // Aprendizaje/Adaptación
  'aprende': 'aprende', 'adaptacion': 'aprende', 'mejora': 'aprende', 'error': 'aprende', 'refuerzo': 'aprende', 'cambio': 'aprende', 'evolucion': 'aprende', 'futuro': 'aprende',
  // Normativo/Control
  'norma': 'normas', 'control': 'normas', 'ley': 'normas', 'regla': 'normas', 'regulacion': 'normas', 'limite': 'normas', 'cumplimiento': 'normas', 'vigilancia': 'normas',
};

// Diccionario de transiciones para la conversación continua
const CONTEXT_TRANSITIONS = {
  'datos': {
    affirmative: "¡Genial! Hablemos de los **bucles de retroalimentación**. ¿Quieres saber cómo tus clics de hoy cambian tu experiencia digital de mañana?",
    next_topic: 'datos'
  },
  'fisico': {
    affirmative: "Perfecto. Profundicemos en la **robótica de precisión**. ¿Te gustaría ver cómo la IA en cirugías reduce el margen de error humano?",
    next_topic: 'fisico'
  },
  'sentidos': {
    affirmative: "Entendido. Concentrémonos en la **conversión sensorial**. ¿Qué proceso te parece más impresionante: visión o escucha automatizada?",
    next_topic: 'sentidos'
  },
  'social': {
    affirmative: "Claro. El tema de **sesgo algorítmico** es crucial. ¿Te interesa saber cómo los datos históricos afectan las decisiones actuales de la IA?",
    next_topic: 'social'
  },
  'aprende': {
    affirmative: "Me parece bien. La **adaptación dinámica** es la clave. ¿Cómo crees que el aprendizaje por refuerzo puede aplicarse en entornos reales?",
    next_topic: 'aprende'
  },
  'normas': {
    affirmative: "Excelente elección. La **fiscalización automática** es un tema candente. ¿Quieres ejemplos de cómo la IA hace cumplir las regulaciones sin intervención?",
    next_topic: 'normas'
  },
    'interaccion': { // Nueva transición para el contexto general de interacción
        affirmative: "¿Quieres que exploremos un tipo específico de interacción? Podemos hablar de la IA en **robótica**, el **análisis de datos** o la **comunicación social**.",
        next_topic: null
    }
};


// --- Función de Lógica de Respuesta de IA Simulada (Añadida la variable de Contexto) ---
const simulateAIResponse = (message, currentTopic) => {
  // Normalizar la entrada para ignorar mayúsculas y acentos
  const lowerCaseMsg = message.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
  const words = lowerCaseMsg.split(/\s+/);
  
  // ----------------------------------------------------
    // 1. LÓGICA DE RESPUESTAS QA ESPECÍFICAS (MÁXIMA Prioridad)
    // Busca coincidencias de frases completas (para "que es ia", "que son los datos")
    for (const [query, data] of Object.entries(SPECIFIC_RESPONSES_QA)) {
        if (lowerCaseMsg.includes(query)) {
            return data;
        }
    }
    
  // ----------------------------------------------------
  // 2. Lógicas Conversacionales y de Transición (Alta Prioridad)
  // ----------------------------------------------------

  // Saludos y Despedidas
  if (lowerCaseMsg.includes('hola') || lowerCaseMsg.includes('buenos dias') || lowerCaseMsg.includes('buenas tardes')) {
    return { response: "¡Hola! Soy tu asistente de IA. Estoy listo para mostrarte cómo la **Inteligencia Artificial interactúa con el medio** en sus diversas formas. ¿Qué tipo de interacción te interesa?", newTopic: null };
  }
  if (lowerCaseMsg.includes('adios') || lowerCaseMsg.includes('chao') || lowerCaseMsg.includes('hasta luego')) {
    return { response: "¡Hasta luego! Si bien el chat es una interacción directa, la IA interactúa en el medio de formas mucho más complejas (datos, física, etc.). ¡Espero haberte ayudado!", newTopic: null };
  }
  if (lowerCaseMsg.includes('como estas') || lowerCaseMsg.includes('quien eres')) {
    return { response: "Soy un modelo de lenguaje. Mi interacción contigo es puramente digital para fines educativos. ¿Quieres que hablemos sobre cómo la **IA interactúa con el medio físico**?", newTopic: null };
  }
  if (lowerCaseMsg.includes('gracias') || lowerCaseMsg.includes('buena respuesta')) {
    return { response: `De nada. ¿Quieres que profundicemos más en la interacción de **${currentTopic || 'IA y el Medio'}** o cambiamos de tema?`, newTopic: currentTopic };
  }

  // Manejo de la Interacción de CONTEXTO (Seguimiento de la conversación)
  if (currentTopic && (lowerCaseMsg.includes('si') || lowerCaseMsg.includes('claro') || lowerCaseMsg.includes('dime mas') || lowerCaseMsg.includes('profundiza') || lowerCaseMsg.includes('adelante'))) {
    const transition = CONTEXT_TRANSITIONS[currentTopic];
    if (transition) {
      return { response: transition.affirmative, newTopic: transition.next_topic };
    }
  }

  // ----------------------------------------------------
  // 3. Lógica Temática (Búsqueda de Palabras Clave y ESTABLECIMIENTO del Contexto)
  // Se usa tu lógica original robusta y variada.
  // ----------------------------------------------------

  let foundCategory = null;
  
  // Buscar palabra clave
  for (const word of words) {
    for (const [keyword, category] of Object.entries(KEYWORD_MAP)) {
      if (word.includes(keyword)) {
        foundCategory = category;
        break; 
      }
    }
    if (foundCategory) break;
  }

  // Si se encuentra una categoría, dar una respuesta temática aleatoria y ESTABLECER el contexto
  if (foundCategory) {
    const responseText = getRandomResponse(foundCategory);
    // Devolvemos la respuesta Y el nuevo tema de contexto
    return { response: responseText, newTopic: foundCategory }; 
  }


  // ----------------------------------------------------
  // 4. Respuesta Genérica/Fallback
  // ----------------------------------------------------
  return { response: "No pude entender tu pregunta en el contexto de la **Interacción de la IA con el Medio**. Intenta preguntar sobre: **datos**, **físico**, **sentidos**, **social**, **aprendizaje**, o **normas**.", newTopic: currentTopic };
};


// --- Componente React del ChatBot (Estructura con Estado de Contexto) ---
const ChatBot = () => {
  // AÑADIMOS EL ESTADO PARA EL TEMA ACTUAL (Contexto)
  const [currentTopic, setCurrentTopic] = useState(null); 
  
  const [messages, setMessages] = useState([
    { id: 1, text: `Bienvenido. Soy un ejemplo de cómo la IA interactúa contigo por chat. Pregúntame sobre la **Interacción de la IA con el Medio** (ej. '¿Cómo interactúa la IA con los datos?' o 'Háblame de los robots').`, sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { id: Date.now(), text: input.trim(), sender: 'user' };
    
    setMessages((prev) => [...prev, userMessage]);
    
    // 1. Llamar a la lógica de respuesta, pasándole el contexto actual
    const { response: aiResponseText, newTopic } = simulateAIResponse(input.trim(), currentTopic);
    
    // 2. ACTUALIZAR EL CONTEXTO
    setCurrentTopic(newTopic);

    setTimeout(() => {
      const aiMessage = { 
        id: Date.now() + 1, 
        text: aiResponseText, 
        sender: 'ai' 
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
    
    setInput('');
  };

  return (
   <div className="flex flex-col h-[90vh] border border-gray-300 rounded-xl shadow-2xl bg-gray-100 overflow-hidden">
    
    {/* Encabezado del Chat */}
    <div className="p-4 bg-indigo-600 text-white shadow-lg">
        <h1 className="text-xl font-bold text-center tracking-wide">CHATBOT INTELIGENTE</h1>
    </div>

    {/* Área de Mensajes */}
    <div className="flex-1 overflow-y-auto p-4 bg-white">
        {messages.map((msg) => (
            <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
                <div 
                    className={`max-w-xs p-3 rounded-2xl shadow-md transition-all duration-300 ease-in-out ${
                        msg.sender === 'user'
                            ? 'bg-indigo-500 text-white rounded-br-sm'
                            : 'bg-gray-200 text-gray-800 rounded-tl-sm border border-gray-200'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                />
            </div>
        ))}
        <div ref={messagesEndRef} />
    </div>

    {/* Formulario de Entrada */}
 <form onSubmit={handleSend} className="p-4 border-t w-full border-gray-300 bg-gray-50">
    <div className="flex space-x-3 items-center"> {/* Se añadió items-center aquí para centrado vertical */}
        <input

            type="text" class="w-full p-2 border"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pregunta algo..."
            // CLASES MODIFICADAS: Se cambió 'p-3' por 'py-4 px-5' para hacerlo más alto y centrarlo
            className="flex-1 py-4 px-5 border border-gray-300 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
        />
        <button
            type="submit"
            // Se ajustó 'py-3' por 'py-4' para que el botón coincida en altura
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-full transition duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={input.trim() === ''}
        >
            Enviar
        </button>
    </div>
</form>
</div>
);
};

export default ChatBot;