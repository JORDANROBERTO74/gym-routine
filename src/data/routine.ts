import type { Exercise, RoutineDay, TrainingDayId } from "@/types/routine";

const TRAINING_DAY_IDS: TrainingDayId[] = [
  "day-1",
  "day-2",
  "day-3",
  "day-4",
  "day-5",
  "day-6",
];

export function isValidDayId(id: string): id is TrainingDayId {
  return (TRAINING_DAY_IDS as string[]).includes(id);
}

export function getDayById(
  days: RoutineDay[],
  id: TrainingDayId
): RoutineDay | undefined {
  return days.find((day) => day.id === id);
}

export function getExerciseById(
  day: RoutineDay,
  exerciseId: string
): Exercise | undefined {
  return day.exercises.find((exercise) => exercise.id === exerciseId);
}

export function getAdjacentExercises(
  day: RoutineDay,
  exerciseId: string
): { prev: Exercise | null; next: Exercise | null } {
  const index = day.exercises.findIndex((exercise) => exercise.id === exerciseId);
  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: index > 0 ? day.exercises[index - 1] : null,
    next: index < day.exercises.length - 1 ? day.exercises[index + 1] : null,
  };
}

/** Piernas: glúteos / isquios */
const legsGluteIsquio: Exercise[] = [
  {
    id: "legs-gi-1",
    name: "Hip thrust",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Extensión de cadera para glúteo mayor. Ideal para fuerza y forma en la parte superior del movimiento.",
    tips: [
      "Aprieta glúteos arriba y mantén el mentón ligeramente metido.",
      "No hiperextiendas la lumbar: el movimiento sale de la cadera.",
      "Elige un peso donde las últimas 2 reps cuesten, pero el bloqueo arriba siga limpio.",
    ],
    videoUrl: "https://youtu.be/ZSPmIyX9RZs",
  },
  {
    id: "legs-gi-2",
    name: "Peso muerto rumano con mancuernas",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Bisagra de cadera que enfatiza isquios y glúteos con carga controlada.",
    tips: [
      "Bisagra de cadera con ligera flexión de rodillas; mancuernas cerca de las piernas.",
      "Evita redondear la espalda: pecho abierto y core firme.",
      "Baja solo hasta sentir el estirón en isquios; sube empujando la cadera, no tirando de la lumbar.",
    ],
    videoUrl: "https://youtu.be/zeskttbWWx8",
  },
  {
    id: "legs-gi-3",
    name: "Sentadilla sumo con mancuernas",
    sets: 3,
    reps: "8-10",
    rest: "1.5-2 min",
    description:
      "Sentadilla abierta que carga glúteos, aductores y cuádriceps con énfasis en rango controlado.",
    tips: [
      "Pies abiertos y puntas hacia afuera; baja con control hasta profundidad cómoda.",
      "Rodillas siguen la dirección de los pies; no dejes que colapsen hacia dentro.",
      "Prioriza profundidad estable antes de sumar peso.",
    ],
    videoUrl: "https://youtube.com/shorts/sQ-lwJtpwUc?si=gQ_ose1gdxMBk6Dg",
  },
  {
    id: "legs-gi-4",
    name: "Curl femoral acostado",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Aislamiento de isquiotibiales en máquina para fuerza y control de la flexión de rodilla.",
    tips: [
      "Cadera pegada al banco; no levantes el trasero para ayudar.",
      "Sube sin impulso y baja en 2–3 segundos.",
      "Peso que permita 10–12 reps con quemazón limpia, sin balanceo.",
    ],
    videoUrl: "https://youtube.com/shorts/B6t8MvbTtew?si=M_ih9KGLZ-yr1ZST",
  },
  {
    id: "legs-gi-5",
    name: "Patada en polea",
    sets: 3,
    reps: "12-15",
    rest: "0.75-1 min",
    description:
      "Extensión de cadera unilateral para glúteo, con foco en contracción y estabilidad.",
    tips: [
      "Por pierna; controla el movimiento sin balancear el tronco.",
      "Mantén la pelvis neutra: no arquees la lumbar al empujar.",
      "Usa carga moderada: aquí gana la calidad del apriete, no el stack máximo.",
    ],
    videoUrl: "https://youtube.com/shorts/ty1qWiKgOTM?si=Bxux76xnfeLY_soR",
  },
];

