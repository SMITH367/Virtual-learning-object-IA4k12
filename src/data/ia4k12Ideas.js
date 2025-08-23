// src/data/ai4k12Ideas.js

export const ai4k12IdeasData = [
  // --- Contenido para PRIMER GRADO ---
  {
    course: "primero",
    ideas: [
      {
        id: "percepcion",
        title: "Idea 1: La IA Ve y Escucha",
        guidingText: "Imagina que una computadora puede usar sus 'ojos' y 'oídos' para entender el mundo. ¡Así es como la Inteligencia Artificial (IA) percibe! Aprenderemos cómo las máquinas usan cámaras y micrófonos para saber lo que está pasando, como cuando un robot evita chocar con un juguete o cuando un asistente de voz entiende lo que le pides.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/primero/percepcion_intro.png",
          alt: "Niños interactuando con robots que ven y escuchan",
        },
        sections: [
          {
            heading: "¿Qué significa 'percibir' para una IA?",
            content: "Para nosotros, percibir es ver, oír, tocar... Para una IA, es usar **sensores** para recolectar información. Piensa en tu teléfono: ¿puede reconocer tu cara para desbloquearse? ¡Eso es IA usando la vista! ¿O puede entender cuando le hablas? ¡Eso es IA usando el oído!\n\n**Actividad sugerida:** Juguemos a 'Soy un Robot'. Un niño es el 'robot' y tiene los ojos vendados. Otro niño le da instrucciones usando solo sonidos (aplauso para avanzar, silbido para girar). El 'robot' percibe con sus oídos.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/percepcion_quees.png",
              alt: "Imagen de un ojo y un oído grandes",
            },
          },
          {
            heading: "Ejemplos de Percepción en nuestra Vida",
            content: "La IA que percibe está por todos lados. ¿Has visto los coches que se aparcan solos? Usan sensores para 'ver' el espacio. Las cámaras de seguridad que detectan si alguien se cuela, están 'viendo'. Los juguetes que te responden cuando les hablas, están 'escuchando'.\n\n**Pregunta para pensar:** ¿Qué otras cosas usan 'ojos' o 'oídos' de IA en casa o en la calle?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/percepcion_ejemplos.png",
              alt: "Imágenes de un coche autónomo, cámara de seguridad, asistente de voz",
            },
          },
          {
            heading: "¡Las Máquinas Tienen Súper Sentidos!",
            content: "Las máquinas pueden ver cosas que nosotros no, como el calor (cámaras térmicas) o escuchar sonidos muy bajitos. Esto les ayuda a hacer trabajos importantes, como encontrar fugas de agua o cuidar la seguridad de un lugar. No tienen sentimientos como nosotros, pero son muy buenas detectando patrones.\n\n**Dato curioso:** ¡Una IA puede identificar a una persona entre miles de caras en una foto en segundos!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/A8M5B1R-0Lg",
              alt: "Video corto sobre cómo las máquinas usan sensores",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña tu Robot Perceptor",
          description: "Imagina que vas a construir un robot que necesita percibir el mundo. ¿Qué 'ojos' (cámaras) o 'oídos' (micrófonos) le pondrías? ¿Para qué los usaría? Dibuja tu robot y escribe qué cosas podría percibir.",
          example: "Un robot de jardín que 'vea' las malas hierbas y 'escuche' si el agua está goteando.",
        },
        relatedLinks: "/curso/primero/interaccion" 
      },
      {
        id: "representacion-y-razonamiento",
        title: "Idea 2: La IA Organiza y Piensa",
        guidingText: "La Inteligencia Artificial (IA) no solo ve y escucha, ¡también piensa! Pero para pensar, necesita que la información esté muy organizada. Aprenderemos cómo la IA guarda y usa 'reglas' o 'pasos' para tomar decisiones, como un robot que sabe dónde poner los bloques de colores.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/primero/representacion_intro.png",
          alt: "Niño organizando bloques de colores",
        },
        sections: [
          {
            heading: "¿Cómo guarda la IA la información?",
            content: "Imagina que quieres enseñarle a un robot cómo hacer una torre de bloques. Primero, necesita saber qué es un bloque (su forma, color). Luego, necesita saber el 'orden' para apilarlos. La IA guarda esta información como 'datos' y 'reglas'. Es como si cada bloque tuviera una etiqueta y el robot una lista de instrucciones claras.\n\n**Actividad sugerida:** Crea tu propia 'Base de Datos' de juguetes. Dibuja o describe 5 juguetes y al lado pon 3 cosas que los describan (color, tamaño, forma).",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/representacion_datos.png",
              alt: "Ilustración de datos organizados",
            },
          },
          {
            heading: "La IA 'sigue reglas' para pensar",
            content: "Una vez que la IA tiene la información organizada, usa 'reglas' para decidir qué hacer. Por ejemplo, si un robot tiene la regla 'si veo algo rojo y redondo, lo pongo en la cesta roja', entonces buscará solo cosas rojas y redondas. Es como un detective que sigue pistas y reglas para resolver un misterio.\n\n**Pregunta para pensar:** ¿Qué reglas sigues tú para organizar tus juguetes o tu ropa?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/razonamiento_reglas.png",
              alt: "Diagrama de flujo simple con reglas",
            },
          },
          {
            heading: "Ejemplos de IA que 'piensan con reglas'",
            content: "Los videojuegos a menudo usan IA que sigue reglas. Cuando un personaje enemigo te persigue en un juego, tiene reglas como 'si el jugador está cerca, ataca'. Otro ejemplo son los programas que te ayudan a clasificar correos electrónicos: tienen reglas para saber qué es 'importante' o 'spam'.\n\n**Dato curioso:** ¡Incluso algunos juguetes robot programables usan reglas simples para moverse y reaccionar!",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/primero/juego_reglas.gif",
              alt: "Animación de personaje de videojuego siguiendo reglas",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: El Juego de las Instrucciones Claras",
          description: "Piensa en cómo le darías instrucciones muy, muy claras a un robot para que haga tu sándwich favorito. Cada paso debe ser una regla simple. Recuerda que el robot no puede 'adivinar'.",
          example: "1. Tomar dos rebanadas de pan. 2. Poner mantequilla en una rebanada. 3. Poner jamón en la otra rebanada...",
        },
        relatedLinks: [
          { text: "Video: ¿Qué son los algoritmos para niños?", url: "https://www.youtube.com/watch?v=algoritmos_ninos" },
          { text: "Juego de lógica para niños", url: "https://code.org/learn" },
        ],
      },
      {
        id: "aprendizaje",
        title: "Idea 3: La IA Aprende Sola",
        guidingText: "Imagina que un robot puede volverse más inteligente cada vez que juega. ¡Así es el aprendizaje en la IA! Las máquinas pueden aprender de sus errores y de la experiencia, como un niño aprende a andar en bicicleta, y así mejoran con el tiempo sin que un humano les diga cada paso.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/primero/aprendizaje_intro.png",
          alt: "Niño aprendiendo a andar en bicicleta con un robot al lado",
        },
        sections: [
          {
            heading: "¿Cómo 'aprende' una máquina?",
            content: "Las máquinas aprenden cuando les damos muchos ejemplos de lo que queremos que hagan. Por ejemplo, si queremos que la IA reconozca perros, le mostramos miles de fotos de perros. Al ver tantas fotos, la IA empieza a encontrar patrones y 'aprende' qué hace que algo sea un perro. Es como si jugáramos a adivinar qué animal es en muchas fotos hasta que nos volvemos expertos.\n\n**Actividad sugerida:** Juguemos al 'Maestro y el Aprendiz'. Un niño es el 'maestro' y tiene una pila de tarjetas con dibujos de animales. El 'aprendiz' (otro niño o tú) tiene que adivinar el animal. Cada vez que el aprendiz adivina mal, el maestro corrige y el aprendiz 'aprende'.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/aprendizaje_ejemplos.png",
              alt: "Ilustración de la IA viendo muchos ejemplos de perros",
            },
          },
          {
            heading: "Aprender de los Errores",
            content: "Una forma muy importante en que la IA aprende es corrigiendo sus errores. Si una IA dice que una foto de un gato es un perro, le decimos '¡No, es un gato!'. La IA entonces ajusta sus 'conocimientos' para no cometer el mismo error la próxima vez. Es como cuando tú practicas un deporte y mejoras cada vez que aprendes de tus fallos.\n\n**Pregunta para pensar:** ¿Por qué es importante aprender de nuestros errores en la escuela o en casa?",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/primero/aprender_errores.gif",
              alt: "Animación de una IA corrigiendo un error",
            },
          },
          {
            heading: "La IA que te ayuda a aprender",
            content: "Las IAs que aprenden están en muchas aplicaciones que usamos. Cuando te sugieren un video nuevo que te gustará, es una IA que aprendió tus gustos. Cuando un juego adapta su dificultad a cómo juegas, es una IA que aprendió de tu forma de jugar.\n\n**Dato curioso:** ¡Una IA puede aprender a jugar un videojuego tan bien como un campeón humano, solo jugando miles de veces!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/j_n4M902_gM",
              alt: "Video sobre una IA aprendiendo a jugar",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Entrena a tu 'Robot' de Colores",
          description: "Imagina que tienes un 'robot' que solo sabe separar cosas por color. Dale una canasta de bloques de colores mezclados. Tu tarea es 'entrenarlo' mostrándole un bloque rojo y diciéndole 'Esto es rojo', luego un azul y 'Esto es azul'. ¿Cómo 'aprendería' a separarlos sin que le digas una regla explícita?",
          example: "Puedes poner un ojo vendado al 'robot' (otro niño) y darle ejemplos de objetos hasta que los clasifique correctamente solo por el tacto, 'aprendiendo' las texturas de cada tipo de objeto.",
        },
        relatedLinks: [
          { text: "Video: ¿Qué es el aprendizaje automático?", url: "https://www.youtube.com/watch?v=aprendizaje_niños" },
          { text: "Juego: Entrena a la IA para clasificar animales", url: "https://teachablemachine.withgoogle.com/" },
        ],
      },
      {
        id: "interaccion-natural",
        title: "Idea 4: Habla con la IA",
        guidingText: "Alguna vez has hablado con un asistente de voz como Alexa o un robot de juguete que te responde? ¡Eso es interacción natural con la Inteligencia Artificial (IA)! Aprenderemos cómo la IA puede entender lo que decimos y cómo nos responde, haciendo que parezca que estamos hablando con un amigo.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/primero/interaccion_intro.png",
          alt: "Niña hablando con un asistente de voz inteligente",
        },
        sections: [
          {
            heading: "¿Cómo nos entiende la IA?",
            content: "Cuando hablamos, la IA usa micrófonos para 'escuchar' nuestras palabras. Luego, usa programas especiales para convertir esas palabras en algo que la máquina pueda entender. Es como un traductor mágico que convierte tu voz en un lenguaje que la computadora puede usar para buscar información o hacer una acción.\n\n**Actividad sugerida:** Juguemos al 'Teléfono Roto de Robots'. Susurra una frase simple a un 'robot' (niño), que la 'procesa' y la pasa a otro. ¿Se entiende bien al final? ¿Qué hace que sea difícil para los robots entender bien?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/interaccion_escucha.png",
              alt: "Ilustración de un micrófono y ondas de voz",
            },
          },
          {
            heading: "La IA nos Responde",
            content: "Después de entender lo que dijimos, la IA piensa en la mejor respuesta. Puede ser una voz que nos contesta, o un robot que mueve sus brazos. La IA intenta responder de una manera que nos parezca normal, como cuando hablamos con otra persona. ¡Incluso puede decir chistes!\n\n**Pregunta para pensar:** ¿Qué te gustaría preguntarle a un asistente de voz si pudieras preguntarle cualquier cosa?",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/primero/interaccion_responde.gif",
              alt: "Animación de un chatbot respondiendo",
            },
          },
          {
            heading: "Amigos de la IA: Robots y Chatbots",
            content: "Los robots son máquinas que pueden moverse y hacer cosas. Algunos robots tienen IA para interactuar con nosotros, como los robots de juguete. Los chatbots son programas que hablan contigo escribiendo, como los que te ayudan en las páginas web. Ambos usan IA para entenderte y ayudarte.\n\n**Dato curioso:** ¡Algunos chatbots pueden hablar en muchos idiomas diferentes, para que la gente de todo el mundo pueda usarlos!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/robot_interaccion_ninos",
              alt: "Video corto sobre robots interactivos",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Crea tu 'Asistente de Voz' de Aula",
          description: "Imagina que tienes un asistente de voz en el aula. ¿Qué le dirías para que te ayude a encontrar un libro, o a saber la fecha del cumpleaños de un amigo? Escribe 3 preguntas que le harías y cómo crees que te respondería.",
          example: "Pregunta: 'Asistente, ¿cuál es mi libro favorito?' Respuesta del asistente: 'Tu libro favorito es el que está en la estantería azul, el del dinosaurio grande.'",
        },
        relatedLinks: [
          { text: "Video: ¿Cómo hablan las computadoras?", url: "https://www.youtube.com/watch?v=como_hablan_computadoras" },
          { text: "Juego: Habla con un personaje de IA", url: "https://www.character.ai/" },
        ],
      },
      {
        id: "impacto-social",
        title: "Idea 5: La IA Cambia el Mundo",
        guidingText: "La Inteligencia Artificial (IA) es una herramienta muy poderosa que está cambiando cómo vivimos, jugamos y aprendemos. Aprenderemos cómo la IA nos ayuda y también qué debemos pensar para usarla de forma inteligente y segura.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/primero/impacto_intro.png",
          alt: "Mundo con iconos de IA ayudando en varias tareas",
        },
        sections: [
          {
            heading: "¿Cómo nos ayuda la IA en el día a día?",
            content: "La IA nos ayuda de muchas maneras. En el coche, nos dice la mejor ruta para no perdernos. En casa, nos ayuda a elegir qué película ver. En el hospital, puede ayudar a los médicos a ver cosas importantes en las radiografías. La IA es como un ayudante gigante que hace la vida más fácil.\n\n**Actividad sugerida:** Nombra 3 cosas en casa o en la escuela que creas que usan IA para ayudarte.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/impacto_ayuda.png",
              alt: "Imágenes de GPS, asistente de streaming, IA médica",
            },
          },
          {
            heading: "Pensando en la IA: ¿Es buena o mala?",
            content: "La IA es una herramienta, como un martillo. Un martillo puede construir una casa (bueno) o romper algo (malo). La IA también puede ser usada para cosas buenas, como ayudar a encontrar medicinas o proteger el planeta. Pero también podría usarse para hacer cosas no tan buenas si no somos cuidadosos. Por eso es importante que pensemos cómo usarla.\n\n**Pregunta para pensar:** Si un robot limpiara tu habitación, ¿eso sería bueno o malo? ¿Por qué?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/primero/impacto_bien_mal.png",
              alt: "Ilustración de pros y contras de la IA",
            },
          },
          {
            heading: "Cuidando nuestra Privacidad con la IA",
            content: "Cuando usamos aparatos con IA, a veces guardan nuestra información (lo que decimos, lo que nos gusta). Es importante que seamos cuidadosos con quién compartimos nuestra información, como cuando no decimos nuestro nombre completo a desconocidos. La privacidad es guardar nuestra información segura.\n\n**Dato curioso:** ¡Algunos juegos tienen IA que sabe qué te gusta y te muestra anuncios de juguetes parecidos!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/privacidad_ninos",
              alt: "Video sobre privacidad de datos para niños",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: La IA del Futuro para Ayudar",
          description: "Dibuja un robot o un programa de IA que te gustaría que existiera para ayudar en tu escuela o en tu comunidad. ¿Qué problema resolvería? ¿Cómo crees que usaría la IA para hacerlo?",
          example: "Un robot que ayude a reciclar toda la basura de la escuela o una IA que ayude a los maestros a saber qué niños necesitan más ayuda en matemáticas.",
        },
        relatedLinks: [
          { text: "Artículo: La IA y el futuro para niños", url: "https://www.nationalgeographic.com/kids/article/robotics-artificial-intelligence" },
          { text: "Cuentos sobre robots amigables", url: "https://www.ejemplo.com/cuentos-robots" },
        ],
      },
    ],
  },

  // --- Contenido para SEGUNDO GRADO ---
  {
    course: "segundo",
    ideas: [
      {
        id: "percepcion",
        title: "Idea 1: La IA Detecta el Entorno",
        guidingText: "En segundo grado, veremos cómo la Inteligencia Artificial (IA) utiliza diferentes 'sentidos' o **sensores** para recopilar información del mundo real. Esto permite a los dispositivos inteligentes entender lo que sucede a su alrededor, desde un robot que se mueve sin chocar hasta un teléfono que reconoce tu voz para una búsqueda.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/segundo/percepcion_intro.png",
          alt: "Dibujo de un sensor y un robot explorando",
        },
        sections: [
          {
            heading: "¿Cómo 'sienten' las máquinas? Los Sensores",
            content: "Las máquinas no tienen ojos ni oídos como nosotros, pero tienen **sensores**. Un sensor es como un pequeño dispositivo que 'siente' algo: puede ser la luz, el sonido, el calor, la distancia o incluso el tacto. Los robots usan sensores para 'saber' dónde están los objetos o si hay algo cerca.\n\n**Actividad sugerida:** Busca objetos con sensores en casa (control remoto de TV, termómetro digital, teléfono inteligente). ¿Qué 'siente' cada sensor?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/sensores_basicos.png",
              alt: "Imágenes de diferentes tipos de sensores",
            },
          },
          {
            heading: "Visión Artificial: Los 'Ojos' de la IA",
            content: "Las cámaras son los 'ojos' de la IA. La **visión artificial** es cuando una computadora usa cámaras para ver e interpretar imágenes. Puede reconocer si una persona esríe, si hay un perro en la foto, o si un semáforo está en rojo. Esto ayuda a los coches autónomos a 'ver' la carretera y a las cámaras de seguridad a detectar movimientos.\n\n**Pregunta para pensar:** ¿Qué cosas podrías enseñarle a una cámara de IA a reconocer en tu patio de recreo?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/vision_ninos",
              alt: "Video corto sobre visión artificial",
            },
          },
          {
            heading: "Reconocimiento de Voz: Los 'Oídos' de la IA",
            content: "Los micrófonos son los 'oídos' de la IA. El **reconocimiento de voz** permite a las máquinas entender lo que decimos. Cuando le hablas a un asistente de voz en un teléfono o una tableta, la IA 'escucha' tus palabras y las convierte en comandos para hacer algo, como poner una canción o buscar información.\n\n**Dato curioso:** ¡Los traductores automáticos de voz usan IA para 'escuchar' en un idioma y 'hablar' en otro!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/reconocimiento_voz.png",
              alt: "Ilustración de una persona hablando a un dispositivo",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Dispositivo Inteligente",
          description: "Piensa en un problema simple en tu vida diaria (ej. olvidar la mochila, que se caigan las plantas). Diseña un dispositivo que use un sensor de IA para ayudarte con ese problema. Dibuja el dispositivo y explica qué sensor usaría y cómo funcionaría.",
          example: "Un 'recordatorio de mochila' que use un sensor de peso en la puerta para 'saber' si tu mochila está ahí antes de salir.",
        },
        relatedLinks: [
          { text: "Video: Sensores para niños", url: "https://www.youtube.com/watch?v=sensores_educativo" },
          { text: "Juego: ¿Qué es esto? (Adivinar objetos con la IA)", url: "https://guesstheanimal.withgoogle.com/" },
        ],
      },
      {
        id: "representacion-y-razonamiento",
        title: "Idea 2: La IA Sigue Instrucciones",
        guidingText: "Aquí el contenido general para la Idea 2: Representación y Razonamiento para Segundo Grado. Deberá centrarse en cómo la IA sigue secuencias simples de instrucciones para realizar tareas, como un robot que construye algo paso a paso. Se introduce la idea de que los datos pueden ser organizados de forma básica.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/segundo/representacion_intro.png",
          alt: "Niños siguiendo instrucciones de un robot",
        },
        sections: [
          {
            heading: "Cómo la IA 'Entiende' lo que le Pedimos",
            content: "La IA necesita instrucciones muy claras. Si le decimos 'Pon el vaso en la mesa', la IA descompone eso en pasos muy pequeños. Es como seguir una receta de cocina, ¡cada paso importa!\n\n**Actividad sugerida:** Juguemos a dar instrucciones para que un compañero dibuje algo sin verlo. ¿Fueron tus instrucciones lo suficientemente claras?",
            multimedia: { type: "image", src: "/assets/ai4k12/segundo/representacion_instrucciones.png", alt: "Diagrama de flujo simple" },
          },
          {
            heading: "Organizando Información para la IA",
            content: "La IA guarda la información de forma muy ordenada. Imagina un cajón de calcetines: si todos están mezclados, es difícil encontrar un par. Pero si están por colores, ¡es más fácil! La IA necesita sus 'datos' muy bien organizados para 'pensar' rápido.\n\n**Pregunta para pensar:** ¿Cómo organizas tus juguetes para encontrarlos fácilmente?",
            multimedia: { type: "image", src: "/assets/ai4k12/segundo/organizacion_datos.png", alt: "Ilustración de datos ordenados" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Crea un Algoritmo para un Juego",
          description: "Piensa en tu juego de mesa favorito. ¿Cuáles son las reglas principales? Escribe una secuencia de instrucciones muy claras para que un robot pueda jugar ese juego.",
          example: "Para el juego de las sillas: 'Si la música para, busca una silla. Si no hay silla, sal del juego.'",
        },
        relatedLinks: [
          { text: "Video: ¿Qué es un algoritmo? (para niños)", url: "https://www.youtube.com/embed/example_video_22" },
          { text: "Juego: Programa un robot para mover objetos", url: "https://scratch.mit.edu/projects/editor/" },
        ],
      },
      {
        id: "aprendizaje",
        title: "Idea 3: La IA Aprende a Repetir",
        guidingText: "En segundo grado, aprenderemos que la IA puede mejorar sus habilidades **repitiendo** tareas una y otra vez. Cuantas más veces practica algo, mejor lo hace, como tú cuando practicas la tabla de multiplicar o un deporte.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/segundo/aprendizaje_intro.png",
          alt: "Robot repitiendo una acción y mejorando",
        },
        sections: [
          {
            heading: "La Práctica Hace al Maestro (o al Robot)",
            content: "Si le pides a una IA que reconozca manzanas en muchas fotos, al principio puede confundirlas. Pero si le sigues mostrando más fotos y corrigiéndola, 'aprenderá' a distinguirlas cada vez mejor. Es como cuando aprendes a lanzar una pelota: al principio no eres muy bueno, pero con mucha práctica, ¡te vuelves un experto!",
            multimedia: { type: "image", src: "/assets/ai4k12/segundo/aprendizaje_practica.png", alt: "Niño lanzando una pelota y mejorando" },
          },
          {
            heading: "IA que Aprende en los Juegos",
            content: "Muchos videojuegos usan IA que aprende. Por ejemplo, algunos juegos pueden ajustar su dificultad. Si juegas muy bien, la IA se vuelve más difícil para que te diviertas más. Si te cuesta, la IA se hace un poco más fácil. ¡Esto es porque la IA está 'aprendiendo' cómo juegas!",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/example_video_23", alt: "Video de IA en videojuegos" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: El Juego del Patrón Secreto",
          description: "Crea un patrón de movimiento con tu cuerpo (ej. aplauso, salto, giro). Tu compañero debe intentar copiarlo. Cada vez que se equivoque, corrígele. ¿Cuántas veces tiene que repetir para 'aprender' tu patrón sin errores?",
          example: "Puedes usar tarjetas con dibujos de movimientos para que el 'robot' aprenda a seguir la secuencia.",
        },
        relatedLinks: [
          { text: "Video: Robots que aprenden a caminar", url: "https://www.youtube.com/embed/example_video_24" },
          { text: "Juego: Adivina el patrón", url: "https://www.ejemplo.com/juego-patron-segundo" },
        ],
      },
      {
        id: "interaccion-natural",
        title: "Idea 4: Hablando con Robots Sencillos",
        guidingText: "En segundo grado, nos enfocaremos en cómo podemos hablar y dar órdenes a la Inteligencia Artificial (IA) de forma sencilla. Veremos ejemplos de robots y aplicaciones que responden a nuestra voz o toques, haciendo que la tecnología sea más fácil de usar.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/segundo/interaccion_intro.png",
          alt: "Niño hablando a un juguete robot",
        },
        sections: [
          {
            heading: "Tu Voz, un Comando para la IA",
            content: "Muchos dispositivos con IA pueden entender lo que les decimos. Cuando hablas con un altavoz inteligente, la IA convierte tus palabras en algo que puede procesar y luego busca la respuesta o realiza la acción. Es como si el dispositivo 'escuchara' tus deseos.",
            multimedia: { type: "image", src: "/assets/ai4k12/segundo/voz_comando.png", alt: "Ilustración de voz a texto" },
          },
          {
            heading: "Robots que te Responden",
            content: "Algunos robots están diseñados para interactuar con nosotros. Pueden responder a preguntas, bailar o incluso jugar. Estos robots usan IA para procesar nuestras palabras y reaccionar de una manera que nos parezca natural y amigable.",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/example_video_25", alt: "Video de robot interactivo" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Comando de Voz",
          description: "Imagina que tienes un robot de cocina. Dibuja y escribe 3 comandos de voz que le darías para que te ayude a preparar tu postre favorito.",
          example: "Comando 1: 'Robot, mezcla los ingredientes'. Comando 2: 'Robot, pon en el horno'.",
        },
        relatedLinks: [
          { text: "Video: Juguetes robot que hablan", url: "https://www.youtube.com/embed/example_video_26" },
          { text: "Juego: Controla un robot con palabras", url: "https://www.ejemplo.com/juego-robot-palabras" },
        ],
      },
      {
        id: "impacto-social",
        title: "Idea 5: La IA nos Ayuda en Casa y en la Escuela",
        guidingText: "En segundo grado, aprenderemos cómo la Inteligencia Artificial (IA) ya está presente en nuestra vida diaria, haciéndola más fácil y divertida tanto en casa como en la escuela. Exploraremos algunos ejemplos de cómo la IA nos asiste y qué significa eso para nosotros.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/segundo/impacto_intro.png",
          alt: "Niños en casa y en la escuela con iconos de IA",
        },
        sections: [
          {
            heading: "IA en tu Hogar",
            content: "En casa, la IA puede estar en tu televisor, sugiriendo programas que te gusten. Los aspiradores robot usan IA para limpiar solos. Los videojuegos tienen IA que hace que los personajes sean más listos. Todo esto hace que nuestras tareas sean más sencillas y nuestro entretenimiento más divertido.",
            multimedia: { type: "image", src: "/assets/ai4k12/segundo/ia_en_casa.png", alt: "Imágenes de Smart TV, robot aspirador" },
          },
          {
            heading: "IA en la Escuela",
            content: "En la escuela, la IA puede ayudar a los maestros a organizar información. Algunos programas de aprendizaje pueden adaptar los ejercicios a tu nivel, haciéndolos más fáciles o más difíciles según cómo aprendas. ¡La IA puede ser una gran ayuda para aprender!",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/example_video_27", alt: "Video de IA en herramientas educativas" },
          },
          {
            heading: "Cosas a Recordar con la IA",
            content: "Es importante saber que la IA es una herramienta, y siempre hay humanos detrás de ella. Debemos usar la IA de forma responsable y entender que, aunque sea muy útil, no siempre tiene todas las respuestas y siempre debemos pensar por nosotros mismos.\n\n**Pregunta para pensar:** Si un robot hiciera toda tu tarea, ¿aprenderías lo mismo?",
            multimedia: { type: "image", src: "/assets/ai4k12/segundo/ia_responsable.png", alt: "Niños pensando sobre el uso de la IA" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Un Día con IA",
          description: "Describe un día típico en tu vida e identifica al menos 3 momentos en los que la IA podría estar ayudándote (ej. tu tablet, el tráfico, la música). Dibuja una de esas situaciones.",
          example: "Cuando pido a mi altavoz inteligente que ponga mi canción favorita por la mañana.",
        },
        relatedLinks: [
          { text: "Video: Cosas con IA que usamos", url: "https://www.youtube.com/embed/example_video_28" },
          { text: "Artículo: La IA en los juegos para niños", url: "https://www.ejemplo.com/ia-juegos-ninos" },
        ],
      },
    ],
  },

  // --- Contenido para TERCER GRADO ---
  {
    course: "tercero",
    ideas: [
      {
        id: "percepcion",
        title: "Idea 1: Datos y Patrones para la Percepción",
        guidingText: "En tercer grado, exploraremos cómo la Inteligencia Artificial (IA) no solo recopila información con sensores, sino que también la organiza en **datos** y busca **patrones** en esos datos para poder 'entender' lo que percibe. Es como si la IA fuera una detective que junta pistas y las conecta para resolver un misterio.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/tercero/percepcion_intro.png",
          alt: "Ilustración de la IA analizando datos visuales y auditivos",
        },
        sections: [
          {
            heading: "De Sensorial a Digital: Los Datos de la Percepción",
            content: "Cuando un sensor (una cámara, un micrófono) 'percibe' algo, lo convierte en **datos digitales**. Una foto es un montón de números que representan colores y formas. Una voz es una secuencia de números que representan sonidos. La IA trabaja con estos números. Para la IA, percibir es recibir y procesar muchos, muchos datos.\n\n**Actividad sugerida:** Dibuja un objeto y luego 'digitalízalo' describiendo sus colores, formas y texturas como si fueran 'datos' para una IA. ¿Cuántos detalles puedes capturar?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/tercero/datos_percepcion.png",
              alt: "Diagrama de un sensor convirtiendo algo físico a datos digitales",
            },
          },
          {
            heading: "Buscando Patrones: ¿Cómo 'reconoce' la IA?",
            content: "Para que una IA reconozca a un gato en una foto, no solo ve la foto, sino que busca **patrones** específicos en los datos de esa foto: ¿tiene orejas puntiagudas? ¿bigotes? ¿ojos redondos? Si muchos de esos patrones coinciden con lo que ha 'aprendido' sobre gatos, entonces 'reconoce' un gato. Es como encontrar la pieza correcta en un rompecabezas.\n\n**Pregunta para pensar:** ¿Qué patrones buscas tú para reconocer a tus amigos en una foto de grupo?",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/tercero/patrones_reconocimiento.gif",
              alt: "Animación de la IA detectando patrones en una imagen",
            },
          },
          {
            heading: "Percepción Multifacética: Combinando Sentidos",
            content: "Las IAs más avanzadas pueden combinar información de diferentes sensores, como nosotros usamos la vista y el oído al mismo tiempo. Un coche autónomo no solo 've' la carretera con cámaras, sino que también usa radares para 'sentir' la distancia a otros coches y GPS para 'saber' dónde está. Combinar estos 'sentidos' hace que la IA sea más inteligente y segura.\n\n**Dato curioso:** ¡Los robots que juegan al fútbol pueden usar cámaras para ver el balón y el campo, y sensores de tacto para saber si han golpeado el balón!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/percepcion_multisensorial_ninos",
              alt: "Video corto sobre percepción multisensorial en IA",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: El Juego de los Patrones Escondidos",
          description: "Crea una serie de 5 dibujos simples donde 3 de ellos contengan un patrón 'secreto' (ej. 3 puntos, una línea curva) y 2 no lo tengan. Tu compañero (o un adulto) será la 'IA' y deberá 'percibir' y separar los dibujos que tienen el patrón de los que no, explicando qué patrón encontró.",
          example: "Dibujo 1: Un círculo con 3 estrellas. Dibujo 2: Un cuadrado con 3 estrellas. Dibujo 3: Un triángulo con 3 estrellas. (El patrón es '3 estrellas').",
        },
        relatedLinks: [
          { text: "Artículo: ¿Qué son los datos para niños?", url: "https://www.ejemplo.com/datos-para-ninos" },
          { text: "Juego de patrones visuales para niños", url: "https://www.ejemplo.com/juego-patrones" },
        ],
      },
      {
        id: "representacion-y-razonamiento",
        title: "Idea 2: La IA Sigue Lógica y Reglas Complejas",
        guidingText: "En tercer grado, exploraremos cómo la Inteligencia Artificial (IA) utiliza la **lógica** y **reglas más complejas** para tomar decisiones y resolver problemas. La IA no solo sigue instrucciones, sino que puede combinar información para 'razonar' y encontrar la mejor solución, como un sistema que elige la ruta más rápida para un paquete.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/tercero/razonamiento_intro.png",
          alt: "Niños resolviendo un laberinto con un robot",
        },
        sections: [
          {
            heading: "Reglas y Decisiones: La Lógica de la IA",
            content: "La IA usa 'si esto, entonces aquello' para tomar decisiones. Por ejemplo, 'SI el semáforo está en rojo Y hay peatones cruzando, ENTONCES el coche debe parar'. Estas reglas pueden ser muy numerosas y estar conectadas, creando un 'árbol de decisiones' que la IA sigue para elegir el mejor camino.\n\n**Actividad sugerida:** Crea un mapa mental o un diagrama de flujo simple para una tarea diaria (ej. prepararse para la escuela). Cada paso es una 'regla' que la IA seguiría.",
            multimedia: { type: "image", src: "/assets/ai4k12/tercero/arbol_decisiones.png", alt: "Diagrama de árbol de decisiones" },
          },
          {
            heading: "Representación del Conocimiento",
            content: "Para aplicar la lógica, la IA necesita que el conocimiento esté 'representado' de forma que lo entienda. Esto puede ser en forma de mapas, listas, o redes. Cuando le das a la IA un mapa de un tesoro, ella usa la representación de ese mapa y las reglas para 'razonar' dónde está el tesoro.\n\n**Pregunta para pensar:** ¿Cómo representamos la información cuando hacemos una lista de compras o un horario?",
            multimedia: { type: "animation", src: "/assets/ai4k12/tercero/mapa_conocimiento.gif", alt: "Animación de representación de conocimiento" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Sistema Lógico para un Juego",
          description: "Piensa en un juego sencillo (ej. tres en raya, un juego de cartas simple). Diseña un conjunto de reglas lógicas para que una IA pudiera jugar y tomar decisiones en ese juego.",
          example: "Para tres en raya: 'SI tengo dos X seguidas, PON X en el espacio vacío para ganar.'",
        },
        relatedLinks: [
          { text: "Video: Lógica para niños", url: "https://www.youtube.com/embed/example_video_29" },
          { text: "Juego de programación visual de lógica", url: "https://blockly.games/maze" },
        ],
      },
      {
        id: "aprendizaje",
        title: "Idea 3: Cómo la IA Mejora su Aprendizaje",
        guidingText: "En tercer grado, profundizaremos en cómo la Inteligencia Artificial (IA) no solo repite, sino que realmente **mejora** su rendimiento con la experiencia. Aprenderemos sobre el entrenamiento con **datos** y la importancia de la **retroalimentación** para que la IA se vuelva más inteligente y precisa con el tiempo.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/tercero/aprendizaje_intro.png",
          alt: "Gráfico de mejora de rendimiento de IA",
        },
        sections: [
          {
            heading: "Entrenamiento con Datos: El 'Alimento' de la IA",
            content: "Para que una IA aprenda a hacer algo (como reconocer una fruta), necesita 'comer' muchos **datos**. Le damos miles de fotos de diferentes frutas, y también le decimos qué fruta es cada una. Cuantos más datos 'come', mejor aprende a distinguirlas. Es como estudiar para un examen: cuanta más información lees y practicas, más aprendes.\n\n**Actividad sugerida:** Clasifica 20 imágenes de animales en dos grupos (ej. mascotas y animales salvajes). ¿Cómo podrías explicar a una IA las características de cada grupo?",
            multimedia: { type: "image", src: "/assets/ai4k12/tercero/datos_entrenamiento.png", alt: "Ilustración de la IA procesando un gran volumen de datos" },
          },
          {
            heading: "Retroalimentación: Aprendiendo de los Errores",
            content: "Cuando la IA comete un error (ej. confunde una manzana con un tomate), le damos **retroalimentación** ('¡Incorrecto, es una manzana!'). Con esta corrección, la IA ajusta sus 'conocimientos' internos para no volver a cometer el mismo error. Así, la IA aprende continuamente y se vuelve más precisa. Es como un entrenador que corrige a un atleta para que mejore su técnica.\n\n**Pregunta para pensar:** ¿Por qué es importante recibir retroalimentación cuando aprendemos algo nuevo?",
            multimedia: { type: "animation", src: "/assets/ai4k12/tercero/retroalimentacion_ia.gif", alt: "Animación de IA recibiendo feedback y ajustando" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: El Robot Clasificador de Objetos",
          description: "Imagina que tienes un robot que debe clasificar objetos pequeños (botones, clips, monedas) en diferentes cajas. Primero, 'entrena' al robot mostrándole ejemplos de cada objeto y diciendo en qué caja va. Luego, prueba si el robot puede clasificarlos correctamente. ¿Cómo le darías retroalimentación si se equivoca?",
          example: "Puedes usar diferentes formas o colores para simplificar los objetos y las cajas.",
        },
        relatedLinks: [
          { text: "Video: Aprendizaje supervisado para niños", url: "https://www.youtube.com/embed/video_ejemplo_razonamiento0" },
          { text: "Juego de clasificación de imágenes", url: "https://www.ejemplo.com/clasificacion-ia" },
        ],
      },
      {
        id: "interaccion-natural",
        title: "Idea 4: Entendiendo el Lenguaje Natural de la IA",
        guidingText: "En tercer grado, exploraremos cómo la Inteligencia Artificial (IA) no solo entiende palabras sueltas, sino frases completas y el significado detrás de ellas, haciendo que la comunicación con las máquinas sea mucho más **natural**. Esto se logra a través del **Procesamiento del Lenguaje Natural (PLN)**.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/tercero/lenguaje_natural_intro.png",
          alt: "Niños usando asistentes de voz y chatbots",
        },
        sections: [
          {
            heading: "Del Habla al Texto, del Texto al Significado",
            content: "Cuando hablamos con una IA, primero convierte nuestra voz en texto. Luego, el **PLN** entra en acción. El PLN ayuda a la IA a entender no solo las palabras, sino cómo se relacionan entre sí. Por ejemplo, sabe que 'quiero una manzana' y 'una manzana, por favor' significan lo mismo, aunque las palabras estén en diferente orden. La IA busca el significado, no solo las palabras.\n\n**Actividad sugerida:** Escribe una misma petición de dos formas diferentes (ej. 'Prende la luz', 'Quiero que la luz se encienda'). ¿Cómo las entendería una IA?",
            multimedia: { type: "image", src: "/assets/ai4k12/tercero/voz_significado.png", alt: "Diagrama de voz a texto a significado" },
          },
          {
            heading: "Chatbots y Asistentes Virtuales",
            content: "Los **chatbots** (programas que hablan por texto) y los **asistentes virtuales** (como Siri o Google Assistant) son los ejemplos más claros de IA que usa PLN. Pueden responder preguntas, contar chistes, poner música o darte información, todo conversando contigo. Son como tener un amigo muy inteligente que sabe muchas cosas y te ayuda.\n\n**Pregunta para pensar:** ¿Qué cosas te gustaría que tu asistente virtual pudiera hacer por ti?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/video_ejemplo_razonamiento1", alt: "Video de chatbot conversando" },
          },
          {
            heading: "El Reto del Lenguaje Humano",
            content: "El lenguaje humano es complicado. Una palabra puede tener varios significados ('banco' de sentarse o de dinero). El sarcasmo o los chistes también son difíciles para la IA. Los creadores de IA trabajan mucho para que las máquinas puedan entender estas complejidades y no se confundan.\n\n**Dato curioso:** ¡Una IA que traduce idiomas tiene que entender el significado completo de una frase para traducirla bien, no solo palabra por palabra!",
            multimedia: { type: "image", src: "/assets/ai4k12/tercero/lenguaje_reto.png", alt: "Ilustración de la complejidad del lenguaje" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Diálogo para un Robot de Servicio",
          description: "Imagina un robot que te ayuda en la biblioteca. Diseña un diálogo (preguntas y respuestas) entre un niño y el robot para que el niño pueda pedir un libro, preguntar por el horario o devolver un libro. Piensa en cómo el robot entendería diferentes formas de pedir lo mismo.",
          example: "Niño: 'Busco un libro de dinosaurios.' Robot: 'Claro, ¿qué dinosaurio te interesa?'",
        },
        relatedLinks: [
          { text: "Video: ¿Cómo hablan los robots?", url: "https://www.youtube.com/embed/video_ejemplo_razonamiento2" },
          { text: "Juego: Crea tu propio chatbot simple", url: "https://www.ejemplo.com/crea-chatbot" },
        ],
      },
      {
        id: "impacto-social",
        title: "Idea 5: IA en la Comunidad y la Sostenibilidad",
        guidingText: "En tercer grado, veremos cómo la Inteligencia Artificial (IA) no solo nos ayuda individualmente, sino que también puede ser una herramienta poderosa para mejorar nuestra **comunidad** y ayudar a cuidar el **planeta**. Exploraremos ejemplos de cómo la IA contribuye al bienestar social y la sostenibilidad.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/tercero/impacto_social_intro.png",
          alt: "Ilustración de IA ayudando en una comunidad",
        },
        sections: [
          {
            heading: "IA para una Ciudad Mejor",
            content: "La IA puede hacer nuestras ciudades más inteligentes. Por ejemplo, puede ayudar a controlar el tráfico para evitar atascos, o a gestionar la energía para ahorrar electricidad en los edificios. También puede ayudar a los servicios de emergencia a llegar más rápido. Es como tener un 'cerebro' digital que ayuda a la ciudad a funcionar mejor.\n\n**Actividad sugerida:** Piensa en un problema en tu comunidad (ej. mucha basura, tráfico). ¿Cómo crees que la IA podría ayudar a resolverlo?",
            multimedia: { type: "image", src: "/assets/ai4k12/tercero/ia_ciudad_inteligente.png", alt: "Mapa de ciudad con IA gestionando tráfico y energía" },
          },
          {
            heading: "IA para Cuidar Nuestro Planeta",
            content: "La IA también es una aliada en la **sostenibilidad**. Puede ayudar a monitorear la calidad del aire y del agua, a optimizar el riego en la agricultura para ahorrar agua, o a identificar especies en peligro de extinción. La IA nos da herramientas para entender mejor nuestro medio ambiente y protegerlo.\n\n**Pregunta para pensar:** ¿Cómo podría una IA ayudarte a reciclar mejor en casa?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/video_ejemplo_razonamiento3", alt: "Video de IA en sostenibilidad" },
          },
          {
            heading: "IA Justa y Responsable",
            content: "Aunque la IA es poderosa, es crucial que se use de forma **justa y responsable**. Esto significa que las decisiones de la IA no deben dañar a nadie o ser discriminatorias. Por ejemplo, los sistemas de IA para reconocer caras deben funcionar bien para todas las personas, sin importar su color de piel. Es nuestra responsabilidad asegurarnos de que la IA sea una fuerza para el bien.\n\n**Dato curioso:** ¡Hay IAs que ayudan a los científicos a encontrar nuevas formas de energía limpia!",
            multimedia: { type: "image", src: "/assets/ai4k12/tercero/ia_justa.png", alt: "Ilustración de ética y justicia en IA" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña una App de IA para tu Comunidad",
          description: "Imagina que eres un desarrollador de apps. Diseña una aplicación móvil que use IA para resolver un problema en tu comunidad (ej. ayudar a encontrar mascotas perdidas, alertar sobre basura en las calles, optimizar el uso de energía). Dibuja la interfaz de la app y explica cómo usaría la IA.",
          example: "Una app con IA que usa cámaras para identificar mascotas perdidas y notifica a sus dueños.",
        },
        relatedLinks: [
          { text: "Artículo: La IA en la agricultura", url: "https://www.ejemplo.com/ia-agricultura" },
          { text: "Video: IA para el medio ambiente", url: "https://www.youtube.com/embed/video_ejemplo_razonamiento4" },
        ],
      },
    ],
  },

  // --- Contenido para CUARTO GRADO ---
  {
    course: "cuarto",
    ideas: [
      {
        id: "percepcion",
        title: "Idea 1: Cómo la IA 'Aprende' a Percibir",
        guidingText: "En cuarto grado, exploraremos cómo la Inteligencia Artificial (IA) no solo detecta información, sino que **aprende** a reconocer y comprender el mundo que percibe. Veremos cómo la IA se 'entrena' con grandes cantidades de datos para mejorar su capacidad de ver, oír y hasta 'sentir'.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/cuarto/percepcion_intro.png",
          alt: "Ilustración de una red neuronal simple aprendiendo a reconocer formas",
        },
        sections: [
          {
            heading: "El 'Entrenamiento' de la Percepción de la IA",
            content: "Para que una IA 'aprenda' a percibir, necesita ser **entrenada** con muchísimos ejemplos. Le damos miles de fotos de perros y miles de fotos de cosas que no son perros (gatos, coches, árboles). Cada vez que la IA adivina correctamente, sus 'conocimientos' se refuerzan. Cuando se equivoca, ajusta lo que 'sabe' para no fallar de nuevo. Es como aprender a reconocer caras: vemos muchas caras hasta que sabemos quién es quién.\n\n**Concepto clave:** Los **datasets** son grandes colecciones de datos (imágenes, audios) que se usan para entrenar a la IA. La **retroalimentación** (decirle si acertó o no) es crucial para su aprendizaje.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/cuarto/entrenamiento_percepcion.png",
              alt: "Diagrama de flujo de entrenamiento de IA con ejemplos",
            },
          },
          {
            heading: "Aplicaciones Avanzadas de la Visión y Audio en IA",
            content: "Las IAs que perciben han avanzado mucho. No solo reconocen objetos, sino que pueden entender el **contexto**. Por ejemplo, una IA en un hospital puede analizar imágenes de rayos X para buscar patrones de enfermedades. En los supermercados, cámaras con IA pueden detectar si un producto se está acabando. Los asistentes de voz pueden diferenciar la voz de distintas personas de una familia.\n\n**Pregunta para pensar:** ¿Qué tan útil sería una IA que pudiera 'ver' cómo te sientes por tu expresión facial?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/vision_avanzada_niños",
              alt: "Video corto sobre visión por computadora en medicina o tiendas",
            },
          },
          {
            heading: "Los 'Sesgos' en la Percepción de la IA",
            content: "Un punto importante es que la IA es tan buena como los datos con los que se entrena. Si a una IA solo le enseñamos fotos de perros de una raza, podría tener dificultades para reconocer otras razas. Esto se llama **sesgo**. Es crucial que los datos de entrenamiento sean muy variados para que la IA sea justa y funcione bien para todos.\n\n**Dato curioso:** ¡Los investigadores están trabajando en IAs que puedan 'ver' el mundo de la misma manera que nosotros, incluyendo las sombras y los reflejos, que son muy difíciles para las máquinas!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/cuarto/sesgos_percepcion.png",
              alt: "Ilustración de la diversidad de datos para evitar sesgos",
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: 'Entrenando' a un Sistema de Reconocimiento de Frutas",
          description: "Reúne un grupo de frutas (manzanas, plátanos, naranjas). Eres un 'científico de datos' y tienes que 'entrenar' a tu 'IA' (un amigo o familiar) para que reconozca cada fruta. ¿Cuántos ejemplos de cada fruta necesitas mostrarle hasta que pueda reconocerlas sin fallar? ¿Qué pasa si le muestras una fruta que no ha visto antes?",
          example: "Muestra solo manzanas rojas al principio. Luego introduce una manzana verde. ¿Cómo reacciona la 'IA'?",
        },
        relatedLinks: [
          { text: "Video: ¿Qué es el sesgo en la IA?", url: "https://www.youtube.com/watch?v=sesgo_ia_ninos" },
          { text: "Artículo: Datos para entrenar IA", url: "https://www.ejemplo.com/datos-entrenamiento" },
        ],
      },
      {
        id: "representacion-y-razonamiento",
        title: "Idea 2: Pensamiento Lógico y Resolución de Problemas con IA",
        guidingText: "En cuarto grado, exploraremos cómo la Inteligencia Artificial (IA) no solo procesa información, sino que utiliza complejos modelos de **representación del conocimiento** y **algoritmos de razonamiento** para simular el pensamiento lógico humano. Veremos cómo la IA puede resolver problemas complejos y tomar decisiones informadas.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/cuarto/razonamiento_intro.png",
          alt: "Cerebro abstracto con conexiones lógicas",
        },
        sections: [
          {
            heading: "Mapas de Conocimiento para la IA",
            content: "La IA no guarda la información de forma desordenada. Utiliza estructuras como **grafos de conocimiento** o **árboles de decisión** para organizar datos y relaciones entre ellos. Esto le permite 'conectar los puntos' y hacer inferencias, como un detective que une todas las pistas para resolver un caso complejo.\n\n**Concepto clave:** La **ontología** en IA es un conjunto de conceptos y categorías que se usan para representar el conocimiento de un dominio específico, permitiendo a la IA 'entender' cómo se relacionan las cosas.",
            multimedia: { type: "image", src: "/assets/ai4k12/cuarto/mapa_conocimiento_avanzado.png", alt: "Grafo de conocimiento complejo" },
          },
          {
            heading: "Algoritmos de Búsqueda y Optimización",
            content: "Cuando la IA necesita resolver un problema (ej. encontrar la ruta más rápida, programar tareas), utiliza **algoritmos de búsqueda**. Estos algoritmos exploran diferentes opciones y eligen la mejor basada en criterios específicos. Es como un laberinto: la IA busca todas las salidas posibles y elige la más corta o la más segura.\n\n**Pregunta para pensar:** ¿Cómo podrías describir los pasos que seguiría una IA para ganar una partida de ajedrez?",
            multimedia: { type: "animation", src: "/assets/ai4k12/cuarto/algoritmo_busqueda.gif", alt: "Animación de algoritmo de búsqueda en un laberinto" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Sistema de Recomendación de IA",
          description: "Imagina que creas un servicio de streaming de películas. Diseña un sistema de IA que recomiende películas a los usuarios. ¿Qué tipo de información necesitaría la IA (datos) y qué reglas o lógica usaría para decidir qué película sugerir a cada persona? Presenta tus ideas con un diagrama.",
          example: "Si al usuario le gusta la fantasía Y las películas de acción, recomendar películas de 'acción fantástica'.",
        },
        relatedLinks: [
          { text: "Video: Algoritmos de búsqueda explicados", url: "https://www.youtube.com/embed/video_ejemplo_razonamiento5" },
          { text: "Artículo: ¿Qué es la representación del conocimiento?", url: "https://www.ejemplo.com/representacion-conocimiento" },
        ],
      },
      {
        id: "aprendizaje",
        title: "Idea 3: Algoritmos de Aprendizaje Automático",
        guidingText: "En cuarto grado, nos adentraremos en el **Aprendizaje Automático (Machine Learning)**, una rama de la Inteligencia Artificial (IA) que permite a los sistemas aprender y mejorar sin ser programados explícitamente. Exploraremos los tipos básicos de aprendizaje y cómo la IA descubre patrones en grandes volúmenes de datos.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/cuarto/aprendizaje_intro.png",
          alt: "Icono de Machine Learning con datos y un cerebro",
        },
        sections: [
          {
            heading: "Aprendizaje Supervisado: Aprendiendo con Ejemplos",
            content: "El **aprendizaje supervisado** es el tipo más común. La IA aprende a partir de un **dataset** de ejemplos donde ya sabemos la respuesta correcta. Por ejemplo, se le muestran miles de fotos de perros y se le dice 'esto es un perro'. Así, la IA aprende a identificar perros en fotos nuevas. Es como aprender con un maestro que te da muchos ejemplos y te corrige.\n\n**Concepto clave:** Se llama 'supervisado' porque hay una 'supervisión' o 'guía' con las respuestas correctas en los datos de entrenamiento.",
            multimedia: { type: "image", src: "/assets/ai4k12/cuarto/aprendizaje_supervisado.png", alt: "Diagrama de aprendizaje supervisado" },
          },
          {
            heading: "Aprendizaje No Supervisado: Encontrando Patrones por Sí Misma",
            content: "En el **aprendizaje no supervisado**, la IA no tiene respuestas correctas. Su tarea es encontrar **patrones ocultos** o agrupar datos similares por sí misma. Por ejemplo, podría agrupar clientes con gustos parecidos sin que le digamos de antemano qué gustos buscar. Es como explorar una cueva oscura y descubrir formaciones que nunca habías visto antes.\n\n**Pregunta para pensar:** ¿Cómo podría un sistema de IA agrupar diferentes tipos de canciones sin que le digas el género?",
            multimedia: { type: "animation", src: "/assets/ai4k12/cuarto/aprendizaje_no_supervisado.gif", alt: "Animación de agrupamiento de datos" },
          },
          {
            heading: "Aplicaciones del Aprendizaje Automático",
            content: "El Machine Learning está en todas partes: los filtros de spam en tu correo, los sistemas de recomendación de películas, el reconocimiento facial en tu teléfono, y hasta en la detección de fraudes bancarios. Su capacidad para aprender de los datos lo hace extremadamente útil.\n\n**Dato curioso:** ¡Los coches autónomos usan Machine Learning para aprender a conducir de forma segura al analizar miles de horas de conducción humana!",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/video_ejemplo_razonamiento6", alt: "Video de aplicaciones de Machine Learning" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Clasifica Datos como una IA",
          description: "Recoge 20 objetos pequeños y variados (monedas, clips, lápices, gomas). Primero, clasifícalos como en 'aprendizaje supervisado' (ej. 'metales', 'plásticos') con etiquetas. Luego, clasifícalos de nuevo, pero sin etiquetas previas, como en 'aprendizaje no supervisado', encontrando tus propios grupos lógicos. ¿Encontraste patrones diferentes?",
          example: "Puedes usar colores, formas o texturas para crear tus propios grupos lógicos en el aprendizaje no supervisado.",
        },
        relatedLinks: [
          { text: "Video: ¿Qué es Machine Learning? (para niños)", url: "https://www.youtube.com/embed/video_ejemplo_razonamiento7" },
          { text: "Juego: Crea tu propio modelo de ML simple", url: "https://teachablemachine.withgoogle.com/" },
        ],
      },
      {
        id: "interaccion-natural",
        title: "Idea 4: Desarrollando Interfaces de Usuario Inteligentes",
        guidingText: "En cuarto grado, exploraremos cómo la Inteligencia Artificial (IA) nos permite interactuar con la tecnología de maneras cada vez más intuitivas y humanas. Nos centraremos en el diseño de **interfaces de usuario inteligentes** y cómo la IA mejora la comunicación entre personas y máquinas.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/cuarto/interaccion_intro.png",
          alt: "Persona interactuando con una interfaz de IA proyectada",
        },
        sections: [
          {
            heading: "Más Allá de los Botones: La Conversación con IA",
            content: "Las interfaces tradicionales usan botones y menús. Las interfaces inteligentes usan la IA para permitirnos interactuar con voz, gestos o incluso texto libre. Esto hace que la tecnología sea más accesible y natural. Piensa en cómo un altavoz inteligente responde a tus órdenes de voz o cómo tu teléfono reconoce tu huella dactilar.\n\n**Concepto clave:** Las **interfaces de usuario naturales (NUI)** buscan que la interacción con la tecnología sea lo más parecida posible a la interacción humana.",
            multimedia: { type: "image", src: "/assets/ai4k12/cuarto/interaccion_nui.png", alt: "Ejemplos de interacción con voz y gestos" },
          },
          {
            heading: "Robots Sociales y Colaborativos",
            content: "Algunos robots están diseñados para interactuar directamente con humanos en entornos sociales o de trabajo. Los **robots sociales** pueden reconocer emociones, mantener conversaciones y ayudar en tareas diarias. Los **robots colaborativos** (cobots) trabajan junto a los humanos en fábricas, asistiéndolos en tareas que requieren fuerza o precisión.\n\n**Pregunta para pensar:** ¿Cómo crees que un robot social podría ayudar a los ancianos o a los niños en un hospital?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/video_ejemplo_razonamiento8", alt: "Video de robot social o cobot" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña una Interfaz para un Robot Ayudante",
          description: "Imagina un robot que te ayuda en la cocina. Diseña una interfaz para interactuar con él. ¿Preferirías hablarle, tocar una pantalla, o hacer gestos? Dibuja cómo se vería la interacción y explica por qué elegiste esa forma de comunicación.",
          example: "Puedes dibujar al robot y a una persona haciendo gestos para que el robot se mueva o prepare algo.",
        },
        relatedLinks: [
          { text: "Video: ¿Qué son los cobots?", url: "https://www.youtube.com/embed/video_ejemplo_razonamiento9" },
          { text: "Artículo: Ejemplos de interfaces inteligentes", url: "https://www.ejemplo.com/interfaces-inteligentes" },
        ],
      },
      {
        id: "impacto-social",
        title: "Idea 5: IA y Responsabilidad Ciudadana",
        guidingText: "En cuarto grado, analizaremos el **impacto social de la Inteligencia Artificial (IA)** desde una perspectiva de **responsabilidad ciudadana**. Discutiremos los beneficios y los desafíos que la IA presenta para la sociedad, y cómo podemos asegurar un uso ético y justo de esta tecnología.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/cuarto/impacto_social_intro.png",
          alt: "Ilustración de personas y tecnología conectadas",
        },
        sections: [
          {
            heading: "Beneficios de la IA para la Sociedad",
            content: "La IA tiene el potencial de resolver grandes problemas globales: puede ayudar a desarrollar medicinas más rápido, a predecir desastres naturales, a optimizar el uso de energía y a mejorar la educación. Su capacidad para procesar grandes cantidades de datos y encontrar soluciones es invaluable para el progreso social.\n\n**Concepto clave:** La **IA para el bien (AI for Good)** es una iniciativa que busca aplicar la IA para resolver los desafíos sociales y ambientales más apremiantes del mundo.",
            multimedia: { type: "image", src: "/assets/ai4k12/cuarto/ia_beneficios_sociales.png", alt: "Iconos de IA en medicina, clima y educación" },
          },
          {
            heading: "Desafíos y Preocupaciones Éticas",
            content: "A pesar de sus beneficios, la IA presenta desafíos. La **privacidad de los datos** es una gran preocupación, ya que la IA a menudo necesita mucha información personal para funcionar. También existe el riesgo de **sesgos** en las decisiones de la IA si los datos de entrenamiento no son representativos. Además, debemos pensar en el futuro del trabajo y cómo la IA puede cambiar ciertas profesiones.\n\n**Pregunta para Debate:** Si un sistema de IA ayuda a decidir quién recibe un préstamo, ¿qué pasaría si tuviera sesgos?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef0", alt: "Video sobre ética y sesgos en IA" },
          },
          {
            heading: "Tu Rol como Ciudadano Digital",
            content: "Como ciudadanos digitales, es nuestra responsabilidad entender cómo funciona la IA, cuestionar sus decisiones cuando sea necesario y abogar por un desarrollo ético. Debemos ser críticos con la información generada por IA y proteger nuestra privacidad. Tu conocimiento y tu voz son importantes para moldear el futuro de la IA.\n\n**Dato curioso:** ¡Los gobiernos de todo el mundo están creando leyes y directrices para asegurar que la IA se use de manera justa y segura!",
            multimedia: { type: "image", src: "/assets/ai4k12/cuarto/ciudadano_digital.png", alt: "Ilustración de persona informada sobre tecnología" },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Crea un Código de Ética Simple para la IA",
          description: "Imagina que eres parte de un equipo que va a crear una nueva IA. Escribe 3 reglas muy importantes que tu equipo debería seguir para asegurar que su IA sea buena y justa para todos.",
          example: "Regla 1: La IA no debe discriminar a nadie. Regla 2: La IA debe proteger la privacidad de las personas.",
        },
        relatedLinks: [
          { text: "Artículo: ¿Qué es la ética en la IA?", url: "https://www.ejemplo.com/etica-ia" },
          { text: "Video: IA para los objetivos de desarrollo sostenible", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef1" },
        ],
      },
    ],
  },

  // --- Contenido para QUINTO GRADO ---
  {
    course: "quinto",
    ideas: [
      {
        id: "percepcion",
        title: "Idea 1: Sistemas de Percepción en IA",
        guidingText: "En quinto grado, profundizamos en cómo los sistemas de Inteligencia Artificial (IA) emulan y, en ocasiones, superan la capacidad humana de percibir el entorno. Exploraremos la visión por computadora y el procesamiento del lenguaje natural, dos pilares fundamentales que permiten a las máquinas 'entender' el mundo a través de datos complejos.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/quinto/percepcion_intro.png",
          alt: "Infografía de sistemas de visión y procesamiento de lenguaje",
        },
        sections: [
          {
            heading: "Visión por Computadora: Más allá de lo que Vemos",
            content: "La visión por computadora es el campo de la IA que permite a las computadoras 'ver' e interpretar imágenes digitales y videos. Esto va más allá de solo detectar formas; implica reconocer objetos, personas, acciones y hasta emociones. Se utiliza en vehículos autónomos, diagnóstico médico por imágenes, y sistemas de seguridad inteligentes.\n\n**Concepto Clave:** Los algoritmos de **aprendizaje profundo**, especialmente las redes neuronales convolucionales (**CNNs**), son la base de la visión por computadora moderna. Estas redes aprenden a identificar características en las imágenes de manera jerárquica, desde bordes simples hasta formas complejas.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/vision_computadora.png",
              alt: "Diagrama de una red neuronal convolucional",
            },
          },
          {
            heading: "Procesamiento del Lenguaje Natural (PLN): Entendiendo el Lenguaje Humano",
            content: "El PLN es la rama de la IA que se enfoca en la interacción entre computadoras y el lenguaje humano. El objetivo es que las máquinas puedan leer, comprender, interpretar y generar lenguaje de una forma valiosa. Asistentes de voz como Siri o Alexa, traductores automáticos, y los sistemas de análisis de sentimiento de texto son ejemplos de PLN en acción.\n\n**Concepto Clave:** El PLN se enfrenta a desafíos como la ambigüedad del lenguaje, el sarcasmo o las expresiones idiomáticas. Las técnicas avanzadas incluyen modelos de lenguaje basados en **transformadores**, que permiten a la IA captar el contexto y el significado de frases completas.",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/PLN_explicacion",
              alt: "Video explicativo de PLN",
            },
          },
          {
            heading: "Desafíos y Consideraciones Éticas en la Percepción de la IA",
            content: "Aunque la percepción de la IA es poderosa, presenta desafíos. La **privacidad** es una preocupación importante cuando las cámaras pueden identificar rostros o las grabaciones de voz se almacenan. También existe el riesgo de **sesgos** en los datos de entrenamiento, lo que podría llevar a que los sistemas de IA perciban de manera injusta o errónea a ciertos grupos de personas. Es fundamental diseñar sistemas de IA que sean transparentes y equitativos.\n\n**Pregunta para Debate:** Si un coche autónomo 've' un obstáculo y necesita tomar una decisión rápida, ¿cómo debería estar programado para priorizar la seguridad de los pasajeros vs. los peatones?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/percepcion_etica.png",
              alt: "Ilustración de privacidad de datos y ética en IA",
            },
          },
        ],
        challenge: {
          title: "Proyecto: Crea un Guion para un Asistente Virtual Inteligente",
          description: "Imagina que tienes que programar un asistente de voz para una nueva aplicación. ¿Qué 'palabras clave' debería 'escuchar' para activarse? ¿Qué tipos de preguntas debería poder 'entender' (percibir) y cómo respondería? Escribe un pequeño guion de una conversación entre un usuario y tu asistente, incluyendo posibles malentendidos y cómo el asistente podría 'aprender' a mejorar su 'escucha'.",
          example: "Usuario: 'Hola asistente, ¿qué tiempo hace hoy?' Asistente: 'Percibo que quieres saber el clima. En [Ciudad], la temperatura es de X grados...'\nUsuario: '¿Y mañana?' Asistente: 'Necesito más información. ¿Te refieres a mañana en la misma ciudad o en otro lugar?'",
        },
        relatedLinks: [
          { text: "Artículo: ¿Qué es la Visión por Computadora?", url: "https://www.bbvaopenmind.com/tecnologia/inteligencia-artificial/que-es-la-vision-por-computadora/" },
          { text: "Video: Procesamiento del Lenguaje Natural explicado", url: "https://www.youtube.com/watch?v=PLN_conceptos_clave" },
          { text: "Quiz interactivo sobre Percepción de la IA", url: "https://www.ejemplo.org/quiz-percepcion-avanzado" },
        ],
      },
      {
        id: "representacion-y-razonamiento",
        title: "Idea 2: Estructuras de Datos y Algoritmos en IA",
        guidingText: "En quinto grado, profundizaremos en cómo la Inteligencia Artificial (IA) organiza y procesa el conocimiento a través de **estructuras de datos avanzadas** y **algoritmos de razonamiento complejos**. Comprenderemos cómo la IA simula la lógica y la toma de decisiones para resolver problemas que requieren un análisis profundo.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/quinto/representacion_intro.png",
          alt: "Infografía de estructuras de datos complejas",
        },
        sections: [
          {
            heading: "Representación del Conocimiento Avanzada",
            content: "La IA utiliza modelos sofisticados para representar el conocimiento. Esto incluye **redes semánticas**, **ontologías** y **bases de datos de grafos**, que permiten a la IA entender las relaciones entre conceptos y hacer inferencias. Por ejemplo, si sabe que 'un perro es un mamífero' y 'los mamíferos respiran', puede inferir que 'un perro respira'.\n\n**Concepto Clave:** El **razonamiento basado en reglas** y el **razonamiento probabilístico** son métodos que la IA utiliza para tomar decisiones bajo incertidumbre, por ejemplo, en sistemas de diagnóstico médico.",
            multimedia: { type: "image", src: "/assets/ai4k12/quinto/representacion_conocimiento_avanzada.png", alt: "Diagrama de red semántica" },
          },
          {
            heading: "Algoritmos de Planificación y Búsqueda Inteligente",
            content: "Para resolver problemas complejos, la IA utiliza **algoritmos de planificación** que determinan una secuencia de acciones para alcanzar un objetivo (ej. un robot que planifica cómo ensamblar un producto). Los **algoritmos de búsqueda** exploran un 'espacio de estados' para encontrar la solución óptima, como en los motores de juegos de ajedrez que evalúan millones de movimientos por segundo.\n\n**Pregunta para pensar:** ¿Cómo planificaría una IA el envío de un millón de paquetes por todo el mundo para que lleguen a tiempo?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef2", alt: "Video de algoritmo de planificación" },
          },
          {
            heading: "Sistemas Expertos y Razonamiento Lógico",
            content: "Los **sistemas expertos** son programas de IA que emulan el conocimiento y la capacidad de razonamiento de un experto humano en un dominio específico. Utilizan una base de conocimientos y un 'motor de inferencia' para responder preguntas o tomar decisiones, como un sistema que diagnostica enfermedades basándose en síntomas.\n\n**Dato curioso:** ¡Deep Blue de IBM, la IA que venció a Garry Kasparov en ajedrez, utilizaba extensivamente el razonamiento basado en reglas y la búsqueda!",
            multimedia: { type: "image", src: "/assets/ai4k12/quinto/sistemas_expertos.png", alt: "Diagrama de sistema experto" },
          },
        ],
        challenge: {
          title: "Proyecto: Diseña un Algoritmo para un Juego de Estrategia",
          description: "Elige un juego de estrategia simple (ej. damas, un juego de cartas con pocas reglas). Diseña el 'árbol de decisiones' o las reglas lógicas que una IA seguiría para jugar de forma inteligente y ganar. Puedes usar un diagrama o un listado de 'si... entonces...'",
          example: "Para las damas: 'SI puedo capturar una pieza, ENTONCES capturo la pieza. SI no puedo capturar, ENTONCES muevo hacia adelante.'",
        },
        relatedLinks: [
          { text: "Artículo: ¿Qué son los sistemas expertos?", url: "https://www.ejemplo.com/sistemas-expertos" },
          { text: "Video: Cómo los algoritmos juegan ajedrez", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef3" },
        ],
      },
      {
        id: "aprendizaje",
        title: "Idea 3: Introducción al Aprendizaje Automático",
        guidingText: "En quinto grado, introduciremos los fundamentos del **Aprendizaje Automático (Machine Learning)**, una rama de la Inteligencia Artificial (IA) que permite a los sistemas aprender de los datos, identificar patrones y tomar decisiones con una intervención humana mínima. Exploraremos los conceptos clave que subyacen a esta poderosa capacidad.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/quinto/aprendizaje_intro.png",
          alt: "Representación de Machine Learning y Big Data",
        },
        sections: [
          {
            heading: "El Ciclo de Vida del Aprendizaje Automático",
            content: "El Machine Learning sigue un ciclo: **recopilación de datos**, **entrenamiento del modelo** (donde la IA aprende de los datos), **evaluación** (para ver qué tan bien aprendió) y **despliegue** (cuando la IA se usa en el mundo real). Este proceso iterativo permite a la IA mejorar constantemente.\n\n**Concepto Clave:** Un **modelo de Machine Learning** es el 'cerebro' que la IA ha 'construido' después de procesar los datos de entrenamiento; es lo que le permite hacer predicciones o clasificaciones.",
            multimedia: { type: "image", src: "/assets/ai4k12/quinto/ml_ciclo_vida.png", alt: "Diagrama de ciclo de vida de ML" },
          },
          {
            heading: "Tipos de Aprendizaje: Supervisado, No Supervisado y por Refuerzo",
            content: "Además del aprendizaje **supervisado** (aprender de datos etiquetados) y **no supervisado** (encontrar patrones sin etiquetas), existe el **aprendizaje por refuerzo**. Aquí, la IA aprende a través de la **prueba y error**, recibiendo 'recompensas' por acciones correctas y 'castigos' por errores. Es como entrenar a una mascota: la recompensa por el buen comportamiento.\n\n**Pregunta para pensar:** ¿En qué situaciones sería útil que una IA aprendiera por refuerzo, como un robot que aprende a caminar?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef4", alt: "Video sobre tipos de aprendizaje automático" },
          },
          {
            heading: "Redes Neuronales: Inspiradas en el Cerebro",
            content: "Las **redes neuronales artificiales** son un tipo de algoritmo de Machine Learning inspirado en cómo funciona el cerebro humano. Tienen 'capas' de 'neuronas' interconectadas que procesan información. Son especialmente poderosas para tareas como el reconocimiento de imágenes y el procesamiento del lenguaje natural.\n\n**Dato curioso:** ¡Los avances en redes neuronales profundas (Deep Learning) han impulsado gran parte del progreso reciente en IA!",
            multimedia: { type: "image", src: "/assets/ai4k12/quinto/red_neuronal.png", alt: "Diagrama simplificado de una red neuronal" },
          },
        ],
        challenge: {
          title: "Proyecto: Entrenando una IA Simple para Reconocer Dibujos",
          description: "Utiliza una herramienta de Machine Learning accesible (como Google Teachable Machine o Scratch con extensiones de IA). Recopila tus propios dibujos simples (ej. círculos, cuadrados, triángulos) como 'datos de entrenamiento'. Entrena el modelo para que la IA los reconozca. Luego, pruébalo y observa qué tan bien 'aprendió'.",
          example: "Puedes grabar tu voz diciendo 'sí' y 'no' para entrenar a la IA a reconocer esas palabras.",
        },
        relatedLinks: [
          { text: "Video: ¿Qué es el aprendizaje por refuerzo?", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef5" },
          { text: "Artículo: ¿Cómo funcionan las redes neuronales?", url: "https://www.ejemplo.com/redes-neuronales" },
        ],
      },
      {
        id: "interaccion-natural",
        title: "Idea 4: Interfaces Conversacionales y Robótica Social",
        guidingText: "En quinto grado, exploraremos la vanguardia de la interacción humano-IA: las **interfaces conversacionales** que nos permiten hablar de forma fluida con las máquinas y la **robótica social** que integra la IA en robots capaces de interactuar emocional y físicamente con los humanos. Comprenderemos los desafíos y el potencial de estas tecnologías.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/quinto/interaccion_intro.png",
          alt: "Personas interactuando con robots sociales y asistentes virtuales",
        },
        sections: [
          {
            heading: "Chatbots y Asistentes Virtuales Avanzados",
            content: "Más allá de las respuestas simples, los chatbots y asistentes virtuales modernos (como ChatGPT o Google Assistant) utilizan IA avanzada para mantener conversaciones complejas, entender el **contexto** de lo que decimos, y hasta generar texto creativo. Esto es posible gracias a los **grandes modelos de lenguaje (LLMs)**, que han sido entrenados con enormes cantidades de texto y código.\n\n**Concepto Clave:** Los LLMs pueden **generar texto coherente y relevante** en función de la entrada que reciben, lo que les permite 'conversar' de manera muy convincente.",
            multimedia: { type: "image", src: "/assets/ai4k12/quinto/llm_chatbot.png", alt: "Ilustración de un LLM generando texto" },
          },
          {
            heading: "Robótica Social: Compañeros Inteligentes",
            content: "La **robótica social** se enfoca en crear robots que puedan interactuar con los humanos de manera natural y emocionalmente inteligente. Estos robots pueden interpretar expresiones faciales, tono de voz y gestos. Se utilizan en educación, cuidado de ancianos y como compañeros. Pueden ser muy útiles, pero también plantean preguntas sobre cómo nos relacionamos con las máquinas.\n\n**Pregunta para pensar:** ¿Crearías un robot que pudiera sentir emociones humanas? ¿Por qué sí o por qué no?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef6", alt: "Video de robot social" },
          },
          {
            heading: "Desafíos de la Interacción Natural",
            content: "A pesar de los avances, la interacción natural con la IA tiene desafíos. La IA puede malinterpretar el sarcasmo o la ironía. También puede haber problemas de **privacidad** con el uso de datos de voz o faciales. Es importante que la interacción sea transparente y que los usuarios sepan cuándo están hablando con una IA y cómo se usan sus datos.\n\n**Dato curioso:** ¡Algunos robots sociales están diseñados para tener 'personalidades' diferentes, adaptándose a las preferencias del usuario!",
            multimedia: { type: "image", src: "/assets/ai4k12/quinto/desafios_interaccion.png", alt: "Ilustración de la complejidad de la comunicación" },
          },
        ],
        challenge: {
          title: "Proyecto: Diseña un Diálogo para un Robot Educativo",
          description: "Imagina que diseñas un robot social para ayudar a los estudiantes en una clase. Escribe un diálogo entre un estudiante y este robot. Incluye cómo el robot podría: a) entender una pregunta difícil, b) dar una pista, c) animar al estudiante. ¿Cómo harías que el robot suene amable y útil?",
          example: "Estudiante: 'No entiendo este problema de matemáticas.' Robot: 'Entiendo que el problema es un poco difícil. ¿Quieres que te dé un ejemplo similar?'",
        },
        relatedLinks: [
          { text: "Artículo: Grandes Modelos de Lenguaje (LLMs)", url: "https://www.ejemplo.com/llms" },
          { text: "Video: Robótica social en la vida real", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef7" },
        ],
      },
      {
        id: "impacto-social",
        title: "Idea 5: Implicaciones Éticas y Sociales de la IA",
        guidingText: "En quinto grado, examinaremos a fondo las **implicaciones éticas y sociales** de la Inteligencia Artificial (IA), incluyendo el impacto en el empleo, la privacidad, la equidad y la toma de decisiones. Desarrollaremos un pensamiento crítico sobre cómo la IA moldea nuestro futuro y nuestra responsabilidad como ciudadanos globales.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/quinto/impacto_social_intro.png",
          alt: "Ilustración de balanza entre beneficios y riesgos de IA",
        },
        sections: [
          {
            heading: "IA y el Futuro del Trabajo",
            content: "La IA está automatizando muchas tareas, lo que transformará el mundo laboral. Algunas profesiones podrían cambiar o desaparecer, pero también surgirán nuevas. La clave es la **adaptabilidad** y el desarrollo de habilidades que complementen la IA, como la creatividad, el pensamiento crítico y la inteligencia emocional.\n\n**Concepto Clave:** La **automatización** es el uso de tecnología para realizar tareas con poca o ninguna intervención humana, a menudo impulsada por IA.",
            multimedia: { type: "image", src: "/assets/ai4k1k2/quinto/futuro_trabajo.png", alt: "Gráfico de cambio de profesiones por IA" },
          },
          {
            heading: "Privacidad, Seguridad y Sesgos en la IA",
            content: "La IA maneja enormes cantidades de datos, lo que plantea preocupaciones sobre la **privacidad** (cómo se usa nuestra información personal) y la **seguridad** (protección contra ciberataques). Además, los **sesgos** en los datos de entrenamiento pueden llevar a decisiones injustas o discriminatorias de la IA, por ejemplo, en sistemas de reconocimiento facial o de préstamos. Es vital que las IAs sean **equitativas**.\n\n**Pregunta para Debate:** Si una IA ayuda a seleccionar candidatos para un empleo, ¿qué pasaría si los datos con los que aprendió tuvieran sesgos de género o raza?",
            multimedia: { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef8", alt: "Video sobre privacidad y sesgos en IA" },
          },
          {
            heading: "IA Responsable y el Papel de los Ciudadanos",
            content: "Desarrollar y usar la IA de manera **responsable** implica considerar sus efectos a largo plazo en la sociedad. Esto incluye crear leyes, promover la **transparencia** en los algoritmos de IA y educar a las personas. Como ciudadanos, tenemos el poder de exigir una IA ética y de participar en el debate sobre su desarrollo. Tu opinión cuenta para moldear un futuro donde la IA beneficie a todos.\n\n**Dato curioso:** ¡Existen organizaciones globales trabajando en la creación de directrices éticas para el desarrollo de la IA!",
            multimedia: { type: "image", src: "/assets/ai4k12/quinto/ia_responsable_global.png", alt: "Ilustración de comunidad global discutiendo IA" },
          },
        ],
        challenge: {
          title: "Proyecto: Debate sobre un Dilema Ético de la IA",
          description: "Elige uno de los siguientes dilemas éticos de la IA y prepara argumentos a favor y en contra. Presenta tu postura y las razones detrás de ella. Dilemas: a) Coches autónomos: ¿quién es responsable en caso de accidente? b) IA en la vigilancia: ¿seguridad o invasión de privacidad? c) IA en el arte: ¿es arte si lo crea una máquina?",
          example: "Para el coche autónomo: A favor de la IA: 'Puede reaccionar más rápido que un humano'. En contra: 'Si falla, ¿quién asume la culpa?'",
        },
        relatedLinks: [
          { text: "Artículo: Ética en la Inteligencia Artificial", url: "https://www.bbvaopenmind.com/tecnologia/inteligencia-artificial/etica-inteligencia-artificial-desarrollo-retos/" },
          { text: "Video: Los dilemas de la IA", url: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef9" },
          { text: "Reporte de la UNESCO sobre la Ética de la IA", url: "https://www.unesco.org/en/artificial-intelligence/recommendation-ethics" },
        ],
      },
    ],
  },
];