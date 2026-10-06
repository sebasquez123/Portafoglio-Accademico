import { media, photos, type MediaItem } from "@/lib/media";
import type { Text } from "@/i18n/languages";

/*
 * Contenido del portafolio en 3 idiomas.
 * Cada texto traducible es un objeto { es, en, it }: para modificarlo, edita las 3 versiones aquí mismo.
 * Los strings planos (nombres propios, tecnologías, URLs) se muestran igual en todos los idiomas.
 */

export const profile = {
  name: "Sebastián Vásquez Grajales",
  role: {
    es: "Ingeniero Mecatrónico",
    en: "Mechatronics Engineer",
    it: "Ingegnere Meccatronico",
  } as Text,
  location: "Pereira, Colombia",
  phone: "+57 304 462 6822",
  email: "sebastianvasqz12@gmail.com",
  linkedin: "https://www.linkedin.com/in/sebasquez",
  github: "https://github.com/sebasquez123",
  bio: [
    {
      es: "Soy una persona comprometida y dedicada para todo lo que hago, una persona de retos que le gusta entender cómo funcionan las cosas y convertir ideas en algo tangible y útil. Me apasiona aprender mediante la experimentación, construir cosas con mis propias manos, compartir conocimientos y experiencias con los demás y mantenerme conectado con las personas. Además de mis intereses profesionales, disfruto pintar al óleo, cocinar, practicar deporte, construir y reparar cosas, involucrarme en proyectos colaborativos y pasar tiempo con mis familiares y colegas.",
      en: "I am a committed and dedicated person in everything I do, someone who enjoys challenges, likes to understand how things work and turns ideas into something tangible and useful. I am passionate about learning through experimentation, building things with my own hands, sharing knowledge and experiences with others and staying connected with people. Beyond my professional interests, I enjoy oil painting, cooking, playing sports, building and repairing things, getting involved in collaborative projects and spending time with my family and colleagues.",
      it: "Sono una persona impegnata e dedicata in tutto ciò che faccio, una persona che ama le sfide, a cui piace capire come funzionano le cose e trasformare le idee in qualcosa di tangibile e utile. Sono appassionato di imparare attraverso la sperimentazione, costruire cose con le mie mani, condividere conoscenze ed esperienze con gli altri e rimanere in contatto con le persone. Oltre ai miei interessi professionali, mi piace dipingere a olio, cucinare, fare sport, costruire e riparare oggetti, partecipare a progetti collaborativi e trascorrere del tempo con la mia famiglia e i miei colleghi.",
    },
    {
      es: "Durante mi desarrollo académico y profesional he integrado diseños de ingeniería, sistemas embebidos, software e inteligencia artificial, con experiencia que abarca desde el trabajo en laboratorios y la investigación experimental hasta proyectos de ingeniería multidisciplinarios de nivel empresarial. Tengo especial interés en sistemas mecatrónicos y robóticos avanzados y en la integración de electrónica, computación y tecnologías de software de punta para desarrollar soluciones prácticas y contribuir a la educación científica y tecnológica.",
      en: "Throughout my academic and professional development I have integrated engineering design, embedded systems, software and artificial intelligence, with experience ranging from laboratory work and experimental research to enterprise-level multidisciplinary engineering projects. I have a particular interest in advanced mechatronic and robotic systems and in integrating electronics, computing and cutting-edge software technologies to develop practical solutions and contribute to science and technology education.",
      it: "Durante il mio percorso accademico e professionale ho integrato progettazione ingegneristica, sistemi embedded, software e intelligenza artificiale, con un'esperienza che va dal lavoro in laboratorio e dalla ricerca sperimentale fino a progetti di ingegneria multidisciplinari di livello aziendale. Ho un interesse particolare per i sistemi meccatronici e robotici avanzati e per l'integrazione di elettronica, informatica e tecnologie software all'avanguardia, al fine di sviluppare soluzioni pratiche e contribuire all'educazione scientifica e tecnologica.",
    },
    {
      es: "Ingeniero Mecatrónico con experiencia en arquitectura de software, desarrollo full-stack, sistemas IoT e inteligencia artificial. He diseñado soluciones escalables de extremo a extremo, integrando software, aprendizaje automático, modelos de lenguaje y procesamiento de datos para resolver desafíos industriales. Mi objetivo es profundizar en sistemas robóticos y mecatrónicos impulsados por IA mediante investigación de posgrado e innovación colaborativa.",
      en: "Mechatronics Engineer with experience in software architecture, full-stack development, IoT systems and artificial intelligence. I have designed scalable end-to-end solutions, integrating software, machine learning, language models and data processing to solve industrial challenges. My goal is to go deeper into AI-driven robotic and mechatronic systems through graduate research and collaborative innovation.",
      it: "Ingegnere Meccatronico con esperienza in architettura software, sviluppo full-stack, sistemi IoT e intelligenza artificiale. Ho progettato soluzioni scalabili end-to-end, integrando software, apprendimento automatico, modelli linguistici ed elaborazione dei dati per risolvere sfide industriali. Il mio obiettivo è approfondire i sistemi robotici e meccatronici basati sull'IA attraverso la ricerca post-laurea e l'innovazione collaborativa.",
    },
  ] as Text[],
  stats: [
    {
      value: "4.3/5.0",
      label: {
        es: "GPA — Distinción académica",
        en: "GPA — Academic distinction",
        it: "GPA — Distinzione accademica",
      },
    },
    {
      value: "6+",
      label: {
        es: "Años en proyectos de ingeniería",
        en: "Years in engineering projects",
        it: "Anni in progetti di ingegneria",
      },
    },
    {
      value: "4+",
      label: {
        es: "Años al servicio de la comunidad",
        en: "Years serving the community",
        it: "Anni al servizio della comunità",
      },
    },
  ] as { value: string; label: Text }[],
};

export type EducationItem = {
  degree: Text;
  institution: Text;
  period: Text;
  highlight?: Text;
  /** Cursos relevantes: se muestran en la tarjeta. */
  courses: Text;
  /** Resto de detalles: se muestran en el modal. El texto antes de ":" va en negrita. */
  details: Text[];
  /** Fotos en orden: la primera es la portada de la tarjeta. */
  images: string[];
};

