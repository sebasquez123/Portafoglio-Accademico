import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookMarked,
  Newspaper,
  ExternalLink,
  Cpu,
  Leaf,
  DollarSign,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import usaIcon from "@/assets/locations/usa-icon.png";
import colMexIcon from "@/assets/locations/col-mex-icon.png";
import colIcon from "@/assets/locations/col-icon.png";
import utpLogo from "@/assets/education/utp.png";
import programLogo from "@/assets/education/program.png";
import iaLogo from "@/assets/education/ia.png";
import mecatronicaLogo from "@/assets/education/mecatronica.jpeg";
import mecaLogo from "@/assets/education/meca.png";
import talentotechLogo from "@/assets/education/talentotech.png";
import mineducacionLogo from "@/assets/education/mineducacion.png";
import aeroProjectIcon from "@/assets/projects/aero.png";
import githubProjectIcon from "@/assets/projects/github.png";
import talentotechProjectIcon from "@/assets/projects/talentotech.png";
import macmotusProjectIcon from "@/assets/projects/macmotus.jpeg";
import aseutpLogo from "@/assets/leadership/aseutp.jpg";
import cidtLogo from "@/assets/leadership/cidt.png";
import mecabotLogo from "@/assets/leadership/mecabot.jpg";
import rredsiLogo from "@/assets/leadership/rredsi.png";
import aeroLeadershipLogo from "@/assets/leadership/aero.png";
import chevroletLeadershipLogo from "@/assets/leadership/chevrolet.png";
import { education, experience, leadership, projects } from "@/data/portfolio";
import { translate, type Text } from "@/i18n/languages";
import { useLanguage } from "@/i18n/LanguageProvider";
import { ui } from "@/i18n/ui";
import type { MediaItem } from "@/lib/media";

function getProjectIcon(projectTitle: string, index: number) {
  const title = projectTitle.toLowerCase();
  if (title.includes("ala fija")) return aeroProjectIcon;
  if (title.includes("rag") || title.includes("mcp")) return githubProjectIcon;
  if (title.includes("macmotus")) return macmotusProjectIcon;
  if (title.includes("software")) return githubProjectIcon;
  return [aeroProjectIcon, githubProjectIcon, macmotusProjectIcon, talentotechProjectIcon][index];
}

type ProjectExtra = {
  titles: [Text, Text, Text];
  blocks: [Text, Text, Text, Text];
  learned: Text;
  reference: string;
};

