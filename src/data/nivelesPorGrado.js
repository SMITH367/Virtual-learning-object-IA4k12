const nivelesPorGrado = {
  primero: {
    portada: "/images/interaccion/RoboAmigo.png",
    niveles: {
      nivel1: {
        title: "¿Qué quiso decir?",
        description: "Ayuda a RoboAmigo a entender frases sencillas y expresiones cotidianas.",
        questions: [
          {
            scenario: "Un niño le dice a RoboAmigo:",
            question: "¡Eres un sol!",
            options: [
              { text: "Dice que RoboAmigo es brillante como el sol", isCorrect: false },
              { text: "Está diciendo que RoboAmigo es muy bueno", isCorrect: true },
              { text: "Cree que RoboAmigo es una estrella", isCorrect: false },
            ],
            explanation: "Decir 'eres un sol' es una forma cariñosa de decir que alguien es muy bueno o amable.",
          },
          {
            scenario: "Una niña le dice a RoboAmigo:",
            question: "¡Estoy en las nubes!",
            options: [
              { text: "Está volando en el cielo", isCorrect: false },
              { text: "Está distraída o pensando en otra cosa", isCorrect: true },
              { text: "Está jugando con nubes", isCorrect: false },
            ],
            explanation: "Estar 'en las nubes' significa estar distraído o pensando en otra cosa.",
          },
        ],
      },
      nivel2: {
        title: "¡Emociones a la vista!",
        description: "Ayuda a RoboAmigo a identificar emociones básicas en estos rostros.",
        questions: [
          {
            scenario: "RoboAmigo ve este rostro:",
            question: "/images/interaccion/feliz.jpg",
            options: [
              { text: "Feliz", isCorrect: true },
              { text: "Triste", isCorrect: false },
              { text: "Enojado", isCorrect: false },
            ],
            explanation: "Una gran sonrisa y ojos brillantes suelen indicar felicidad.",
          },
          {
            scenario: "RoboAmigo ve este rostro:",
            question: "/images/interaccion/triste.jpg",
            options: [
              { text: "Sorprendido", isCorrect: false },
              { text: "Triste", isCorrect: true },
              { text: "Asustado", isCorrect: false },
            ],
            explanation: "Las comisuras de los labios hacia abajo y ojos caídos indican tristeza.",
          },
        ],
      },
      nivel3: {
        title: "Gesto o adorno",
        description: "Ayuda a RoboAmigo a interpretar gestos sencillos.",
        questions: [
          {
            scenario: "Un niño levanta el pulgar hacia RoboAmigo:",
            question: "/images/interaccion/pulgar.png",
            options: [
              { text: "Todo está bien", isCorrect: true },
              { text: "Quiere irse", isCorrect: false },
              { text: "Está saludando", isCorrect: false },
            ],
            explanation: "El pulgar arriba suele significar que todo está bien o aprobado.",
          },
          {
            scenario: "Una niña mueve la mano de lado a lado:",
            question: "/images/interaccion/mano.jpg",
            options: [
              { text: "Está diciendo adiós o saludando", isCorrect: true },
              { text: "Está pidiendo silencio", isCorrect: false },
              { text: "Está bailando", isCorrect: false },
            ],
            explanation: "Mover la mano de lado a lado es un gesto común para saludar o despedirse.",
          },
        ],
      },
      nivel4: {
        title: "Intención vs. Acción",
        description: "Ayuda a RoboAmigo a inferir intenciones simples.",
        questions: [
          {
            scenario: "Un niño se acerca con su cuaderno abierto y mira a RoboAmigo:",
            question: "¿Qué quiere el niño?",
            options: [
              { text: "Quiere que le ayuden con la tarea", isCorrect: true },
              { text: "Quiere mostrar su cuaderno", isCorrect: false },
              { text: "Quiere dibujar", isCorrect: false },
            ],
            explanation: "El niño probablemente busca ayuda con su tarea.",
          },
          {
            scenario: "Una niña mira la puerta y luego a su maestra varias veces:",
            question: "¿Qué intención tiene la niña?",
            options: [
              { text: "Quiere salir al recreo", isCorrect: true },
              { text: "Quiere ir al baño", isCorrect: false },
              { text: "Quiere cerrar la puerta", isCorrect: false },
            ],
            explanation: "Mirar la puerta y a la maestra puede indicar que quiere salir al recreo.",
          },
        ],
      },
    },
  },
  segundo: {
    portada: "/images/interaccion/RoboAmigo.png",
    niveles: {
      nivel1: {
        title: "¿Qué quiso decir?",
        description: "Ayuda a RoboAmigo a entender frases y expresiones de segundo grado.",
        questions: [
          {
            scenario: "Un niño le dice a RoboAmigo:",
            question: "¡Estoy hecho polvo!",
            options: [
              { text: "Está cubierto de polvo", isCorrect: false },
              { text: "Está muy cansado", isCorrect: true },
              { text: "Está sucio", isCorrect: false },
            ],
            explanation: "'Hecho polvo' significa estar muy cansado.",
          },
          {
            scenario: "Una niña le dice a RoboAmigo:",
            question: "¡Eso es pan comido!",
            options: [
              { text: "Está comiendo pan", isCorrect: false },
              { text: "Es algo muy fácil de hacer", isCorrect: true },
              { text: "Va a la panadería", isCorrect: false },
            ],
            explanation: "'Pan comido' significa que algo es muy fácil de hacer.",
          },
        ],
      },
      nivel2: {
        title: "¡Emociones a la vista!",
        description: "Ayuda a RoboAmigo a identificar emociones en diferentes situaciones.",
        questions: [
          {
            scenario: "RoboAmigo ve este rostro:",
            question: "/images/interaccion/enojado.jpg",
            options: [
              { text: "Feliz", isCorrect: false },
              { text: "Enojado", isCorrect: true },
              { text: "Sorprendido", isCorrect: false },
            ],
            explanation: "Cejas fruncidas y boca apretada suelen indicar enojo.",
          },
          {
            scenario: "Un niño habla con voz suave y baja la cabeza:",
            question: "¿Qué emoción muestra?",
            options: [
              { text: "Alegría", isCorrect: false },
              { text: "Vergüenza", isCorrect: true },
              { text: "Miedo", isCorrect: false },
            ],
            explanation: "Voz suave y cabeza baja pueden indicar vergüenza.",
          },
        ],
      },
      nivel3: {
        title: "Gesto o adorno",
        description: "Ayuda a RoboAmigo a interpretar gestos de segundo grado.",
        questions: [
          {
            scenario: "Un niño cruza los brazos y frunce el ceño:",
            question: "/images/interaccion/molesto.jpg",
            options: [
              { text: "Está enojado o molesto", isCorrect: true },
              { text: "Tiene frío", isCorrect: false },
              { text: "Está bailando", isCorrect: false },
            ],
            explanation: "Cruzar los brazos y fruncir el ceño suele indicar enojo o molestia.",
          },
          {
            scenario: "Una niña levanta la mano en clase:",
            question: "/images/interaccion/levantar-mano.jpg",
            options: [
              { text: "Quiere participar o preguntar algo", isCorrect: true },
              { text: "Está saludando", isCorrect: false },
              { text: "Está cansada", isCorrect: false },
            ],
            explanation: "Levantar la mano en clase es un gesto para participar o preguntar.",
          },
        ],
      },
      nivel4: {
        title: "Intención vs. Acción",
        description: "Ayuda a RoboAmigo a inferir intenciones en situaciones escolares.",
        questions: [
          {
            scenario: "Un niño mira su lonchera y luego a la maestra antes del recreo:",
            question: "¿Qué quiere el niño?",
            options: [
              { text: "Quiere comer su merienda", isCorrect: true },
              { text: "Quiere mostrar su lonchera", isCorrect: false },
              { text: "Quiere irse a casa", isCorrect: false },
            ],
            explanation: "Mirar la lonchera antes del recreo indica que quiere comer.",
          },
          {
            scenario: "Una niña se acerca a la enfermería con la mano en la frente:",
            question: "¿Qué intención tiene la niña?",
            options: [
              { text: "Quiere que la revisen porque se siente mal", isCorrect: true },
              { text: "Quiere jugar en la enfermería", isCorrect: false },
              { text: "Quiere pedir un lápiz", isCorrect: false },
            ],
            explanation: "Mano en la frente y acercarse a la enfermería indica que se siente mal.",
          },
        ],
      },
    },
  },
  tercero: {
    portada: "/images/interaccion/RoboAmigo.png",
    niveles: {
      nivel1: {
        title: "¿Qué quiso decir?",
        description: "Ayuda a RoboAmigo a entender frases y expresiones de tercer grado.",
        questions: [
          {
            scenario: "Un compañero le dice a RoboAmigo:",
            question: "¡Eso estuvo de película!",
            options: [
              { text: "Fue como una película", isCorrect: false },
              { text: "Fue muy emocionante o sorprendente", isCorrect: true },
              { text: "Están viendo una película", isCorrect: false },
            ],
            explanation: "Decir que algo estuvo 'de película' significa que fue muy emocionante o sorprendente.",
          },
          {
            scenario: "Una amiga le dice a RoboAmigo:",
            question: "¡Me partí de la risa!",
            options: [
              { text: "Se rompió de tanto reír", isCorrect: false },
              { text: "Se rió mucho", isCorrect: true },
              { text: "Se cayó", isCorrect: false },
            ],
            explanation: "'Partirse de la risa' significa reírse mucho.",
          },
        ],
      },
      nivel2: {
        title: "¡Emociones a la vista!",
        description: "Ayuda a RoboAmigo a identificar emociones en diferentes contextos.",
        questions: [
          {
            scenario: "RoboAmigo ve este rostro:",
            question: "/images/interaccion/sorprendido.jpg",
            options: [
              { text: "Enojado", isCorrect: false },
              { text: "Sorprendido", isCorrect: true },
              { text: "Triste", isCorrect: false },
            ],
            explanation: "Ojos abiertos y boca abierta suelen indicar sorpresa.",
          },
          {
            scenario: "Un niño habla rápido y sonríe mucho:",
            question: "¿Qué emoción muestra?",
            options: [
              { text: "Alegría", isCorrect: true },
              { text: "Miedo", isCorrect: false },
              { text: "Enojo", isCorrect: false },
            ],
            explanation: "Hablar rápido y sonreír mucho suele indicar alegría.",
          },
        ],
      },
      nivel3: {
        title: "Gesto o adorno",
        description: "Ayuda a RoboAmigo a interpretar gestos de tercer grado.",
        questions: [
          {
            scenario: "Una niña hace la señal de la paz (dos dedos en V):",
            question: "/images/interaccion/gestov.jpg",
            options: [
              { text: "Está pidiendo dos cosas", isCorrect: false },
              { text: "Está saludando o deseando paz", isCorrect: true },
              { text: "Está contando", isCorrect: false },
            ],
            explanation: "La señal de la paz es un gesto para saludar o desear paz.",
          },
          {
            scenario: "Un niño pone el dedo índice sobre los labios:",
            question: "/images/interaccion/silencio.jpeg",
            options: [
              { text: "Pide silencio", isCorrect: true },
              { text: "Está pensando", isCorrect: false },
              { text: "Está cansada", isCorrect: false },
            ],
            explanation: "El dedo en los labios es un gesto universal para pedir silencio.",
          },
        ],
      },
      nivel4: {
        title: "Intención vs. Acción",
        description: "Ayuda a RoboAmigo a inferir intenciones en situaciones cotidianas.",
        questions: [
          {
            scenario: "Un niño mira el reloj y la puerta varias veces durante la clase:",
            question: "¿Qué quiere el niño?",
            options: [
              { text: "Está esperando que termine la clase", isCorrect: true },
              { text: "Quiere comprar un reloj", isCorrect: false },
              { text: "Quiere cerrar la puerta", isCorrect: false },
            ],
            explanation: "Mirar el reloj y la puerta indica que espera que termine la clase.",
          },
          {
            scenario: "Una niña se acerca con una hoja y una sonrisa:",
            question: "¿Qué intención tiene la niña?",
            options: [
              { text: "Quiere mostrar algo que hizo", isCorrect: true },
              { text: "Quiere pedir ayuda", isCorrect: false },
              { text: "Quiere pedir permiso", isCorrect: false },
            ],
            explanation: "Acercarse con una hoja y sonreír indica que quiere mostrar algo.",
          },
        ],
      },
    },
  },
  cuarto: {
    portada: "/images/interaccion/RoboAmigo.png",
    niveles: {
      nivel1: {
        title: "¿Qué quiso decir?",
        description: "Ayuda a RoboAmigo a entender frases y expresiones de cuarto grado.",
        questions: [
          {
            scenario: "Un estudiante le dice a RoboAmigo:",
            question: "¡Me quedé de piedra!",
            options: [
              { text: "Se convirtió en piedra", isCorrect: false },
              { text: "Se sorprendió mucho", isCorrect: true },
              { text: "Está jugando con piedras", isCorrect: false },
            ],
            explanation: "'Quedarse de piedra' significa quedarse muy sorprendido.",
          },
          {
            scenario: "Una amiga le dice a RoboAmigo:",
            question: "¡Eso es la leche!",
            options: [
              { text: "Está hablando de leche", isCorrect: false },
              { text: "Significa que es muy bueno o divertido", isCorrect: true },
              { text: "Va a tomar leche", isCorrect: false },
            ],
            explanation: "En España, 'es la leche' significa que algo es muy bueno o divertido.",
          },
        ],
      },
      nivel2: {
        title: "¡Emociones a la vista!",
        description: "Ayuda a RoboAmigo a identificar emociones en situaciones más complejas.",
        questions: [
          {
            scenario: "RoboAmigo ve este rostro:",
            question: "/images/interaccion/asustado.jpg",
            options: [
              { text: "Feliz", isCorrect: false },
              { text: "Asustado", isCorrect: true },
              { text: "Enojado", isCorrect: false },
            ],
            explanation: "Ojos muy abiertos y cejas levantadas suelen indicar miedo o sorpresa.",
          },
          {
            scenario: "Un niño habla con voz temblorosa y mira al suelo:",
            question: "¿Qué emoción muestra?",
            options: [
              { text: "Miedo", isCorrect: true },
              { text: "Alegría", isCorrect: false },
              { text: "Enojo", isCorrect: false },
            ],
            explanation: "Voz temblorosa y evitar la mirada suelen indicar miedo.",
          },
        ],
      },
      nivel3: {
        title: "Gesto o adorno",
        description: "Ayuda a RoboAmigo a interpretar gestos de cuarto grado.",
        questions: [
          {
            scenario: "Un niño mueve la cabeza de un lado a otro:",
            question: "/images/interaccion/negación.jpg",
            options: [
              { text: "Está diciendo que no", isCorrect: true },
              { text: "Está bailando", isCorrect: false },
              { text: "Está cansado", isCorrect: false },
            ],
            explanation: "Mover la cabeza de lado a lado es un gesto para decir que no.",
          },
          {
            scenario: "Una niña levanta ambas manos con las palmas abiertas:",
            question: "/images/interaccion/palmasabiertas.jpg",
            options: [
              { text: "Se rinde o pide que se detengan", isCorrect: true },
              { text: "Está saludando", isCorrect: false },
              { text: "Está jugando", isCorrect: false },
            ],
            explanation: "Levantar ambas manos puede indicar rendición o pedir que se detengan.",
          },
        ],
      },
      nivel4: {
        title: "Intención vs. Acción",
        description: "Ayuda a RoboAmigo a inferir intenciones en situaciones sociales.",
        questions: [
          {
            scenario: "Un niño se acerca a un grupo y se queda en silencio observando:",
            question: "¿Qué quiere el niño?",
            options: [
              { text: "Quiere unirse al grupo", isCorrect: true },
              { text: "Quiere escuchar solamente", isCorrect: false },
              { text: "Quiere irse", isCorrect: false },
            ],
            explanation: "Acercarse y observar suele indicar que quiere unirse al grupo.",
          },
          {
            scenario: "Una niña mira su reloj y luego a la ventana mientras suspira:",
            question: "¿Qué intención tiene la niña?",
            options: [
              { text: "Está esperando que pase el tiempo", isCorrect: true },
              { text: "Quiere abrir la ventana", isCorrect: false },
              { text: "Quiere dormir", isCorrect: false },
            ],
            explanation: "Mirar el reloj y suspirar indica que espera que pase el tiempo.",
          },
        ],
      },
    },
  },
  quinto: {
    portada: "/images/interaccion/RoboAmigo.png",
    niveles: {
      nivel1: {
        title: "¿Qué quiso decir?",
        description: "Ayuda a RoboAmigo a entender frases y expresiones de quinto grado.",
        questions: [
          {
            scenario: "Un amigo le dice a RoboAmigo:",
            question: "¡Eso es pan comido!",
            options: [
              { text: "Está comiendo pan", isCorrect: false },
              { text: "Es algo muy fácil de hacer", isCorrect: true },
              { text: "Va a la panadería", isCorrect: false },
            ],
            explanation: "'Pan comido' significa que algo es muy fácil de hacer.",
          },
          {
            scenario: "Una amiga le dice a RoboAmigo:",
            question: "¡Estoy entre la espada y la pared!",
            options: [
              { text: "Está jugando con una espada", isCorrect: false },
              { text: "Está en una situación difícil", isCorrect: true },
              { text: "Está en la pared", isCorrect: false },
            ],
            explanation: "'Entre la espada y la pared' significa estar en una situación difícil.",
          },
        ],
      },
      nivel2: {
        title: "¡Emociones a la vista!",
        description: "Ayuda a RoboAmigo a identificar emociones complejas.",
        questions: [
          {
            scenario: "RoboAmigo ve este rostro:",
            question: "/images/interaccion/confundido.jpg",
            options: [
              { text: "Confundido", isCorrect: true },
              { text: "Feliz", isCorrect: false },
              { text: "Enojado", isCorrect: false },
            ],
            explanation: "Cejas fruncidas y boca torcida suelen indicar confusión.",
          },
          {
            scenario: "Un niño sonríe pero tiene los ojos llorosos:",
            question: "¿Qué emoción muestra?",
            options: [
              { text: "Tristeza mezclada con alegría", isCorrect: true },
              { text: "Solo alegría", isCorrect: false },
              { text: "Solo tristeza", isCorrect: false },
            ],
            explanation: "Sonreír con ojos llorosos puede indicar emociones mezcladas.",
          },
        ],
      },
      nivel3: {
        title: "Gesto o adorno",
        description: "Ayuda a RoboAmigo a interpretar gestos de quinto grado.",
        questions: [
          {
            scenario: "Un niño hace un gesto de 'ok' con la mano (círculo con el pulgar e índice):",
            question: "/images/interaccion/ok.jpg",
            options: [
              { text: "Todo está bien o correcto", isCorrect: true },
              { text: "Está pidiendo ayuda", isCorrect: false },
              { text: "Está saludando", isCorrect: false },
            ],
            explanation: "El gesto 'ok' significa que todo está bien o correcto.",
          },
          {
            scenario: "Una niña se encoge de hombros:",
            question: "/images/interaccion/hombrosencogidos.jpg",
            options: [
              { text: "No sabe o no le importa", isCorrect: true },
              { text: "Está cansada", isCorrect: false },
              { text: "Está saludando", isCorrect: false },
            ],
            explanation: "Encogerse de hombros suele indicar que no sabe o no le importa.",
          },
        ],
      },
      nivel4: {
        title: "Intención vs. Acción",
        description: "Ayuda a RoboAmigo a inferir intenciones en situaciones más complejas.",
        questions: [
          {
            scenario: "Un niño mira su tarea y luego a su compañero con cara de duda:",
            question: "¿Qué quiere el niño?",
            options: [
              { text: "Quiere pedir ayuda con la tarea", isCorrect: true },
              { text: "Quiere copiar la tarea", isCorrect: false },
              { text: "Quiere mostrar su tarea", isCorrect: false },
            ],
            explanation: "Mirar la tarea y a un compañero con duda suele indicar que quiere pedir ayuda.",
          },
          {
            scenario: "Una niña mira la ventana y sonríe mientras escucha la lluvia:",
            question: "¿Qué intención tiene la niña?",
            options: [
              { text: "Disfruta el sonido de la lluvia", isCorrect: true },
              { text: "Quiere salir corriendo", isCorrect: false },
              { text: "Quiere cerrar la ventana", isCorrect: false },
            ],
            explanation: "Sonreír y mirar la lluvia indica que disfruta el momento.",
          },
        ],
      },
    },
  },sexto :{},
  septimo:{},
  octavo:{},
  noveno:{},
  decimo:{},
  undecimo:{}

};

export default nivelesPorGrado;