export const education: EducationItem[] = [
  {
    degree: {
      es: "B.Sc. en Ingeniería Mecatrónica",
      en: "B.Sc. in Mechatronics Engineering",
      it: "B.Sc. in Ingegneria Meccatronica",
    },
    institution: "Universidad Tecnológica de Pereira, Colombia",
    period: { es: "Feb 2018 — May 2024", en: "Feb 2018 — May 2024", it: "Feb 2018 — Mag 2024" },
    highlight: {
      es: "GPA 4.3/5.0 · Mérito de Distinción Académica",
      en: "GPA 4.3/5.0 · Academic Distinction Award",
      it: "GPA 4.3/5.0 · Merito di Distinzione Accademica",
    },
    courses: {
      es: "Sistemas de Control · Cinemática, Dinámica y Mecanismos · Microcontroladores y Sistemas Embebidos · Automatización Industrial · Aeronáutica · CAD/CAM.",
      en: "Control Systems · Kinematics, Dynamics and Mechanisms · Microcontrollers and Embedded Systems · Industrial Automation · Aeronautics · CAD/CAM.",
      it: "Sistemi di Controllo · Cinematica, Dinamica e Meccanismi · Microcontrollori e Sistemi Embedded · Automazione Industriale · Aeronautica · CAD/CAM.",
    },
    details: [
      {
        es: "Tesis: Sección de ala fija con superficie continua de geometría variable.",
        en: "Thesis: Fixed-wing section with a continuous variable-geometry surface.",
        it: "Tesi: Sezione di ala fissa con superficie continua a geometria variabile.",
      },
      {
        es: "Experiencia académica: Instructor de talleres de Aeronáutica y Robótica · Técnico aprendiz en Mantenimiento Industrial · Fundador del equipo de aeromodelismo Macmotus · Expositor investigador en el 10° y 13° Encuentro Regional de Semilleros · Competidor de robótica — 1er lugar en 2 competencias de resolución de laberintos.",
        en: "Academic experience: Aeronautics and Robotics workshop instructor · Industrial Maintenance apprentice technician · Founder of the Macmotus aeromodelling team · Research speaker at the 10th and 13th Regional Meeting of Research Groups · Robotics competitor — 1st place in 2 maze-solving competitions.",
        it: "Esperienza accademica: Istruttore di laboratori di Aeronautica e Robotica · Tecnico apprendista in Manutenzione Industriale · Fondatore del team di aeromodellismo Macmotus · Relatore di ricerca al 10° e 13° Incontro Regionale dei Gruppi di Ricerca · Concorrente di robotica — 1° posto in 2 competizioni di risoluzione di labirinti.",
      },
      {
        es: "Anécdota: Fue un periodo de aprendizaje que cimentó las bases de mi carrera como desarrollador. Desde mi primer acercamiento a la programación en lenguaje de máquina durante mi formación en Ingeniería Mecatrónica, despertó en mí el interés y la capacidad para desarrollar algoritmos de lógica compleja orientados a la resolución de problemas. Sin embargo, fue durante este periodo académico cuando me adentré plenamente en el mundo del desarrollo de software, ampliando mi comprensión y razonamiento sobre los sistemas informáticos, la seguridad y la comunicación entre sistemas.\n\nEsta experiencia me permitió especializarme en el desarrollo de software, sin perder de vista mi interés por integrar esta disciplina con las diferentes áreas que conforman la Ingeniería Mecatrónica. Después de un periodo de práctica e inmersión, conseguí mi primer trabajo como desarrollador full-stack.",
        en: "Anecdote: It was a learning period that laid the foundations of my career as a developer. My first approach to machine-language programming during my Mechatronics Engineering studies awakened in me the interest and ability to develop complex logic algorithms aimed at problem solving. However, it was during this academic period that I fully immersed myself in the world of software development, broadening my understanding and reasoning about computer systems, security and communication between systems.\n\nThis experience allowed me to specialize in software development without losing sight of my interest in integrating this discipline with the different areas that make up Mechatronics Engineering. After a period of practice and immersion, I landed my first job as a full-stack developer.",
        it: "Aneddoto: È stato un periodo di apprendimento che ha gettato le basi della mia carriera come sviluppatore. Il mio primo approccio alla programmazione in linguaggio macchina durante la mia formazione in Ingegneria Meccatronica ha fatto nascere in me l'interesse e la capacità di sviluppare algoritmi di logica complessa orientati alla risoluzione dei problemi. Tuttavia, è stato durante questo periodo accademico che mi sono immerso pienamente nel mondo dello sviluppo software, ampliando la mia comprensione e il mio ragionamento sui sistemi informatici, la sicurezza e la comunicazione tra sistemi.\n\nQuesta esperienza mi ha permesso di specializzarmi nello sviluppo software, senza perdere di vista il mio interesse a integrare questa disciplina con le diverse aree che compongono l'Ingegneria Meccatronica. Dopo un periodo di pratica e immersione, ho ottenuto il mio primo lavoro come sviluppatore full-stack.",
      },
    ],
    images: photos("education/images/mechatronics"),
  },
  {
    degree: "Junior Fullstack Developer",
    institution: "Universidad Tecnológica de Pereira, Colombia",
    period: { es: "Ene 2024 — Jun 2024", en: "Jan 2024 — Jun 2024", it: "Gen 2023 — Giu 2024" },
    courses: {
      es: "Programación Orientada a Objetos · Arquitecturas de Programación Web · Fundamentos de Vue.js, Django y Node.js.",
      en: "Object-Oriented Programming · Web Programming Architectures · Fundamentals of Vue.js, Django and Node.js.",
      it: "Programmazione Orientata agli Oggetti · Architetture di Programmazione Web · Fondamenti di Vue.js, Django e Node.js.",
    },
    details: [
      {
        es: "Proyecto final: Sistema ERP para manejo de plataformas streaming con JavaScript - Juego de estrategia multijugador con Python.",
        en: "Final project: ERP system for managing streaming platforms with JavaScript - Multiplayer strategy game with Python.",
        it: "Progetto finale: Sistema ERP per la gestione di piattaforme di streaming con JavaScript - Gioco di strategia multigiocatore con Python.",
      },
      {
        es: "Anécdota: Fue un periodo de aprendizaje que cimentó las bases de mi carrera como desarrollador. Desde mi primer acercamiento a la programación de bajo nivel durante mi formación en ingeniería, despertaron en mí el interés y la capacidad para desarrollar algoritmos de lógica compleja orientados a la resolución de problemas. Sin embargo, fue durante este periodo académico cuando me adentré de lleno en el mundo del desarrollo de software, ampliando mi comprensión sobre los sistemas informáticos, la seguridad y la comunicación entre sistemas.\n\nEsta experiencia me permitió especializarme en el desarrollo de software sin perder la conexión con las diferentes disciplinas que componen la ingeniería mecatrónica, manteniendo siempre el interés por integrarlas. Después de un periodo de práctica e inmersión en este campo, obtuve mi primera oportunidad profesional como desarrollador Fullstack.",
        en: "Anecdote: It was a learning period that laid the foundations of my career as a developer. My first approach to low-level programming during my engineering studies awakened in me the interest and ability to develop complex logic algorithms aimed at problem solving. However, it was during this academic period that I fully immersed myself in the world of software development, broadening my understanding of computer systems, security and communication between systems.\n\nThis experience allowed me to specialize in software development without losing the connection with the different disciplines that make up mechatronics engineering, always keeping the interest in integrating them. After a period of practice and immersion in this field, I obtained my first professional opportunity as a Fullstack developer.",
        it: "Aneddoto: È stato un periodo di apprendimento che ha gettato le basi della mia carriera come sviluppatore. Il mio primo approccio alla programmazione a basso livello durante la mia formazione in ingegneria ha fatto nascere in me l'interesse e la capacità di sviluppare algoritmi di logica complessa orientati alla risoluzione dei problemi. Tuttavia, è stato durante questo periodo accademico che mi sono immerso completamente nel mondo dello sviluppo software, ampliando la mia comprensione dei sistemi informatici, della sicurezza e della comunicazione tra sistemi.\n\nQuesta esperienza mi ha permesso di specializzarmi nello sviluppo software senza perdere il legame con le diverse discipline che compongono l'ingegneria meccatronica, mantenendo sempre l'interesse a integrarle. Dopo un periodo di pratica e immersione in questo campo, ho ottenuto la mia prima opportunità professionale come sviluppatore Fullstack.",
      },
    ],
    images: photos("education/images/fullstack"),
  },
  {
    degree: {
      es: "Bootcamp de Inteligencia Artificial",
      en: "Artificial Intelligence Bootcamp",
      it: "Bootcamp di Intelligenza Artificiale",
    },
    institution: "Universidad Tecnológica de Pereira, Colombia",
    period: { es: "Sep 2024 — Dic 2024", en: "Sep 2024 — Dec 2024", it: "Set 2024 — Dic 2024" },
    courses: {
      es: "Ciencia de Datos e Ingeniería de Datos · Fundamentos de Machine Learning y Deep Learning · Análisis Exploratorio de Datos (EDA).",
      en: "Data Science and Data Engineering · Fundamentals of Machine Learning and Deep Learning · Exploratory Data Analysis (EDA).",
      it: "Data Science e Data Engineering · Fondamenti di Machine Learning e Deep Learning · Analisi Esplorativa dei Dati (EDA).",
    },
    details: [
      {
        es: "Proyecto final: Sistema de predicción de radiación solar en la ciudad de Pereira usando Python y Machine Learning.",
        en: "Final project: Solar radiation prediction system for the city of Pereira using Python and Machine Learning.",
        it: "Progetto finale: Sistema di previsione della radiazione solare nella città di Pereira con Python e Machine Learning.",
      },
      {
        es: "Anécdota: Este bootcamp representó un desafío intelectual que amplió mis horizontes en el campo de la inteligencia artificial y la ciencia de datos. Me sumergí en el aprendizaje automático, explorando algoritmos, el procesamiento de grandes conjuntos de datos y el desarrollo de modelos predictivos orientados a resolver problemas reales.\n\nAdemás de fortalecer mis conocimientos técnicos, el programa desarrolló mis capacidades analíticas, de investigación y mi autonomía para aprender nuevas tecnologías de manera autodidacta. Fue una experiencia enriquecedora que me permitió relacionarme con personas apasionadas por la tecnología y ampliar mi perspectiva sobre las aplicaciones de la inteligencia artificial. Asimismo, contribuyó a abrir nuevas oportunidades profesionales, entre ellas mi incorporación como Ingeniero de Desarrollo Fullstack + AI Junior.",
        en: "Anecdote: This bootcamp was an intellectual challenge that broadened my horizons in the field of artificial intelligence and data science. I immersed myself in machine learning, exploring algorithms, the processing of large datasets and the development of predictive models aimed at solving real problems.\n\nBeyond strengthening my technical knowledge, the program developed my analytical and research skills and my autonomy to learn new technologies on my own. It was an enriching experience that allowed me to connect with people passionate about technology and broaden my perspective on the applications of artificial intelligence. It also helped open new professional opportunities, including my role as a Junior Fullstack + AI Development Engineer.",
        it: "Aneddoto: Questo bootcamp ha rappresentato una sfida intellettuale che ha ampliato i miei orizzonti nel campo dell'intelligenza artificiale e della scienza dei dati. Mi sono immerso nell'apprendimento automatico, esplorando algoritmi, l'elaborazione di grandi insiemi di dati e lo sviluppo di modelli predittivi orientati a risolvere problemi reali.\n\nOltre a rafforzare le mie conoscenze tecniche, il programma ha sviluppato le mie capacità analitiche e di ricerca e la mia autonomia nell'apprendere nuove tecnologie da autodidatta. È stata un'esperienza arricchente che mi ha permesso di entrare in contatto con persone appassionate di tecnologia e di ampliare la mia prospettiva sulle applicazioni dell'intelligenza artificiale. Inoltre, ha contribuito ad aprire nuove opportunità professionali, tra cui il mio ingresso come Ingegnere di Sviluppo Fullstack + AI Junior.",
      },
    ],
    images: photos("education/images/bootcamp"),
  },
];

