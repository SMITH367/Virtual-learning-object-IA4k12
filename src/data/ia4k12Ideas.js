// src/data/ai4k12Ideas.js

export const ai4k12IdeasData = [
  // --- Contenido para PRIMER GRADO ---
  {
    course: "primero",
    ideas: [{
        id: "percepcion",
        title: "Idea 1: La IA Ve y Escucha",
        guidingText: "Imagina que una computadora puede usar sus 'ojos' y 'oídos' para entender el mundo. ¡Así es como la Inteligencia Artificial (IA) percibe! Aprenderemos cómo las máquinas usan cámaras y micrófonos para saber lo que está pasando, como cuando un robot evita chocar con un juguete o cuando un asistente de voz entiende lo que le pides.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/primero/percepcion_intro.png",
          alt: "Niños interactuando con robots que ven y escuchan",
        },
        sections: [{
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
        relatedLinks: ""
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
        sections: [{
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
        relatedLinks: "",
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
        sections: [{
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
        relatedLinks: ""
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
        sections: [{
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
        relatedLinks: ""
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
        sections: [{
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
        relatedLinks: ""
      },
    ],
  },

  // --- Contenido para SEGUNDO GRADO ---
  {
    course: "segundo",
    ideas: [{
        id: "percepcion",
        title: "Idea 1: La IA Detecta el Entorno",
        guidingText: "En segundo grado, veremos cómo la Inteligencia Artificial (IA) utiliza diferentes 'sentidos' o **sensores** para recopilar información del mundo real. Esto permite a los dispositivos inteligentes entender lo que sucede a su alrededor, desde un robot que se mueve sin chocar hasta un teléfono que reconoce tu voz para una búsqueda.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/segundo/percepcion_intro.png",
          alt: "Dibujo de un sensor y un robot explorando",
        },
        sections: [{
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
        relatedLinks: "/curso/segundo/persepcionbasica"
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
        sections: [{
            heading: "Cómo la IA 'Entiende' lo que le Pedimos",
            content: "La IA necesita instrucciones muy claras. Si le decimos 'Pon el vaso en la mesa', la IA descompone eso en pasos muy pequeños. Es como seguir una receta de cocina, ¡cada paso importa!\n\n**Actividad sugerida:** Juguemos a dar instrucciones para que un compañero dibuje algo sin verlo. ¿Fueron tus instrucciones lo suficientemente claras?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/representacion_instrucciones.png",
              alt: "Diagrama de flujo simple"
            },
          },
          {
            heading: "Organizando Información para la IA",
            content: "La IA guarda la información de forma muy ordenada. Imagina un cajón de calcetines: si todos están mezclados, es difícil encontrar un par. Pero si están por colores, ¡es más fácil! La IA necesita sus 'datos' muy bien organizados para 'pensar' rápido.\n\n**Pregunta para pensar:** ¿Cómo organizas tus juguetes para encontrarlos fácilmente?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/organizacion_datos.png",
              alt: "Ilustración de datos ordenados"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Crea un Algoritmo para un Juego",
          description: "Piensa en tu juego de mesa favorito. ¿Cuáles son las reglas principales? Escribe una secuencia de instrucciones muy claras para que un robot pueda jugar ese juego.",
          example: "Para el juego de las sillas: 'Si la música para, busca una silla. Si no hay silla, sal del juego.'",
        },
        relatedLinks: "/curso/segundo/mateia"
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
        sections: [{
            heading: "La Práctica Hace al Maestro (o al Robot)",
            content: "Si le pides a una IA que reconozca manzanas en muchas fotos, al principio puede confundirlas. Pero si le sigues mostrando más fotos y corrigiéndola, 'aprenderá' a distinguirlas cada vez mejor. Es como cuando aprendes a lanzar una pelota: al principio no eres muy bueno, pero con mucha práctica, ¡te vuelves un experto!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/aprendizaje_practica.png",
              alt: "Niño lanzando una pelota y mejorando"
            },
          },
          {
            heading: "IA que Aprende en los Juegos",
            content: "Muchos videojuegos usan IA que aprende. Por ejemplo, algunos juegos pueden ajustar su dificultad. Si juegas muy bien, la IA se vuelve más difícil para que te diviertas más. Si te cuesta, la IA se hace un poco más fácil. ¡Esto es porque la IA está 'aprendiendo' cómo juegas!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/example_video_23",
              alt: "Video de IA en videojuegos"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: El Juego del Patrón Secreto",
          description: "Crea un patrón de movimiento con tu cuerpo (ej. aplauso, salto, giro). Tu compañero debe intentar copiarlo. Cada vez que se equivoque, corrígele. ¿Cuántas veces tiene que repetir para 'aprender' tu patrón sin errores?",
          example: "Puedes usar tarjetas con dibujos de movimientos para que el 'robot' aprenda a seguir la secuencia.",
        },
        relatedLinks: "/curso/segundo/aprendeia"
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
        sections: [{
            heading: "Tu Voz, un Comando para la IA",
            content: "Muchos dispositivos con IA pueden entender lo que les decimos. Cuando hablas con un altavoz inteligente, la IA convierte tus palabras en algo que puede procesar y luego busca la respuesta o realiza la acción. Es como si el dispositivo 'escuchara' tus deseos.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/voz_comando.png",
              alt: "Ilustración de voz a texto"
            },
          },
          {
            heading: "Robots que te Responden",
            content: "Algunos robots están diseñados para interactuar con nosotros. Pueden responder a preguntas, bailar o incluso jugar. Estos robots usan IA para procesar nuestras palabras y reaccionar de una manera que nos parezca natural y amigable.",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/example_video_25",
              alt: "Video de robot interactivo"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Comando de Voz",
          description: "Imagina que tienes un robot de cocina. Dibuja y escribe 3 comandos de voz que le darías para que te ayude a preparar tu postre favorito.",
          example: "Comando 1: 'Robot, mezcla los ingredientes'. Comando 2: 'Robot, pon en el horno'.",
        },
        relatedLinks: "curso/tercero/interaccion"
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
        sections: [{
            heading: "IA en tu Hogar",
            content: "En casa, la IA puede estar en tu televisor, sugiriendo programas que te gusten. Los aspiradores robot usan IA para limpiar solos. Los videojuegos tienen IA que hace que los personajes sean más listos. Todo esto hace que nuestras tareas sean más sencillas y nuestro entretenimiento más divertido.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/ia_en_casa.png",
              alt: "Imágenes de Smart TV, robot aspirador"
            },
          },
          {
            heading: "IA en la Escuela",
            content: "En la escuela, la IA puede ayudar a los maestros a organizar información. Algunos programas de aprendizaje pueden adaptar los ejercicios a tu nivel, haciéndolos más fáciles o más difíciles según cómo aprendas. ¡La IA puede ser una gran ayuda para aprender!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/example_video_27",
              alt: "Video de IA en herramientas educativas"
            },
          },
          {
            heading: "Cosas a Recordar con la IA",
            content: "Es importante saber que la IA es una herramienta, y siempre hay humanos detrás de ella. Debemos usar la IA de forma responsable y entender que, aunque sea muy útil, no siempre tiene todas las respuestas y siempre debemos pensar por nosotros mismos.\n\n**Pregunta para pensar:** Si un robot hiciera toda tu tarea, ¿aprenderías lo mismo?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/segundo/ia_responsable.png",
              alt: "Niños pensando sobre el uso de la IA"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Un Día con IA",
          description: "Describe un día típico en tu vida e identifica al menos 3 momentos en los que la IA podría estar ayudándote (ej. tu tablet, el tráfico, la música). Dibuja una de esas situaciones.",
          example: "Cuando pido a mi altavoz inteligente que ponga mi canción favorita por la mañana.",
        },
        relatedLinks: "curso/segundo/trivia"
      },
    ],
  },

  // --- Contenido para TERCER GRADO ---
  {
    course: "tercero",
    ideas: [{
        id: "percepcion",
        title: "Idea 1: Datos y Patrones para la Percepción",
        guidingText: "En tercer grado, exploraremos cómo la Inteligencia Artificial (IA) no solo recopila información con sensores, sino que también la organiza en **datos** y busca **patrones** en esos datos para poder 'entender' lo que percibe. Es como si la IA fuera una detective que junta pistas y las conecta para resolver un misterio.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/tercero/percepcion_intro.png",
          alt: "Ilustración de la IA analizando datos visuales y auditivos",
        },
        sections: [{
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
        relatedLinks: "curso/tercero/persepcionbasica"
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
        sections: [{
            heading: "Reglas y Decisiones: La Lógica de la IA",
            content: "La IA usa 'si esto, entonces aquello' para tomar decisiones. Por ejemplo, 'SI el semáforo está en rojo Y hay peatones cruzando, ENTONCES el coche debe parar'. Estas reglas pueden ser muy numerosas y estar conectadas, creando un 'árbol de decisiones' que la IA sigue para elegir el mejor camino.\n\n**Actividad sugerida:** Crea un mapa mental o un diagrama de flujo simple para una tarea diaria (ej. prepararse para la escuela). Cada paso es una 'regla' que la IA seguiría.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/tercero/arbol_decisiones.png",
              alt: "Diagrama de árbol de decisiones"
            },
          },
          {
            heading: "Representación del Conocimiento",
            content: "Para aplicar la lógica, la IA necesita que el conocimiento esté 'representado' de forma que lo entienda. Esto puede ser en forma de mapas, listas, o redes. Cuando le das a la IA un mapa de un tesoro, ella usa la representación de ese mapa y las reglas para 'razonar' dónde está el tesoro.\n\n**Pregunta para pensar:** ¿Cómo representamos la información cuando hacemos una lista de compras o un horario?",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/tercero/mapa_conocimiento.gif",
              alt: "Animación de representación de conocimiento"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Sistema Lógico para un Juego",
          description: "Piensa en un juego sencillo (ej. tres en raya, un juego de cartas simple). Diseña un conjunto de reglas lógicas para que una IA pudiera jugar y tomar decisiones en ese juego.",
          example: "Para tres en raya: 'SI tengo dos X seguidas, PON X en el espacio vacío para ganar.'",
        },
        relatedLinks: "/curso/tercero/mateia"
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
        sections: [{
            heading: "Entrenamiento con Datos: El 'Alimento' de la IA",
            content: "Para que una IA aprenda a hacer algo (como reconocer una fruta), necesita 'comer' muchos **datos**. Le damos miles de fotos de diferentes frutas, y también le decimos qué fruta es cada una. Cuantos más datos 'come', mejor aprende a distinguirlas. Es como estudiar para un examen: cuanta más información lees y practicas, más aprendes.\n\n**Actividad sugerida:** Clasifica 20 imágenes de animales en dos grupos (ej. mascotas y animales salvajes). ¿Cómo podrías explicar a una IA las características de cada grupo?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/tercero/datos_entrenamiento.png",
              alt: "Ilustración de la IA procesando un gran volumen de datos"
            },
          },
          {
            heading: "Retroalimentación: Aprendiendo de los Errores",
            content: "Cuando la IA comete un error (ej. confunde una manzana con un tomate), le damos **retroalimentación** ('¡Incorrecto, es una manzana!'). Con esta corrección, la IA ajusta sus 'conocimientos' internos para no volver a cometer el mismo error. Así, la IA aprende continuamente y se vuelve más precisa. Es como un entrenador que corrige a un atleta para que mejore su técnica.\n\n**Pregunta para pensar:** ¿Por qué es importante recibir retroalimentación cuando aprendemos algo nuevo?",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/tercero/retroalimentacion_ia.gif",
              alt: "Animación de IA recibiendo feedback y ajustando"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: El Robot Clasificador de Objetos",
          description: "Imagina que tienes un robot que debe clasificar objetos pequeños (botones, clips, monedas) en diferentes cajas. Primero, 'entrena' al robot mostrándole ejemplos de cada objeto y diciendo en qué caja va. Luego, prueba si el robot puede clasificarlos correctamente. ¿Cómo le darías retroalimentación si se equivoca?",
          example: "Puedes usar diferentes formas o colores para simplificar los objetos y las cajas.",
        },
        relatedLinks: "curso/tercero/aprendeia"
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
        sections: [{
            heading: "Del Habla al Texto, del Texto al Significado",
            content: "Cuando hablamos con una IA, primero convierte nuestra voz en texto. Luego, el **PLN** entra en acción. El PLN ayuda a la IA a entender no solo las palabras, sino cómo se relacionan entre sí. Por ejemplo, sabe que 'quiero una manzana' y 'una manzana, por favor' significan lo mismo, aunque las palabras estén en diferente orden. La IA busca el significado, no solo las palabras.\n\n**Actividad sugerida:** Escribe una misma petición de dos formas diferentes (ej. 'Prende la luz', 'Quiero que la luz se encienda'). ¿Cómo las entendería una IA?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/tercero/voz_significado.png",
              alt: "Diagrama de voz a texto a significado"
            },
          },
          {
            heading: "Chatbots y Asistentes Virtuales",
            content: "Los **chatbots** (programas que hablan por texto) y los **asistentes virtuales** (como Siri o Google Assistant) son los ejemplos más claros de IA que usa PLN. Pueden responder preguntas, contar chistes, poner música o darte información, todo conversando contigo. Son como tener un amigo muy inteligente que sabe muchas cosas y te ayuda.\n\n**Pregunta para pensar:** ¿Qué cosas te gustaría que tu asistente virtual pudiera hacer por ti?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/video_ejemplo_razonamiento1",
              alt: "Video de chatbot conversando"
            },
          },
          {
            heading: "El Reto del Lenguaje Humano",
            content: "El lenguaje humano es complicado. Una palabra puede tener varios significados ('banco' de sentarse o de dinero). El sarcasmo o los chistes también son difíciles para la IA. Los creadores de IA trabajan mucho para que las máquinas puedan entender estas complejidades y no se confundan.\n\n**Dato curioso:** ¡Una IA que traduce idiomas tiene que entender el significado completo de una frase para traducirla bien, no solo palabra por palabra!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/tercero/lenguaje_reto.png",
              alt: "Ilustración de la complejidad del lenguaje"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Diálogo para un Robot de Servicio",
          description: "Imagina un robot que te ayuda en la biblioteca. Diseña un diálogo (preguntas y respuestas) entre un niño y el robot para que el niño pueda pedir un libro, preguntar por el horario o devolver un libro. Piensa en cómo el robot entendería diferentes formas de pedir lo mismo.",
          example: "Niño: 'Busco un libro de dinosaurios.' Robot: 'Claro, ¿qué dinosaurio te interesa?'",
        },
        relatedLinks: "curso/tercero/interaccion"
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
        sections: [{
            heading: "IA para una Ciudad Mejor",
            content: "La IA puede hacer nuestras ciudades más inteligentes. Por ejemplo, puede ayudar a controlar el tráfico para evitar atascos, o a gestionar la energía para ahorrar electricidad en los edificios. También puede ayudar a los servicios de emergencia a llegar más rápido. Es como tener un 'cerebro' digital que ayuda a la ciudad a funcionar mejor.\n\n**Actividad sugerida:** Piensa en un problema en tu comunidad (ej. mucha basura, tráfico). ¿Cómo crees que la IA podría ayudar a resolverlo?",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/tercero/ia_ciudad_inteligente.png",
              alt: "Mapa de ciudad con IA gestionando tráfico y energía"
            },
          },
          {
            heading: "IA para Cuidar Nuestro Planeta",
            content: "La IA también es una aliada en la **sostenibilidad**. Puede ayudar a monitorear la calidad del aire y del agua, a optimizar el riego en la agricultura para ahorrar agua, o a identificar especies en peligro de extinción. La IA nos da herramientas para entender mejor nuestro medio ambiente y protegerlo.\n\n**Pregunta para pensar:** ¿Cómo podría una IA ayudarte a reciclar mejor en casa?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/video_ejemplo_razonamiento3",
              alt: "Video de IA en sostenibilidad"
            },
          },
          {
            heading: "IA Justa y Responsable",
            content: "Aunque la IA es poderosa, es crucial que se use de forma **justa y responsable**. Esto significa que las decisiones de la IA no deben dañar a nadie o ser discriminatorias. Por ejemplo, los sistemas de IA para reconocer caras deben funcionar bien para todas las personas, sin importar su color de piel. Es nuestra responsabilidad asegurarnos de que la IA sea una fuerza para el bien.\n\n**Dato curioso:** ¡Hay IAs que ayudan a los científicos a encontrar nuevas formas de energía limpia!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/tercero/ia_justa.png",
              alt: "Ilustración de ética y justicia en IA"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña una App de IA para tu Comunidad",
          description: "Imagina que eres un desarrollador de apps. Diseña una aplicación móvil que use IA para resolver un problema en tu comunidad (ej. ayudar a encontrar mascotas perdidas, alertar sobre basura en las calles, optimizar el uso de energía). Dibuja la interfaz de la app y explica cómo usaría la IA.",
          example: "Una app con IA que usa cámaras para identificar mascotas perdidas y notifica a sus dueños.",
        },
        relatedLinks: "curso/tercero/trivia"
      },
    ],
  },

  // --- Contenido para CUARTO GRADO ---
  {
    course: "cuarto",
    ideas: [{
        id: "percepcion",
        title: "Idea 1: Cómo la IA 'Aprende' a Percibir",
        guidingText: "En cuarto grado, exploraremos cómo la Inteligencia Artificial (IA) no solo detecta información, sino que **aprende** a reconocer y comprender el mundo que percibe. Veremos cómo la IA se 'entrena' con grandes cantidades de datos para mejorar su capacidad de ver, oír y hasta 'sentir'.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/cuarto/percepcion_intro.png",
          alt: "Ilustración de una red neuronal simple aprendiendo a reconocer formas",
        },
        sections: [{
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
        relatedLinks: "curso/cuarto/persepcionbasica"
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
        sections: [{
            heading: "Mapas de Conocimiento para la IA",
            content: "La IA no guarda la información de forma desordenada. Utiliza estructuras como **grafos de conocimiento** o **árboles de decisión** para organizar datos y relaciones entre ellos. Esto le permite 'conectar los puntos' y hacer inferencias, como un detective que une todas las pistas para resolver un caso complejo.\n\n**Concepto clave:** La **ontología** en IA es un conjunto de conceptos y categorías que se usan para representar el conocimiento de un dominio específico, permitiendo a la IA 'entender' cómo se relacionan las cosas.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/cuarto/mapa_conocimiento_avanzado.png",
              alt: "Grafo de conocimiento complejo"
            },
          },
          {
            heading: "Algoritmos de Búsqueda y Optimización",
            content: "Cuando la IA necesita resolver un problema (ej. encontrar la ruta más rápida, programar tareas), utiliza **algoritmos de búsqueda**. Estos algoritmos exploran diferentes opciones y eligen la mejor basada en criterios específicos. Es como un laberinto: la IA busca todas las salidas posibles y elige la más corta o la más segura.\n\n**Pregunta para pensar:** ¿Cómo podrías describir los pasos que seguiría una IA para ganar una partida de ajedrez?",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/cuarto/algoritmo_busqueda.gif",
              alt: "Animación de algoritmo de búsqueda en un laberinto"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña un Sistema de Recomendación de IA",
          description: "Imagina que creas un servicio de streaming de películas. Diseña un sistema de IA que recomiende películas a los usuarios. ¿Qué tipo de información necesitaría la IA (datos) y qué reglas o lógica usaría para decidir qué película sugerir a cada persona? Presenta tus ideas con un diagrama.",
          example: "Si al usuario le gusta la fantasía Y las películas de acción, recomendar películas de 'acción fantástica'.",
        },
        relatedLinks: "curso/cuarto/mateia"
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
        sections: [{
            heading: "Aprendizaje Supervisado: Aprendiendo con Ejemplos",
            content: "El **aprendizaje supervisado** es el tipo más común. La IA aprende a partir de un **dataset** de ejemplos donde ya sabemos la respuesta correcta. Por ejemplo, se le muestran miles de fotos de perros y se le dice 'esto es un perro'. Así, la IA aprende a identificar perros en fotos nuevas. Es como aprender con un maestro que te da muchos ejemplos y te corrige.\n\n**Concepto clave:** Se llama 'supervisado' porque hay una 'supervisión' o 'guía' con las respuestas correctas en los datos de entrenamiento.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/cuarto/aprendizaje_supervisado.png",
              alt: "Diagrama de aprendizaje supervisado"
            },
          },
          {
            heading: "Aprendizaje No Supervisado: Encontrando Patrones por Sí Misma",
            content: "En el **aprendizaje no supervisado**, la IA no tiene respuestas correctas. Su tarea es encontrar **patrones ocultos** o agrupar datos similares por sí misma. Por ejemplo, podría agrupar clientes con gustos parecidos sin que le digamos de antemano qué gustos buscar. Es como explorar una cueva oscura y descubrir formaciones que nunca habías visto antes.\n\n**Pregunta para pensar:** ¿Cómo podría un sistema de IA agrupar diferentes tipos de canciones sin que le digas el género?",
            multimedia: {
              type: "animation",
              src: "/assets/ai4k12/cuarto/aprendizaje_no_supervisado.gif",
              alt: "Animación de agrupamiento de datos"
            },
          },
          {
            heading: "Aplicaciones del Aprendizaje Automático",
            content: "El Machine Learning está en todas partes: los filtros de spam en tu correo, los sistemas de recomendación de películas, el reconocimiento facial en tu teléfono, y hasta en la detección de fraudes bancarios. Su capacidad para aprender de los datos lo hace extremadamente útil.\n\n**Dato curioso:** ¡Los coches autónomos usan Machine Learning para aprender a conducir de forma segura al analizar miles de horas de conducción humana!",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/video_ejemplo_razonamiento6",
              alt: "Video de aplicaciones de Machine Learning"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Clasifica Datos como una IA",
          description: "Recoge 20 objetos pequeños y variados (monedas, clips, lápices, gomas). Primero, clasifícalos como en 'aprendizaje supervisado' (ej. 'metales', 'plásticos') con etiquetas. Luego, clasifícalos de nuevo, pero sin etiquetas previas, como en 'aprendizaje no supervisado', encontrando tus propios grupos lógicos. ¿Encontraste patrones diferentes?",
          example: "Puedes usar colores, formas o texturas para crear tus propios grupos lógicos en el aprendizaje no supervisado.",
        },
        relatedLinks: "curso/cuarto/aprendeia"
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
        sections: [{
            heading: "Más Allá de los Botones: La Conversación con IA",
            content: "Las interfaces tradicionales usan botones y menús. Las interfaces inteligentes usan la IA para permitirnos interactuar con voz, gestos o incluso texto libre. Esto hace que la tecnología sea más accesible y natural. Piensa en cómo un altavoz inteligente responde a tus órdenes de voz o cómo tu teléfono reconoce tu huella dactilar.\n\n**Concepto clave:** Las **interfaces de usuario naturales (NUI)** buscan que la interacción con la tecnología sea lo más parecida posible a la interacción humana.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/cuarto/interaccion_nui.png",
              alt: "Ejemplos de interacción con voz y gestos"
            },
          },
          {
            heading: "Robots Sociales y Colaborativos",
            content: "Algunos robots están diseñados para interactuar directamente con humanos en entornos sociales o de trabajo. Los **robots sociales** pueden reconocer emociones, mantener conversaciones y ayudar en tareas diarias. Los **robots colaborativos** (cobots) trabajan junto a los humanos en fábricas, asistiéndolos en tareas que requieren fuerza o precisión.\n\n**Pregunta para pensar:** ¿Cómo crees que un robot social podría ayudar a los ancianos o a los niños en un hospital?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/video_ejemplo_razonamiento8",
              alt: "Video de robot social o cobot"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Diseña una Interfaz para un Robot Ayudante",
          description: "Imagina un robot que te ayuda en la cocina. Diseña una interfaz para interactuar con él. ¿Preferirías hablarle, tocar una pantalla, o hacer gestos? Dibuja cómo se vería la interacción y explica por qué elegiste esa forma de comunicación.",
          example: "Puedes dibujar al robot y a una persona haciendo gestos para que el robot se mueva o prepare algo.",
        },
        relatedLinks: "curso/cuarto/interaccion"
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
        sections: [{
            heading: "Beneficios de la IA para la Sociedad",
            content: "La IA tiene el potencial de resolver grandes problemas globales: puede ayudar a desarrollar medicinas más rápido, a predecir desastres naturales, a optimizar el uso de energía y a mejorar la educación. Su capacidad para procesar grandes cantidades de datos y encontrar soluciones es invaluable para el progreso social.\n\n**Concepto clave:** La **IA para el bien (AI for Good)** es una iniciativa que busca aplicar la IA para resolver los desafíos sociales y ambientales más apremiantes del mundo.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/cuarto/ia_beneficios_sociales.png",
              alt: "Iconos de IA en medicina, clima y educación"
            },
          },
          {
            heading: "Desafíos y Preocupaciones Éticas",
            content: "A pesar de sus beneficios, la IA presenta desafíos. La **privacidad de los datos** es una gran preocupación, ya que la IA a menudo necesita mucha información personal para funcionar. También existe el riesgo de **sesgos** en las decisiones de la IA si los datos de entrenamiento no son representativos. Además, debemos pensar en el futuro del trabajo y cómo la IA puede cambiar ciertas profesiones.\n\n**Pregunta para Debate:** Si un sistema de IA ayuda a decidir quién recibe un préstamo, ¿qué pasaría si tuviera sesgos?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef0",
              alt: "Video sobre ética y sesgos en IA"
            },
          },
          {
            heading: "Tu Rol como Ciudadano Digital",
            content: "Como ciudadanos digitales, es nuestra responsabilidad entender cómo funciona la IA, cuestionar sus decisiones cuando sea necesario y abogar por un desarrollo ético. Debemos ser críticos con la información generada por IA y proteger nuestra privacidad. Tu conocimiento y tu voz son importantes para moldear el futuro de la IA.\n\n**Dato curioso:** ¡Los gobiernos de todo el mundo están creando leyes y directrices para asegurar que la IA se use de manera justa y segura!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/cuarto/ciudadano_digital.png",
              alt: "Ilustración de persona informada sobre tecnología"
            },
          },
        ],
        challenge: {
          title: "Desafío Creativo: Crea un Código de Ética Simple para la IA",
          description: "Imagina que eres parte de un equipo que va a crear una nueva IA. Escribe 3 reglas muy importantes que tu equipo debería seguir para asegurar que su IA sea buena y justa para todos.",
          example: "Regla 1: La IA no debe discriminar a nadie. Regla 2: La IA debe proteger la privacidad de las personas.",
        },
        relatedLinks: "curso/cuarto/trivia"
      },
    ],
  },

  // --- Contenido para QUINTO GRADO ---
  {
    course: "quinto",
    ideas: [{
        id: "percepcion",
        title: "Idea 1: Sistemas de Percepción en IA",
        guidingText: "En quinto grado, profundizamos en cómo los sistemas de Inteligencia Artificial (IA) emulan y, en ocasiones, superan la capacidad humana de percibir el entorno. Exploraremos la visión por computadora y el procesamiento del lenguaje natural, dos pilares fundamentales que permiten a las máquinas 'entender' el mundo a través de datos complejos.",
        multimedia: {
          type: "image",
          src: "/assets/ai4k12/quinto/percepcion_intro.png",
          alt: "Infografía de sistemas de visión y procesamiento de lenguaje",
        },
        sections: [{
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
        relatedLinks: "curso/quinto/persepcionbasica"
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
        sections: [{
            heading: "Representación del Conocimiento Avanzada",
            content: "La IA utiliza modelos sofisticados para representar el conocimiento. Esto incluye **redes semánticas**, **ontologías** y **bases de datos de grafos**, que permiten a la IA entender las relaciones entre conceptos y hacer inferencias. Por ejemplo, si sabe que 'un perro es un mamífero' y 'los mamíferos respiran', puede inferir que 'un perro respira'.\n\n**Concepto Clave:** El **razonamiento basado en reglas** y el **razonamiento probabilístico** son métodos que la IA utiliza para tomar decisiones bajo incertidumbre, por ejemplo, en sistemas de diagnóstico médico.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/representacion_conocimiento_avanzada.png",
              alt: "Diagrama de red semántica"
            },
          },
          {
            heading: "Algoritmos de Planificación y Búsqueda Inteligente",
            content: "Para resolver problemas complejos, la IA utiliza **algoritmos de planificación** que determinan una secuencia de acciones para alcanzar un objetivo (ej. un robot que planifica cómo ensamblar un producto). Los **algoritmos de búsqueda** exploran un 'espacio de estados' para encontrar la solución óptima, como en los motores de juegos de ajedrez que evalúan millones de movimientos por segundo.\n\n**Pregunta para pensar:** ¿Cómo planificaría una IA el envío de un millón de paquetes por todo el mundo para que lleguen a tiempo?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef2",
              alt: "Video de algoritmo de planificación"
            },
          },
          {
            heading: "Sistemas Expertos y Razonamiento Lógico",
            content: "Los **sistemas expertos** son programas de IA que emulan el conocimiento y la capacidad de razonamiento de un experto humano en un dominio específico. Utilizan una base de conocimientos y un 'motor de inferencia' para responder preguntas o tomar decisiones, como un sistema que diagnostica enfermedades basándose en síntomas.\n\n**Dato curioso:** ¡Deep Blue de IBM, la IA que venció a Garry Kasparov en ajedrez, utilizaba extensivamente el razonamiento basado en reglas y la búsqueda!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/sistemas_expertos.png",
              alt: "Diagrama de sistema experto"
            },
          },
        ],
        challenge: {
          title: "Proyecto: Diseña un Algoritmo para un Juego de Estrategia",
          description: "Elige un juego de estrategia simple (ej. damas, un juego de cartas con pocas reglas). Diseña el 'árbol de decisiones' o las reglas lógicas que una IA seguiría para jugar de forma inteligente y ganar. Puedes usar un diagrama o un listado de 'si... entonces...'",
          example: "Para las damas: 'SI puedo capturar una pieza, ENTONCES capturo la pieza. SI no puedo capturar, ENTONCES muevo hacia adelante.'",
        },
        relatedLinks: "curso/quinto/mateia"
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
        sections: [{
            heading: "El Ciclo de Vida del Aprendizaje Automático",
            content: "El Machine Learning sigue un ciclo: **recopilación de datos**, **entrenamiento del modelo** (donde la IA aprende de los datos), **evaluación** (para ver qué tan bien aprendió) y **despliegue** (cuando la IA se usa en el mundo real). Este proceso iterativo permite a la IA mejorar constantemente.\n\n**Concepto Clave:** Un **modelo de Machine Learning** es el 'cerebro' que la IA ha 'construido' después de procesar los datos de entrenamiento; es lo que le permite hacer predicciones o clasificaciones.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/ml_ciclo_vida.png",
              alt: "Diagrama de ciclo de vida de ML"
            },
          },
          {
            heading: "Tipos de Aprendizaje: Supervisado, No Supervisado y por Refuerzo",
            content: "Además del aprendizaje **supervisado** (aprender de datos etiquetados) y **no supervisado** (encontrar patrones sin etiquetas), existe el **aprendizaje por refuerzo**. Aquí, la IA aprende a través de la **prueba y error**, recibiendo 'recompensas' por acciones correctas y 'castigos' por errores. Es como entrenar a una mascota: la recompensa por el buen comportamiento.\n\n**Pregunta para pensar:** ¿En qué situaciones sería útil que una IA aprendiera por refuerzo, como un robot que aprende a caminar?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef4",
              alt: "Video sobre tipos de aprendizaje automático"
            },
          },
          {
            heading: "Redes Neuronales: Inspiradas en el Cerebro",
            content: "Las **redes neuronales artificiales** son un tipo de algoritmo de Machine Learning inspirado en cómo funciona el cerebro humano. Tienen 'capas' de 'neuronas' interconectadas que procesan información. Son especialmente poderosas para tareas como el reconocimiento de imágenes y el procesamiento del lenguaje natural.\n\n**Dato curioso:** ¡Los avances en redes neuronales profundas (Deep Learning) han impulsado gran parte del progreso reciente en IA!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/red_neuronal.png",
              alt: "Diagrama simplificado de una red neuronal"
            },
          },
        ],
        challenge: {
          title: "Proyecto: Entrenando una IA Simple para Reconocer Dibujos",
          description: "Utiliza una herramienta de Machine Learning accesible (como Google Teachable Machine o Scratch con extensiones de IA). Recopila tus propios dibujos simples (ej. círculos, cuadrados, triángulos) como 'datos de entrenamiento'. Entrena el modelo para que la IA los reconozca. Luego, pruébalo y observa qué tan bien 'aprendió'.",
          example: "Puedes grabar tu voz diciendo 'sí' y 'no' para entrenar a la IA a reconocer esas palabras.",
        },
        relatedLinks: "curso/quinto/aprendeia"
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
        sections: [{
            heading: "Chatbots y Asistentes Virtuales Avanzados",
            content: "Más allá de las respuestas simples, los chatbots y asistentes virtuales modernos (como ChatGPT o Google Assistant) utilizan IA avanzada para mantener conversaciones complejas, entender el **contexto** de lo que decimos, y hasta generar texto creativo. Esto es posible gracias a los **grandes modelos de lenguaje (LLMs)**, que han sido entrenados con enormes cantidades de texto y código.\n\n**Concepto Clave:** Los LLMs pueden **generar texto coherente y relevante** en función de la entrada que reciben, lo que les permite 'conversar' de manera muy convincente.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/llm_chatbot.png",
              alt: "Ilustración de un LLM generando texto"
            },
          },
          {
            heading: "Robótica Social: Compañeros Inteligentes",
            content: "La **robótica social** se enfoca en crear robots que puedan interactuar con los humanos de manera natural y emocionalmente inteligente. Estos robots pueden interpretar expresiones faciales, tono de voz y gestos. Se utilizan en educación, cuidado de ancianos y como compañeros. Pueden ser muy útiles, pero también plantean preguntas sobre cómo nos relacionamos con las máquinas.\n\n**Pregunta para pensar:** ¿Crearías un robot que pudiera sentir emociones humanas? ¿Por qué sí o por qué no?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef6",
              alt: "Video de robot social"
            },
          },
          {
            heading: "Desafíos de la Interacción Natural",
            content: "A pesar de los avances, la interacción natural con la IA tiene desafíos. La IA puede malinterpretar el sarcasmo o la ironía. También puede haber problemas de **privacidad** con el uso de datos de voz o faciales. Es importante que la interacción sea transparente y que los usuarios sepan cuándo están hablando con una IA y cómo se usan sus datos.\n\n**Dato curioso:** ¡Algunos robots sociales están diseñados para tener 'personalidades' diferentes, adaptándose a las preferencias del usuario!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/desafios_interaccion.png",
              alt: "Ilustración de la complejidad de la comunicación"
            },
          },
        ],
        challenge: {
          title: "Proyecto: Diseña un Diálogo para un Robot Educativo",
          description: "Imagina que diseñas un robot social para ayudar a los estudiantes en una clase. Escribe un diálogo entre un estudiante y este robot. Incluye cómo el robot podría: a) entender una pregunta difícil, b) dar una pista, c) animar al estudiante. ¿Cómo harías que el robot suene amable y útil?",
          example: "Estudiante: 'No entiendo este problema de matemáticas.' Robot: 'Entiendo que el problema es un poco difícil. ¿Quieres que te dé un ejemplo similar?'",
        },
        relatedLinks: "curso/quinto/interaccion"
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
        sections: [{
            heading: "IA y el Futuro del Trabajo",
            content: "La IA está automatizando muchas tareas, lo que transformará el mundo laboral. Algunas profesiones podrían cambiar o desaparecer, pero también surgirán nuevas. La clave es la **adaptabilidad** y el desarrollo de habilidades que complementen la IA, como la creatividad, el pensamiento crítico y la inteligencia emocional.\n\n**Concepto Clave:** La **automatización** es el uso de tecnología para realizar tareas con poca o ninguna intervención humana, a menudo impulsada por IA.",
            multimedia: {
              type: "image",
              src: "/assets/ai4k1k2/quinto/futuro_trabajo.png",
              alt: "Gráfico de cambio de profesiones por IA"
            },
          },
          {
            heading: "Privacidad, Seguridad y Sesgos en la IA",
            content: "La IA maneja enormes cantidades de datos, lo que plantea preocupaciones sobre la **privacidad** (cómo se usa nuestra información personal) y la **seguridad** (protección contra ciberataques). Además, los **sesgos** en los datos de entrenamiento pueden llevar a decisiones injustas o discriminatorias de la IA, por ejemplo, en sistemas de reconocimiento facial o de préstamos. Es vital que las IAs sean **equitativas**.\n\n**Pregunta para Debate:** Si una IA ayuda a seleccionar candidatos para un empleo, ¿qué pasaría si los datos con los que aprendió tuvieran sesgos de género o raza?",
            multimedia: {
              type: "video",
              src: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef8",
              alt: "Video sobre privacidad y sesgos en IA"
            },
          },
          {
            heading: "IA Responsable y el Papel de los Ciudadanos",
            content: "Desarrollar y usar la IA de manera **responsable** implica considerar sus efectos a largo plazo en la sociedad. Esto incluye crear leyes, promover la **transparencia** en los algoritmos de IA y educar a las personas. Como ciudadanos, tenemos el poder de exigir una IA ética y de participar en el debate sobre su desarrollo. Tu opinión cuenta para moldear un futuro donde la IA beneficie a todos.\n\n**Dato curioso:** ¡Existen organizaciones globales trabajando en la creación de directrices éticas para el desarrollo de la IA!",
            multimedia: {
              type: "image",
              src: "/assets/ai4k12/quinto/ia_responsable_global.png",
              alt: "Ilustración de comunidad global discutiendo IA"
            },
          },
        ],
        challenge: {
          title: "Proyecto: Debate sobre un Dilema Ético de la IA",
          description: "Elige uno de los siguientes dilemas éticos de la IA y prepara argumentos a favor y en contra. Presenta tu postura y las razones detrás de ella. Dilemas: a) Coches autónomos: ¿quién es responsable en caso de accidente? b) IA en la vigilancia: ¿seguridad o invasión de privacidad? c) IA en el arte: ¿es arte si lo crea una máquina?",
          example: "Para el coche autónomo: A favor de la IA: 'Puede reaccionar más rápido que un humano'. En contra: 'Si falla, ¿quién asume la culpa?'",
        },
        relatedLinks: "curso/quinto/trivia"
      },
    ],
  },
  {
    "course": "sexto",
    "ideas": [{
        "id": "percepcion",
        "title": "Idea 1: Sensores y Percepción en Sistemas Inteligentes",
        "guidingText": "En sexto grado, descubriremos cómo los sistemas de IA 'perciben' el mundo a través de sensores, similar a como nosotros usamos nuestros sentidos. Exploraremos cómo las máquinas ven, escuchan y sienten su entorno para tomar decisiones.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/sexto/sensores_intro.png",
          "alt": "Diferentes tipos de sensores robóticos"
        },
        "sections": [{
            "heading": "Los Sentidos de las Máquinas",
            "content": "Las máquinas usan sensores como cámaras (vista), micrófonos (oído), sensores táctiles (tacto) y de proximidad para entender su entorno. Estos sensores convierten información física del mundo real en datos digitales que la computadora puede procesar.\n\n**Ejemplo cotidiano:** Los teléfonos inteligentes usan sensores de luz ambiental para ajustar el brillo de la pantalla automáticamente.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/sensores_tipos.png",
              "alt": "Tipos de sensores en dispositivos cotidianos"
            }
          },
          {
            "heading": "Reconocimiento Básico de Patrones",
            "content": "La IA puede aprender a reconocer patrones simples como formas geométricas, colores o sonidos básicos. Esto se hace mediante ejemplos repetitivos que 'entrenan' al sistema para identificar características comunes.\n\n**Actividad mental:** ¿Cómo crees que un sistema de IA distinguiría entre un gato y un perro en imágenes?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/reconocimiento_patrones",
              "alt": "Video demostrativo de reconocimiento de patrones"
            }
          },
          {
            "heading": "Aplicaciones en la Vida Diaria",
            "content": "Los sistemas de percepción están en todas partes: asistentes virtuales que responden a nuestra voz, cámaras que reconocen caras para desbloquear phones, y vehículos que detectan obstáculos. Estas tecnologías hacen nuestra vida más conveniente y segura.\n\n**Dato curioso:** ¡Algunos robots pueden 'sentir' textures usando sensores en sus dedos!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/aplicaciones_sensores.png",
              "alt": "Aplicaciones cotidianas de sensores IA"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Diseña un Robot con Sentidos Especiales",
          "description": "Imagina que debes diseñar un robot para una tarea específica (explorar Marte, ayudar en casa, etc.). ¿Qué sensores necesitaría? Dibuja tu robot y etiqueta sus sensores, explicando para qué serviría cada uno.",
          "example": "Robot explorador: sensores de temperatura, cámaras, sensores de movimiento, detector de metales."
        },
        "relatedLinks": "curso/sexto/percepcionbasica"
      },
      {
        "id": "representacion-y-razonamiento",
        "title": "Idea 2: Cómo Toman Decisiones los Sistemas Inteligentes",
        "guidingText": "Exploraremos el proceso básico de toma de decisiones en IA, desde la percepción hasta la acción. Veremos cómo las máquinas usan reglas simples y datos para elegir entre diferentes opciones.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/sexto/decisiones_intro.png",
          "alt": "Diagrama de flujo de toma de decisiones"
        },
        "sections": [{
            "heading": "De la Percepción a la Acción",
            "content": "Los sistemas inteligentes siguen un ciclo constante: perciben el entorno, procesan la información, deciden una acción y la ejecutan. Este ciclo se repite constantemente, permitiendo a la máquina adaptarse a cambios en su ambiente.\n\n**Ejemplo simple:** Un termostato inteligente percibe la temperatura, la compara con la deseada, y decide encender o apagar la calefacción.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/ciclo_percepcion_accion.png",
              "alt": "Ciclo percepción-decisión-acción"
            }
          },
          {
            "heading": "Decisiones Basadas en Reglas",
            "content": "Muchos sistemas usan reglas de \"si-entonces\" para tomar decisiones. Si se cumple una condición, entonces se ejecuta una acción. Estas reglas pueden combinarse para crear comportamientos complejos.\n\n**Pregunta para reflexionar:** ¿Qué reglas usaría un semáforo inteligente para decidir cuándo cambiar de luz?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/reglas_decisiones",
              "alt": "Video explicativo de reglas de decisión"
            }
          },
          {
            "heading": "Aprendiendo de las Decisiones",
            "content": "Algunos sistemas pueden mejorar sus decisiones con el tiempo, recordando qué acciones llevaron a buenos resultados y cuáles no. Esto es similar a cómo nosotros aprendemos de la experiencia.\n\n**Dato curioso:** ¡Los videojuegos usan sistemas de IA que aprenden de cómo juegas para ofrecerte desafíos adecuados!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/aprendizaje_decisiones.png",
              "alt": "Sistema aprendiendo de decisiones previas"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Crea un Árbol de Decisiones para un Personaje de Videojuego",
          "description": "Diseña las reglas de comportamiento para un personaje no jugador en un videojuego simple. Crea un diagrama de flujo con las decisiones que tomaría en diferentes situaciones.",
          "example": "Personaje enemigo: SI el jugador está cerca → atacar, SI tiene poca vida → huir, SI no pasa nada → patrullar."
        },
        "relatedLinks": "curso/sexto/mateia"
      },
      {
        "id": "aprendizaje",
        "title": "Idea 3: Introducción al Aprendizaje Automático",
        "guidingText": "Descubriremos cómo las máquinas pueden aprender de ejemplos y experiencias, sin necesidad de ser programadas para cada tarea específica. Veremos los conceptos básicos del aprendizaje automático mediante ejemplos cotidianos.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/sexto/aprendizaje_intro.png",
          "alt": "Proceso de aprendizaje automático simplificado"
        },
        "sections": [{
            "heading": "Aprendiendo con Ejemplos",
            "content": "El aprendizaje automático permite a las computadoras aprender patterns a partir de datos. Cuantos más ejemplos vea, mejor podrá reconocer patterns similares en el futuro.\n\n**Ejemplo concreto:** Un sistema que ve miles de imágenes de gatos aprende a reconocer gatos en nuevas fotos.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/aprendizaje_ejemplos.png",
              "alt": "Proceso de entrenamiento con ejemplos"
            }
          },
          {
            "heading": "Tipos de Aprendizaje Sencillos",
            "content": "Existen diferentes formas en que las máquinas aprenden: con supervisión (etiquetando ejemplos), sin supervisión (encontrando patterns por sí mismas) y por refuerzo (aprendiendo de aciertos y errores).\n\n**Analogía:** Aprender con supervisión es como estudiar con las respuestas del libro; aprender por refuerzo es como aprender a andar en bicicleta: con práctica y algunos tropiezos.",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/tipos_aprendizaje",
              "alt": "Video sobre tipos de aprendizaje"
            }
          },
          {
            "heading": "Aplicaciones en Juegos y Apps",
            "content": "El aprendizaje automático está en muchas aplicaciones que usamos daily: recomendaciones de videos, filtros de fotos, traductores automáticos y asistentes virtuales. Estas herramientas mejoran constantemente gracias a que aprenden de cómo las usamos.\n\n**Dato curioso:** ¡El sistema de recomendaciones de Netflix mejora sus sugerencias cada vez que eliges qué ver!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/aplicaciones_aprendizaje.png",
              "alt": "Aplicaciones cotidianas de aprendizaje automático"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Entrena un Modelo Simple con Herramientas Visuales",
          "description": "Usa una herramienta educativa como Machine Learning for Kids o Teachable Machine para entrenar un modelo que reconozca tus propios dibujos de emojis o objetos simples. Documenta el proceso y los resultados.",
          "example": "Entrenar un modelo para distinguir entre dibujos de caras felices, tristes y enojadas."
        },
        "relatedLinks": "curso/sexto/entrenadoria"
      },
      {
        "id": "interaccion-natural",
        "title": "Idea 4: Interacción entre Humanos y Máquinas",
        "guidingText": "Exploraremos cómo los humanos y las máquinas pueden comunicarse y trabajar juntos. Veremos diferentes formas de interacción, desde interfaces simples hasta sistemas más avanzados que comprenden lenguaje natural.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/sexto/interaccion_intro.png",
          "alt": "Personas interactuando con diferentes tecnologías"
        },
        "sections": [{
            "heading": "Formas de Comunicación",
            "content": "Los humanos nos comunicamos con las máquinas de muchas maneras: teclados, pantallas táctiles, comandos de voz, gestos, e incluso con la mirada. Cada forma tiene sus ventajas para diferentes situaciones.\n\n**Reflexión:** ¿Por qué crees que los asistentes de voz como Siri o Alexa se han vuelto tan populares?",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/formas_comunicacion.png",
              "alt": "Diferentes interfaces humano-máquina"
            }
          },
          {
            "heading": "Entendiendo el Lenguaje Humano",
            "content": "Los sistemas de IA pueden aprender a entender palabras y frases simples, pero el lenguaje humano es complejo y lleno de matices. A veces las máquinas pueden malinterpretar lo que decimos.\n\n**Ejemplo divertido:** Pregúntale a un asistente virtual '¿puedes cantar?' y luego '¿puedes cantar?' con diferente entonación.",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/lenguaje_natural",
              "alt": "Ejemplos de interacción por voz"
            }
          },
          {
            "heading": "Trabajo en Equipo Humano-Máquina",
            "content": "Lo más interesante ocurre cuando humanos y máquinas colaboran, aprovechando las fortalezas de cada uno. Las máquinas son buenas procesando mucha información rápido; los humanos somos buenos con el sentido común y la creatividad.\n\n**Dato curioso:** ¡En algunos hospitales, cirujanos humanos operan con robots que amplifican su precisión!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/colaboracion_hm.png",
              "alt": "Colaboración humano-máquina"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Diseña una Interacción Ideal con un Sistema de IA",
          "description": "Imagina un sistema de IA para ayudar con las tareas escolares. Diseña cómo te gustaría interactuar con él: ¿por voz, por chat, con gestos? Describe una conversación ejemplo y cómo el sistema entendería tus necesidades.",
          "example": "Usuario: 'No entiendo las fracciones' → IA: '¿Quieres que te explique con ejemplos de pizza o con ejercicios prácticos?'"
        },
        "relatedLinks": "curso/sexto/chatbot"
      },
      {
        "id": "impacto-social",
        "title": "Idea 5: Ética y Responsabilidad en la IA",
        "guidingText": "Reflexionaremos sobre cómo la IA afecta nuestra sociedad y las responsabilidades que tenemos al diseñar y usar estas tecnologías. Exploraremos conceptos básicos de privacidad, equidad y transparencia en sistemas inteligentes.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/sexto/etica_intro.png",
          "alt": "Balance entre tecnología y valores humanos"
        },
        "sections": [{
            "heading": "Privacidad y Datos Personales",
            "content": "Los sistemas de IA often necesitan datos para funcionar, pero es importante proteger nuestra información personal. Debemos ser conscientes de qué datos compartimos y con quién.\n\n**Pregunta importante:** ¿Deberían los sistemas de IA tener acceso a toda nuestra información para ser más útiles?",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/privacidad_datos.png",
              "alt": "Protección de datos personales"
            }
          },
          {
            "heading": "Equidad e Inclusión",
            "content": "Los sistemas de IA pueden reflejar los biases de sus creadores o de los datos con que fueron entrenados. Es importante que la tecnología sea justa y funcione bien para todas las personas, regardless de su origen o características.\n\n**Ejemplo para discutir:** Si un sistema de reconocimiento facial fue entrenado principalmente con caras de un grupo étnico, ¿funcionará igual para todos?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/equidad_ia",
              "alt": "Video sobre equidad en IA"
            }
          },
          {
            "heading": "Nuestra Responsabilidad como Usuarios",
            "content": "Como usuarios de tecnología, tenemos la responsabilidad de usarla de manera consciente y crítica. Debemos preguntarnos cómo afecta nuestra vida, qué valores promueve, y cómo podemos asegurar que se use para el bien común.\n\n**Dato esperanzador:** ¡Cada vez más jóvenes como ustedes están participando en crear pautas para el uso responsable de la IA!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/sexto/responsabilidad_usuarios.png",
              "alt": "Usuarios responsables de tecnología"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Desarrolla un Código de Ética para el Uso de IA en el Aula",
          "description": "En grupo, creen un conjunto de 5-7 reglas para el uso responsable de IA en su escuela. Consideren aspectos como: privacidad, equidad, honestidad académica y apoyo al aprendizaje.",
          "example": "Regla 1: Usaremos IA como herramienta de aprendizaje, no para hacer nuestro trabajo. Regla 2: No compartiremos información personal con sistemas de IA."
        },
        "relatedLinks": "curso/sexto/trivia"
      }
    ]
  }, {
    "course": "septimo",
    "ideas": [{
        "id": "percepcion",
        "title": "Idea 1: Procesamiento y Análisis de Datos en IA",
        "guidingText": "En séptimo grado, exploraremos cómo los sistemas de IA procesan y analizan grandes cantidades de información. Descubriremos que los datos son el 'combustible' de la inteligencia artificial y aprenderemos a entender cómo se transforman en conocimiento útil.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/septimo/procesamiento_datos_intro.png",
          "alt": "Proceso de transformación de datos en información"
        },
        "sections": [{
            "heading": "El Viaje de los Datos",
            "content": "Los datos pasan por varias etapas: recolección, limpieza (eliminar errores), organización y análisis. Cada paso es crucial para que la IA pueda aprender patterns precisos y tomar decisiones acertadas.\n\n**Ejemplo práctico:** Una app de clima recoge datos de temperatura, humedad y viento, los limpia de mediciones erróneas, los organiza por ubicación y luego predice el clima futuro.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/viaje_datos.png",
              "alt": "Etapas del procesamiento de datos"
            }
          },
          {
            "heading": "Patterns y Tendencias",
            "content": "La IA es excelente encontrando patterns que los humanos podríamos pasar por alto. Puede detectar relaciones entre variables aparentemente no relacionadas y predecir tendencias futuras basadas en datos históricos.\n\n**Pregunta analítica:** ¿Qué patterns podría encontrar la IA en los datos de tu rendimiento académico que te ayudarían a mejorar?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/patterns_datos",
              "alt": "Video sobre detección de patterns en datos"
            }
          },
          {
            "heading": "Visualización de Datos",
            "content": "Convertir datos complejos en gráficos e imágenes ayuda a los humanos a entender lo que la IA ha descubierto. Las visualizaciones hacen visible lo invisible, revelando historias ocultas en los números.\n\n**Dato curioso:** ¡La visualización de datos ayuda a los médicos a diagnosticar enfermedades mediante el análisis de patrones en imágenes médicas!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/visualizacion_datos.png",
              "alt": "Ejemplos de visualización de datos"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Analiza y Visualiza Datos de tu Vida Cotidiana",
          "description": "Durante una semana, registra datos sobre alguna actividad diaria (horas de sueño, tiempo en pantallas, pasos caminados). Luego organízalos, busca patterns y crea una visualización que cuente la historia de tus datos.",
          "example": "Registrar horas de estudio vs. calificaciones en exámenes, luego crear un gráfico que muestre si hay relación entre ambas variables."
        },
        "relatedLinks": "curso/septimo/percepcionbasica"
      },
      {
        "id": "representacion-y-razonamiento",
        "title": "Idea 2: Algoritmos de Búsqueda y Optimización",
        "guidingText": "Profundizaremos en cómo los sistemas de IA encuentran soluciones entre millones de posibilidades. Exploraremos diferentes estrategias que usan las máquinas para resolver problemas complejos de manera eficiente.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/septimo/algoritmos_busqueda_intro.png",
          "alt": "Representación de algoritmos de búsqueda"
        },
        "sections": [{
            "heading": "Estrategias de Búsqueda Inteligente",
            "content": "Los algoritmos de búsqueda ayudan a la IA a encontrar caminos óptimos entre muchas opciones. Algunos exploran todas las posibilidades metódicamente, mientras otros usan 'atajos' inteligentes basados en experiencia previa.\n\n**Analogía:** Encontrar la salida de un laberinto: puedes probar todos los caminos o seguir pistas que te acerquen a la salida.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/estrategias_busqueda.png",
              "alt": "Diferentes estrategias de búsqueda"
            }
          },
          {
            "heading": "Aplicaciones en el Mundo Real",
            "content": "Estos algoritmos están detrás de sistemas de navegación que encuentran la ruta más rápida, plataformas de entrega que optimizan repartos, y motores de recomendación que encuentran contenido relevante entre millones de opciones.\n\n**Reflexión:** ¿Cómo crees que Uber o Rappi deciden qué conductor asignar a cada pedido?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/aplicaciones_busqueda",
              "alt": "Aplicaciones de algoritmos de búsqueda"
            }
          },
          {
            "heading": "Búsqueda Heurística",
            "content": "Las heurísticas son 'reglas prácticas' que ayudan a la IA a tomar decisiones inteligentes sin tener que analizar todas las posibilidades. Son como consejos experimentados que guían la búsqueda hacia soluciones prometedoras.\n\n**Dato curioso:** ¡Los algoritmos que juegan ajedrez usan heurísticas para evaluar qué tan 'buena' es una posición sin calcular todas las jugadas posibles!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/busqueda_heuristica.png",
              "alt": "Búsqueda heurística en acción"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Diseña un Algoritmo para Optimizar tu Tiempo",
          "description": "Crea un algoritmo que optimice tu rutina semanal. Considera: tiempos de traslado, horarios de clases, tiempo de estudio y descanso. ¿Qué 'reglas heurísticas' usarías para tomar decisiones inteligentes?",
          "example": "Regla heurística: 'Si tengo poco tiempo entre clases, priorizar tareas cortas sobre proyectos largos'."
        },
        "relatedLinks": "curso/septimo/mateia"
      },
      {
        "id": "aprendizaje",
        "title": "Idea 3: Introducción a las Redes Neuronales",
        "guidingText": "Descubriremos una de las tecnologías más poderosas de la IA: las redes neuronales. Veremos cómo se inspiran en el cerebro humano y cómo aprenden a reconocer patterns complejos mediante capas interconectadas de 'neuronas' artificiales.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/septimo/redes_neuronales_intro.png",
          "alt": "Red neuronal artificial básica"
        },
        "sections": [{
            "heading": "Inspiradas en el Cerebro",
            "content": "Las redes neuronales artificiales imitan simplificadamente cómo las neuronas biológicas se conectan y transmiten información. Cada 'neurona' artificial procesa información y la pasa a otras, creando una red capaz de aprender patterns complejos.\n\n**Comparación:** Como aprender a reconocer un perro: primero ves partes (patas, orejas, cola), luego combines estas partes para reconocer el animal completo.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/neurona_artificial.png",
              "alt": "Comparación neurona biológica vs. artificial"
            }
          },
          {
            "heading": "Capas de Aprendizaje",
            "content": "Las redes neuronales aprenden en capas: las primeras capas detectan features simples (bordes, colores), capas intermedias combinan estos features en formas más complejas, y capas finales hacen la clasificación o predicción.\n\n**Pregunta exploratoria:** ¿Cómo crees que una red neuronal aprendería a distinguir entre fotos de gatos y perros?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/capas_redes",
              "alt": "Video sobre capas de redes neuronales"
            }
          },
          {
            "heading": "Aplicaciones Sorprendentes",
            "content": "Las redes neuronales están detrás de traductores automáticos, sistemas de reconocimiento facial, coches autónomos y asistentes virtuales inteligentes. Su capacidad para aprender patterns complejos las hace increíblemente versátiles.\n\n**Dato asombroso:** ¡Algunas redes neuronales pueden generar rostros de personas que no existen, combinando features de miles de rostros reales!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/aplicaciones_redes.png",
              "alt": "Aplicaciones de redes neuronales"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Construye una Red Neuronal Simple con Herramientas Visuales",
          "description": "Usa herramientas como TensorFlow Playground o Neural Network Playground para experimentar con redes neuronales simples. Ajusta el número de capas y neuronas, y observa cómo afecta la capacidad de aprendizaje.",
          "example": "Intentar que una red neuronal aprenda a separar puntos azules de rojos en diferentes patrones (círculos, espirales, etc.)."
        },
        "relatedLinks": "curso/septimo/entrenaia"
      },
      {
        "id": "interaccion-natural",
        "title": "Idea 4: Procesamiento de Lenguaje Natural",
        "guidingText": "Exploraremos cómo las máquinas aprenden a entender, interpretar y generar lenguaje humano. Descubriremos los desafíos únicos del lenguaje natural y las técnicas que usan los sistemas de IA para comunicarse con nosotros.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/septimo/pln_intro.png",
          "alt": "Procesamiento de lenguaje natural"
        },
        "sections": [{
            "heading": "Del Texto al Significado",
            "content": "El PLN convierte palabras en representaciones que las máquinas pueden entender. Involucra entender la estructura gramatical, el significado de las palabras en contexto, y la intención detrás del mensaje.\n\n**Ejemplo complejo:** 'Me duele el banco' podría referirse a una institución financiera o a un mueble, según el contexto.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/texto_significado.png",
              "alt": "Proceso de entender significado"
            }
          },
          {
            "heading": "Desafíos del Lenguaje Humano",
            "content": "El lenguaje está lleno de ambigüedades, sarcasmo, ironía y modismos que son difíciles para las máquinas. Los sistemas de PLN deben aprender no solo el significado literal, sino también el contexto y la intención.\n\n**Reflexión:** ¿Por qué crees que es difícil para las máquinas entender chistes o sarcasmo?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/desafios_pln",
              "alt": "Desafíos del procesamiento de lenguaje"
            }
          },
          {
            "heading": "Generación de Lenguaje",
            "content": "Los sistemas modernos no solo entienden lenguaje, sino que pueden generarlo de manera coherente y contextualmente apropiada. Esto permite chatbots más naturales, traductores que preservan el estilo, y sistemas de escritura asistida.\n\n**Dato impresionante:** ¡Algunos sistemas de IA pueden escribir poemas o historias cortas que son indistinguibles de los escritos por humanos!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/generacion_lenguaje.png",
              "alt": "Generación de lenguaje natural"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Analiza y Mejora Conversaciones con Chatbots",
          "description": "Interactúa con diferentes chatbots (asistentes virtuales, chatbots de servicio al cliente) y documenta sus aciertos y errores. Luego propone mejoras para hacer las conversaciones más naturales y efectivas.",
          "example": "Chatbot: '¿En qué puedo ayudarte?' → Usuario: 'Estoy triste' → Chatbot actual: 'Lo siento' → Chatbot mejorado: 'Lamento escuchar eso. ¿Quieres hablar sobre qué te tiene triste?'"
        },
        "relatedLinks": "curso/septimo/chatbot"
      },
      {
        "id": "impacto-social",
        "title": "Idea 5: IA y Transformación Social",
        "guidingText": "Analizaremos cómo la IA está transformando diferentes aspectos de nuestra sociedad, desde el trabajo hasta el entretenimiento. Desarrollaremos pensamiento crítico sobre los cambios que trae la tecnología y cómo podemos participar en moldear este futuro.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/septimo/ia_sociedad_intro.png",
          "alt": "Impacto de la IA en la sociedad"
        },
        "sections": [{
            "heading": "Transformación del Mundo Laboral",
            "content": "La IA está automatizando algunas tareas mientras crea nuevas oportunidades. Algunos trabajos evolucionarán, otros desaparecerán y surgirán profesiones que hoy no existen. La adaptabilidad será clave.\n\n**Pregunta prospectiva:** ¿Qué habilidades crees que serán más valiosas en un mundo con IA avanzada?",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/trabajo_futuro.png",
              "alt": "Evolución del trabajo con IA"
            }
          },
          {
            "heading": "IA en la Educación y Salud",
            "content": "La IA está revolucionando sectores clave como educación (tutores personalizados, contenido adaptativo) y salud (diagnóstico asistido, monitoreo remoto). Estas aplicaciones tienen el potencial de mejorar vidas a escala global.\n\n**Ejemplo inspirador:** Sistemas de IA que ayudan a detectar cáncer en etapas tempranas con mayor precisión que humanos.",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/ia_salud_educacion",
              "alt": "IA en salud y educación"
            }
          },
          {
            "heading": "Participación Ciudadana en la Era IA",
            "content": "Como ciudadanos del siglo XXI, tenemos el derecho y la responsabilidad de participar en cómo se desarrolla y regula la IA. Nuestras voces importan para asegurar que la tecnología sirva al bien común y no amplifique desigualdades.\n\n**Dato esperanzador:** ¡Cada vez más países incluyen a jóvenes en conversaciones sobre políticas de IA!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/septimo/participacion_ciudadana.png",
              "alt": "Ciudadanos participando en gobernanza de IA"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Propuesta para el Uso de IA en tu Comunidad",
          "description": "Identifica un problema en tu comunidad que podría resolverse con IA. Investiga soluciones existentes, considera implicaciones éticas, y crea una propuesta detallada para implementar responsablemente esta tecnología.",
          "example": "Problema: Basura en parques. Solución: Sensores IA que detecten basura y alerten a servicios de limpieza. Consideraciones: Privacidad, costo, mantenimiento."
        },
        "relatedLinks": "curso/septimo/trivia"
      }
    ]
  }, {
    "course": "octavo",
    "ideas": [{
        "id": "percepcion",
        "title": "Idea 1: Visión por Computadora Avanzada",
        "guidingText": "En octavo grado, profundizaremos en cómo los sistemas de IA 'ven' e interpretan el mundo visual. Exploraremos técnicas avanzadas de procesamiento de imágenes que permiten a las máquinas detectar objetos, reconocer patrones complejos e incluso entender escenas completas.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/octavo/vision_avanzada_intro.png",
          "alt": "Procesamiento avanzado de imágenes por IA"
        },
        "sections": [{
            "heading": "Detectando y Clasificando Objetos",
            "content": "Los sistemas modernos de visión por computadora no solo reconocen objetos, sino que pueden localizarlos precisamente en imágenes, contar cuántos hay, y determinar sus relaciones espaciales. Esto es crucial para aplicaciones como vehículos autónomos y sistemas de vigilancia inteligente.\n\n**Ejemplo técnico:** YOLO (You Only Look Once) es un algoritmo que detecta y clasifica múltiples objetos en una imagen en tiempo real.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/deteccion_objetos.png",
              "alt": "Detección y clasificación de objetos"
            }
          },
          {
            "heading": "Segmentación Semántica",
            "content": "La segmentación va más allá de detectar objetos: asigna cada píxel de una imagen a una categoría específica. Esto permite entender escenas completas, diferenciando entre camino, peatones, edificios y vegetación en imágenes urbanas.\n\n**Pregunta analítica:** ¿Cómo podría la segmentación semántica ayudar a un robot de rescate en una zona de desastre?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/segmentacion_semantica",
              "alt": "Video sobre segmentación semántica"
            }
          },
          {
            "heading": "Aplicaciones en Tiempo Real",
            "content": "La visión por computadora avanzada permite aplicaciones en tiempo real como seguimiento de movimiento, reconocimiento de gestos, y análisis de video en directo. Estas tecnologías están transformando desde el deporte (análisis de jugadas) hasta la medicina (cirugía asistida).\n\n**Dato impresionante:** ¡Los sistemas de visión por computadora pueden analizar más de 1000 imágenes por segundo, superando por mucho la capacidad humana!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/tiempo_real.png",
              "alt": "Aplicaciones en tiempo real"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Sistema de Análisis Deportivo con Visión por Computadora",
          "description": "Diseña un sistema que use visión por computadora para analizar un deporte (fútbol, baloncesto, etc.). Especifica qué detectaría (jugadores, balón, portería), qué métricas calcularía (posesión, tiros, pases) y cómo presentaría los resultados.",
          "example": "Sistema que detecta cuando un jugador de fútbol está en posición de fuera de juego y alerta automáticamente a los árbitros."
        },
        "relatedLinks": "curso/octavo/percepciondetectiveia"
      },
      {
        "id": "representacion-y-razonamiento",
        "title": "Idea 2: Aprendizaje Profundo y Redes Neuronales Convolucionales",
        "guidingText": "Profundizaremos en el aprendizaje profundo, explorando arquitecturas especializadas como las redes neuronales convolucionales (CNN) que han revolucionado el procesamiento de imágenes. Entenderemos cómo estas redes aprenden features jerárquicamente desde patrones simples hasta conceptos complejos.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/octavo/deep_learning_intro.png",
          "alt": "Arquitectura de red neuronal convolucional"
        },
        "sections": [{
            "heading": "Arquitectura de las CNN",
            "content": "Las redes neuronales convolucionales usan capas especializadas: convolucionales (detectan patrones locales), de pooling (reducen dimensionalidad) y fully connected (clasifican). Esta estructura las hace extremadamente efectivas para datos con estructura espacial como imágenes.\n\n**Analogía:** Como aprender a reconocer un rostro: primero bordes, luego ojos/nariz/boca, después rostros completos, finalmente identidades específicas.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/arquitectura_cnn.png",
              "alt": "Capas de una CNN"
            }
          },
          {
            "heading": "Transfer Learning y Fine-Tuning",
            "content": "El transfer learning permite usar redes pre-entrenadas en grandes datasets y adaptarlas a problemas específicos con pocos datos. El fine-tuning ajusta estos modelos para optimizar su rendimiento en tareas particulares.\n\n**Reflexión:** ¿Por qué es útil usar conocimiento de un problema general (reconocer objetos) para resolver uno específico (detectar enfermedades en radiografías)?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/transfer_learning",
              "alt": "Video sobre transfer learning"
            }
          },
          {
            "heading": "Visualizando lo que Aprenden las Redes",
            "content": "Técnicas como Grad-CAM y activation maps nos permiten 'ver' qué partes de una imagen son más importantes para la decisión de la red. Esto ayuda a entender y confiar en las predicciones de IA.\n\n**Dato revelador:** ¡A veces las redes neuronales se enfocan en features irrelevantes (marcas de agua, fondos) instead de los objetos principales, revelando sesgos en el entrenamiento!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/visualizacion_aprendizaje.png",
              "alt": "Visualización de lo que aprende la red"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Entrena una CNN para Clasificar tu Propio Dataset",
          "description": "Crea un dataset de imágenes personalizado (diferentes tipos de plantas, marcas de autos, estilos arquitectónicos). Usa herramientas como Teachable Machine o plataformas de código para entrenar y evaluar una CNN que las clasifique.",
          "example": "Dataset de 5 clases de flores locales, entrenar modelo que las distinga con al menos 85% de precisión."
        },
        "relatedLinks": "curso/octavo/mateia"
      },
      {
        "id": "aprendizaje",
        "title": "Idea 3: Procesamiento de Lenguaje Natural Avanzado",
        "guidingText": "Exploraremos técnicas avanzadas de PLN que permiten a las máquinas entender matices del lenguaje, contextos complejos, y generar texto coherente y contextualmente relevante. Veremos cómo los transformers han revolucionado este campo.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/octavo/pln_avanzado_intro.png",
          "alt": "Arquitectura transformer para PLN"
        },
        "sections": [{
            "heading": "Modelos de Transformers y Atención",
            "content": "Los transformers usan mecanismos de atención que permiten a la modelo 'prestar atención' a diferentes partes del texto según su relevancia para la tarea. Esto resuelve limitaciones de modelos anteriores en entender contextos largos y dependencias complejas.\n\n**Ejemplo técnico:** BERT y GPT son architectures basadas en transformers que han establecido nuevos récords en comprensión y generación de lenguaje.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/mechanismo_atencion.png",
              "alt": "Mecanismo de atención en transformers"
            }
          },
          {
            "heading": "Análisis de Sentimiento y Emociones",
            "content": "Los sistemas avanzados pueden detectar no solo el tema de un texto, sino también el tono emocional, la intención del autor, y hasta detectar ironía o sarcasmo. Esto es valioso para análisis de redes sociales, atención al cliente, y investigación de mercado.\n\n**Pregunta crítica:** ¿Qué desafíos éticos podrían surgir al analizar automáticamente las emociones de las personas?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/analisis_sentimiento",
              "alt": "Video sobre análisis de sentimiento"
            }
          },
          {
            "heading": "Generación de Texto Creativo",
            "content": "Los modelos de lenguaje modernos pueden generar texto creativo coherente, desde poesía y historias hasta código de programación y artículos periodísticos. Esta capacidad abre posibilidades fascinantes pero también plantea preguntas sobre autoría y originalidad.\n\n**Dato asombroso:** ¡Algunos modelos pueden mantener conversaciones coherentes por miles de turnos, recordando contexto y mostrando personalidad consistente!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/generacion_texto.png",
              "alt": "Generación de texto creativo"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Analiza y Genera Contenido con Modelos de Lenguaje",
          "description": "Usa APIs de modelos de lenguaje (como OpenAI o Hugging Face) para: 1) Analizar el sentimiento de comentarios de redes sociales sobre un tema, 2) Generar contenido creativo (historias, poemas) sobre un tema específico, y 3) Evaluar la calidad y coherencia del output.",
          "example": "Generar un poema sobre la inteligencia artificial en el estilo de un poeta famoso, luego analizar qué elementos hacen que suene 'humano'."
        },
        "relatedLinks": "curso/octavo/entrenadoria"
      },
      {
        "id": "interaccion-natural",
        "title": "Idea 4: Sistemas de Recomendación y Filtrado",
        "guidingText": "Analizaremos cómo los sistemas de recomendación aprenden de nuestras preferencias para sugerir contenido relevante. Exploraremos las matemáticas detrás de estas recomendaciones y sus implicaciones en nuestra vida digital.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/octavo/sistemas_recomendacion_intro.png",
          "alt": "Sistemas de recomendación en plataformas digitales"
        },
        "sections": [{
            "heading": "Filtrado Colaborativo vs. Basado en Contenido",
            "content": "El filtrado colaborativo recomienda items basándose en el comportamiento similar de otros usuarios ('personas como tú también compraron...'), mientras el filtrado basado en contenido recomienda items similares a los que ya te gustaron ('porque te gustó X, te puede interesar Y').\n\n**Ejemplo práctico:** Netflix usa filtrado colaborativo, mientras Spotify combina ambos approaches para sus recomendaciones musicales.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/tipos_filtrado.png",
              "alt": "Tipos de sistemas de recomendación"
            }
          },
          {
            "heading": "Algoritmos de Recomendación",
            "content": "Detrás de las recomendaciones hay matemáticas compleja: factorización de matrices, clustering, y algoritmos de vecinos más cercanos. Estos métodos encuentran patterns ocultos en grandes cantidades de datos de usuarios.\n\n**Pregunta matemática:** ¿Cómo podrían las matrices representar las preferencias de millones de usuarios sobre miles de items?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/algoritmos_recomendacion",
              "alt": "Algoritmos de recomendación"
            }
          },
          {
            "heading": "Burbujas de Filtro y Diversificación",
            "content": "Los sistemas de recomendación pueden crear 'burbujas de filtro' donde solo vemos contenido similar a lo que ya nos gusta. Las técnicas de diversificación intentan romper estas burbujas exponiéndonos a contenido nuevo y diferente.\n\n**Dato preocupante:** ¡Las burbujas de filtro pueden limitar nuestra exposición a ideas diversas y reforzar prejuicios existentes!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/burbujas_filtro.png",
              "alt": "Burbujas de filtro en recomendaciones"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Diseña un Sistema de Recomendación Ético",
          "description": "Diseña un sistema de recomendación para una plataforma educativa. Considera: qué datos usaría, cómo balancearía relevancia con diversidad, qué medidas tomaría para evitar burbujas de filtro, y cómo sería transparente con los usuarios.",
          "example": "Sistema que recomienda recursos educativos basado en el nivel del estudiante, pero también introduce contenido desafiante y de diferentes perspectivas."
        },
        "relatedLinks": "curso/octavo/chatbot"
      },
      {
        "id": "impacto-social",
        "title": "Idea 5: IA Generativa y Creatividad Computacional",
        "guidingText": "Exploraremos el fascinante mundo de la IA generativa, donde las máquinas crean contenido original como imágenes, música, texto e incluso video. Analizaremos cómo estos sistemas aprenden de data existente para generar nuevo contenido y las implicaciones para la creatividad humana.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/octavo/ia_generativa_intro.png",
          "alt": "Arte generado por inteligencia artificial"
        },
        "sections": [{
            "heading": "Generative Adversarial Networks (GANs)",
            "content": "Las GANs usan dos redes neuronales que compiten: una generadora crea contenido falso, y una discriminadora intenta detectar si es real o fake. Esta competencia hace que ambas mejoren, resultando en contenido generado de alta calidad.\n\n**Analogía:** Como un falsificador que mejora sus obras y un detective que mejora detectando falsificaciones.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/gan_architecture.png",
              "alt": "Arquitectura de redes GAN"
            }
          },
          {
            "heading": "Modelos de Difusión",
            "content": "Los modelos de difusión generan contenido comenzando con ruido aleatorio y refinándolo gradualmente hacia algo coherente, guiados por texto u otras entradas. Esta técnica ha producido algunos de los resultados más impresionantes en generación de imágenes.\n\n**Pregunta filosófica:** ¿Si una IA crea una obra de arte basada en millones de obras humanas, quién es el 'verdadero' artista?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/modelos_difusion",
              "alt": "Modelos de difusión para generación"
            }
          },
          {
            "heading": "Implicaciones para la Creatividad y Derechos de Autor",
            "content": "La IA generativa plantea preguntas profundas sobre originalidad, autoría, y el futuro de las industrias creativas. ¿Deberían las obras generadas por IA tener derechos de autor? ¿Cómo compensar a los artistas humanos cuyo trabajo se usó para entrenar estos modelos?\n\n**Dato controversial:** ¡Algunas obras generadas por IA han ganado competiciones de arte, generando debate sobre qué constituye 'arte'!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/octavo/derechos_autor_ia.png",
              "alt": "Cuestiones de derechos de autor con IA"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Crea una Colección de Arte con IA Generativa",
          "description": "Usa herramientas de IA generativa (DALL-E, Midjourney, Stable Diffusion) para crear una colección temática de imágenes. Documenta el proceso, los prompts usados, y reflexiona sobre el papel del 'prompt engineer' como artista digital.",
          "example": "Crear una serie de 5 imágenes sobre 'el futuro de las ciudades inteligentes' usando diferentes estilos artísticos (impresionismo, cyberpunk, realismo mágico)."
        },
        "relatedLinks": "curso/octavo/trivia"
      }
    ]
  },
  {
    "course": "noveno",
    "ideas": [{
        "id": "percepcion",
        "title": "Idea 1: Arquitecturas Avanzadas de Redes Neuronales",
        "guidingText": "En noveno grado, exploraremos arquitecturas especializadas de redes neuronales diseñadas para problemas específicos. Estudiaremos cómo diferentes estructuras de red se optimizan para dominios particulares como visión, lenguaje y datos secuenciales.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/noveno/arquitecturas_avanzadas_intro.png",
          "alt": "Comparación de arquitecturas de redes neuronales avanzadas"
        },
        "sections": [{
            "heading": "Redes Recurrentes y LSTM",
            "content": "Las redes recurrentes (RNN) y las unidades de memoria a largo plazo (LSTM) están diseñadas para datos secuenciales como series de tiempo, texto y audio. Mantienen 'memoria' de información previa, permitiendo procesar contextos extendidos y dependencias temporales.\n\n**Aplicación crucial:** Traducción automática donde el modelo debe recordar el contexto completo de una frase mientras genera la traducción palabra por palabra.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/rnn_lstm.png",
              "alt": "Arquitecturas RNN y LSTM"
            }
          },
          {
            "heading": "Autoencoders y Redes Generativas",
            "content": "Los autoencoders aprenden representaciones comprimidas de datos, útiles para reducción de dimensionalidad y detección de anomalías. Las variantes generativas como VAEs (Variational Autoencoders) pueden generar nuevos datos similares a los de entrenamiento.\n\n**Pregunta técnica:** ¿Cómo pueden los autoencoders ayudar a identificar datos fraudulentos o anomalías en sistemas financieros?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/autoencoders_generativos",
              "alt": "Autoencoders y aplicaciones generativas"
            }
          },
          {
            "heading": "Redes de Transformers Avanzados",
            "content": "Más allá de NLP, los transformers se aplican ahora en visión por computadora (Vision Transformers), audio, y datos multimodales. Su mecanismo de atención escalable los hace versátiles para cualquier dato donde el contexto global sea importante.\n\n**Dato innovador:** ¡Los Vision Transformers están alcanzando y superando el rendimiento de las CNNs en algunas tareas de visión por computadora!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/transformers_avanzados.png",
              "alt": "Transformers aplicados beyond NLP"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Implementa y Compara Diferentes Arquitecturas",
          "description": "Selecciona un dataset (ej: MNIST, CIFAR-10) y implementa diferentes arquitecturas (CNN, RNN, Transformer) para resolver la misma tarea. Compara su rendimiento, tiempo de entrenamiento y requisitos computacionales.",
          "example": "Comparar CNN vs Vision Transformer en clasificación de imágenes de dígitos handwritten, analizando ventajas/desventajas de cada approach."
        },
        "relatedLinks": "curso/noveno/percepciondetectiveia"
      },
      {
        "id": "representacion-y-razonamiento",
        "title": "Idea 2: Aprendizaje por Reforzamiento Profundo",
        "guidingText": "Profundizaremos en el aprendizaje por reforzamiento (RL), donde los agentes aprenden tomando acciones en un ambiente para maximizar recompensas acumuladas. Exploraremos cómo combina RL con deep learning para resolver problemas complejos de decisión secuencial.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/noveno/rl_intro.png",
          "alt": "Esquema de aprendizaje por reforzamiento"
        },
        "sections": [{
            "heading": "Fundamentos Matemáticos de RL",
            "content": "El RL se basa en procesos de decisión de Markov, funciones de valor, y políticas óptimas. Conceptos como descuento de recompensas futuras y equilibrio entre exploración-explotación son fundamentales para el aprendizaje efectivo.\n\n**Concepto clave:** Q-learning aprende la función de valor acción-estado óptima, permitiendo al agente elegir la mejor acción en cada estado.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/mdp_qlearning.png",
              "alt": "Procesos de decisión de Markov y Q-learning"
            }
          },
          {
            "heading": "Deep Q-Networks y Policy Gradients",
            "content": "Las Deep Q-Networks (DQN) combinan Q-learning con redes neuronales para manejar espacios de estado grandes. Los policy gradients optimizan directamente la política del agente, siendo efectivos para acciones continuas y espacios complejos.\n\n**Logro histórico:** ¡DQN fue el primer algoritmo en superar a humanos expertos en múltiples juegos de Atari usando solo pixels como input!",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/deep_rl",
              "alt": "Deep Reinforcement Learning en acción"
            }
          },
          {
            "heading": "Aplicaciones en Mundos Reales",
            "content": "El RL se aplica en robótica (aprendizaje de locomoción), recursos humanos (optimización de tratamientos), finanzas (trading algorítmico), y gestión de recursos (optimización energética). Estos sistemas aprenden políticas complejas through trial and error.\n\n**Desafío importante:** El sample inefficiency de RL hace que requiera muchas interacciones con el ambiente, limitando aplicaciones en mundo real donde los experiments son costosos.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/rl_mundo_real.png",
              "alt": "Aplicaciones de RL en mundo real"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Entrena un Agente de RL en Ambiente Simulado",
          "description": "Usa frameworks como OpenAI Gym o Unity ML-Agents para entrenar un agente que resuelva un ambiente de desafío controlado. Experimenta con diferentes algoritmos y hyperparámetros, documentando el proceso de aprendizaje.",
          "example": "Entrenar un agente para jugar CartPole o Lunar Lander, experimentando con diferentes rewards functions y parámetros de exploración."
        },
        "relatedLinks": "curso/noveno/mateia"
      },
      {
        "id": "aprendizaje",
        "title": "Idea 3: IA Explicable y Transparente",
        "guidingText": "Exploraremos métodos para hacer que los modelos de IA sean interpretables y transparentes. En un mundo donde la IA toma decisiones críticas, entender 'por qué' llegó a una conclusión es tan importante como la precisión de la predicción.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/noveno/xai_intro.png",
          "alt": "Conceptos de IA explicable y transparente"
        },
        "sections": [{
            "heading": "Métodos de Interpretabilidad",
            "content": "Técnicas como SHAP, LIME, y attention maps ayudan a entender qué features contribuyen a las predicciones de modelos complejos. Los modelos inherentemente interpretables como decision trees proporcionan transparencia por diseño.\n\n**Importancia crítica:** En medicina, no basta con que un modelo diagnostique cáncer accurately—los doctores necesitan entender qué evidencias apoyan el diagnóstico.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/metodos_interpretabilidad.png",
              "alt": "Métodos de interpretabilidad de modelos"
            }
          },
          {
            "heading": "Trade-off entre Rendimiento e Interpretabilidad",
            "content": "Existe often una tensión entre modelos muy precisos pero opacos (deep learning) y modelos menos precisos pero interpretables (linear models). La elección depende del contexto de aplicación y los stakes involucrados.\n\n**Pregunta ética:** ¿Cuándo deberíamos sacrificar precisión por transparencia en sistemas que afectan vidas humanas?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/interpretabilidad_vs_rendimiento",
              "alt": "Balance entre interpretabilidad y rendimiento"
            }
          },
          {
            "heading": "Marco Regulatorio y Compliance",
            "content": "Regulaciones como GDPR en Europa establecen el 'derecho a la explicación' para decisiones automatizadas. Las organizaciones deben desarrollar frameworks de governance que aseguren transparencia, auditabilidad, y accountability de sus sistemas de IA.\n\n**Tendencia emergente:** ¡Cada vez más empresas implementan 'model cards' que documentan el comportamiento, limitations, y intended use de sus modelos de IA!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/regulacion_xai.png",
              "alt": "Marco regulatorio para IA explicable"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Analiza y Explica las Decisiones de un Modelo Complejo",
          "description": "Toma un modelo pre-entrenado y aplica técnicas de XAI para analizar sus predicciones. Genera explicaciones para casos específicos, identifica potential biases, y crea un reporte que haría el modelo comprensible para no-expertos.",
          "example": "Usar SHAP o LIME para explicar por qué un modelo de préstamos aprobó o rechazó solicitudes específicas, identificando qué factores fueron más influyentes."
        },
        "relatedLinks": "curso/noveno/entreandoria"
      },
      {
        "id": "interaccion-natural",
        "title": "Idea 4: Optimización y Metaaprendizaje",
        "guidingText": "Estudiaremos técnicas avanzadas de optimización que permiten a los modelos aprender más rápido, con menos datos, y adaptarse a nuevos tasks. El metaaprendizaje lleva esto al extremo, donde los modelos aprenden 'cómo aprender'.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/noveno/metalearning_intro.png",
          "alt": "Conceptos de metaaprendizaje y optimización avanzada"
        },
        "sections": [{
            "heading": "Algoritmos de Optimización Avanzada",
            "content": "Más allá de SGD, optimizers como Adam, RMSprop, y Adagrad adaptan learning rates dinámicamente para different parámetros. Técnicas como batch normalization y weight decay mejoran la estabilidad y velocidad de convergencia.\n\n**Avance significativo:** ¡Los optimizers adaptativos han reducido dramáticamente el tiempo required para entrenar modelos deep learning efectivos!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/optimizers_avanzados.png",
              "alt": "Comparación de algoritmos de optimización"
            }
          },
          {
            "heading": "Metaaprendizaje (Learning to Learn)",
            "content": "El metaaprendizaje entrena modelos en una variedad de tasks para que puedan aprender nuevos tasks rápidamente con pocos ejemplos. Approaches como MAML (Model-Agnostic Meta-Learning) optimizan modelos para rápida adaptación.\n\n**Analogía:** Como enseñar a alguien a aprender cualquier instrumento musical rápido, en lugar de enseñar un instrumento específico.",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/metalearning",
              "alt": "Metaaprendizaje en acción"
            }
          },
          {
            "heading": "Aprendizaje con Pocos Ejemplos (Few-Shot Learning)",
            "content": "Techniques como siamese networks, prototypical networks, y matching networks permiten aprender de muy pocos ejemplos (a veces solo uno), imitando la capacidad humana de aprendizaje rápido.\n\n**Aplicación prometedora:** Diagnóstico médico de enfermedades raras donde hay pocos ejemplos disponibles para entrenamiento.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/few_shot_learning.png",
              "alt": "Aprendizaje con pocos ejemplos"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Experimenta con Few-Shot Learning",
          "description": "Selecciona un dataset con múltiples clases y diseña un experimento de few-shot learning. Entrena un modelo que pueda aprender nuevas clases con muy pocos ejemplos y evalúa su performance compared to traditional approaches.",
          "example": "Usar Omniglot dataset para entrenar un modelo que reconozca nuevos caracteres escritos a mano con solo 1-5 ejemplos por clase."
        },
        "relatedLinks": "curso/noveno/chatbot"
      },
      {
        "id": "impacto-social",
        "title": "Idea 5: Sistemas Multiagente y IA Colectiva",
        "guidingText": "Exploraremos sistemas donde múltiples agentes de IA interactúan, cooperan, y compiten. Estos sistemas exhiben comportamientos emergentes complejos y pueden resolver problemas que agentes individuales no pueden abordar.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/noveno/multiagente_intro.png",
          "alt": "Arquitectura de sistemas multiagente"
        },
        "sections": [{
            "heading": "Coordinación y Comunicación entre Agentes",
            "content": "Los agentes pueden coordinarse through comunicación explícita (mensajes) o implícita (observando acciones). Techniques como centralized learning with decentralized execution permiten coordinación efectiva.\n\n**Ejemplo fascinante:** ¡Swarms de drones que se coordinan para formar estructuras complejas o realizar búsquedas cooperativas!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/coordinacion_agentes.png",
              "alt": "Coordinación entre agentes de IA"
            }
          },
          {
            "heading": "Teoría de Juegos y Equilibrios",
            "content": "La teoría de juegos proporciona el marco matemático para entender interraciones estratégicas entre agentes. Conceptos como equilibrio de Nash ayudan a predecir comportamientos en sistemas multiagente.\n\n**Pregunta estratégica:** ¿Cómo pueden los agentes aprender a cooperar en dilemas sociales como el prisoner's dilemma, donde la cooperación beneficia a todos pero la traición individual es tentadora?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/game_theory_ia",
              "alt": "Teoría de juegos en sistemas multiagente"
            }
          },
          {
            "heading": "Inteligencia Colectiva y Comportamientos Emergentes",
            "content": "Sistemas multiagente pueden exhibir inteligencia colectiva donde el sistema overall es más inteligente que cualquier agente individual. Comportamientos complejos emergen de reglas simples seguidas por muchos agentes.\n\n**Inspiración biológica:** ¡Estos sistemas se inspiran en colonias de hormigas, bandadas de pájaros, y otros sistemas naturales donde behaviors complejos emergen de interacciones simples!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/noveno/inteligencia_colectiva.png",
              "alt": "Inteligencia colectiva en sistemas multiagente"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Simula un Sistema Multiagente con Comportamiento Emergente",
          "description": "Diseña e implementa una simulación donde múltiples agentes simples following reglas básicas exhiban comportamientos emergentes complejos. Experimenta con diferentes reglas y observa qué comportamientos surgen.",
          "example": "Simular flocking behavior (como bandadas de pájaros) con tres reglas simples: separación, alineación, y cohesión, observando cómo emergen patterns complejos."
        },
        "relatedLinks": "curso/noveno/trivia"
      }
    ]
  }, {
    "course": "decimo",
    "ideas": [{
        "id": "percepcion",
        "title": "Idea 1: Visión por Computadora Aplicada",
        "guidingText": "En décimo grado, veremos cómo la IA puede 'ver' y entender imágenes del mundo real. Aprenderemos técnicas prácticas que se usan en aplicaciones cotidianas como filtros de redes sociales, reconocimiento facial y vehículos autónomos.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/decimo/vision_practica_intro.png",
          "alt": "Aplicaciones prácticas de visión por computadora"
        },
        "sections": [{
            "heading": "Detección de Objetos en Tiempo Real",
            "content": "Aprenderemos cómo los sistemas detectan y siguen objetos en video en tiempo real. Estas tecnologías se usan en seguridad, deportes, y hasta en apps que identifican plantas o animales con la cámara del teléfono.\n\n**Ejemplo cotidiano:** Las cámaras de seguridad inteligentes que detectan movimiento y reconocen si es una persona, un animal o un vehículo.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/deteccion_tiempo_real.png",
              "alt": "Detección de objetos en tiempo real"
            }
          },
          {
            "heading": "Reconocimiento Facial y sus Usos",
            "content": "Exploraremos cómo funciona el reconocimiento facial en nuestros phones y redes sociales. Veremos cómo la IA identifica características únicas del rostro y los debates éticos alrededor de esta tecnología.\n\n**Pregunta importante:** ¿Qué medidas de privacidad deberían existir para el uso del reconocimiento facial en espacios públicos?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/reconocimiento_facial",
              "alt": "Video sobre reconocimiento facial"
            }
          },
          {
            "heading": "IA en Fotografía y Video",
            "content": "Descubriremos cómo la IA mejora nuestras fotos: desde el modo retrato que desenfoca fondos, hasta la corrección de color automática y la estabilización de video. Estas herramientas hacen que cualquiera pueda tomar fotos profesionales.\n\n**Dato curioso:** ¡Los celulares usan IA para tomar múltiples fotos en milisegundos y combinar lo mejor de cada una!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/ia_fotografia.png",
              "alt": "IA en fotografía móvil"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Crea un Filtro de IA para Redes Sociales",
          "description": "Usa herramientas como Spark AR o Lens Studio para crear un filtro de redes sociales que use visión por computadora. Puede ser un filtro que agregue elementos virtuales, reconozca gestos o modifique el fondo.",
          "example": "Un filtro que pone gafas de sol virtuales cuando la persona sonríe, o que agrega efectos especiales cuando detecta ciertos gestos con las manos."
        },
        "relatedLinks": "curso/decimo/ova"
      },
      {
        "id": "representacion-y-razonamiento",
        "title": "Idea 2: Asistentes Virtuales y Chatbots Inteligentes",
        "guidingText": "Exploraremos cómo funcionan los asistentes virtuales como Siri, Alexa y Google Assistant. Aprenderemos qué hace que estos sistemas puedan entender preguntas complejas y mantener conversaciones naturales.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/decimo/asistentes_inteligentes_intro.png",
          "alt": "Asistentes virtuales inteligentes"
        },
        "sections": [{
            "heading": "Cómo Entienden el Lenguaje Natural",
            "content": "Los asistentes usan técnicas avanzadas para entender no solo palabras sueltas, sino el significado completo de frases y la intención detrás de ellas. Aprenden de millones de conversaciones para mejorar sus respuestas.\n\n**Ejemplo interesante:** Cuando preguntas '¿lloverá hoy?' el asistente entiende que quieres el pronóstico del tiempo para tu ubicación actual.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/comprension_lenguaje.png",
              "alt": "Comprensión de lenguaje natural"
            }
          },
          {
            "heading": "Personalización y Contexto",
            "content": "Los buenos asistentes recuerdan el contexto de la conversación y se personalizan según tus preferencias. Aprenden de tus hábitos para ofrecer respuestas más relevantes y útiles.\n\n**Reflexión:** ¿Qué tan cómodos nos sentimos con que los asistentes guarden información personal para mejorar su servicio?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/personalizacion_ia",
              "alt": "Personalización en asistentes IA"
            }
          },
          {
            "heading": "Límites y Desafíos Actuales",
            "content": "Aunque los asistentes son impresionantes, todavía tienen limitaciones. A veces malinterpretan preguntas complejas o no entienden el sarcasmo. Exploraremos por qué estos desafíos son difíciles de resolver.\n\n**Dato real:** ¡Los asistentes todavía tienen problemas con acentos regionales y modismos locales!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/limites_asistentes.png",
              "alt": "Límites de los asistentes virtuales"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Diseña un Chatbot para Ayudar en tu Colegio",
          "description": "Diseña un chatbot que ayude a estudiantes con preguntas frecuentes del colegio. Planifica qué preguntas podría responder, cómo manejaría preguntas fuera de su conocimiento, y cómo aprendería de las interacciones.",
          "example": "Un chatbot que responda sobre horarios de clases, fechas de exámenes, requisitos de tareas, y que derive preguntas complejas a humanos cuando sea necesario."
        },
        "relatedLinks": "curso/decimo/ova"
      },
      {
        "id": "aprendizaje",
        "title": "Idea 3: IA en el Arte y la Creatividad",
        "guidingText": "Descubriremos cómo la IA está transformando el mundo del arte, la música y la creatividad. Veremos herramientas que cualquiera puede usar para generar arte, componer música y crear contenido innovador.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/decimo/arte_ia_intro.png",
          "alt": "Arte generado por inteligencia artificial"
        },
        "sections": [{
            "heading": "Generación de Imágenes con IA",
            "content": "Herramientas como DALL-E, Midjourney y Stable Diffusion permiten crear imágenes increíbles describiéndolas con texto. Exploraremos cómo funcionan y cómo artists las usan para ampliar su creatividad.\n\n**Ejemplo fascinante:** Artistas que usan IA para generar ideas iniciales y luego las refinan manualmente, combinando lo mejor de ambos mundos.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/generacion_imagenes.png",
              "alt": "Generación de imágenes con IA"
            }
          },
          {
            "heading": "Música y Audio Generado por IA",
            "content": "La IA puede componer música en diferentes estilos, imitar voces famosas, y crear efectos de sonido. Estas herramientas están democratizando la creación musical y sonriendo nuevas posibilidades artísticas.\n\n**Pregunta artística:** ¿Quién es el artista cuando una IA compone una canción: el programador, la IA, o la persona que eligió los parámetros?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/musica_ia",
              "alt": "Música generada por IA"
            }
          },
          {
            "heading": "El Futuro del Arte con IA",
            "content": "La IA está creando nuevos géneros artísticos y transformando cómo creamos y consumimos arte. También plantea preguntas importantes sobre originalidad, derechos de autor y el valor del arte humano.\n\n**Dato controversial:** ¡Algunas obras de IA se han vendido por miles de dólares en subastas de arte!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/futuro_arte.png",
              "alt": "El futuro del arte con IA"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Crea una Obra de Arte Colaborando con IA",
          "description": "Usa herramientas de IA generativa para crear una obra artística. Documenta el proceso: cómo elegiste los prompts, cómo refinaste los resultados, y qué papel jugó la IA versus tu creatividad humana.",
          "example": "Crear una portada de álbum musical usando IA generativa, experimentando con diferentes estilos y prompts hasta lograr el resultado deseado."
        },
        "relatedLinks": "curso/decimo/ova"
      },
      {
        "id": "interaccion-natural",
        "title": "Idea 4: IA en la Medicina y Salud",
        "guidingText": "Exploraremos cómo la IA está revolucionando la medicina, desde el diagnóstico de enfermedades hasta el descubrimiento de nuevos medicamentos. Veremos aplicaciones reales que están salvando vidas y mejorando la atención médica.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/decimo/ia_salud_intro.png",
          "alt": "Aplicaciones de IA en medicina y salud"
        },
        "sections": [{
            "heading": "Diagnóstico Asistido por IA",
            "content": "Sistemas de IA pueden analizar radiografías, tomografías y otras imágenes médicas para detectar enfermedades como cáncer, neumonía o problemas cardíacos. Ayudan a los médicos a ser más precisos y detectar problemas temprano.\n\n**Ejemplo impactante:** IA que detecta cáncer de mama en mamografías con una precisión comparable a radiólogos expertos.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/diagnostico_ia.png",
              "alt": "Diagnóstico médico asistido por IA"
            }
          },
          {
            "heading": "Wearables y Monitoreo Continuo",
            "content": "Relojes inteligentes y otros wearables usan IA para monitorear nuestra salud 24/7: ritmo cardíaco, sueño, actividad física. Pueden detectar problemas temprano y alertarnos para buscar ayuda médica.\n\n**Caso real:** Personas que han recibido alertas de problemas cardíacos gracias a sus smartwatches, salvando sus vidas.",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/wearables_salud",
              "alt": "Wearables y monitoreo de salud"
            }
          },
          {
            "heading": "Descubrimiento de Medicamentos",
            "content": "La IA acelera el descubrimiento de nuevos medicamentos analizando enormes cantidades de datos científicos. Puede predecir qué compuestos podrían ser efectivos contra enfermedades, reduciendo años de investigación.\n\n**Dato esperanzador:** ¡Durante la pandemia, la IA ayudó a identificar medicamentos existentes que podían ser efectivos contra el COVID-19!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/descubrimiento_medicamentos.png",
              "alt": "Descubrimiento de medicamentos con IA"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Diseña una App de Salud con IA",
          "description": "Imagina una app que use IA para mejorar la salud de las personas. Describe qué datos recogería, cómo analizaría la información, qué recomendaciones daría, y cómo aseguraría la privacidad de los datos sensibles.",
          "example": "Una app que monitoree hábitos alimenticios através de fotos de comida, sugiera mejoras nutricionales, y alerté sobre posibles alergias o intolerancias."
        },
        "relatedLinks": "curso/decimo/chatbot"
      },
      {
        "id": "impacto-social",
        "title": "Idea 5: El Futuro de la IA y tu Carrera",
        "guidingText": "Reflexionaremos sobre cómo la IA transformará el mundo en los próximos años y qué oportunidades profesionales existirán. Exploraremos qué habilidades necesitarás para prosperar en un mundo donde la IA será parte de casi todo.",
        "multimedia": {
          "type": "image",
          "src": "/assets/ai4k12/decimo/futuro_ia_intro.png",
          "alt": "El futuro de la IA y oportunidades profesionales"
        },
        "sections": [{
            "heading": "Profesiones del Futuro",
            "content": "La IA creará nuevas profesiones que hoy no existen: especialistas en ética de IA, trainers de sistemas inteligentes, diseñadores de experiencias humano-IA. También transformará trabajos tradicionales.\n\n**Ejemplo concreto:** Los médics usarán IA como asistente, los abogados la usarán para análisis de documentos, y los artists colaborarán con IA.",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/profesiones_futuro.png",
              "alt": "Nuevas profesiones en la era de la IA"
            }
          },
          {
            "heading": "Habilidades que la IA No Puede Reemplazar",
            "content": "La creatividad, el pensamiento crítico, la inteligencia emocional y la ética serán más valiosas que nunca. Aprenderemos por qué estas habilidades humanas son difíciles de automatizar y cómo desarrollarlas.\n\n**Reflexión importante:** ¿Cómo podemos asegurarnos de que la IA nos complemente en lugar de reemplazarnos?",
            "multimedia": {
              "type": "video",
              "src": "https://www.youtube.com/embed/habilidades_futuro",
              "alt": "Habilidades para el futuro con IA"
            }
          },
          {
            "heading": "Preparándote para el Mundo IA",
            "content": "Exploraremos qué estudiar, qué habilidades técnicas aprender, y cómo mantenerte relevante en un mundo que cambia rápidamente. La IA es una herramienta poderosa para quienes saben usarla.\n\n**Dato alentador:** ¡El 85% de los trabajos que existirán en 2030 no se han inventado todavía, muchos relacionados con IA!",
            "multimedia": {
              "type": "image",
              "src": "/assets/ai4k12/decimo/preparacion_futuro.png",
              "alt": "Preparación para el futuro con IA"
            }
          }
        ],
        "challenge": {
          "title": "Proyecto: Plan de Carrera en la Era de la IA",
          "description": "Investiga tres carreras que te interesen y cómo la IA las está transformando. Crea un plan de qué skills necesitarías aprender, qué estudios seguir, y cómo prepararte para estos trabajos del futuro.",
          "example": "Si te interesa la medicina, investiga cómo la IA está transformando el diagnóstico, la cirugía y la investigación médica, y qué nuevas especialidades están emergiendo."
        },
        "relatedLinks": "curso/decimo/trivia"
      }
    ]
  },{
  "course": "undecimo",
  "ideas": [
    {
      "id": "percepcion",
      "title": "Idea 1: IA en tu Vida Diaria",
      "guidingText": "Descubrirás cómo la IA ya está en todas partes y cómo la usas todos los días sin darte cuenta.",
      "multimedia": {
        "type": "image",
        "src": "/assets/ai4k12/undecimo/ia_cotidiana.png",
        "alt": "IA en la vida diaria"
      },
      "sections": [
        {
          "heading": "Donde está la IA",
          "content": "La IA está en tu teléfono cuando te sugiere palabras, en redes sociales cuando te muestra videos, y en apps de transporte cuando calcula rutas.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/ia_telefono.png",
            "alt": "IA en el teléfono"
          }
        },
        {
          "heading": "Cómo te Ayuda",
          "content": "La IA hace tu vida más fácil: encuentra información rápido, traduce idiomas, y te recomienda música que te gustará.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/ia_ayuda.png",
            "alt": "IA que ayuda"
          }
        }
      ],
      "challenge": {
        "title": "Actividad: Encuentra IA",
        "description": "Durante un día, anota todas las veces que encuentres IA ayudándote.",
        "example": "Cuando el autocorrector sugiere palabras, cuando Netflix recomienda una película, cuando Google responde preguntas."
      },
      "relatedLinks": "curso/undecimo/ova"
    },
    {
      "id": "representacion-y-razonamiento",
      "title": "Idea 2: IA y Trabajos del Futuro",
      "guidingText": "Veremos cómo la IA cambiará los trabajos y qué habilidades serán importantes.",
      "multimedia": {
        "type": "image",
        "src": "/assets/ai4k12/undecimo/ia_trabajos.png",
        "alt": "IA y trabajos"
      },
      "sections": [
        {
          "heading": "Nuevos Trabajos",
          "content": "Aparecerán trabajos nuevos como entrenador de IA, especialista en robots, o diseñador de sistemas inteligentes.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/nuevos_trabajos.png",
            "alt": "Nuevos trabajos"
          }
        },
        {
          "heading": "Habilidades Importantes",
          "content": "La creatividad, el pensamiento crítico y trabajar en equipo serán más valiosos que nunca.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/habilidades.png",
            "alt": "Habilidades importantes"
          }
        }
      ],
      "challenge": {
        "title": "Actividad: Imagina tu Trabajo",
        "description": "Piensa en cómo sería tu trabajo ideal usando IA.",
        "example": "¿Sería diseñar videojuegos con IA? ¿Usar IA para ayudar a médicos? ¿Crear música con IA?"
      },
      "relatedLinks": "curso/undecimo/ova"
    },
    {
      "id": "aprendizaje",
      "title": "Idea 3: Usando IA Responsablemente",
      "guidingText": "Aprenderemos a usar la IA de forma buena y justa para todos.",
      "multimedia": {
        "type": "image",
        "src": "/assets/ai4k12/undecimo/ia_responsable.png",
        "alt": "IA responsable"
      },
      "sections": [
        {
          "heading": "Ser Justos",
          "content": "La IA debe tratar a todos por igual, sin importar cómo se vean o de dónde sean.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/ia_justa.png",
            "alt": "IA justa"
          }
        },
        {
          "heading": "Proteger Privacidad",
          "content": "Es importante que nuestra información personal esté segura cuando usamos IA.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/privacidad.png",
            "alt": "Privacidad con IA"
          }
        }
      ],
      "challenge": {
        "title": "Actividad: Preguntas Importantes",
        "description": "Cuando uses una app con IA, pregúntate: ¿Está siendo justa? ¿Protege mi información?",
        "example": "Al usar redes sociales, pregúntate por qué te muestran ciertos videos y no otros."
      },
      "relatedLinks": "curso/undecimo/ova"
    },
    {
      "id": "interaccion-natural",
      "title": "Idea 4: El Futuro con IA",
      "guidingText": "Imaginaremos cómo podría ser el futuro con más inteligencia artificial.",
      "multimedia": {
        "type": "image",
        "src": "/assets/ai4k12/undecimo/futuro_ia.png",
        "alt": "Futuro con IA"
      },
      "sections": [
        {
          "heading": "Cosas Positivas",
          "content": "La IA podría ayudar a curar enfermedades, proteger el ambiente y hacer la educación mejor para todos.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/futuro_bueno.png",
            "alt": "Futuro positivo"
          }
        },
        {
          "heading": "Desafíos",
          "content": "También tendremos que resolver problemas como asegurar que la IA sea justa y que no quite trabajos importantes.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/desafios.png",
            "alt": "Desafíos del futuro"
          }
        }
      ],
      "challenge": {
        "title": "Actividad: Tu Futuro Ideal",
        "description": "Dibuja o describe cómo te gustaría que fuera el mundo con IA en 10 años.",
        "example": "Un mundo donde la IA ayude a los doctores, where los estudiantes aprendan con tutores IA, where la proteja el planeta."
      },
      "relatedLinks": "curso/undecimo/chatbot"
    },
    {
      "id": "impacto-social",
      "title": "Idea 5: Mi Camino con la IA",
      "guidingText": "Pensaremos en cómo podemos seguir aprendiendo sobre IA después del colegio.",
      "multimedia": {
        "type": "image",
        "src": "/assets/ai4k12/undecimo/mi_camino.png",
        "alt": "Mi camino con IA"
      },
      "sections": [
        {
          "heading": "Seguir Aprendiendo",
          "content": "Hay muchos recursos gratis online para seguir aprendiendo sobre IA cuando quieras.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/aprender_mas.png",
            "alt": "Seguir aprendiendo"
          }
        },
        {
          "heading": "Usar para Bien",
          "content": "Todos podemos usar la IA para ayudar a otros y hacer el mundo mejor.",
          "multimedia": {
            "type": "image",
            "src": "/assets/ai4k12/undecimo/ayudar.png",
            "alt": "Ayudar con IA"
          }
        }
      ],
      "challenge": {
        "title": "Actividad: Mi Primer Paso",
        "description": "Elige una cosa simple que quieras aprender o hacer con IA después de graduarte.",
        "example": "Aprender a usar una herramienta de IA para hacer arte, o usar apps que ayuden a estudiar mejor."
      },
      "relatedLinks": "curso/undecimo/trivia"
    }
  ]
}
];