const projectExtras: ProjectExtra[] = [
  {
    titles: [
      { es: "Motivación biomimética", en: "Biomimetic motivation", it: "Motivazione biomimetica" },
      { es: "Prototipo y actuación", en: "Prototype and actuation", it: "Prototipo e attuazione" },
      {
        es: "Validación en túnel de viento",
        en: "Wind tunnel validation",
        it: "Validazione in galleria del vento",
      },
    ],
    blocks: [
      {
        es: "El ala con superficie continua de geometría variable, inspirada en la estructura tipo espina de pez (FISHBAC), buscó mejorar la adaptabilidad aerodinámica sin sacrificar la integridad estructural de las superficies de control aeronáutico, que tradicionalmente son rígidas y limitan la maniobrabilidad del ala.",
        en: "The continuous-surface variable-geometry wing, inspired by the fishbone-type structure (FISHBAC), sought to improve aerodynamic adaptability without sacrificing the structural integrity of aeronautical control surfaces, which are traditionally rigid and limit the wing's maneuverability.",
        it: "L'ala a superficie continua a geometria variabile, ispirata alla struttura a spina di pesce (FISHBAC), mirava a migliorare l'adattabilità aerodinamica senza sacrificare l'integrità strutturale delle superfici di controllo aeronautiche, che tradizionalmente sono rigide e limitano la manovrabilità dell'ala.",
      },
      {
        es: "El prototipo de 200 mm integró materiales elásticos como Filaflex, TPU, TPE y/o derivados de elastómeros de silicona, mediante manufactura aditiva y actuación electrónica embebida para su control. Se logró una deformación continua de 40 mm hacia abajo y 25 mm hacia arriba, sin generar discontinuidades superficiales.",
        en: "The 200 mm prototype integrated elastic materials such as Filaflex, TPU, TPE and/or silicone elastomer derivatives, using additive manufacturing and embedded electronic actuation for its control. A continuous deformation of 40 mm downward and 25 mm upward was achieved without creating surface discontinuities.",
        it: "Il prototipo da 200 mm ha integrato materiali elastici come Filaflex, TPU, TPE e/o derivati di elastomeri siliconici, mediante manifattura additiva e attuazione elettronica integrata per il suo controllo. È stata ottenuta una deformazione continua di 40 mm verso il basso e 25 mm verso l'alto, senza generare discontinuità superficiali.",
      },
      {
        es: "Los ensayos en túnel de viento, realizados con ángulos de ataque positivos, neutros y negativos, confirmaron una adaptación estable de la curvatura a la corriente de aire que incide sobre el extradós e intradós de la sección. Los resultados evidenciaron la efectividad del prototipo para generar sustentación aerodinámica bajo diferentes ángulos de ataque.",
        en: "Wind tunnel tests, carried out at positive, neutral and negative angles of attack, confirmed a stable adaptation of the camber to the airflow acting on the upper and lower surfaces of the section. The results demonstrated the prototype's effectiveness in generating aerodynamic lift at different angles of attack.",
        it: "Le prove in galleria del vento, eseguite con angoli di attacco positivi, neutri e negativi, hanno confermato un adattamento stabile della curvatura alla corrente d'aria che incide sull'estradosso e sull'intradosso della sezione. I risultati hanno evidenziato l'efficacia del prototipo nel generare portanza aerodinamica a diversi angoli di attacco.",
      },
      {
        es: "La reducción del consumo de combustible en fracciones acumulativas, junto con el aumento de la eficiencia de sustentación y la maniobrabilidad, representa algunos de los principales impactos económicos, ambientales y tecnológicos del desarrollo. La continuidad superficial proporciona una ventaja significativa frente a las superficies de control convencionales en términos de resistencia aerodinámica de la aeronave.",
        en: "The cumulative reduction in fuel consumption, together with increased lift efficiency and maneuverability, represents some of the main economic, environmental and technological impacts of the development. Surface continuity provides a significant advantage over conventional control surfaces in terms of the aircraft's aerodynamic drag.",
        it: "La riduzione cumulativa del consumo di carburante, insieme all'aumento dell'efficienza di portanza e della manovrabilità, rappresenta alcuni dei principali impatti economici, ambientali e tecnologici dello sviluppo. La continuità superficiale offre un vantaggio significativo rispetto alle superfici di controllo convenzionali in termini di resistenza aerodinamica del velivolo.",
      },
    ],
    learned: {
      es: "Este proyecto reforzó mi criterio para equilibrar robustez y flexibilidad estructural mediante diversos conocimientos teórico-experimentales sobre materiales de ingeniería y procesos de manufactura. Además, me enseñó a documentar los hallazgos experimentales con el rigor necesario para garantizar la reproducibilidad de los resultados científicos. Actualmente, es uno de los proyectos de referencia utilizados como herramienta para la enseñanza de la aeronáutica del futuro en los laboratorios de la UTP, contribuyendo a la formación de nuevas generaciones de ingenieros aeronáuticos.",
      en: "This project strengthened my judgment in balancing structural robustness and flexibility through a range of theoretical and experimental knowledge about engineering materials and manufacturing processes. It also taught me to document experimental findings with the rigor needed to ensure the reproducibility of scientific results. Today, it is one of the reference projects used as a tool for teaching the aeronautics of the future in the UTP laboratories, contributing to the training of new generations of aeronautical engineers.",
      it: "Questo progetto ha rafforzato il mio criterio nel bilanciare robustezza e flessibilità strutturale attraverso diverse conoscenze teorico-sperimentali sui materiali ingegneristici e sui processi di manifattura. Inoltre, mi ha insegnato a documentare i risultati sperimentali con il rigore necessario a garantire la riproducibilità dei risultati scientifici. Attualmente è uno dei progetti di riferimento utilizzati come strumento per l'insegnamento dell'aeronautica del futuro nei laboratori della UTP, contribuendo alla formazione di nuove generazioni di ingegneri aeronautici.",
    },
    reference: "UTP-Aeronautica · Ala-Morphing-FISHBAC · 2024",
  },
  {
    titles: [
      { es: "Arquitectura agéntica", en: "Agentic architecture", it: "Architettura agentica" },
      { es: "Núcleo MCP", en: "MCP core", it: "Nucleo MCP" },
      {
        es: "Validación de resiliencia",
        en: "Resilience validation",
        it: "Validazione della resilienza",
      },
    ],
    blocks: [
      {
        es: "La arquitectura agéntica modular integra modelos de lenguaje con fuentes de conocimiento y herramientas externas mediante RAG y MCP, orquestando tecnologías como LangChain, Ollama, Hugging Face, OpenAI, Gemini y el entorno JavaScript/TypeScript (Nest.js), sobre una capa de persistencia en PostgreSQL. La necesidad surge de la creciente demanda de sistemas de IA conversacional capaces de interactuar con múltiples fuentes de información, grafos sintéticos, APIs externas y bases de conocimiento extensas de manera eficiente y escalable, pero, sobre todo, reproducible y adaptable a diferentes dominios de infraestructura.",
        en: "The modular agentic architecture integrates language models with knowledge sources and external tools through RAG and MCP, orchestrating technologies such as LangChain, Ollama, Hugging Face, OpenAI, Gemini and the JavaScript/TypeScript environment (Nest.js), on top of a PostgreSQL persistence layer. The need arises from the growing demand for conversational AI systems able to interact with multiple information sources, synthetic graphs, external APIs and extensive knowledge bases in an efficient and scalable way, but above all, reproducible and adaptable to different infrastructure domains.",
        it: "L'architettura agentica modulare integra modelli linguistici con fonti di conoscenza e strumenti esterni tramite RAG e MCP, orchestrando tecnologie come LangChain, Ollama, Hugging Face, OpenAI, Gemini e l'ambiente JavaScript/TypeScript (Nest.js), su un livello di persistenza in PostgreSQL. L'esigenza nasce dalla crescente domanda di sistemi di IA conversazionale in grado di interagire con molteplici fonti di informazione, grafi sintetici, API esterne e ampie basi di conoscenza in modo efficiente e scalabile, ma soprattutto riproducibile e adattabile a diversi domini infrastrutturali.",
      },
      {
        es: "El núcleo MCP se diseñó para soportar múltiples conexiones servidor-cliente simultáneas, respondiendo a la pregunta: ¿cómo diseñar un sistema genérico y abstracto capaz de orquestar aplicaciones de diferentes categorías comerciales en un único entorno de control supervisado para distintos servicios externos? El estudio constituye principalmente un desarrollo personal orientado a registrar y enrutar herramientas, mecanismos de seguridad y bases de conocimiento hacia agentes especializados, mediante un microservicio desarrollado con Nest.js y tecnologías de vanguardia.",
        en: "The MCP core was designed to support multiple simultaneous server-client connections, answering the question: how can we design a generic and abstract system capable of orchestrating applications from different business categories in a single supervised control environment for different external services? The study is mainly a personal development aimed at registering and routing tools, security mechanisms and knowledge bases to specialized agents, through a microservice built with Nest.js and cutting-edge technologies.",
        it: "Il nucleo MCP è stato progettato per supportare molteplici connessioni server-client simultanee, rispondendo alla domanda: come progettare un sistema generico e astratto in grado di orchestrare applicazioni di diverse categorie commerciali in un unico ambiente di controllo supervisionato per diversi servizi esterni? Lo studio costituisce principalmente uno sviluppo personale orientato a registrare e instradare strumenti, meccanismi di sicurezza e basi di conoscenza verso agenti specializzati, tramite un microservizio sviluppato con Nest.js e tecnologie all'avanguardia.",
      },
      {
        es: "Las pruebas de rendimiento y latencia realizadas sobre la inferencia de agentes potenciados por infraestructura de cómputo rentada han confirmado la viabilidad de escalar el sistema hacia integraciones productivas. Esta propuesta se encuentra en desarrollo como producto innovador en MetGroup, empresa que presta múltiples plataformas y servicios a clientes internacionales del sector del transporte público masivo. Los mecanismos de arquitectura de autenticación, control de permisos, enrutamiento orquestado por subagentes y un runtime basado en flujos reactivos bidireccionales de eventos, mediante comunicación REST y Socket.IO, han constituido los fundamentos principales para integrar RAG y MCP en el sistema.",
        en: "Performance and latency tests on the inference of agents powered by rented compute infrastructure have confirmed the feasibility of scaling the system toward production integrations. This proposal is being developed as an innovative product at MetGroup, a company that provides multiple platforms and services to international clients in the mass public transport sector. Authentication architecture mechanisms, permission control, sub-agent orchestrated routing and a runtime based on bidirectional reactive event streams, through REST and Socket.IO communication, have been the main foundations for integrating RAG and MCP into the system.",
        it: "I test di prestazioni e latenza eseguiti sull'inferenza di agenti alimentati da infrastruttura di calcolo a noleggio hanno confermato la fattibilità di scalare il sistema verso integrazioni produttive. Questa proposta è in fase di sviluppo come prodotto innovativo in MetGroup, azienda che fornisce molteplici piattaforme e servizi a clienti internazionali del settore del trasporto pubblico di massa. I meccanismi di architettura di autenticazione, il controllo dei permessi, l'instradamento orchestrato da sotto-agenti e un runtime basato su flussi reattivi bidirezionali di eventi, tramite comunicazione REST e Socket.IO, hanno costituito le basi principali per integrare RAG e MCP nel sistema.",
      },
      {
        es: "Finalmente, el desarrollo del proyecto ha evolucionado de manera natural no solo hacia el servicio al cliente, sino también hacia la ejecución de acciones administrativas mediante lenguaje natural, incluyendo mecanismos para la creación, actualización y visualización de datos. Actualmente, el sistema continúa evolucionando hacia un uso más amplio dentro del ecosistema de gestión, monitoreo y operación de algunos productos de MetGroup, empresa que decidió respaldar esta investigación con el propósito de escalar tecnológicamente la adopción de IA en ambientes productivos.",
        en: "Finally, the project has naturally evolved not only toward customer service, but also toward executing administrative actions through natural language, including mechanisms for creating, updating and visualizing data. Today, the system continues to evolve toward broader use within the management, monitoring and operations ecosystem of some MetGroup products, a company that decided to support this research in order to technologically scale the adoption of AI in production environments.",
        it: "Infine, lo sviluppo del progetto si è evoluto in modo naturale non solo verso il servizio clienti, ma anche verso l'esecuzione di azioni amministrative tramite linguaggio naturale, includendo meccanismi per la creazione, l'aggiornamento e la visualizzazione dei dati. Attualmente, il sistema continua a evolversi verso un uso più ampio all'interno dell'ecosistema di gestione, monitoraggio e operatività di alcuni prodotti di MetGroup, azienda che ha deciso di sostenere questa ricerca con lo scopo di scalare tecnologicamente l'adozione dell'IA in ambienti produttivi.",
      },
    ],
    learned: {
      es: "Arquitectar y prototipar este sistema como ejercicio de iniciativa personal me enseñó a diseñar contratos de herramientas estables entre agentes heterogéneos y a reconocer la importancia de incorporar observabilidad desde las primeras etapas en arquitecturas distribuidas basadas en LLM. También me enseñó a pensar más allá de la funcionalidad inmediata, considerando la mantenibilidad y la escalabilidad productiva. Este proceso contribuyó a mi incorporación como ingeniero de desarrollo de IA en el área de ITS de MetGroup, a partir de iniciativas orientadas a la divulgación del conocimiento y a la incorporación de nuevas capacidades tecnológicas al producto. El impacto inicial ha sido tecnológico y económico, al ampliar el portafolio de soluciones de una empresa dedicada al transporte público masivo en Latinoamérica y establecer una base para la transición hacia la adopción de tecnologías modernas de IA con proyección para atender a miles de usuarios.",
      en: "Architecting and prototyping this system as a personal initiative taught me to design stable tool contracts between heterogeneous agents and to recognize the importance of building in observability from the earliest stages of LLM-based distributed architectures. It also taught me to think beyond immediate functionality, considering maintainability and production scalability. This process contributed to my joining MetGroup's ITS area as an AI development engineer, based on initiatives aimed at sharing knowledge and adding new technological capabilities to the product. The initial impact has been technological and economic, expanding the solutions portfolio of a company dedicated to mass public transport in Latin America and laying a foundation for the transition toward adopting modern AI technologies, with the potential to serve thousands of users.",
      it: "Progettare e prototipare questo sistema come iniziativa personale mi ha insegnato a definire contratti di strumenti stabili tra agenti eterogenei e a riconoscere l'importanza di integrare l'osservabilità fin dalle prime fasi nelle architetture distribuite basate su LLM. Mi ha anche insegnato a pensare oltre la funzionalità immediata, considerando la manutenibilità e la scalabilità produttiva. Questo percorso ha contribuito al mio ingresso come ingegnere di sviluppo IA nell'area ITS di MetGroup, a partire da iniziative orientate alla divulgazione della conoscenza e all'introduzione di nuove capacità tecnologiche nel prodotto. L'impatto iniziale è stato tecnologico ed economico, ampliando il portafoglio di soluzioni di un'azienda dedicata al trasporto pubblico di massa in America Latina e ponendo le basi per la transizione verso l'adozione di moderne tecnologie di IA, con la prospettiva di servire migliaia di utenti.",
    },
    reference: "SebastianVasquez-R&D · Agentic-RAG-MCP · 2027",
  },
  {
    titles: [
      { es: "Fundación del equipo", en: "Founding the team", it: "Fondazione del team" },
      {
        es: "Diseño y fabricación",
        en: "Design and manufacturing",
        it: "Progettazione e fabbricazione",
      },
      {
        es: "Resultados en competencia",
        en: "Competition results",
        it: "Risultati in competizione",
      },
    ],
    blocks: [
      {
        es: "La fundación del equipo UTP Macmotus comenzó en 2024, antes de finalizar el periodo académico, a partir del diseño desde primeros principios de una aeronave ligera de 2 m de envergadura, concebida para cumplir criterios de relación entre carga útil y control aerodinámico. Se coordinó a 10 estudiantes de diferentes facultades de ingeniería para participar en actividades de diseño mecánico y estructural, propulsión y control.",
        en: "The UTP Macmotus team was founded in 2024, before the end of the academic period, starting from the first-principles design of a lightweight aircraft with a 2 m wingspan, conceived to meet payload-to-aerodynamic-control criteria. 10 students from different engineering faculties were coordinated to take part in mechanical and structural design, propulsion and control activities.",
        it: "La fondazione del team UTP Macmotus è iniziata nel 2024, prima della fine del periodo accademico, a partire dalla progettazione da principi primi di un aereo leggero con 2 m di apertura alare, concepito per soddisfare criteri di rapporto tra carico utile e controllo aerodinamico. Sono stati coordinati 10 studenti di diverse facoltà di ingegneria per partecipare ad attività di progettazione meccanica e strutturale, propulsione e controllo.",
      },
      {
        es: "El análisis del diseño estructural y del sistema de propulsión combinó ANSYS, MATLAB y SolidWorks para realizar simulaciones, cálculos y determinar configuraciones estructurales adecuadas. Por su parte, las interfaces de prueba y control se apoyaron en Arduino y Python para programar la instrumentación y obtener mediciones en bancos de prueba.",
        en: "The analysis of the structural design and propulsion system combined ANSYS, MATLAB and SolidWorks to run simulations and calculations and determine suitable structural configurations. The test and control interfaces relied on Arduino and Python to program the instrumentation and obtain measurements on test benches.",
        it: "L'analisi della progettazione strutturale e del sistema di propulsione ha combinato ANSYS, MATLAB e SolidWorks per eseguire simulazioni e calcoli e determinare configurazioni strutturali adeguate. Le interfacce di prova e controllo si sono invece basate su Arduino e Python per programmare la strumentazione e ottenere misurazioni sui banchi di prova.",
      },
      {
        es: "La fabricación se llevó a cabo mediante métodos artesanales que combinaron madera balsa, madera triplex y manufactura aditiva. La logística para la obtención de recursos fue uno de los mayores retos del proyecto, por lo que se coordinó al equipo para participar en actividades de promoción y divulgación tecnológica, gestionar patrocinios, vincular el apoyo de la comunidad local y fabricar y comercializar productos para la autofinanciación. Asimismo, diferentes facultades, la Vicerrectoría y otras dependencias de la universidad destinaron recursos al proyecto Macmotus.",
        en: "Manufacturing was carried out using handcrafted methods that combined balsa wood, plywood and additive manufacturing. The logistics of obtaining resources was one of the biggest challenges of the project, so the team was coordinated to take part in technology promotion and outreach activities, secure sponsorships, engage the support of the local community, and make and sell products for self-funding. Various faculties, the Vice-Rectorate and other university offices also allocated resources to the Macmotus project.",
        it: "La fabbricazione è stata realizzata con metodi artigianali che hanno combinato legno di balsa, compensato e manifattura additiva. La logistica per ottenere le risorse è stata una delle sfide più grandi del progetto, per cui il team è stato coordinato per partecipare ad attività di promozione e divulgazione tecnologica, gestire sponsorizzazioni, coinvolgere il sostegno della comunità locale e fabbricare e vendere prodotti per l'autofinanziamento. Inoltre, diverse facoltà, il Vicerettorato e altri uffici dell'università hanno destinato risorse al progetto Macmotus.",
      },
      {
        es: "La aeronave alcanzó una carga útil de 5 kg con una masa total de 8 kg, una envergadura de 2,6 m y un sistema de propulsión eléctrica de hasta 900 W. En AERODESIGN MX obtuvo el 12.º puesto entre 19 equipos universitarios de México y Polonia, varios de ellos provenientes de instituciones con programas especializados, mayor experiencia y mayores recursos destinados al diseño aeronáutico. La aeronave colombiana no presentó complicaciones durante el armado y destacó por la robustez de su fabricación artesanal y por la identidad visual del diseño. Cumplió los criterios de carga útil y capacidad de vuelo establecidos; sin embargo, su masa y las limitaciones de propulsión impuestas por el reglamento afectaron el desempeño en algunas maniobras y despegues, lo que permitió identificar oportunidades concretas de mejora para futuras competencias.",
        en: "The aircraft reached a payload of 5 kg with a total mass of 8 kg, a wingspan of 2.6 m and an electric propulsion system of up to 900 W. At AERODESIGN MX it placed 12th among 19 university teams from Mexico and Poland, several of them from institutions with specialized programs, more experience and greater resources devoted to aeronautical design. The Colombian aircraft had no complications during assembly and stood out for the robustness of its handcrafted construction and the visual identity of its design. It met the established payload and flight capability criteria; however, its mass and the propulsion limits imposed by the rules affected performance in some maneuvers and takeoffs, which made it possible to identify concrete opportunities for improvement in future competitions.",
        it: "L'aereo ha raggiunto un carico utile di 5 kg con una massa totale di 8 kg, un'apertura alare di 2,6 m e un sistema di propulsione elettrica fino a 900 W. All'AERODESIGN MX ha ottenuto il 12° posto su 19 squadre universitarie di Messico e Polonia, molte delle quali provenienti da istituzioni con programmi specializzati, maggiore esperienza e più risorse dedicate alla progettazione aeronautica. L'aereo colombiano non ha presentato complicazioni durante il montaggio e si è distinto per la robustezza della sua fabbricazione artigianale e per l'identità visiva del design. Ha soddisfatto i criteri di carico utile e capacità di volo stabiliti; tuttavia, la sua massa e i limiti di propulsione imposti dal regolamento hanno influito sulle prestazioni in alcune manovre e decolli, permettendo di individuare opportunità concrete di miglioramento per le competizioni future.",
      },
    ],
    learned: {
      es: "Fue el primer equipo multidisciplinario de aeromodelismo cuya preparación y coordinación lideré durante la etapa final de mi formación como ingeniero. La experiencia amplió mi visión sobre la gestión de proyectos complejos, en los que no solo se requiere conocimiento técnico, sino también capacidades de liderazgo, comunicación, coordinación y resolución de problemas logísticos en entornos multidisciplinarios. Participar en la creación de la primera promoción competitiva del equipo y llevarlo a un escenario internacional representó una experiencia significativa, al permitirnos representar a la UTP y a Colombia frente a instituciones con mayor experiencia y trayectoria en el diseño aeronáutico.",
      en: "It was the first multidisciplinary aeromodelling team whose preparation and coordination I led during the final stage of my engineering studies. The experience broadened my view of managing complex projects, which require not only technical knowledge but also leadership, communication, coordination and logistical problem-solving skills in multidisciplinary environments. Taking part in creating the team's first competitive cohort and bringing it to an international stage was a significant experience, as it allowed us to represent UTP and Colombia against institutions with more experience and a longer track record in aeronautical design.",
      it: "È stato il primo team multidisciplinare di aeromodellismo di cui ho guidato la preparazione e il coordinamento durante la fase finale della mia formazione come ingegnere. L'esperienza ha ampliato la mia visione sulla gestione di progetti complessi, in cui non servono solo conoscenze tecniche, ma anche capacità di leadership, comunicazione, coordinamento e risoluzione di problemi logistici in ambienti multidisciplinari. Partecipare alla creazione della prima generazione competitiva del team e portarla su un palcoscenico internazionale è stata un'esperienza significativa, perché ci ha permesso di rappresentare la UTP e la Colombia di fronte a istituzioni con maggiore esperienza e tradizione nella progettazione aeronautica.",
    },
    reference: "AERODESIGN-MX · Macmotus-2.6m-Aircraft · 2026",
  },
  {
    titles: [
      {
        es: "Aprendizaje en visión artificial y ML",
        en: "Learning computer vision and ML",
        it: "Apprendimento in visione artificiale e ML",
      },
      {
        es: "Primeros pasos en NLP y bots",
        en: "First steps in NLP and bots",
        it: "Primi passi in NLP e bot",
      },
      {
        es: "Desarrollo web y móvil",
        en: "Web and mobile development",
        it: "Sviluppo web e mobile",
      },
    ],
    blocks: [
      {
        es: "Buena parte de estos repositorios son ejercicios académicos y personales que me sirvieron para aprender visión artificial y machine learning. Entre ellos están un pipeline sencillo de generación de datos sintéticos con OpenCV para entrenar regresores en scikit-learn, un lector experimental de señas manuales con MediaPipe y árboles de decisión, y un lector de códigos QR en Raspberry Pi 3 con OpenCV y pyzbar. Son prototipos parciales, sin uso productivo, que representan mi proceso de formación en estas áreas.",
        en: "Many of these repositories are academic and personal exercises that helped me learn computer vision and machine learning. They include a simple synthetic data generation pipeline with OpenCV to train scikit-learn regressors, an experimental hand-sign reader using MediaPipe and decision trees, and a QR code reader on a Raspberry Pi 3 with OpenCV and pyzbar. They are partial prototypes, not used in production, that reflect my learning process in these areas.",
        it: "Buona parte di questi repository sono esercizi accademici e personali che mi sono serviti per imparare la visione artificiale e il machine learning. Tra questi ci sono una semplice pipeline di generazione di dati sintetici con OpenCV per addestrare regressori in scikit-learn, un lettore sperimentale di segni manuali con MediaPipe e alberi decisionali, e un lettore di codici QR su Raspberry Pi 3 con OpenCV e pyzbar. Sono prototipi parziali, senza uso produttivo, che rappresentano il mio percorso di formazione in queste aree.",
      },
      {
        es: "También exploré el procesamiento de lenguaje natural a nivel académico. El proyecto PQRS Bot es un ejercicio para clasificar peticiones, quejas, reclamos y sugerencias con spaCy y regresión logística, expuesto mediante una API básica en Python. De forma similar, la landing page de Macmotus, hecha con React, Node.js y MongoDB, incluyó un asistente experimental basado en FLAN-T5. Estos trabajos fueron principalmente experimentos para entender cómo se entrena, empaqueta y consume un modelo.",
        en: "I also explored natural language processing at an academic level. The PQRS Bot project is an exercise in classifying petitions, complaints, claims and suggestions with spaCy and logistic regression, exposed through a basic Python API. Similarly, the Macmotus landing page, built with React, Node.js and MongoDB, included an experimental assistant based on FLAN-T5. These were mainly experiments to understand how a model is trained, packaged and consumed.",
        it: "Ho anche esplorato l'elaborazione del linguaggio naturale a livello accademico. Il progetto PQRS Bot è un esercizio per classificare petizioni, lamentele, reclami e suggerimenti con spaCy e regressione logistica, esposto tramite una semplice API in Python. In modo simile, la landing page di Macmotus, realizzata con React, Node.js e MongoDB, includeva un assistente sperimentale basato su FLAN-T5. Questi lavori sono stati principalmente esperimenti per capire come si addestra, si impacchetta e si utilizza un modello.",
      },
      {
        es: "En desarrollo web y móvil, el proyecto más maduro es un frontend en Next.js y TypeScript para la consulta y recuperación de códigos de acceso de servicios de streaming, que actualmente se encuentra en servicio. Alice Mobile, una aplicación en Flutter pensada para una microempresa, sigue en desarrollo y aún no está completa. El resto, como la tarjeta de presentación o el back-office de inventario, son ejercicios iniciales con los que fui practicando fundamentos de frontend y backend.",
        en: "In web and mobile development, the most mature project is a Next.js and TypeScript frontend for looking up and recovering access codes for streaming services, which is currently in service. Alice Mobile, a Flutter app intended for a micro-enterprise, is still under development and not yet complete. The rest, such as the presentation card or the inventory back-office, are early exercises through which I practiced frontend and backend fundamentals.",
        it: "Nello sviluppo web e mobile, il progetto più maturo è un frontend in Next.js e TypeScript per la consultazione e il recupero dei codici di accesso a servizi di streaming, attualmente in servizio. Alice Mobile, un'applicazione in Flutter pensata per una microimpresa, è ancora in sviluppo e non è completa. Il resto, come il biglietto da visita o il back-office di inventario, sono esercizi iniziali con cui ho praticato i fondamenti di frontend e backend.",
      },
      {
        es: "El valor de este conjunto está más en el aprendizaje que en el resultado. Solo dos piezas han tenido uso real: la herramienta de recuperación de códigos, que sigue en servicio, y la landing page de Macmotus, que se usó durante la temporada de competencia para anunciar novedades a la comunidad. Los demás proyectos son académicos o experimentales, pero dejaron documentado mi progreso y una base de conocimiento a la que vuelvo cuando enfrento problemas nuevos.",
        en: "The value of this set lies more in the learning than in the outcome. Only two pieces have seen real use: the code recovery tool, which is still in service, and the Macmotus landing page, which was used during the competition season to share news with the community. The other projects are academic or experimental, but they document my progress and a knowledge base I come back to when facing new problems.",
        it: "Il valore di questo insieme sta più nell'apprendimento che nel risultato. Solo due elementi hanno avuto un uso reale: lo strumento di recupero dei codici, ancora in servizio, e la landing page di Macmotus, utilizzata durante la stagione della competizione per comunicare novità alla comunità. Gli altri progetti sono accademici o sperimentali, ma documentano i miei progressi e una base di conoscenza a cui ritorno quando affronto problemi nuovi.",
      },
    ],
    learned: {
      es: "Estos proyectos, aunque pequeños y en muchos casos inconclusos, me ayudaron a entender las distintas partes de un desarrollo de software: preparar datos, entrenar modelos sencillos, construir APIs e interfaces y llevar algo a producción. También me mostraron la distancia que existe entre un prototipo y un producto terminado. Los veo como una etapa de formación que fue dando madurez a mi criterio técnico.",
      en: "Although small and often unfinished, these projects helped me understand the different parts of software development: preparing data, training simple models, building APIs and interfaces, and taking something to production. They also showed me the gap between a prototype and a finished product. I see them as a learning stage that gradually matured my technical judgment.",
      it: "Questi progetti, sebbene piccoli e in molti casi incompiuti, mi hanno aiutato a capire le diverse parti dello sviluppo software: preparare i dati, addestrare modelli semplici, costruire API e interfacce e portare qualcosa in produzione. Mi hanno anche mostrato la distanza che esiste tra un prototipo e un prodotto finito. Li considero una fase di formazione che ha fatto maturare progressivamente il mio criterio tecnico.",
    },
    reference: "sebasquez123 · GitHub-Portfolio · 2024 — 2026",
  },
];