export type Project = {
  title: Text;
  kind: Text;
  period: Text;
  tags: Text[];
  source: { name: Text; url: string }[];
  /** Fotos y videos en orden: las 4 primeras ilustran el artículo, el resto va en la galería. */
  media: MediaItem[];
};

export const projects: Project[] = [
  {
    title: {
      es: "Sección de ala fija de geometría variable",
      en: "Variable-geometry fixed-wing section",
      it: "Sezione di ala fissa a geometria variabile",
    },
    kind: { es: "Tesis de grado", en: "Undergraduate thesis", it: "Tesi di laurea" },
    period: { es: "Jul 2020 — May 2024", en: "Jul 2020 — May 2024", it: "Lug 2020 — Mag 2024" },
    tags: [
      { es: "Aeronáutica", en: "Aeronautics", it: "Aeronautica" },
      { es: "Manufactura aditiva", en: "Additive manufacturing", it: "Manifattura additiva" },
      { es: "Control embebido", en: "Embedded control", it: "Controllo embedded" },
      { es: "Túnel de viento", en: "Wind tunnel", it: "Galleria del vento" },
    ],
    media: media("projects/images/final_project"),
    source: [
      {
        name: {
          es: "RREDSI — Publicación del proyecto",
          en: "RREDSI — Project publication",
          it: "RREDSI — Pubblicazione del progetto",
        },
        url: "https://rredsi.com.co/270-seccion-de-ala-fija-con-superficie-continua-de-geometria-variable/#more-2552",
      },
      {
        name: {
          es: "Búsqueda relacionada (Google)",
          en: "Related search (Google)",
          it: "Ricerca correlata (Google)",
        },
        url: "https://www.google.com/search?q=Secci%C3%B3n+de+ala+fija+con+superficie+continua+de+geometr%C3%ADa+variable+UTP&oq=Secci%C3%B3n+de+ala+fija+con+superficie+continua+de+geometr%C3%ADa+variable+UTP&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQIxgnGPAFGJ4GGKIH0gEHNjUyajBqOagCBrACAfEFYIKs94z8IH4&sourceid=chrome&source=chrome.ob&ie=UTF-8",
      },
    ],
  },
  {
    title: {
      es: "Sistema Agentic RAG & MCP",
      en: "Agentic RAG & MCP System",
      it: "Sistema Agentic RAG & MCP",
    },
    kind: {
      es: "Investigación aplicada independiente",
      en: "Independent applied research",
      it: "Ricerca applicata indipendente",
    },
    period: { es: "May 2026 — Nov 2027", en: "May 2026 — Nov 2027", it: "Mag 2026 — Nov 2027" },
    tags: ["LLM", "RAG", "MCP", "NestJS", "PostgreSQL"],
    media: media("projects/images/agentic"),
    source: [
      { name: "GitHub — Generic-MCP", url: "https://github.com/sebasquez123/Generic-MCP" },
      { name: "GitHub — Generic-RAG", url: "https://github.com/sebasquez123/Generic-RAG" },
    ],
  },
  {
    title: {
      es: "Macmotus — Aeronave de competencia de 2.6 m",
      en: "Macmotus — 2.6 m competition aircraft",
      it: "Macmotus — Aereo da competizione da 2,6 m",
    },
    kind: {
      es: "Proyecto extracurricular de ingeniería",
      en: "Extracurricular engineering project",
      it: "Progetto extracurricolare di ingegneria",
    },
    period: { es: "Jun 2023 — Abr 2026", en: "Jun 2023 — Apr 2026", it: "Giu 2023 — Apr 2026" },
    tags: [
      "ANSYS",
      "SolidWorks",
      "MATLAB",
      { es: "Liderazgo", en: "Leadership", it: "Leadership" },
    ],
    media: media("projects/images/macmotus"),
    source: [
      { name: "Instagram — @macmotus.aero", url: "https://www.instagram.com/macmotus.aero/" },
      {
        name: {
          es: "UTP — Comunicaciones oficiales",
          en: "UTP — Official communications",
          it: "UTP — Comunicazioni ufficiali",
        },
        url: "https://comunicaciones.utp.edu.co/105965/facultades/facultades-facultades-8/del-aula-al-cielo-mexicano-el-vuelo-historico-de-la-utp-en-aero-design-mexico-2026/",
      },
      {
        name: {
          es: "Instagram — Publicación del vuelo",
          en: "Instagram — Flight post",
          it: "Instagram — Post del volo",
        },
        url: "https://www.instagram.com/p/DXACv8eAY0C?img_index=6",
      },
    ],
  },
  {
    title: {
      es: "Proyectos de software personales y académicos",
      en: "Personal and academic software projects",
      it: "Progetti software personali e accademici",
    },
    kind: {
      es: "Aprendizaje y desarrollo profesional",
      en: "Learning and professional growth",
      it: "Apprendimento e crescita professionale",
    },
    period: { es: "Abr 2024 — Actualidad", en: "Apr 2024 — Present", it: "Apr 2024 — Presente" },
    tags: ["Python", "OpenCV", "scikit-learn", "TypeScript", "Flutter", "React"],
    media: media("projects/images/talentotech"),
    source: [
      { name: "GitHub — sebasquez123", url: "https://github.com/sebasquez123?tab=repositories" },
      { name: "GitHub — Alice-mobile", url: "https://github.com/sebasquez123/Alice-mobile" },
      {
        name: "GitHub — Handsigns-reader",
        url: "https://github.com/sebasquez123/Handsigns-reader-OpenCv-Scikitlearn-MediaPipe",
      },
      { name: "GitHub — LandingMacMotus", url: "https://github.com/sebasquez123/LandingMacMotus" },
    ],
  },
];