/** Piernas: cuádriceps / fuerza */
const legsCuadFuerza: Exercise[] = [
  {
    id: "legs-cf-1",
    name: "Sentadilla Hack Squat",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Sentadilla guiada para cuádriceps con carga alta y trayectoria estable.",
    tips: [
      "Espalda pegada al respaldo; baja con control hasta profundidad segura.",
      "No rebotes abajo: pausa breve y empuja por el talón/medio pie.",
      "Peso pesado pero limpio: si las rodillas fallan o se despega la espalda, baja carga.",
    ],
    videoUrl: "https://youtube.com/shorts/9E0oA25ZBlo?si=Y6-ZjLbMdGdBQzl-",
  },
  {
    id: "legs-cf-2",
    name: "Prensa 45°",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Empuje de piernas en máquina para volumen de cuádriceps y glúteo con buena seguridad.",
    tips: [
      "No bloquees del todo las rodillas arriba; mantén tensión.",
      "Pies a ancho de hombros; baja sin que la lumbar se despegue del asiento.",
      "Carga exigente en el rango 7–10: últimas reps duras con recorrido completo.",
    ],
    videoUrl: "https://youtube.com/shorts/NYa0tZCW4fk?si=vFIN_NPShJQf5lnJ",
  },
  {
    id: "legs-cf-3",
    name: "Búlgaras con mancuerna",
    sets: 3,
    reps: "8-10/pierna",
    rest: "1.5-2 min",
    description:
      "Zancada elevada unilateral: cuádriceps, glúteo y equilibrio por pierna.",
    tips: [
      "Torso ligeramente inclinado; rodilla delantera estable y alineada.",
      "La pierna de atrás solo apoya: el trabajo es de la delantera.",
      "Empieza con mancuerna manejable; suma peso solo si ambas piernas hacen el mismo rango.",
    ],
    videoUrl: "https://youtube.com/shorts/QuKHDwIocyg?si=Rlh9h9-wTnLZip-3",
  },
  {
    id: "legs-cf-4",
    name: "Extensiones de cuádriceps en máquina",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Aislamiento de cuádriceps para rematar el día de fuerza con bombeo controlado.",
    tips: [
      "Extiende sin bloquear de golpe; controla la bajada.",
      "Cadera fija en el asiento: no uses impulso de tronco.",
      "Busca ardor limpio en 10–12; si balanceas, reduce el peso.",
    ],
    videoUrl: "https://youtube.com/shorts/uM86QE59Tgc?si=L33Ns2xzM89exVBJ",
  },
  {
    id: "legs-cf-5",
    name: "Aductores en máquina",
    sets: 3,
    reps: "12-15",
    rest: "0.75-1 min",
    description:
      "Trabajo de aductores para estabilidad de cadera y complemento de pierna.",
    tips: [
      "Cierra con control y abre sin soltar de golpe.",
      "Evita arquear la lumbar; mantén el torso quieto.",
      "Carga moderada-alta en rango alto de reps, siempre con forma estable.",
    ],
    videoUrl: "https://youtube.com/shorts/76uNT_VMhPI?si=xV3738vgbQa4kSoJ",
  },
];