function Card({
  title,
  subtitle,
  period,
  highlight,
  bullets,
  tags,
  showIcon = false,
  icon,
  icons = [],
  bottomAccent = false,
  justifyText = false,
}: {
  title: string;
  subtitle: string;
  period?: string;
  highlight?: string | undefined;
  bullets: string[];
  tags?: string[] | undefined;
  showIcon?: boolean;
  icon?: string;
  icons?: string[];
  bottomAccent?: boolean;
  justifyText?: boolean;
}) {
  return (
    <article className="panel relative h-full p-6 md:p-7">
      <span
        className={
          bottomAccent
            ? "absolute inset-x-0 bottom-0 h-1 bg-primary"
            : "absolute left-0 top-7 h-8 w-1 rounded-r bg-primary"
        }
        aria-hidden
      />
      {showIcon ? (
        <img
          src={icon}
          alt=""
          className="absolute right-5 top-5 size-10 object-contain rounded-md"
          aria-hidden
        />
      ) : null}
      <div>
        <div className="flex items-center gap-2 pr-10">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          {icons.map((icon) => (
            <img key={icon} src={icon} alt="" className="size-7 object-contain" />
          ))}
        </div>
      </div>
      <p className={`mt-1 text-sm text-muted-foreground ${justifyText ? "text-justify" : ""}`}>
        {subtitle}
      </p>
      {period ? (
        <span className="mt-2 block font-mono text-xs uppercase tracking-[0.14em] text-primary">
          {period}
        </span>
      ) : null}
      {highlight ? (
        <p className="mt-3 inline-flex rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {highlight}
        </p>
      ) : null}
      <ul className="mt-4 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            <span className={`${justifyText ? "text-justify" : ""} whitespace-pre-line`}>{b}</span>
          </li>
        ))}
      </ul>
      {tags?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t} variant="secondary" className="font-mono text-[0.7rem]">
              {t}
            </Badge>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function EducationList() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-5">
      {education.map((e, index) => (
        <Dialog key={translate(e.degree, "es")}>
          <DialogTrigger asChild>
            <button
              type="button"
              className="
                group w-full cursor-pointer text-left
                transition duration-300
                hover:-translate-y-1
                focus-visible:outline-2
                focus-visible:outline-primary
              "
            >
              <div className="panel grid min-h-[220px] overflow-hidden md:grid-cols-[70%_30%]">
                {/* Texto */}
                <div className="p-6">
                  <Card
                    title={t(e.degree)}
                    subtitle={t(e.institution)}
                    period={t(e.period)}
                    icons={index === 0 ? [mecaLogo] : index === 1 ? [programLogo] : [iaLogo]}
                    highlight={e.highlight ? t(e.highlight) : undefined}
                    bullets={[t(e.courses)]}
                    justifyText
                  />
                </div>

                {/* Imagen */}
                <div className="relative hidden overflow-hidden md:block">
                  <img
                    src={e.images[0]}
                    alt=""
                    className="
                      absolute inset-0
                      h-full w-full
                      object-cover
                      opacity-100
                      transition-all
                      duration-700
                      group-hover:scale-105
                      group-hover:opacity-100
                    "
                  />
                </div>
              </div>
            </button>
          </DialogTrigger>

          <DialogContent
            onCloseAutoFocus={(event) => event.preventDefault()}
            className="grid h-[min(448px,calc(100vh-2rem))] max-w-[62rem] grid-rows-[1fr_14rem] gap-0 overflow-hidden p-0 md:grid-cols-2 md:grid-rows-1"
          >
            <div className="overflow-y-auto p-6 md:p-8">
              <DialogHeader className="text-left">
                <div className="flex items-center justify-between gap-4">
                  <DialogTitle className="text-left">{t(e.degree)}</DialogTitle>
                  <DialogClose asChild>
                    <a
                      href="#certificados"
                      className="shrink-0 text-sm font-medium text-primary hover:text-foreground"
                    >
                      {t(ui.education.viewCertificate)}
                    </a>
                  </DialogClose>
                </div>
                <DialogDescription className="text-justify">{t(e.institution)}</DialogDescription>
                <span className="block font-mono text-xs uppercase tracking-[0.14em] text-primary">
                  {t(e.period)}
                </span>
                <br />
              </DialogHeader>

              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {e.details
                  .map((detail) => t(detail))
                  .map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span className="text-justify whitespace-pre-line">
                        {detail.includes(":") ? (
                          <>
                            <strong className="text-foreground">
                              {detail.slice(0, detail.indexOf(":") + 1)}
                            </strong>
                            {detail.slice(detail.indexOf(":") + 1)}
                          </>
                        ) : (
                          detail
                        )}
                      </span>
                    </li>
                  ))}
              </ul>

              {index === 0 ? (
                <div className="mt-6 flex justify-center">
                  <img src={utpLogo} alt="UTP" className="size-35 object-contain" />
                  <img src={mecatronicaLogo} alt="Mecatrónica" className="size-35 object-contain" />
                </div>
              ) : index === 1 ? (
                <div className="mt-6 flex justify-center">
                  <img src={utpLogo} alt="UTP" className="size-48 object-contain" />
                </div>
              ) : (
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  <img
                    src={talentotechLogo}
                    alt="Talento Tech"
                    className="size-35 object-contain"
                  />
                  <img
                    src={mineducacionLogo}
                    alt="MinEducación"
                    className="size-35 object-contain"
                  />
                </div>
              )}
            </div>

            <div className="relative h-[14rem] md:h-full">
              <Carousel opts={{ loop: true }} className="absolute inset-0 h-full w-full">
                <CarouselContent className="h-full">
                  {e.images.map((image) => (
                    <CarouselItem key={image} className="relative h-full pl-0">
                      <img src={image} alt="" className="block size-full object-cover" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white" />
                <CarouselNext className="right-3 border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white" />
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

function MagazineBlock({
  image,
  title,
  text,
  reverse,
}: {
  image: string;
  title: string;
  text: string;
  reverse: boolean;
}) {
  const imageCol = (
    <div className="relative min-h-[220px] overflow-hidden rounded-md md:min-h-full">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
    </div>
  );
  const textCol = (
    <div className="flex flex-col justify-center">
      <h4 className="font-display text-base font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-justify text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );

  return (
    <div className="grid items-stretch gap-5 md:grid-cols-2">
      {reverse ? (
        <>
          {textCol}
          {imageCol}
        </>
      ) : (
        <>
          {imageCol}
          {textCol}
        </>
      )}
    </div>
  );
}

export function ProjectList() {
  const { t } = useLanguage();

  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-2">
      {projects.map((p, index) => {
        const projectIcon = getProjectIcon(translate(p.title, "es"), index);
        const extra = projectExtras[index % projectExtras.length]!;
        // Las 4 primeras fotos ilustran el artículo; el resto de fotos y los videos van a la galería.
        const projectPhotos = p.media
          .filter((item) => item.type === "image")
          .map((item) => item.src);
        const photoAt = (i: number) => projectPhotos[i % Math.max(projectPhotos.length, 1)] ?? "";
        const galleryItems = p.media.filter(
          (item) => item.type === "video" || projectPhotos.indexOf(item.src) >= 4,
        );
        return (
          <Dialog key={translate(p.title, "es")}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group h-full w-full cursor-pointer text-left transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-primary"
              >
                <Card
                  title={t(p.title)}
                  subtitle={t(p.kind)}
                  period={t(p.period)}
                  bullets={[]}
                  tags={p.tags.map((tag) => t(tag))}
                  showIcon
                  icon={projectIcon!}
                />
              </button>
            </DialogTrigger>

            <DialogContent className="flex h-[min(88vh,58rem)] max-w-[54rem] flex-col gap-0 overflow-hidden p-0">
              <DialogHeader className="shrink-0 border-b border-border/70 px-6 py-5 text-left md:px-10">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                      <BookMarked className="size-3.5" aria-hidden />
                      {t(p.kind)}
                    </span>
                    <DialogTitle className="mt-1 font-display text-2xl">{t(p.title)}</DialogTitle>
                    <DialogDescription className="mt-1">{t(p.period)}</DialogDescription>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <Badge
                          key={translate(tag, "es")}
                          variant="secondary"
                          className="font-mono text-[0.7rem]"
                        >
                          {t(tag)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <img
                    src={projectIcon}
                    alt=""
                    className="hidden size-20 shrink-0 self-center rounded-md object-contain sm:block"
                    aria-hidden
                  />
                </div>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8">
                <div className="mx-auto max-w-3xl space-y-8 md:space-y-10">
                  {extra.titles.map((title, i) => (
                    <MagazineBlock
                      key={i}
                      image={photoAt(i)}
                      title={t(title)}
                      text={t(extra.blocks[i]!)}
                      reverse={i % 2 === 1}
                    />
                  ))}

                  <div className="grid items-stretch gap-5 md:grid-cols-2">
                    <section className="rounded-lg border border-primary/20 bg-primary/5 p-5 md:p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <TrendingUp className="size-5" aria-hidden />
                        </span>
                        <h3 className="font-display text-base font-semibold">
                          {t(ui.projects.impact)}
                        </h3>
                      </div>
                      <p className="mt-3 text-justify text-sm leading-relaxed text-muted-foreground">
                        {t(extra.blocks[3])}
                      </p>
                    </section>
                    <div className="relative min-h-[220px] overflow-hidden rounded-md md:min-h-full">
                      <img
                        src={photoAt(3)}
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                      />
                    </div>
                  </div>

                  <section className="rounded-lg border border-primary/20 bg-primary/5 p-5 md:p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <Award className="size-5" aria-hidden />
                      </span>
                      <h3 className="font-display text-base font-semibold">
                        {t(ui.projects.learned)}
                      </h3>
                    </div>
                    <p className="mt-3 text-justify text-sm leading-relaxed text-muted-foreground">
                      {t(extra.learned)}
                    </p>
                  </section>

                  {galleryItems.length ? (
                    <section>
                      <h3 className="font-display text-base font-semibold">
                        {t(ui.projects.gallery)}
                      </h3>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {galleryItems.map((item) => (
                          <div
                            key={item.src}
                            className="overflow-hidden rounded-md border border-border/70 bg-black"
                          >
                            {item.type === "video" ? (
                              <video
                                src={item.src}
                                controls
                                preload="metadata"
                                className="aspect-video w-full object-contain"
                              />
                            ) : (
                              <img
                                src={item.src}
                                alt=""
                                loading="lazy"
                                className="aspect-video w-full object-cover"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  ) : null}
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap items-start justify-between gap-4 border-t border-border/70 px-6 py-4 md:px-10">
                <div>
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                    <Newspaper className="size-4" aria-hidden />
                    {t(ui.projects.sources)}
                  </span>
                  <ol className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                    {p.source.map((s) => (
                      <li key={s.url}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-primary underline-offset-2 transition-colors hover:text-foreground hover:underline"
                        >
                          {t(s.name)}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
                <p className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
                  {extra.reference}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}

type ImpactCategory = {
  type: Text;
  icon: LucideIcon;
  text: Text;
};

const { technological, economic, social } = ui.experience.impactTypes;

const impactBreakdowns: ImpactCategory[][] = [
  [
    {
      type: technological,
      icon: Cpu,
      text: {
        es: "Apropiación de nuevas tecnologías y transición a herramientas inexploradas a través de la investigación.",
        en: "Adoption of new technologies and transition to unexplored tools through research.",
        it: "Adozione di nuove tecnologie e transizione verso strumenti inesplorati attraverso la ricerca.",
      },
    },
    {
      type: economic,
      icon: DollarSign,
      text: {
        es: "Incremento de la calidad y confianza en las operaciones de recaudo y monitoreo en Colombia y México.",
        en: "Increased quality and reliability in fare collection and monitoring operations in Colombia and Mexico.",
        it: "Aumento della qualità e dell'affidabilità nelle operazioni di riscossione e monitoraggio in Colombia e Messico.",
      },
    },
    {
      type: social,
      icon: Users,
      text: {
        es: "Mejoramiento de la experiencia de operadores y pasajeros del transporte masivo con datos más confiables.",
        en: "Improved experience for mass transit operators and passengers with more reliable data.",
        it: "Miglioramento dell'esperienza di operatori e passeggeri del trasporto di massa con dati più affidabili.",
      },
    },
  ],
  [
    {
      type: economic,
      icon: DollarSign,
      text: {
        es: "Aumento de las ventas, la atención y la visibilidad de la empresa con 2 aplicaciones en producción.",
        en: "Increased sales, customer engagement and company visibility with 2 applications in production.",
        it: "Aumento delle vendite, dell'assistenza e della visibilità dell'azienda con 2 applicazioni in produzione.",
      },
    },
    {
      type: social,
      icon: Users,
      text: {
        es: "Acceso a plataformas asistenciales de seguimiento deportivo y de salud que promueven hábitos saludables.",
        en: "Access to assistive sports and health tracking platforms that promote healthy habits.",
        it: "Accesso a piattaforme di assistenza per il monitoraggio sportivo e della salute che promuovono abitudini sane.",
      },
    },
    {
      type: technological,
      icon: Cpu,
      text: {
        es: "Apropiación de tecnologías emergentes de IA conversacional, transformadas desde la investigación a producción.",
        en: "Adoption of emerging conversational AI technologies, taken from research to production.",
        it: "Adozione di tecnologie emergenti di IA conversazionale, portate dalla ricerca alla produzione.",
      },
    },
  ],
  [
    {
      type: technological,
      icon: Cpu,
      text: {
        es: "Estandarización de la validación de facturación electrónica según normativa DIAN y MSPS.",
        en: "Standardized electronic invoicing validation in line with DIAN and MSPS regulations.",
        it: "Standardizzazione della validazione della fatturazione elettronica secondo le normative DIAN e MSPS.",
      },
    },
    {
      type: economic,
      icon: DollarSign,
      text: {
        es: "Aumento del 50% en automatización, reduciendo costos por errores humanos en facturación.",
        en: "50% increase in automation, reducing costs from human errors in invoicing.",
        it: "Aumento del 50% dell'automazione, riducendo i costi dovuti a errori umani nella fatturazione.",
      },
    },
  ],
  [
    {
      type: technological,
      icon: Cpu,
      text: {
        es: "Optimización del procesamiento de alto tráfico y la calidad de datos mediante servicios de streaming y ML.",
        en: "Optimized high-traffic processing and data quality through streaming and ML services.",
        it: "Ottimizzazione dell'elaborazione ad alto traffico e della qualità dei dati tramite servizi di streaming e ML.",
      },
    },
    {
      type: social,
      icon: Users,
      text: {
        es: "Mejoramiento de la gestión de incidentes urbanos y la toma de decisiones de operadores públicos.",
        en: "Improved urban incident management and decision-making for public operators.",
        it: "Miglioramento della gestione degli incidenti urbani e del processo decisionale degli operatori pubblici.",
      },
    },
  ],
  [
    {
      type: social,
      icon: Users,
      text: {
        es: "Reducción de la brecha digital en comunidades rurales de Risaralda, impactando a más de 60 jóvenes.",
        en: "Narrowing the digital divide in rural communities of Risaralda, reaching more than 60 young people.",
        it: "Riduzione del divario digitale nelle comunità rurali di Risaralda, coinvolgendo più di 60 giovani.",
      },
    },
    {
      type: technological,
      icon: Cpu,
      text: {
        es: "Aumento de vocaciones STEM mediante aprendizaje práctico en robótica y programación.",
        en: "Growth in STEM vocations through hands-on learning in robotics and programming.",
        it: "Aumento delle vocazioni STEM attraverso l'apprendimento pratico di robotica e programmazione.",
      },
    },
  ],
  [
    {
      type: technological,
      icon: Cpu,
      text: {
        es: "Mejoramiento de la seguridad perimetral con CCTV y sensores en más de 45 instalaciones estratégicas.",
        en: "Improved perimeter security with CCTV and sensors at more than 45 strategic facilities.",
        it: "Miglioramento della sicurezza perimetrale con CCTV e sensori in più di 45 installazioni strategiche.",
      },
    },
    {
      type: social,
      icon: Users,
      text: {
        es: "Aumento de la protección y confianza en entornos residenciales, comerciales y estatales.",
        en: "Greater protection and trust in residential, commercial and government environments.",
        it: "Maggiore protezione e fiducia in ambienti residenziali, commerciali e statali.",
      },
    },
  ],
];

const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

function renderWithLinks(text: string) {
  return text.split(URL_PATTERN).map((part, i) => {
    if (i % 2 === 0) return part;
    const url = part.replace(/[.,;:)]+$/, "");
    const trailing = part.slice(url.length);
    return (
      <span key={`${url}-${i}`}>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          title={url}
          className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
        >
          {new URL(url).hostname.replace(/^www\./, "")}
          <ExternalLink className="size-3" aria-hidden />
        </a>
        {trailing}
      </span>
    );
  });
}

const locationIcons = { colombiaMexico: colMexIcon, usa: usaIcon, colombia: colIcon };

export function ExperienceList() {
  const { t } = useLanguage();

  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-2">
      {experience.map((x, index) => {
        const locationIcon = locationIcons[x.location];
        const locationLabel = ui.experience.locations[x.location];
        const coverImage = x.images[0];
        return (
          <Dialog key={`${x.company}-${translate(x.period, "es")}`}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group h-full w-full cursor-pointer text-left transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-primary"
              >
                <div className="panel grid h-full overflow-hidden md:grid-cols-[70%_30%]">
                  <Card
                    title={`${t(x.role)} — ${x.company}`}
                    subtitle={t(x.place)}
                    period={t(x.period)}
                    bullets={[]}
                    bottomAccent
                  />
                  <div className="relative hidden min-h-[12rem] overflow-hidden md:block">
                    <img
                      src={coverImage}
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="flex h-[min(88vh,52rem)] max-w-[54rem] flex-col gap-0 overflow-hidden p-0">
              <DialogHeader className="shrink-0 border-b border-border/70 bg-gradient-to-br from-primary/10 via-transparent to-transparent px-6 py-6 text-left md:px-10">
                <div className="flex items-center gap-5">
                  <span
                    className="block size-16 shrink-0 overflow-hidden rounded-full bg-primary/15"
                    aria-hidden
                  >
                    <img src={coverImage} alt="" className="size-full object-cover" />
                  </span>
                  <div className="min-w-0">
                    <DialogTitle className="font-display text-2xl">{t(x.role)}</DialogTitle>
                    <DialogDescription className="mt-1">
                      {x.company} · {t(x.place)}
                    </DialogDescription>
                    <div className="mt-2 flex flex-wrap items-center gap-3">
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                        {t(x.period)}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-2 py-0.5 text-xs text-muted-foreground">
                        <img
                          src={locationIcon}
                          alt=""
                          className="size-3.5 rounded-full object-cover"
                          aria-hidden
                        />
                        {t(locationLabel)}
                      </span>
                      <a
                        href={x.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ExternalLink className="size-3.5" aria-hidden />
                        {x.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto px-6 py-6 md:px-10 md:py-8">
                <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:gap-10">
                  <section>
                    <h3 className="font-display text-base font-semibold">
                      {t(ui.experience.keyResponsibilities)}
                    </h3>
                    <ol className="relative mt-4 space-y-6 border-l border-border/70 pl-6">
                      {x.bullets.map((bullet, i) => (
                        <li key={i} className="relative">
                          <span
                            className="absolute -left-[1.85rem] flex size-5 items-center justify-center rounded-full border-2 border-primary bg-background font-mono text-[0.65rem] font-semibold text-primary"
                            aria-hidden
                          >
                            {i + 1}
                          </span>
                          <p className="text-justify text-sm leading-relaxed text-muted-foreground">
                            {renderWithLinks(t(bullet))}
                          </p>
                        </li>
                      ))}
                    </ol>

                    {x.images.length ? (
                      <div className="mt-6 h-48 overflow-hidden rounded-lg border border-dashed border-border/70">
                        <MediaCarousel
                          media={x.images.map((src) => ({ type: "image", src }))}
                          className="relative h-full"
                        />
                      </div>
                    ) : null}
                  </section>

                  <section>
                    <h3 className="font-display text-base font-semibold">
                      {t(ui.experience.impactRadar)}
                    </h3>
                    <div className="mt-4 space-y-3">
                      {(impactBreakdowns[index] ?? []).map((impact, i) => (
                        <div
                          key={i}
                          className="flex gap-3 rounded-lg border border-border/70 bg-muted/30 p-4"
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <impact.icon className="size-4" aria-hidden />
                          </span>
                          <div>
                            <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-primary">
                              {t(impact.type)}
                            </span>
                            <p className="mt-1 text-justify text-sm leading-relaxed text-muted-foreground">
                              {t(impact.text)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}

const MAX_LEADERSHIP_LOGOS = 3;

// Logos por actividad, en el mismo orden que `leadership` (máximo 3 por modal).
// `large` agranda un 20 % los logos que se ven pequeños por su diseño.
const leadershipLogos: { src: string; alt: string; large?: boolean }[][] = [
  [{ src: aseutpLogo, alt: "ASEUTP", large: true }],
  [
    { src: cidtLogo, alt: "CIDT", large: true },
    { src: mecabotLogo, alt: "Mecabotica", large: true },
    { src: aeroLeadershipLogo, alt: "Aeronáutica" },
  ],
  [
    { src: utpLogo, alt: "UTP" },
    { src: rredsiLogo, alt: "RREDSI", large: true },
  ],
  [
    { src: utpLogo, alt: "UTP" },
    { src: aeroLeadershipLogo, alt: "Aeronáutica" },
  ],
  [
    { src: utpLogo, alt: "UTP" },
    { src: aeroLeadershipLogo, alt: "Aeronáutica" },
  ],
  [
    { src: utpLogo, alt: "UTP" },
    { src: chevroletLeadershipLogo, alt: "Chevrolet" },
  ],
  [{ src: utpLogo, alt: "UTP" }],
];

const AUTOPLAY_DELAY_MS = 4000;

// Avanza el carrusel a ritmo constante; cualquier cambio de slide (incluido
// el click manual) reinicia el temporizador para no saltar dos veces seguidas.
function useCarouselAutoplay(api: CarouselApi | undefined, delay = AUTOPLAY_DELAY_MS) {
  useEffect(() => {
    if (!api) return;
    let timer = window.setTimeout(tick, delay);
    function restart() {
      window.clearTimeout(timer);
      timer = window.setTimeout(tick, delay);
    }
    function tick() {
      api!.scrollNext();
      restart();
    }
    api.on("select", restart);
    return () => {
      window.clearTimeout(timer);
      api.off("select", restart);
    };
  }, [api, delay]);
}

// Carrusel de fotos/videos con avance automático; un click sobre la foto pasa a la siguiente.
function MediaCarousel({
  media,
  className = "relative aspect-video md:aspect-auto md:h-full",
}: {
  media: MediaItem[];
  className?: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  useCarouselAutoplay(api);

  return (
    <div className={className}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="absolute inset-0 [&>div:first-child]:h-full"
      >
        <CarouselContent
          className="ml-0 h-full cursor-pointer"
          onClick={(event) => {
            if (!(event.target instanceof HTMLVideoElement)) api?.scrollNext();
          }}
        >
          {media.map((item) => (
            <CarouselItem key={item.src} className="h-full pl-0">
              {item.type === "image" ? (
                <img src={item.src} alt="" className="size-full object-cover" />
              ) : (
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  className="size-full bg-black object-contain"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export function LeadershipList() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {leadership.map((l, index) => {
        const coverImage = l.media.find((item) => item.type === "image")?.src;
        const logos = (leadershipLogos[index] ?? []).slice(0, MAX_LEADERSHIP_LOGOS);
        return (
          <Dialog key={translate(l.role, "es")}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-lg text-left focus-visible:outline-2 focus-visible:outline-primary"
              >
                <img
                  src={coverImage}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white/70">
                    {t(l.period)}
                  </span>
                  <h3 className="mt-1 font-display text-base font-semibold leading-tight">
                    {t(l.role)}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs backdrop-blur-sm transition-colors group-hover:bg-white/25">
                    <BookMarked className="size-3.5" aria-hidden />
                    {t(ui.leadership.viewDetail)}
                  </span>
                </div>
              </button>
            </DialogTrigger>

            <DialogContent
              onCloseAutoFocus={(event) => event.preventDefault()}
              className="grid max-h-[calc(100vh-2rem)] max-w-[64rem] grid-rows-[auto_minmax(0,1fr)] gap-0 overflow-hidden p-0 md:h-[min(28rem,calc(100vh-2rem))] md:grid-cols-[3fr_2fr] md:grid-rows-1"
            >
              <MediaCarousel media={l.media} />
              <div className="overflow-y-auto p-6 md:p-8">
                <DialogHeader className="text-left">
                  <DialogTitle>{t(l.role)}</DialogTitle>
                  <DialogDescription>{t(l.place)}</DialogDescription>
                  <span className="block font-mono text-xs uppercase tracking-[0.14em] text-primary">
                    {t(l.period)}
                  </span>
                  {l.certificate ? (
                    <DialogClose asChild>
                      <a
                        href="#certificados"
                        className="inline-flex w-fit items-center gap-1 text-sm font-medium text-primary hover:text-foreground"
                      >
                        <Award className="size-3.5" aria-hidden />
                        {t(ui.education.viewCertificate)}
                      </a>
                    </DialogClose>
                  ) : null}
                </DialogHeader>
                <p className="mt-4 text-justify text-sm leading-relaxed text-muted-foreground">
                  {renderWithLinks(t(l.text))}
                </p>
                {logos.length ? (
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    {logos.map((logo) => (
                      <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        className={`${logo.large ? "size-[9rem]" : "size-23"} object-contain`}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