export type ExperienceItem = {
  role: Text;
  company: string;
  website: string;
  place: Text;
  /** Etiqueta e ícono de ubicación mostrados en el detalle de la experiencia. */
  location: "colombiaMexico" | "usa" | "colombia";
  period: Text;
  bullets: Text[];
  /** Fotos en orden: la primera es la portada de la tarjeta. */
  images: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Fullstack Software Engineer",
    company: "MetGroup SAS",
    location: "colombiaMexico",
    website: "https://www.metgroupsas.com/",
    images: photos("jobs/images/metgroup"),
    place: "Pereira, Colombia",
    period: { es: "May 2026 — Actualidad", en: "May 2026 — Present", it: "Mag 2026 — Presente" },
    bullets: [
      {
        es: "Lideré la arquitectura y el desarrollo integral de una plataforma Agentic avanzada de uso interno y comercial llamada MetBot, integrando flujos y conceptos de inferencia enriquecida usando RAG, MCP y motores de inferencia on-premise (vLLM, Ollama, Nvidia) como iniciativa para automatizar y optimizar procesos.",
        en: "Led the architecture and end-to-end development of an advanced Agentic platform for internal and commercial use called MetBot, integrating enriched inference flows and concepts using RAG, MCP and on-premise inference engines (vLLM, Ollama, Nvidia) as an initiative to automate and optimize processes.",
        it: "Ho guidato l'architettura e lo sviluppo completo di una piattaforma Agentic avanzata per uso interno e commerciale chiamata MetBot, integrando flussi e concetti di inferenza arricchita tramite RAG, MCP e motori di inferenza on-premise (vLLM, Ollama, Nvidia) come iniziativa per automatizzare e ottimizzare i processi.",
      },
      {
        es: "Desarrollé, mantuve y escalé plataformas empresariales en producción para la gestión logística, recaudación y operación de flotas de transporte masivo en Colombia y México usando Node.js, NestJS y Angular.",
        en: "Developed, maintained and scaled enterprise platforms in production for logistics management, fare collection and fleet operations of mass transit systems in Colombia and Mexico using Node.js, NestJS and Angular.",
        it: "Ho sviluppato, mantenuto e scalato piattaforme aziendali in produzione per la gestione logistica, la riscossione e l'operatività di flotte di trasporto pubblico di massa in Colombia e Messico con Node.js, NestJS e Angular.",
      },
      {
        es: "Participé activamente en la toma de decisiones técnicas de arquitectura, resolviendo incidencias críticas y liderando la evolución continua de funcionalidades y servicios de alta disponibilidad en producción, proponiendo nuevos alcances y nuevas integraciones con tecnología no explorada",
        en: "Actively participated in technical architecture decision-making, resolving critical incidents and leading the continuous evolution of high-availability features and services in production, proposing new scopes and new integrations with unexplored technology",
        it: "Ho partecipato attivamente alle decisioni tecniche di architettura, risolvendo incidenti critici e guidando l'evoluzione continua di funzionalità e servizi ad alta disponibilità in produzione, proponendo nuovi ambiti e nuove integrazioni con tecnologie inesplorate",
      },
    ],
  },
  {
    role: "Fullstack Software Engineer",
    company: "BlueSkyAI",
    location: "usa",
    website: "https://blueskyai.co/",
    images: photos("jobs/images/blueskyai"),
    place: "Raleigh NC, USA",
    period: { es: "Dic 2024 — Mar 2026", en: "Dec 2024 — Mar 2026", it: "Dic 2024 — Mar 2026" },
    bullets: [
      {
        es: "Diseñé y desarrollé desde cero, en mi rol de Founding Engineer, la arquitectura de 2 aplicaciones web y móviles con IA desplegadas exitosamente en producción con Flutter, NestJS, Next.js, PostgreSQL y Firebase, aplicando Clean Architecture, principios SOLID y fuerte investigación técnica.",
        en: "Designed and built from scratch, as Founding Engineer, the architecture of 2 AI-powered web and mobile applications successfully deployed to production with Flutter, NestJS, Next.js, PostgreSQL and Firebase, applying Clean Architecture, SOLID principles and strong technical research.",
        it: "Ho progettato e sviluppato da zero, nel mio ruolo di Founding Engineer, l'architettura di 2 applicazioni web e mobile con IA distribuite con successo in produzione con Flutter, NestJS, Next.js, PostgreSQL e Firebase, applicando Clean Architecture, principi SOLID e una solida ricerca tecnica.",
      },
      {
        es: "Integré modelos de deep learning y LLM (Gemini, OpenAI, Claude, Llama, Whisper, Silero VAD, ElevenLabs, Deepgram) mediante capas de interacción contextual basadas en MCP y RAG, habilitando modos de llamada de voz en tiempo real con agentes de asistencia personalizada vía REST, Socket.io, Webhooks y WebRTC en servicios de backend Nest.js",
        en: "Integrated deep learning and LLM models (Gemini, OpenAI, Claude, Llama, Whisper, Silero VAD, ElevenLabs, Deepgram) through contextual interaction layers based on MCP and RAG, enabling real-time voice call modes with personalized assistant agents via REST, Socket.io, Webhooks and WebRTC in Nest.js backend services",
        it: "Ho integrato modelli di deep learning e LLM (Gemini, OpenAI, Claude, Llama, Whisper, Silero VAD, ElevenLabs, Deepgram) tramite livelli di interazione contestuale basati su MCP e RAG, abilitando modalità di chiamata vocale in tempo reale con agenti di assistenza personalizzata tramite REST, Socket.io, Webhooks e WebRTC nei servizi backend Nest.js",
      },
      {
        es: "Me desempeñé como ingeniero investigador, contribuyendo al diseño e integración de sistemas conversacionales basados en IA on-device, investigando tecnologías emergentes para crear un sistema conversacional de audio y voz en tiempo real. Un prototipo funcional fue implementado en producción, hoy en Estados Unidos hallado en la App Store y Google Play como https://apps.apple.com/us/app/phit-performance/id6754351073",
        en: "Worked as a research engineer, contributing to the design and integration of on-device AI conversational systems, researching emerging technologies to build a real-time audio and voice conversational system. A working prototype was deployed to production and is available today in the United States on the App Store and Google Play as https://apps.apple.com/us/app/phit-performance/id6754351073",
        it: "Ho lavorato come ingegnere ricercatore, contribuendo alla progettazione e all'integrazione di sistemi conversazionali basati su IA on-device, studiando tecnologie emergenti per creare un sistema conversazionale audio e vocale in tempo reale. Un prototipo funzionante è stato rilasciato in produzione ed è oggi disponibile negli Stati Uniti su App Store e Google Play come https://apps.apple.com/us/app/phit-performance/id6754351073",
      },
    ],
  },
  {
    role: "Backend Software Engineer (part-time)",
    company: "GISOSA",
    location: "colombia",
    website: "https://www.linkedin.com/company/gisosa/",
    images: photos("jobs/images/gisosa"),
    place: "Bogotá, Colombia",
    period: { es: "Sep 2025 — Nov 2025", en: "Sep 2025 — Nov 2025", it: "Set 2025 — Nov 2025" },
    bullets: [
      {
        es: "Lideré el desarrollo backend del motor de validación de RIPS y Facturación Electrónica de Venta (FEV), colaborando de forma directa con la gerencia de la institución de salud (IPS) para asegurar el estricto cumplimiento de las regulaciones de la DIAN (Dirección de Impuestos y Aduanas Nacionales) y el MSPS (Ministerio de Salud y Protección Social) de Colombia.",
        en: "Led the backend development of the validation engine for RIPS and Electronic Sales Invoicing (FEV), working directly with the management of the healthcare institution (IPS) to ensure strict compliance with the regulations of Colombia's DIAN (National Tax and Customs Directorate) and MSPS (Ministry of Health and Social Protection).",
        it: "Ho guidato lo sviluppo backend del motore di validazione dei RIPS e della Fatturazione Elettronica di Vendita (FEV), collaborando direttamente con la direzione dell'istituto sanitario (IPS) per garantire il rigoroso rispetto delle normative della DIAN (Direzione delle Imposte e Dogane Nazionali) e del MSPS (Ministero della Salute e della Protezione Sociale) della Colombia.",
      },
      {
        es: "Diseñé e implementé los esquemas relacionales en PostgreSQL y los flujos de validación para procesar los datos estructurados de facturación médica y asignación de citas para servicio de gestión de salud prestado por la institución.",
        en: "Designed and implemented the relational schemas in PostgreSQL and the validation flows to process structured medical billing and appointment scheduling data for the healthcare management service provided by the institution.",
        it: "Ho progettato e implementato gli schemi relazionali in PostgreSQL e i flussi di validazione per elaborare i dati strutturati della fatturazione medica e dell'assegnazione degli appuntamenti per il servizio di gestione sanitaria fornito dall'istituto.",
      },
      {
        es: "Desarrollé servicios con TypeScript y Node.js definiendo todas las relaciones primarias de base de datos, lo que incrementó la automatización de procesos de digitación manual en un 50% y redujo drásticamente los errores humanos, ofreciendo un mecanismo seguro y viable, como se estipulaba en los alcances del acuerdo.",
        en: "Developed services with TypeScript and Node.js defining all primary database relationships, which increased the automation of manual data-entry processes by 50% and drastically reduced human errors, providing a secure and viable mechanism, as stipulated in the scope of the agreement.",
        it: "Ho sviluppato servizi con TypeScript e Node.js definendo tutte le relazioni primarie del database, aumentando del 50% l'automazione dei processi di inserimento manuale dei dati e riducendo drasticamente gli errori umani, offrendo un meccanismo sicuro e sostenibile, come previsto dagli obiettivi dell'accordo.",
      },
    ],
  },
  {
    role: "Fullstack Software Engineer (part-time)",
    company: "CINNOV",
    location: "colombia",
    website: "https://www.linkedin.com/company/cinnovinc/",
    images: photos("jobs/images/cinnov"),
    place: "Bogotá, Colombia",
    period: { es: "Abr 2025 — Jul 2025", en: "Apr 2025 — Jul 2025", it: "Apr 2025 — Lug 2025" },
    bullets: [
      {
        es: "Entregué 3 servicios backend con comunicación streaming progresiva basados en localización en tiempo real con Node.js y MongoDB, garantizando un rendimiento óptimo, baja latencia y alta confiabilidad bajo escenarios de tráfico pesado y concurrencia multiplataforma",
        en: "Delivered 3 backend services with progressive streaming communication based on real-time location with Node.js and MongoDB, ensuring optimal performance, low latency and high reliability under heavy-traffic and cross-platform concurrency scenarios",
        it: "Ho realizzato 3 servizi backend con comunicazione in streaming progressivo basati sulla localizzazione in tempo reale con Node.js e MongoDB, garantendo prestazioni ottimali, bassa latenza e alta affidabilità in scenari di traffico intenso e concorrenza multipiattaforma",
      },
      {
        es: "Diseñé e implementé 1 microservicio con un modelo de Machine Learning entrenado (Python, Jupyter) para automatizar y optimizar algunos flujos de validación de datos en una plataforma de gestión de incidentes urbanos.",
        en: "Designed and implemented 1 microservice with a trained Machine Learning model (Python, Jupyter) to automate and optimize some data validation flows on an urban incident management platform.",
        it: "Ho progettato e implementato 1 microservizio con un modello di Machine Learning addestrato (Python, Jupyter) per automatizzare e ottimizzare alcuni flussi di validazione dei dati in una piattaforma di gestione degli incidenti urbani.",
      },
      {
        es: "Desarrollé el funcionamiento de las notificaciones en tiempo real, del sistema de gamificación y asignación de tareas, retos y recompensas de la aplicación y la validación de incidentes urbanos que hoy contribuyen a la seguridad pública en la plataforma https://www.bigosafe.com/. ",
        en: "Developed the real-time notifications, the gamification system and the assignment of tasks, challenges and rewards in the application, as well as the validation of urban incidents that today contribute to public safety on the platform https://www.bigosafe.com/. ",
        it: "Ho sviluppato il funzionamento delle notifiche in tempo reale, del sistema di gamification e dell'assegnazione di compiti, sfide e ricompense dell'applicazione, nonché la validazione degli incidenti urbani che oggi contribuiscono alla sicurezza pubblica sulla piattaforma https://www.bigosafe.com/. ",
      },
    ],
  },
  {
    role: "Robotics Instructor (Contract)",
    company: "UTP - CIDT",
    location: "colombia",
    website: "https://cidt.utp.edu.co/",
    images: photos("jobs/images/tallerista"),
    place: "Pereira, Colombia",
    period: { es: "Sep 2024 — Nov 2024", en: "Sep 2024 — Nov 2024", it: "Set 2024 — Nov 2024" },
    bullets: [
      {
        es: "Diseñé y desarrollé 5 módulos formativos y talleres pedagógicos enfocados en principios de programación, instrumentación de sensores, ensamblaje de robots y fundamentos de aeronáutica para comunidades educativas rurales de Risaralda.",
        en: "Designed and developed 5 training modules and teaching workshops focused on programming principles, sensor instrumentation, robot assembly and aeronautics fundamentals for rural educational communities in Risaralda.",
        it: "Ho progettato e sviluppato 5 moduli formativi e laboratori didattici incentrati sui principi di programmazione, sulla strumentazione di sensori, sull'assemblaggio di robot e sui fondamenti di aeronautica per le comunità educative rurali di Risaralda.",
      },
      {
        es: "Impartí sesiones teórico-prácticas a más de 60 estudiantes de básica y media de colegios oficiales de municipios no certificados, liderando la gestión de aula, dinámicas de trabajo en equipo y actividades de divulgación STEM.",
        en: "Delivered theoretical and practical sessions to more than 60 primary and secondary school students from public schools in non-certified municipalities, leading classroom management, teamwork dynamics and STEM outreach activities.",
        it: "Ho tenuto sessioni teorico-pratiche a più di 60 studenti di scuola primaria e secondaria di istituti pubblici di comuni non certificati, guidando la gestione della classe, le dinamiche di lavoro di squadra e le attività di divulgazione STEM.",
      },
      {
        es: "Ejecuté la prestación de servicios técnicos y pedagógicos en el marco del Convenio Interadministrativo No. 2485 entre la Universidad Tecnológica de Pereira y la Gobernación de Risaralda, fortaleciendo la apropiación social de la ciencia y la tecnología en convenio con el Centro de Innovación y Desarrollo Tecnológico (CIDT).",
        en: "Delivered technical and teaching services under Inter-administrative Agreement No. 2485 between the Universidad Tecnológica de Pereira and the Government of Risaralda, strengthening the social appropriation of science and technology in partnership with the Center for Innovation and Technological Development (CIDT).",
        it: "Ho svolto la prestazione di servizi tecnici e didattici nell'ambito della Convenzione Interamministrativa n. 2485 tra la Universidad Tecnológica de Pereira e il Governo di Risaralda, rafforzando l'appropriazione sociale della scienza e della tecnologia in collaborazione con il Centro di Innovazione e Sviluppo Tecnologico (CIDT).",
      },
    ],
  },
  {
    role: {
      es: "Técnico Instalador de Equipos de Seguridad",
      en: "Security Equipment Installation Technician",
      it: "Tecnico Installatore di Apparecchiature di Sicurezza",
    },
    company: "Tecnisec de Colombia - Sede Pereira",
    location: "colombia",
    website: "https://tecniseg.com.co/",
    images: photos("jobs/images/tecniseg"),
    place: "Pereira, Colombia",
    period: { es: "Ene 2023 — Ene 2024", en: "Jan 2023 — Jan 2024", it: "Gen 2023 — Gen 2024" },
    bullets: [
      {
        es: "Instalé, configuré y programé sistemas integrales de seguridad electrónica, incluyendo circuitos cerrados de televisión (CCTV), paneles de alarma, cableado estructurado, sensores de proximidad y contacto en más de 45 instalaciones residenciales, comerciales y del sector público.",
        en: "Installed, configured and programmed integrated electronic security systems, including closed-circuit television (CCTV), alarm panels, structured cabling, and proximity and contact sensors in more than 45 residential, commercial and public-sector facilities.",
        it: "Ho installato, configurato e programmato sistemi integrati di sicurezza elettronica, inclusi circuiti chiusi di televisione (CCTV), pannelli di allarme, cablaggio strutturato, sensori di prossimità e di contatto in più di 45 installazioni residenziali, commerciali e del settore pubblico.",
      },
      {
        es: "Ejecuté planes de mantenimiento preventivo y correctivo de infraestructura eléctrica, telemetría y transmisión de video para clientes del sector privado y público, asegurando estricta confidencialidad y la continuidad operativa de los sistemas de videovigilancia.",
        en: "Carried out preventive and corrective maintenance plans for electrical infrastructure, telemetry and video transmission for private and public-sector clients, ensuring strict confidentiality and the operational continuity of video surveillance systems.",
        it: "Ho eseguito piani di manutenzione preventiva e correttiva di infrastrutture elettriche, telemetria e trasmissione video per clienti del settore privato e pubblico, garantendo la massima riservatezza e la continuità operativa dei sistemi di videosorveglianza.",
      },
      {
        es: "Diagnostiqué y resolví fallas en campo mediante el manejo de instrumental técnico y normativas de cableado, garantizando la óptima transmisión de los dispositivos de detección perimetral. Me formé en el uso de herramientas especializadas y protocolos de seguridad como técnico en mecatrónica.",
        en: "Diagnosed and resolved field failures using technical instruments and cabling standards, ensuring optimal transmission of perimeter detection devices. I was trained in the use of specialized tools and safety protocols as a mechatronics technician.",
        it: "Ho diagnosticato e risolto guasti sul campo utilizzando strumentazione tecnica e normative di cablaggio, garantendo la trasmissione ottimale dei dispositivi di rilevamento perimetrale. Mi sono formato nell'uso di strumenti specializzati e protocolli di sicurezza come tecnico in meccatronica.",
      },
    ],
  },
];