/** Piernas: completo / volumen (3er día) */
const legsCompletoVolumen: Exercise[] = [
  {
    id: "legs-cv-1",
    name: "Sentadilla goblet",
    sets: 4,
    reps: "8-12",
    rest: "1.5-2 min",
    description:
      "Sentadilla con mancuerna al pecho: patrón completo, cuádriceps y core con técnica accesible.",
    tips: [
      "Codos entre rodillas; torso erguido; baja controlado.",
      "Talones firmes en el suelo; no te inclines en exceso hacia adelante.",
      "Peso que permita profundidad y ritmo constante las 8–12 reps.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=MeIiIdhvXT4",
  },
  {
    id: "legs-cv-2",
    name: "Zancadas caminando",
    sets: 3,
    reps: "10-12/pierna",
    rest: "1.25-1.5 min",
    description:
      "Desplazamiento unilateral para cuádriceps, glúteo y estabilidad dinámica.",
    tips: [
      "Paso largo; rodilla delantera estable; torso casi vertical.",
      "No dejes que la rodilla se vaya hacia dentro al aterrizar.",
      "Mancuernas ligeras-medias: la calidad del paso manda sobre la carga.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=D7KaRcUTQeE",
  },
  {
    id: "legs-cv-3",
    name: "Curl femoral sentado",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Curl de isquios en posición sentada: buen estirón y control en otro ángulo que el acostado.",
    tips: [
      "Controla la fase excéntrica; no uses impulso.",
      "Cadera quieta en el asiento; no rebotes al final del curl.",
      "Elige peso para quemazón limpia en el rango 10–12.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=PfU_s7QcDHU",
  },
  {
    id: "legs-cv-4",
    name: "Abductores en máquina",
    sets: 3,
    reps: "12-15",
    rest: "0.75-1 min",
    description:
      "Apertura de cadera para glúteo medio: estabilidad y equilibrio lateral.",
    tips: [
      "Movimiento controlado; evita balanceo del torso.",
      "Abre con intención y vuelve sin soltar el peso.",
      "Carga moderada: prioriza sentir el glúteo lateral, no el ego del stack.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=7HylKT7G-EA",
  },
  {
    id: "legs-cv-5",
    name: "Step-ups con mancuerna",
    sets: 3,
    reps: "8-10/pierna",
    rest: "1.25-1.5 min",
    description:
      "Subida a banco con carga: cuádriceps y glúteo unilateral con transferencia funcional.",
    tips: [
      "Empuja con la pierna de arriba; no te impulsees con la de abajo.",
      "Banco a altura de rodilla o un poco menos; controla la bajada.",
      "Mismo peso en ambas piernas; si una falla la técnica, baja carga.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=DxUNi119Qzs",
  },
];

const pushExercises: Exercise[] = [
  {
    id: "push-1",
    name: "Press banca barra",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Empuje horizontal principal para pecho, hombros delanteros y tríceps.",
    tips: [
      "Controla la bajada; codos a ~45° respecto al torso.",
      "Escápulas retraídas y pies firmes; no rebotes en el pecho.",
      "Peso para 7–10 limpios: si la barra baila o se acorta el rango, reduce.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
  },
  {
    id: "push-2",
    name: "Press inclinado mancuernas",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press en banco inclinado para pecho superior y estabilizadores con mancuernas.",
    tips: [
      "Baja con control hasta estirón cómodo; no choques las mancuernas arriba.",
      "Muñecas neutras; evita abrir excesivamente los codos.",
      "Carga desafiante en 7–10: últimas reps difíciles sin perder el recorrido.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8",
  },
  {
    id: "push-3",
    name: "Press militar mancuernas",
    sets: 3,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press de hombros de pie o sentado para deltoides y estabilización del core.",
    tips: [
      "Core firme; no arquees la lumbar para empujar el peso.",
      "Empuja en línea vertical; baja controlado a la altura de las orejas/hombros.",
      "Si necesitas impulso de piernas o espalda, el peso es demasiado.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
  },
  {
    id: "push-4",
    name: "Elevaciones laterales",
    sets: 4,
    reps: "10-15",
    rest: "0.75-1 min",
    description:
      "Aislamiento del deltoides lateral para ancho de hombro con carga ligera-media.",
    tips: [
      "Codos ligeramente flexionados; sube a la altura del hombro.",
      "Sin impulso de tronco: si balanceas, baja el peso.",
      "Aquí manda el control; mejor 10–15 limpios que mancuernas pesadas con trampa.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
  },
  {
    id: "push-5",
    name: "Extensiones de tríceps polea",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Extensión de codo en polea para tríceps, remate de empuje con bombeo.",
    tips: [
      "Codos fijos al costado; solo mueve el antebrazo.",
      "Extiende del todo sin bloquear de golpe; controla la vuelta.",
      "Peso para quemazón limpia; si se abren los codos, reduce carga.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=2-LAMcpzODU",
  },
];

const pullExercises: Exercise[] = [
  {
    id: "pull-1",
    name: "Jalón al pecho",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Tirón vertical para dorsal y espalda alta; base de ancho de espalda.",
    tips: [
      "Lleva la barra al pecho alto; pecho arriba y hombros abajo.",
      "No te balancees hacia atrás: el movimiento es de espalda, no de impulso.",
      "Carga para 7–10 con control; si solo tiras con brazos, baja peso y aprieta dorsal.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
  },
  {
    id: "pull-2",
    name: "Remo con barra",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Tirón horizontal compuesto para grosor de espalda y fuerza de remo.",
    tips: [
      "Espalda neutra; tira con los codos hacia la cadera/cintura.",
      "No redondees la lumbar ni uses demasiado impulso de torso.",
      "Peso serio en 7–10: cada rep debe llegar con control, no con rebote.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=9efgcAjQe7E",
  },
  {
    id: "pull-3",
    name: "Face pulls",
    sets: 3,
    reps: "12-15",
    rest: "1-1.5 min",
    description:
      "Tirón a la cara en polea para deltoides posteriores y salud de hombro.",
    tips: [
      "Tira hacia la cara/frente; rotación externa al final (nudillos atrás).",
      "Codos altos; no bajes el movimiento a un remo de espalda media.",
      "Carga ligera-media: aquí la calidad del apriete importa más que el peso.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=rep-a27HhMw",
  },
  {
    id: "pull-4",
    name: "Curl bíceps mancuernas",
    sets: 3,
    reps: "8-12",
    rest: "1-1.5 min",
    description:
      "Flexión de codo con mancuernas para bíceps con buen control bilateral.",
    tips: [
      "Codos pegados al cuerpo; no balancees el tronco.",
      "Sube sin impulso y baja en 2–3 segundos.",
      "Últimas reps difíciles con forma limpia; si necesitas columpiarte, baja peso.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
  },
];

/** Tren superior completo */
const upperBodyExercises: Exercise[] = [
  {
    id: "upper-1",
    name: "Remo sentado en polea",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Remo guiado sentado para espalda media y control escapular en el día Upper.",
    tips: [
      "Pecho alto; tira con los codos hacia atrás.",
      "No redondees hombros al frente al soltar; controla la extensión.",
      "Peso que permita apretar escápulas en cada rep del rango 7–10.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74",
  },
  {
    id: "upper-2",
    name: "Press banca con mancuernas",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press horizontal con mancuernas: pecho y estabilizadores con rango natural.",
    tips: [
      "Baja controlado hasta pecho; no choques las mancuernas arriba.",
      "Muñecas firmes; codos en trayectoria estable (~45°).",
      "Carga equilibrada en ambos brazos; prioriza simetría y rango completo.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=VmB1G1K7v94",
  },
  {
    id: "upper-3",
    name: "Jalón agarre neutro",
    sets: 3,
    reps: "7-10",
    rest: "1.5-2 min",
    description:
      "Jalón con agarre neutro: dorsal y bíceps con patrón de tirón cómodo para el hombro.",
    tips: [
      "Lleva la barra al pecho alto; evita balancear el tronco.",
      "Hombros abajo y atrás al iniciar el tirón.",
      "Si solo sientes bíceps, reduce peso y piensa en “codos al bolsillo”.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=cHCVEqwWfqs",
  },
  {
    id: "upper-4",
    name: "Elevaciones laterales",
    sets: 3,
    reps: "10-15",
    rest: "0.75-1 min",
    description:
      "Deltoides lateral para rematar hombros en el día de tren superior.",
    tips: [
      "Codos ligeramente flexionados; sube a la altura del hombro.",
      "Sin columpiar el cuerpo; pausa mínima arriba.",
      "Peso ligero-moderado: 10–15 limpios valen más que trampa con mucho peso.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
  },
  {
    id: "upper-5",
    name: "Curl martillo",
    sets: 3,
    reps: "8-12",
    rest: "1-1.5 min",
    description:
      "Curl con agarre neutro: bíceps y braquial, buen remate de tirón.",
    tips: [
      "Agarre neutro; controla la bajada.",
      "Codos fijos; no abras el movimiento hacia los lados.",
      "Últimas 2 reps exigentes sin balanceo; baja el peso si rompes la forma.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4",
  },
];

export const routineDays: RoutineDay[] = [
  {
    id: "day-1",
    number: 1,
    label: "Día 1",
    focus: "Legs",
    detail: "Glúteos / Isquios",
    summary:
      "Calienta 5 min y estira isquios antes del RDL. En hip thrust prioriza el apriete arriba, no el peso.",
    exercises: legsGluteIsquio,
  },
  {
    id: "day-2",
    number: 2,
    label: "Día 2",
    focus: "Pull",
    detail: "Espalda / Bíceps",
    summary:
      "Activa escápulas con face pulls ligeros. En remo no redondees la lumbar; tira con los codos.",
    exercises: pullExercises,
  },
  {
    id: "day-3",
    number: 3,
    label: "Día 3",
    focus: "Legs",
    detail: "Cuádriceps / Fuerza",
    summary:
      "Movilidad de tobillo y cadera antes del Hack. No bloquees las rodillas en prensa ni extensiones.",
    exercises: legsCuadFuerza,
  },
  {
    id: "day-4",
    number: 4,
    label: "Día 4",
    focus: "Push",
    detail: "Pecho / Hombros / Tríceps",
    summary:
      "Escápulas estables en press. Laterales con poco peso y sin impulso de tronco.",
    exercises: pushExercises,
  },
  {
    id: "day-5",
    number: 5,
    label: "Día 5",
    focus: "Legs",
    detail: "Completo / Volumen",
    summary:
      "Sesión más ligera: rango completo y buena técnica. Hidrátate entre series y controla las zancadas.",
    exercises: legsCompletoVolumen,
  },
  {
    id: "day-6",
    number: 6,
    label: "Día 6",
    focus: "Upper",
    detail: "Tren superior",
    summary:
      "Equilibra empuje y tirón. Si fatigas, prioriza remo y press antes que los aislados.",
    exercises: upperBodyExercises,
  },
];
