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
  id: TrainingDayId,
): RoutineDay | undefined {
  return days.find((day) => day.id === id);
}

export function getExerciseById(
  day: RoutineDay,
  exerciseId: string,
): Exercise | undefined {
  return day.exercises.find((exercise) => exercise.id === exerciseId);
}

export function getAdjacentExercises(
  day: RoutineDay,
  exerciseId: string,
): { prev: Exercise | null; next: Exercise | null } {
  const index = day.exercises.findIndex(
    (exercise) => exercise.id === exerciseId,
  );
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
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
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
  {
    id: "legs-gi-6",
    name: "Crunch en polea",
    sets: 3,
    reps: "10-15",
    rest: "0.75-1 min",
    description:
      "Flexión de tronco en polea alta con soga: aislamiento del recto abdominal con carga progresiva.",
    tips: [
      "De rodillas frente a la polea; soga a los lados de la cabeza; crunch con los abs, no con los brazos.",
      "Cadera quieta: no tires con la cadera ni uses impulso.",
      "Peso para 10–15 limpios; aprieta abajo 1 segundo y sube con control.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=aBd6T01PBqw",
  },
  {
    id: "legs-gi-7",
    name: "Plancha lateral",
    sets: 3,
    reps: "20-40s/lado",
    rest: "0.75-1 min",
    description:
      "Isométrico de oblicuos y estabilidad lateral: anti-flexión lateral con poco estrés lumbar.",
    tips: [
      "Codo bajo el hombro; cuerpo en línea recta; cadera elevada sin hundirte.",
      "Pies apilados (o rodillas apoyadas si necesitas regresión).",
      "Aguanta 20–40 s por lado cerca del límite de forma estable; cambia de lado.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=cSIWldRoKTo",
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
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
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
  {
    id: "legs-cf-6",
    name: "Elevaciones de rodillas colgado",
    sets: 3,
    reps: "10-15",
    rest: "0.75-1 min",
    description:
      "Elevación de rodillas en barra (o captain’s chair): recto abdominal y control de pelvis.",
    tips: [
      "Sin balanceo: inicia con pelvis en retroversión y sube rodillas al pecho.",
      "Si no hay barra, usa captain’s chair / máquina de elevaciones con la misma intención.",
      "Baja en 2–3 segundos; últimas reps duras sin impulso de piernas.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=iUqV5q_ENXU",
  },
  {
    id: "legs-cf-7",
    name: "Pallof press en polea",
    sets: 3,
    reps: "10-12/lado",
    rest: "0.75-1 min",
    description:
      "Press anti-rotación en polea a altura de pecho: oblicuos y estabilidad del tronco bajo tensión.",
    tips: [
      "Polea a pecho con agarre; de lado al stack; manos al pecho y empuja hacia adelante sin girar el tronco.",
      "Pies firmes, glúteos activos; resiste el tirón de la polea.",
      "Misma carga y reps en ambos lados; si rotas, baja el peso del stack.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=nB4QoM4eFfU",
  },
];

/** Piernas: completo / volumen (3er día) */
const legsCompletoVolumen: Exercise[] = [
  {
    id: "legs-cv-1",
    name: "Sentadilla goblet",
    sets: 4,
    reps: "10-15",
    rest: "1.5-2 min",
    description:
      "Sentadilla con mancuerna al pecho: patrón completo, cuádriceps y core con técnica accesible.",
    tips: [
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
      "Codos entre rodillas; torso erguido; baja controlado.",
      "Talones firmes en el suelo; no te inclines en exceso hacia adelante.",
      "Peso que permita profundidad y ritmo constante las 10–15 reps; últimas reps exigentes.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=MeIiIdhvXT4",
  },
  {
    id: "legs-cv-2",
    name: "Zancadas caminando",
    sets: 3,
    reps: "12-15/pierna",
    rest: "1.25-1.5 min",
    description:
      "Desplazamiento unilateral para cuádriceps, glúteo y estabilidad dinámica.",
    tips: [
      "Paso largo; rodilla delantera estable; torso casi vertical.",
      "No dejes que la rodilla se vaya hacia dentro al aterrizar.",
      "Mancuernas ligeras-medias: la calidad del paso manda sobre la carga; llega cerca del fallo en 12–15.",
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
      "Curl de isquios sentado: mejor estímulo de hipertrofia en posición alargada que el acostado.",
    tips: [
      "Controla la fase excéntrica; no uses impulso.",
      "Cadera quieta en el asiento; no rebotes al final del curl.",
      "Elige peso para quemazón limpia en el rango 10–12.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=PfU_s7QcDHU",
  },
  {
    id: "legs-cv-4",
    name: "Patada en máquina",
    sets: 3,
    reps: "12-15/pierna",
    rest: "0.75-1 min",
    description:
      "Extensión de cadera en máquina de patada: aislamiento de glúteo con trayectoria guiada.",
    tips: [
      "Talón en la palanca; empuja con el glúteo, no arqueando la lumbar.",
      "Pelvis neutra y cuadrada; no gires el tronco al patear.",
      "Aprieta arriba 1 segundo; carga moderada con control, no impulso.",
    ],
    videoUrl: "https://www.youtube.com/shorts/3fBptAH0Rnw",
  },
  {
    id: "legs-cv-5",
    name: "Extensiones de cuádriceps en máquina",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Aislamiento de cuádriceps para rematar el día completo con bombeo controlado.",
    tips: [
      "Extiende sin bloquear de golpe; controla la bajada.",
      "Cadera fija en el asiento: no uses impulso de tronco.",
      "Busca ardor limpio en 10–12; si balanceas, reduce el peso.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=uM86QE59Tgc",
  },
  {
    id: "legs-cv-6",
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
    videoUrl: "https://www.youtube.com/watch?v=G_8LItOiZ0Q",
  },
  {
    id: "legs-cv-7",
    name: "Rueda abdominal",
    sets: 3,
    reps: "8-12",
    rest: "0.75-1 min",
    description:
      "Rollout desde rodillas: anti-extensión del core con alta demanda del recto abdominal.",
    tips: [
      "Desde rodillas; core firme y pelvis neutra: no dejes que la lumbar se hunda.",
      "Rueda solo hasta donde controles; vuelve empujando con los abs, no con la cadera.",
      "Si arquear es inevitable, acorta el recorrido o usa menos distancia.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=iqbHU4M4Y2w",
  },
  {
    id: "legs-cv-8",
    name: "Bicycle crunch",
    sets: 3,
    reps: "12-15/lado",
    rest: "0.75-1 min",
    description:
      "Crunch con rotación controlada: recto abdominal y oblicuos en tempo lento.",
    tips: [
      "Lumbar pegada al suelo; manos detrás de la cabeza sin tirar del cuello.",
      "Codo hacia rodilla contraria con rotación de tronco, no con tirones.",
      "Tempo lento: calidad sobre velocidad; cerca del fallo en 12–15 por lado.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=PAEo-zRSanM",
  },
];

const pushExercises: Exercise[] = [
  {
    id: "push-1",
    name: "Press pecho alto en máquina",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press inclinado guiado para pecho superior (clavicular) con trayectoria estable.",
    tips: [
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
      "Ajusta el asiento para que las manijas queden a la altura del pecho alto.",
      "Escápulas pegadas al respaldo; no dejes que los hombros se adelanten.",
      "Empuja con control; últimas reps duras sin rebotar ni acortar el rango.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=whaV86_J6HY",
  },
  {
    id: "push-2",
    name: "Press pecho medio en máquina",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press horizontal en máquina para pecho medio: volumen principal con buena seguridad.",
    tips: [
      "Manijas a la altura del pecho medio (línea de pezones).",
      "Muñecas neutras; codos ~45° respecto al torso.",
      "No bloquees de golpe arriba; mantén tensión en pecho.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=sqNwDkUU_Ps",
  },
  {
    id: "push-3",
    name: "Aperturas en máquina",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Aislamiento de pecho (pec deck / butterfly) para rematar con estirón y apriete.",
    tips: [
      "Codos ligeramente flexionados y fijos; no conviertas el movimiento en press.",
      "Abre solo hasta sentir el pecho; no fuerces detrás del plano del torso.",
      "Aprieta al cerrar 1 segundo; carga moderada con control.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=H4mVGHaK2f4",
  },
  {
    id: "push-4",
    name: "Extensiones de tríceps en polea con soga",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Pushdown con soga: aislamiento de tríceps con buen apriete al final de cada rep.",
    tips: [
      "Codos fijos al costado; solo mueve el antebrazo.",
      "Abajo separa ligeramente las puntas de la soga y aprieta el tríceps.",
      "Si se abren los codos o balanceas el tronco, baja la carga.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=vB5OHsJ3EME",
  },
  {
    id: "push-5",
    name: "Extensiones de tríceps tras nuca en polea",
    sets: 3,
    reps: "10-12",
    rest: "1-1.5 min",
    description:
      "Extensión overhead en polea: enfatiza la cabeza larga del tríceps con buen estirón.",
    tips: [
      "Codos cerca de las orejas; no los abras hacia los lados.",
      "Baja la barra/cuerda detrás de la cabeza con control y extiende sin impulso.",
      "Core firme; evita arquear la lumbar para ayudar.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=ns-RGsbzqok",
  },
  {
    id: "push-6",
    name: "Extensión de tríceps en polea a una mano",
    sets: 3,
    reps: "10-12/brazo",
    rest: "1-1.5 min",
    description:
      "Pushdown unilateral para equilibrar ambos brazos y rematar el tríceps.",
    tips: [
      "Codo pegado al cuerpo; torso quieto (no gires para ayudar).",
      "Extiende completo y sube en 2–3 segundos.",
      "Mismo rango y carga en ambos brazos; si uno falla la forma, baja peso.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=0CeC53ruBdU",
  },
  {
    id: "push-7",
    name: "Press militar mancuernas",
    sets: 3,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press de hombros sentado o de pie para deltoides; el tríceps ya viene fatigado, prioriza técnica.",
    tips: [
      "Core firme; no arquees la lumbar para empujar.",
      "Empuja en línea vertical; baja controlado a orejas/hombros.",
      "Carga más ligera que en un día fresco de hombros: aquí manda la forma.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
  },
  {
    id: "push-8",
    name: "Elevaciones laterales",
    sets: 3,
    reps: "10-15",
    rest: "0.75-1 min",
    description:
      "Aislamiento del deltoides lateral para ancho de hombro con carga ligera-media.",
    tips: [
      "Codos ligeramente flexionados; sube a la altura del hombro.",
      "Sin impulso de tronco: si balanceas, baja el peso.",
      "Mejor 10–15 limpios que mancuernas pesadas con trampa.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
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
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
      "Lleva la barra al pecho alto; pecho arriba y hombros abajo.",
      "No te balancees hacia atrás: el movimiento es de espalda, no de impulso.",
      "Carga para 7–10 con control; si solo tiras con brazos, baja peso y aprieta dorsal.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc",
  },
  {
    id: "pull-2",
    name: "Remo pecho apoyado en máquina (agarre prono ancho)",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Remo sentado con pecho al pad y torso erguido: agarre prono ancho (palmas abajo) para espalda alta y deltoides posteriores.",
    tips: [
      "Torso erguido; pecho pegado al pad de la máquina en todo momento.",
      "Agarre prono ancho: manijas horizontales, palmas hacia abajo (no el agarre neutro).",
      "Codos atrás con el brazo casi paralelo al suelo; aprieta escápulas sin despegarte del pad.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=S3vT0sDakE0",
  },
  {
    id: "pull-3",
    name: "Remo unilateral con mancuerna",
    sets: 3,
    reps: "8-10/brazo",
    rest: "1.5-2 min",
    description:
      "Remo a una mano con apoyo en banco: dorsal y espalda media, corrige desequilibrios.",
    tips: [
      "Espalda neutra y paralela al suelo; no gires el tronco al subir.",
      "Tira el codo hacia la cadera/costillas; muñeca neutra.",
      "Mismo rango en ambos brazos; si uno falla la forma, baja peso.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=pYcpY20QaE8",
  },
  {
    id: "pull-4",
    name: "Face pulls",
    sets: 3,
    reps: "12-15",
    rest: "1-1.5 min",
    description:
      "Tirón a la cara en polea para deltoides posteriores y salud de hombro.",
    tips: [
      "Polea alta; tira hacia la cara con rotación externa (nudillos atrás).",
      "Codos altos; no conviertas el movimiento en un remo de espalda media.",
      "Carga ligera-media: aquí manda la calidad del apriete, no el stack.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=ljgqer1ZpXg",
  },
  {
    id: "pull-5",
    name: "Curl inclinado con mancuernas",
    sets: 3,
    reps: "8-12",
    rest: "1-1.5 min",
    description:
      "Curl en banco inclinado (~45°): estirón del bíceps en posición alargada.",
    tips: [
      "Brazos cuelgan detrás de la línea del torso; espalda pegada al banco.",
      "Codos fijos; no adelantes los hombros al subir.",
      "Baja en 2–3 segundos hasta estirón cómodo; últimas reps limpia.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=soxrZlIl35U",
  },
  {
    id: "pull-6",
    name: "Curl en predicador en máquina",
    sets: 3,
    reps: "8-12",
    rest: "1-1.5 min",
    description:
      "Curl en máquina Scott: aislamiento estricto de bíceps con trayectoria guiada y pad de apoyo.",
    tips: [
      "Ajusta el asiento: axilas ancladas al borde del pad; brazos pegados todo el recorrido.",
      "Muñecas alineadas con codos; sube con control y aprieta arriba sin despegar los brazos.",
      "Baja lento sin hiperextender el codo; si balanceas o se abren los codos, reduce carga.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=jGhd1pIcQ74",
  },
  {
    id: "pull-7",
    name: "Curl martillo con mancuernas",
    sets: 3,
    reps: "8-12",
    rest: "1-1.5 min",
    description:
      "Curl con agarre neutro: bíceps y braquial, buen remate de brazo.",
    tips: [
      "Agarre neutro; controla la bajada.",
      "Codos fijos; no abras el movimiento hacia los lados.",
      "Últimas 2 reps exigentes sin balanceo; baja el peso si rompes la forma.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4",
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
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
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
      "Calienta 5 min y estira isquios/glúteos antes del RDL. En hip thrust prioriza el apriete arriba, no el peso. Cierra con crunch en polea y plancha lateral.",
    exercises: legsGluteIsquio,
  },
  {
    id: "day-2",
    number: 2,
    label: "Día 2",
    focus: "Pull",
    detail: "Espalda / Bíceps",
    summary:
      "Calienta 5 min y estira dorsales/hombros antes del jalón. En face pulls prioriza rotación externa. Curls: inclinado, predicador y martillo.",
    exercises: pullExercises,
  },
  {
    id: "day-3",
    number: 3,
    label: "Día 3",
    focus: "Legs",
    detail: "Cuádriceps / Fuerza",
    summary:
      "Calienta 5 min y movilidad de tobillo/cadera antes del Hack. No bloquees las rodillas en prensa ni extensiones. Cierra con elevaciones de rodillas y Pallof en polea.",
    exercises: legsCuadFuerza,
  },
  {
    id: "day-4",
    number: 4,
    label: "Día 4",
    focus: "Push",
    detail: "Pecho / Tríceps / Hombros",
    summary:
      "Calienta 5 min y estira pecho/hombros antes del press. En tríceps fija los codos. En militar usa carga moderada: el tríceps ya viene fatigado.",
    exercises: pushExercises,
  },
  {
    id: "day-5",
    number: 5,
    label: "Día 5",
    focus: "Legs",
    detail: "Completo / Volumen",
    summary:
      "Calienta 5 min y movilidad de cadera/cuádriceps antes del goblet. Pierna completa en volumen; cierra con rueda abdominal y bicycle crunch.",
    exercises: legsCompletoVolumen,
  },
  {
    id: "day-6",
    number: 6,
    label: "Día 6",
    focus: "Upper",
    detail: "Tren superior",
    summary:
      "Calienta 5 min y estira espalda/pecho/hombros antes del remo. Equilibra empuje y tirón; si fatigas, prioriza remo y press antes que los aislados.",
    exercises: upperBodyExercises,
  },
];