export type LeadershipItem = {
  role: Text;
  place: Text;
  period: Text;
  text: Text;
  /** Muestra en el detalle el enlace hacia la sección de certificados. */
  certificate: boolean;
  /** Fotos y videos en orden: la primera es la portada de la tarjeta. */
  media: MediaItem[];
};

export const leadership: LeadershipItem[] = [
  {
    role: {
      es: "Representante de Egresados — Facultad de Tecnología",
      en: "Alumni Representative — Faculty of Technology",
      it: "Rappresentante degli Alumni — Facoltà di Tecnologia",
    },
    place: {
      es: "Universidad Tecnológica de Pereira - Facultad de Tecnología",
      en: "Universidad Tecnológica de Pereira - Faculty of Technology",
      it: "Universidad Tecnológica de Pereira - Facoltà di Tecnologia",
    },
    period: { es: "May 2024 — May 2026", en: "May 2024 — May 2026", it: "Mag 2024 — Mag 2026" },
    certificate: true,
    media: media("leadership/images/representante"),
    text: {
      es: "Fui representante de los egresados en el Consejo Académico de la Facultad de Tecnología de la Universidad Tecnológica de Pereira. Mi labor como ingeniero voluntario y representante consistió en comprometerme con la comunidad y apoyar proactivamente la formulación de propuestas y la búsqueda de soluciones que respondieran a sus preocupaciones y necesidades. Ejercí esta representación durante los dos años posteriores a mi graduación, tras ser elegido democráticamente por la comunidad de egresados y recibir la aprobación de la Asociación de Egresados de la Universidad Tecnológica de Pereira (ASEUTP). Durante este periodo, contribuí con propuestas de extensión, preparé actividades de divulgación del conocimiento como ARENA UTP, participé en las sesiones del Consejo y promoví el desarrollo y la ampliación de la infraestructura de la Facultad.",
      en: "I served as the alumni representative on the Academic Council of the Faculty of Technology at the Universidad Tecnológica de Pereira. As a volunteer engineer and representative, I was committed to supporting the community by proactively developing proposals and seeking solutions that addressed its concerns and needs. I held this position for two years after graduation, following a democratic election by the alumni community and approval by the Universidad Tecnológica de Pereira Alumni Association (ASEUTP). During this period, I contributed outreach proposals, organized knowledge-sharing activities such as ARENA UTP, participated in Council meetings, and advocated for the development and expansion of the Faculty's infrastructure.",
      it: "Ho ricoperto il ruolo di rappresentante degli ex studenti nel Consiglio Accademico della Facoltà di Tecnologia della Universidad Tecnológica de Pereira. In qualità di ingegnere volontario e rappresentante, mi sono impegnato a sostenere attivamente la comunità attraverso l'elaborazione di proposte e la ricerca di soluzioni che rispondessero alle sue preoccupazioni e necessità. Ho svolto questo incarico per due anni dopo la laurea, in seguito a un'elezione democratica da parte della comunità degli ex studenti e all'approvazione dell'Associazione degli Ex Studenti della Universidad Tecnológica de Pereira (ASEUTP). Durante questo periodo, ho contribuito alla formulazione di proposte di estensione universitaria, organizzato attività di divulgazione delle conoscenze come ARENA UTP, partecipato alle riunioni del Consiglio e promosso lo sviluppo e l'ampliamento delle infrastrutture della Facoltà.",
    },
  },
  {
    role: {
      es: "Monitor y asistente académico en Robótica y Aeronáutica",
      en: "Teaching and academic assistant in Robotics and Aeronautics",
      it: "Tutor e assistente accademico in Robotica e Aeronautica",
    },
    place: {
      es: "Semilleros de investigación CIDT, Mecabotica & Robótica aplicada",
      en: "CIDT, Mecabotica & Applied Robotics research groups",
      it: "Gruppi di ricerca CIDT, Mecabotica & Robotica applicata",
    },
    period: { es: "Dic 2020 — Jun 2024", en: "Dec 2020 — Jun 2024", it: "Dic 2020 — Giu 2024" },
    certificate: true,
    media: media("leadership/images/asistente academico"),
    text: {
      es: "Fui monitor y asistente de laboratorio durante la mayor parte de mi periodo académico dentro de los laboratorios de aeronáutica y mecatrónica, perteneciendo a los semilleros de investigación CIDT, Mecabotica & Robótica aplicada. Mis labores fueron apoyar a los estudiantes en actividades experimentales, asistir en la preparación de materiales, apoyar la construcción de proyectos y participar en actividades de investigación junto con otros estudiantes. Esta experiencia me permitió consolidar mis conocimientos en robótica y aeronáutica, así como desarrollar habilidades de enseñanza y liderazgo desde una etapa temprana. https://comunicaciones.utp.edu.co/68535/facultades/facultades-facultades-10/facultad-de-mecanica-aplicada-y-semillero-de-aeronautica-de-la-utp-un-espacio-para-la-innovacion-y-el-desarrollo-tecnologico/",
      en: "I was a teaching and laboratory assistant for most of my academic period in the aeronautics and mechatronics laboratories, as a member of the CIDT, Mecabotica & Applied Robotics research groups. My duties were to support students in experimental activities, assist in preparing materials, support project construction and take part in research activities alongside other students. This experience allowed me to consolidate my knowledge of robotics and aeronautics, as well as develop teaching and leadership skills from an early stage. https://comunicaciones.utp.edu.co/68535/facultades/facultades-facultades-10/facultad-de-mecanica-aplicada-y-semillero-de-aeronautica-de-la-utp-un-espacio-para-la-innovacion-y-el-desarrollo-tecnologico/",
      it: "Sono stato tutor e assistente di laboratorio per la maggior parte del mio percorso accademico nei laboratori di aeronautica e meccatronica, come membro dei gruppi di ricerca CIDT, Mecabotica & Robotica applicata. I miei compiti erano supportare gli studenti nelle attività sperimentali, assistere nella preparazione dei materiali, supportare la costruzione di progetti e partecipare ad attività di ricerca insieme ad altri studenti. Questa esperienza mi ha permesso di consolidare le mie conoscenze in robotica e aeronautica, oltre a sviluppare capacità di insegnamento e leadership fin da una fase iniziale. https://comunicaciones.utp.edu.co/68535/facultades/facultades-facultades-10/facultad-de-mecanica-aplicada-y-semillero-de-aeronautica-de-la-utp-un-espacio-para-la-innovacion-y-el-desarrollo-tecnologico/",
    },
  },
  {
    role: {
      es: "Ponente investigador — Encuentros RREDSI",
      en: "Research speaker — RREDSI Meetings",
      it: "Relatore di ricerca — Incontri RREDSI",
    },
    place: "Universidad Tecnológica de Pereira - RREDSI",
    period: { es: "Nov 2020 & Oct 2023", en: "Nov 2020 & Oct 2023", it: "Nov 2020 & Ott 2023" },
    certificate: true,
    media: media("leadership/images/rredsi"),
    text: {
      es: "Presentación del proyecto que se titula 'Sección de ala fija de geometría variable' en eventos departamentales y regionales en otras ciudades del país, con evaluación de 89.5/100 en madurez investigativa, innovación e impacto tecnológico. Esta actividad consiste en exponer los avances del proyecto, discutir los resultados obtenidos y recibir retroalimentación de expertos en el área para mejorar la calidad y el impacto del desarrollo a nivel regional y departamental, representando a la Universidad Tecnológica de Pereira. https://rredsi.com.co/xiii-encuentro-departamental-de-semilleros-de-investigacion-de-risaralda/",
      en: "Presentation of the project titled 'Variable-geometry fixed-wing section' at departmental and regional events in other cities across the country, with a score of 89.5/100 in research maturity, innovation and technological impact. This activity consists of presenting the project's progress, discussing the results obtained and receiving feedback from experts in the field to improve the quality and impact of the development at the regional and departmental level, representing the Universidad Tecnológica de Pereira. https://rredsi.com.co/xiii-encuentro-departamental-de-semilleros-de-investigacion-de-risaralda/",
      it: "Presentazione del progetto intitolato 'Sezione di ala fissa a geometria variabile' in eventi dipartimentali e regionali in altre città del paese, con una valutazione di 89,5/100 in maturità della ricerca, innovazione e impatto tecnologico. Questa attività consiste nell'esporre i progressi del progetto, discutere i risultati ottenuti e ricevere feedback da esperti del settore per migliorare la qualità e l'impatto dello sviluppo a livello regionale e dipartimentale, rappresentando la Universidad Tecnológica de Pereira. https://rredsi.com.co/xiii-encuentro-departamental-de-semilleros-de-investigacion-de-risaralda/",
    },
  },
  {
    role: {
      es: "Contratista de ingeniería — Transporte de semen equino",
      en: "Engineering contractor — Equine semen transport",
      it: "Appaltatore di ingegneria — Trasporto di seme equino",
    },
    place: "Universidad Tecnológica de Pereira - Bioembrio FIV SAS",
    period: { es: "May 2026 — Jul 2026", en: "May 2026 — Jul 2026", it: "Mag 2026 — Lug 2026" },
    certificate: false,
    media: media("leadership/images/portadora"),
    text: {
      es: "Durante una de mi etapa como ingeniero en la industria y en la academia de forma adyacente, me involucré en una iniciativa para apoyar el desarrollo de nuevos prototipos mecatrónicos. Junto con el docente Adonai Zapata director del semillero de investigación de aeronáutica y un representante de la empresa 'Bioembrio FIV SAS', se llevó a cabo un rediseño y reparación de un prototipo comercial de una 'Transportadora tipo Termo de Embriones u Ovocitos Bovinos' de alta autonomía, que consiste en mantener los embriones entre 36°C y 37°C constantes con un sistema de control de temperatura para una intensidad de trabajo de 20 a 24 horas mediante control electrónico analógico. La actividad se consolidó como un trabajo colaborativo entre la academia y la industria para fabricar soluciones viables a una necesidad del sector ganadero.",
      en: "During a stage in which I worked as an engineer in industry and academia in parallel, I got involved in an initiative to support the development of new mechatronic prototypes. Together with professor Adonai Zapata, director of the aeronautics research group, and a representative of the company 'Bioembrio FIV SAS', we redesigned and repaired a commercial prototype of a high-autonomy 'Thermos-type Transporter for Bovine Embryos or Oocytes', which keeps the embryos at a constant 36°C to 37°C with a temperature control system for a working intensity of 20 to 24 hours using analog electronic control. The activity became a collaborative effort between academia and industry to build viable solutions for a need in the livestock sector.",
      it: "Durante una fase in cui lavoravo come ingegnere nell'industria e nel mondo accademico in parallelo, ho partecipato a un'iniziativa per supportare lo sviluppo di nuovi prototipi meccatronici. Insieme al docente Adonai Zapata, direttore del gruppo di ricerca di aeronautica, e a un rappresentante dell'azienda 'Bioembrio FIV SAS', abbiamo riprogettato e riparato un prototipo commerciale di un 'Trasportatore tipo Thermos per Embrioni od Ovociti Bovini' ad alta autonomia, che mantiene gli embrioni a una temperatura costante tra 36°C e 37°C con un sistema di controllo della temperatura per un'intensità di lavoro da 20 a 24 ore tramite controllo elettronico analogico. L'attività si è consolidata come un lavoro collaborativo tra mondo accademico e industria per realizzare soluzioni valide a un'esigenza del settore zootecnico.",
    },
  },
  {
    role: {
      es: "Voluntario de ingeniería — Restauración robot PHOENIX",
      en: "Engineering volunteer — PHOENIX robot restoration",
      it: "Volontario di ingegneria — Restauro del robot PHOENIX",
    },
    place: {
      es: "Universidad Tecnológica de Pereira - Aeronáutica UTP",
      en: "Universidad Tecnológica de Pereira - UTP Aeronautics",
      it: "Universidad Tecnológica de Pereira - Aeronautica UTP",
    },
    period: { es: "Jul 2026 — Sep 2026", en: "Jul 2026 — Sep 2026", it: "Lug 2026 — Set 2026" },
    certificate: true,
    media: media("leadership/images/phoenix"),
    text: {
      es: "Como actividad de ingeniería, llevé a cabo la restauración del sistema eléctrico del 'PHOENIX', un prototipo radiocontrolado tipo oruga para la extinción de incendios con capacidad de carga de hasta 240 kg perteneciente a los activos de los laboratorios de aeronáutica y mecatrónica de la Universidad Tecnológica de Pereira, incluyendo en las actividades: rediseño eléctrico, fabricación de PCB, ensamble y cableado del sistema eléctrico.",
      en: "As an engineering activity, I restored the electrical system of 'PHOENIX', a radio-controlled tracked firefighting prototype with a load capacity of up to 240 kg, belonging to the assets of the aeronautics and mechatronics laboratories of the Universidad Tecnológica de Pereira, including the following activities: electrical redesign, PCB manufacturing, assembly and wiring of the electrical system.",
      it: "Come attività di ingegneria, ho eseguito il restauro dell'impianto elettrico del 'PHOENIX', un prototipo radiocomandato cingolato per lo spegnimento degli incendi con una capacità di carico fino a 240 kg, appartenente ai laboratori di aeronautica e meccatronica della Universidad Tecnológica de Pereira, includendo tra le attività: riprogettazione elettrica, fabbricazione di PCB, assemblaggio e cablaggio dell'impianto elettrico.",
    },
  },
  {
    // PENDIENTE: confirmar lugar y fechas (provisionales).
    role: {
      es: "Servicio social — Prototipo miniatura Chevrolet Camaro 89",
      en: "Social service — Chevrolet Camaro '89 miniature prototype",
      it: "Servizio sociale — Prototipo in miniatura Chevrolet Camaro '89",
    },
    place: {
      es: "Chevrolet - Taller de servicio técnico, Pereira",
      en: "Chevrolet - Technical service workshop, Pereira",
      it: "Chevrolet - Officina di assistenza tecnica, Pereira",
    },
    period: { es: "Feb 2018 — Jun 2018", en: "Feb 2018 — Jun 2018", it: "Feb 2018 — Giu 2018" },
    certificate: false,
    media: media("leadership/images/chevrolet"),
    text: {
      es: "Participé en el diseño y construcción de carros miniatura electrónicos, diseñando todo el complejo electrónico de un prototipo miniatura del Chevrolet Camaro 89 y replicando su mismo estilo con técnicas de impresión 3D, tecnología aditiva, diseño CAD, mecanizado manual y técnicas de latonería y pintura, en coadyuvancia con técnicos expertos de Chevrolet. El carro fue fabricado con el propósito de una apertura de campaña y como demostración de las capacidades técnicas de sus técnicos. El código de control se construyó para sistemas embebidos Arduino con mando a distancia, usando un módulo de comunicación por protocolo PlayStation 2.",
      en: "I took part in the design and construction of electronic miniature cars, designing the entire electronic system of a miniature prototype of the Chevrolet Camaro '89 and replicating its style using 3D printing, additive technology, CAD design, manual machining, and bodywork and painting techniques, in collaboration with expert Chevrolet technicians. The car was built for a campaign launch and as a showcase of the technicians' skills. The control code was written for Arduino embedded systems with remote control, using a PlayStation 2 protocol communication module.",
      it: "Ho partecipato alla progettazione e costruzione di auto elettroniche in miniatura, progettando l'intero sistema elettronico di un prototipo in miniatura della Chevrolet Camaro '89 e replicandone lo stile con tecniche di stampa 3D, tecnologia additiva, progettazione CAD, lavorazione meccanica manuale e tecniche di carrozzeria e verniciatura, in collaborazione con tecnici esperti di Chevrolet. L'auto è stata realizzata per il lancio di una campagna e come dimostrazione delle capacità dei suoi tecnici. Il codice di controllo è stato sviluppato per sistemi embedded Arduino con telecomando, utilizzando un modulo di comunicazione con protocollo PlayStation 2.",
    },
  },
  {
    // PENDIENTE: confirmar fecha (provisional).
    role: {
      es: "Competidor de robótica — Minimouse, 1er lugar en 2 competencias",
      en: "Robotics competitor — Minimouse, 1st place in 2 competitions",
      it: "Concorrente di robotica — Minimouse, 1° posto in 2 competizioni",
    },
    place: {
      es: "Universidad Tecnológica de Pereira - Ingeniería Mecatrónica",
      en: "Universidad Tecnológica de Pereira - Mechatronics Engineering",
      it: "Universidad Tecnológica de Pereira - Ingegneria Meccatronica",
    },
    period: { es: "Oct 2022", en: "Oct 2022", it: "Ott 2022" },
    certificate: false,
    media: media("leadership/images/competition"),
    text: {
      es: "Participé en dos competencias Minimouse de resolución de laberintos como responsable de construir el algoritmo de navegación del robot. La primera fue en el Festival Tecnológico de Ingeniería Mecatrónica, frente a equipos de ingeniería mecatrónica; la segunda, en la tradicional Semana de la Facultad de Tecnología, frente a equipos de los programas de eléctrica, electrónica, manufactura y otras ingenierías. La dinámica consistía en 3 rondas en las que había que descubrir la mejor ruta para salir del laberinto en el menor tiempo sin tocar ninguna pared, y obtuvimos el primer lugar en ambas oportunidades. Participé con 2 compañeros que se encargaron de crear y calibrar el sistema mecánico e instrumental, y que fueron pilares fundamentales del resultado. El ratón no se construyó en Arduino, sino en un tradicional PIC 16F887, programado en lenguaje C y con sensores ultrasónicos principalmente.",
      en: "I took part in two Minimouse maze-solving competitions as the person responsible for building the robot's navigation algorithm. The first was at the Mechatronics Engineering Technology Festival, against mechatronics engineering teams; the second was at the traditional Faculty of Technology Week, against teams from electrical, electronics, manufacturing and other engineering programs. Each competition consisted of 3 rounds in which the robot had to find the best route out of the maze in the shortest time without touching any wall, and we won first place both times. I competed with 2 teammates who were in charge of building and calibrating the mechanical and instrumentation system, and who were key pillars of the result. The mouse was not built on Arduino but on a traditional PIC 16F887, programmed in C and relying mainly on ultrasonic sensors.",
      it: "Ho partecipato a due competizioni Minimouse di risoluzione di labirinti come responsabile della costruzione dell'algoritmo di navigazione del robot. La prima si è svolta al Festival Tecnologico di Ingegneria Meccatronica, contro squadre di ingegneria meccatronica; la seconda, nella tradizionale Settimana della Facoltà di Tecnologia, contro squadre dei corsi di elettrica, elettronica, manifattura e altre ingegnerie. La dinamica prevedeva 3 turni in cui bisognava trovare il percorso migliore per uscire dal labirinto nel minor tempo possibile senza toccare alcuna parete, e abbiamo ottenuto il primo posto in entrambe le occasioni. Ho partecipato con 2 compagni che si sono occupati di realizzare e calibrare il sistema meccanico e strumentale, e che sono stati pilastri fondamentali del risultato. Il topo non è stato costruito con Arduino, ma con un tradizionale PIC 16F887, programmato in linguaggio C e basato principalmente su sensori a ultrasuoni.",
    },
  },
];

export type SkillGroup = {
  title: Text;
  items: { i: Text; detail: Text }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: {
      es: "Ingeniería de Software",
      en: "Software Engineering",
      it: "Ingegneria del Software",
    },
    items: [
      { i: "Backend", detail: "Express - NodeJS - NestJS" },
      { i: "Python", detail: "Flask - Django" },
      { i: "Frontend", detail: "ReactJS - NextJS - AngularJS" },
      { i: "Flutter/Dart", detail: "iOS - ANDROID" },
      { i: "APIs", detail: "REST - GraphQL - MQTT - Sockets" },
      {
        i: {
          es: "Diseño y Arquitectura",
          en: "Design and Architecture",
          it: "Design e Architettura",
        },
        detail: "SOLID - Clean Arch - DDD - Hexagonal Arch",
      },
    ],
  },
  {
    title: { es: "IA & Datos", en: "AI & Data", it: "IA & Dati" },
    items: [
      { i: "Machine Learning", detail: "Scikit-learn - TensorFlow - OpenCV" },
      { i: "EDA", detail: "Pandas - NumPy - Matplotlib - Seaborn - Scipy - Jupyter" },
      {
        i: "Augmented LLM",
        detail:
          "OpenAI & Google - Hugging Face - On-premise LLM - LangChain - MCP - RAG - Ollama - vLLM, etc.",
      },
      {
        i: "Voice & speech",
        detail: "Whisper - ElevenLabs - Deepgram - ONNX runtime - Twilio, etc.",
      },
      { i: "Databases", detail: "PostgreSQL - MongoDB - Firebase DB" },
      { i: "Infrastructure", detail: "Jetson Nvidia - Docker - GCP" },
    ],
  },
  {
    title: {
      es: "Embebidos & Electrónica",
      en: "Embedded & Electronics",
      it: "Embedded & Elettronica",
    },
    items: [
      {
        i: "Microcontrollers and embedded systems",
        detail: "Arduino family - ESP32 family - Raspberry Pi",
      },
      { i: "Machine languages", detail: "C/C++ - MicroPython" },
      {
        i: "IoT",
        detail: {
          es: "Sensores - comunicaciones - telemetría",
          en: "Sensors - communications - telemetry",
          it: "Sensori - comunicazioni - telemetria",
        },
      },
      { i: "PCB Design", detail: "EasyEDA" },
      {
        i: { es: "Simulación", en: "Simulation", it: "Simulazione" },
        detail: "Proteus - MATLAB - Webots",
      },
    ],
  },
  {
    title: {
      es: "Diseño Mecánico y manufactura",
      en: "Mechanical Design and manufacturing",
      it: "Progettazione Meccanica e manifattura",
    },
    items: [
      { i: "CAD", detail: "Autodesk - Inventor - SolidWorks" },
      {
        i: "CAM",
        detail: {
          es: "Fabricación aditiva y sustractiva - 3D printing, etc.",
          en: "Additive and subtractive manufacturing - 3D printing, etc.",
          it: "Fabbricazione additiva e sottrattiva - 3D printing, ecc.",
        },
      },
      {
        i: "HandCrafts",
        detail: "Woodworking - Steelworking - Manual skills - Materials & tools handling",
      },
    ],
  },
];

export const languages: { name: Text; level: Text; value: number }[] = [
  {
    name: { es: "Español", en: "Spanish", it: "Spagnolo" },
    level: { es: "Nativo", en: "Native", it: "Madrelingua" },
    value: 100,
  },
  {
    name: { es: "Inglés", en: "English", it: "Inglese" },
    level: {
      es: "Intermedio-Alto (B2+) (TOEFL iBT 94)",
      en: "Upper-Intermediate (B2+) (TOEFL iBT 94)",
      it: "Intermedio-Avanzato (B2+) (TOEFL iBT 94)",
    },
    value: 75,
  },
];

const firstPhoto = (folder: string) => photos(folder)[0] ?? "";

export const gallery: { src: string; title: Text; caption: Text }[] = [
  {
    src: firstPhoto("projects/images/final_project"),
    title: {
      es: "Prototipo de ala de geometría variable",
      en: "Variable-geometry wing prototype",
      it: "Prototipo di ala a geometria variabile",
    },
    caption: {
      es: "Sección de 200 mm con superficie continua, sensado y actuación electrónica.",
      en: "200 mm section with a continuous surface, electronic sensing and actuation.",
      it: "Sezione da 200 mm con superficie continua, rilevamento e attuazione elettronica.",
    },
  },
  {
    src: firstPhoto("projects/images/macmotus"),
    title: {
      es: "Macmotus — aeronave de 2 m",
      en: "Macmotus — 2 m aircraft",
      it: "Macmotus — aereo da 2 m",
    },
    caption: {
      es: "Aeronave en balso para AERODESIGN MX: 5 kg de carga útil, 8 kg de masa total.",
      en: "Balsa-wood aircraft for AERODESIGN MX: 5 kg payload, 8 kg total mass.",
      it: "Aereo in balsa per AERODESIGN MX: 5 kg di carico utile, 8 kg di massa totale.",
    },
  },
  {
    src: firstPhoto("jobs/images/tallerista"),
    title: {
      es: "Talleres de robótica y aeronáutica",
      en: "Robotics and aeronautics workshops",
      it: "Laboratori di robotica e aeronautica",
    },
    caption: {
      es: "Más de 60 estudiantes de secundaria en Risaralda formados en STEM.",
      en: "More than 60 high school students in Risaralda trained in STEM.",
      it: "Più di 60 studenti delle scuole superiori di Risaralda formati in STEM.",
    },
  },
  {
    src: firstPhoto("leadership/images/phoenix"),
    title: {
      es: "Laboratorio de electrónica",
      en: "Electronics lab",
      it: "Laboratorio di elettronica",
    },
    caption: {
      es: "Fabricación de PCB, ESP32 y validación de sistemas embebidos.",
      en: "PCB manufacturing, ESP32 and embedded systems validation.",
      it: "Fabbricazione di PCB, ESP32 e validazione di sistemi embedded.",
    },
  },
  {
    src: firstPhoto("projects/images/agentic"),
    title: {
      es: "Arquitectura de sistemas con IA",
      en: "AI systems architecture",
      it: "Architettura di sistemi con IA",
    },
    caption: {
      es: "Desarrollo de agentes con RAG y MCP para asistencia operativa.",
      en: "Development of agents with RAG and MCP for operational assistance.",
      it: "Sviluppo di agenti con RAG e MCP per l'assistenza operativa.",
    },
  },
];

export type VideoItem = {
  title: Text;
  description: Text;
  poster: string;
  src?: string | undefined;
};

export const videos: VideoItem[] = [
  {
    title: {
      es: "Ensayo en túnel de viento — ala morphing",
      en: "Wind tunnel test — morphing wing",
      it: "Prova in galleria del vento — ala morphing",
    },
    description: {
      es: "Visualización de flujo a ángulos de ataque positivo, neutro y negativo mostrando adaptación continua de curvatura.",
      en: "Flow visualization at positive, neutral and negative angles of attack showing continuous camber adaptation.",
      it: "Visualizzazione del flusso ad angoli di attacco positivi, neutri e negativi che mostra l'adattamento continuo della curvatura.",
    },
    poster: firstPhoto("projects/images/final_project"),
  },
  {
    title: {
      es: "Vuelo de la aeronave Macmotus",
      en: "Macmotus aircraft flight",
      it: "Volo dell'aereo Macmotus",
    },
    description: {
      es: "Pruebas de despegue y carga útil previas a la competencia AERODESIGN MX.",
      en: "Takeoff and payload tests ahead of the AERODESIGN MX competition.",
      it: "Prove di decollo e carico utile prima della competizione AERODESIGN MX.",
    },
    poster: firstPhoto("projects/images/macmotus"),
    src: media("projects/images/macmotus").find((item) => item.type === "video")?.src,
  },
  {
    title: {
      es: "Divulgación STEM en aulas rurales",
      en: "STEM outreach in rural classrooms",
      it: "Divulgazione STEM nelle aule rurali",
    },
    description: {
      es: "Registro de los talleres de robótica y aeronáutica con estudiantes de secundaria.",
      en: "Record of the robotics and aeronautics workshops with high school students.",
      it: "Documentazione dei laboratori di robotica e aeronautica con studenti delle scuole superiori.",
    },
    poster: firstPhoto("jobs/images/tallerista"),
  },
];
