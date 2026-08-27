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
    name: "Peso muerto rumano en Smith",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Bisagra de cadera en Smith con barra guiada: isquios y glúteos con trayectoria estable y carga progresiva.",
    tips: [
      "Ajusta la barra a la altura de cadera; pies ligeramente adelantados respecto a la barra para la bisagra.",
      "Bisagra con ligera flexión de rodillas; barra cerca de piernas; pecho abierto y core firme.",
      "Baja hasta sentir el estirón en isquios; sube empujando cadera, no redondeando lumbar.",
    ],
    videoUrl: "https://www.youtube.com/shorts/Wl4tdsx2Sy8",
  },
  {
    id: "legs-gi-3",
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
    id: "legs-gi-4",
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
    id: "legs-gi-5",
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
    name: "Plancha",
    sets: 3,
    reps: "30-60s",
    rest: "0.75-1 min",
    description:
      "Isométrico frontal de core: anti-extensión con recto abdominal y estabilidad global.",
    tips: [
      "Antebrazos al suelo, codos bajo hombros; cuerpo en línea recta de cabeza a talones.",
      "Core y glúteos activos; no dejes caer cadera ni eleves demasiado el trasero.",
      "Aguanta 30–60 s con respiración controlada; regresa si pierdes la alineación.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=A2b2EmIg0dA",
  },
];

/** Piernas: cuádriceps / fuerza */
const legsCuadFuerza: Exercise[] = [
  {
    id: "legs-cf-1",
    name: "Sentadilla en Smith",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Sentadilla guiada en máquina Smith; cuádriceps y glúteo con trayectoria estable y buena seguridad para cargas altas.",
    tips: [
      "Ajusta la barra justo bajo los hombros; desbloquea sin puntillas.",
      "Barra sobre trapecios; pies ligeramente adelantados respecto a la barra.",
      "Core firme, pecho alto; baja hasta profundidad segura (mínimo paralelo si la movilidad lo permite).",
      "Rodillas alineadas con los pies; empuja por talón/medio pie sin rebote abajo.",
      "Calienta con 1–2 series al 50–70% antes de las series efectivas.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=DUWK_gKcRCc",
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
    name: "Zancadas con mancuernas",
    sets: 3,
    reps: "8-10/pierna",
    rest: "1.5-2 min",
    description:
      "Zancada unilateral con mancuernas; cuádriceps, glúteo y estabilidad en patrón alternado.",
    tips: [
      "Mancuernas a los lados; torso erguido y core activo.",
      "Paso controlado adelante; rodilla delantera alineada sobre el tobillo.",
      "Baja hasta ~90° en ambas rodillas; empuja con el talón delantero para volver.",
      "Alterna piernas; misma profundidad y carga en ambos lados.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=_lSFEA3uYY0",
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
    id: "legs-cf-7",
    name: "Plancha",
    sets: 3,
    reps: "30-60s",
    rest: "0.75-1 min",
    description:
      "Isométrico frontal de core: anti-extensión con recto abdominal y estabilidad global.",
    tips: [
      "Antebrazos al suelo, codos bajo hombros; cuerpo en línea recta de cabeza a talones.",
      "Core y glúteos activos; no dejes caer cadera ni eleves demasiado el trasero.",
      "Aguanta 30–60 s con respiración controlada; regresa si pierdes la alineación.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=A2b2EmIg0dA",
  },
];

/** Piernas: completo / volumen (3er día) */
const legsCompletoVolumen: Exercise[] = [
  {
    id: "legs-cv-1",
    name: "Sentadilla en Smith",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Sentadilla guiada en máquina Smith; cuádriceps y glúteo con trayectoria estable y buena seguridad para cargas altas.",
    tips: [
      "Ajusta la barra justo bajo los hombros; desbloquea sin puntillas.",
      "Barra sobre trapecios; pies ligeramente adelantados respecto a la barra.",
      "Core firme, pecho alto; baja hasta profundidad segura (mínimo paralelo si la movilidad lo permite).",
      "Rodillas alineadas con los pies; empuja por talón/medio pie sin rebote abajo.",
      "Calienta con 1–2 series al 50–70% antes de las series efectivas.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=DUWK_gKcRCc",
  },
  {
    id: "legs-cv-2",
    name: "Peso muerto rumano en Smith",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Bisagra de cadera en Smith con barra guiada: isquios y glúteos con trayectoria estable y carga progresiva.",
    tips: [
      "Ajusta la barra a la altura de cadera; pies ligeramente adelantados respecto a la barra para la bisagra.",
      "Bisagra con ligera flexión de rodillas; barra cerca de piernas; pecho abierto y core firme.",
      "Baja hasta sentir el estirón en isquios; sube empujando cadera, no redondeando lumbar.",
    ],
    videoUrl: "https://www.youtube.com/shorts/Wl4tdsx2Sy8",
  },
  {
    id: "legs-cv-3",
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
    id: "legs-cv-4",
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
    id: "legs-cv-7",
    name: "Plancha",
    sets: 3,
    reps: "30-60s",
    rest: "0.75-1 min",
    description:
      "Isométrico frontal de core: anti-extensión con recto abdominal y estabilidad global.",
    tips: [
      "Antebrazos al suelo, codos bajo hombros; cuerpo en línea recta de cabeza a talones.",
      "Core y glúteos activos; no dejes caer cadera ni eleves demasiado el trasero.",
      "Aguanta 30–60 s con respiración controlada; regresa si pierdes la alineación.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=A2b2EmIg0dA",
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
    name: "Press militar mancuernas",
    sets: 3,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press de hombros sentado o de pie para deltoides; con tríceps y hombros frescos puedes empujar con buena carga.",
    tips: [
      "Core firme; no arquees la lumbar para empujar.",
      "Empuja en línea vertical; baja controlado a orejas/hombros.",
      "Últimas reps exigentes con forma limpia; no uses impulso de piernas.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
  },
  {
    id: "push-4",
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
    id: "push-5",
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
  {
    id: "push-6",
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
    id: "push-7",
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
];

const pullExercises: Exercise[] = [
  {
    id: "pull-1",
    name: "Jalón al pecho agarre neutro",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Tirón vertical con agarre neutro (palmas enfrentadas): dorsal y bíceps con patrón cómodo para el hombro; base de ancho de espalda.",
    tips: [
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
      "Manijas verticales / agarre neutro; lleva al pecho alto con pecho arriba y hombros abajo.",
      "No te balancees hacia atrás: el movimiento es de espalda, no de impulso.",
      "Si solo sientes bíceps, reduce peso y piensa en “codos al bolsillo”.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=kVB6SlEyjQM",
  },
  {
    id: "pull-2",
    name: "Remo en Smith agarre prono",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Remo inclinado en máquina Smith con agarre prono (palmas abajo): espalda media, dorsales y grosor con trayectoria guiada.",
    tips: [
      "Barra a altura de muslo; pies firmes y bisagra de cadera con espalda neutra (~45°).",
      "Agarre prono un poco más ancho que los hombros; tira la barra hacia el ombligo/abdomen bajo.",
      "Codos atrás sin balancear el tronco; baja con control y no redondees la lumbar.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=7PhvyukQ4Sw",
  },
  {
    id: "pull-3",
    name: "Remo en polea baja con agarre en V",
    sets: 3,
    reps: "8-10",
    rest: "1.5-2 min",
    description:
      "Remo sentado en polea baja con mango en V (agarre neutro cerrado / tipo diamante): dorsal y espalda media con buen apriete.",
    tips: [
      "Pies en la plataforma; rodillas ligeramente flexionadas; torso erguido y pecho alto.",
      "Agarre en V (palmas enfrentadas); tira hacia el abdomen bajo con codos cerca del torso.",
      "Aprieta escápulas al final; vuelve sin redondear hombros ni balancear el tronco.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74",
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
    name: "Jalón al pecho agarre neutro",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Tirón vertical con agarre neutro (palmas enfrentadas): dorsal y bíceps con patrón cómodo para el hombro; base de ancho de espalda.",
    tips: [
      "Antes de las series efectivas, haz 1–2 series de calentamiento con ~50–70% del peso de trabajo.",
      "Manijas verticales / agarre neutro; lleva al pecho alto con pecho arriba y hombros abajo.",
      "No te balancees hacia atrás: el movimiento es de espalda, no de impulso.",
      "Si solo sientes bíceps, reduce peso y piensa en “codos al bolsillo”.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=kVB6SlEyjQM",
  },
  {
    id: "upper-2",
    name: "Press pecho alto en máquina",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press inclinado guiado para pecho superior (clavicular) con trayectoria estable.",
    tips: [
      "Ajusta el asiento para que las manijas queden a la altura del pecho alto.",
      "Escápulas pegadas al respaldo; no dejes que los hombros se adelanten.",
      "Empuja con control; últimas reps duras sin rebotar ni acortar el rango.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=whaV86_J6HY",
  },
  {
    id: "upper-3",
    name: "Remo en Smith agarre prono",
    sets: 4,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Remo inclinado en máquina Smith con agarre prono (palmas abajo): espalda media, dorsales y grosor con trayectoria guiada.",
    tips: [
      "Barra a altura de muslo; pies firmes y bisagra de cadera con espalda neutra (~45°).",
      "Agarre prono un poco más ancho que los hombros; tira la barra hacia el ombligo/abdomen bajo.",
      "Codos atrás sin balancear el tronco; baja con control y no redondees la lumbar.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=7PhvyukQ4Sw",
  },
  {
    id: "upper-4",
    name: "Press militar mancuernas",
    sets: 3,
    reps: "7-10",
    rest: "2-3 min",
    description:
      "Press de hombros sentado o de pie para deltoides; con tríceps y hombros frescos puedes empujar con buena carga.",
    tips: [
      "Core firme; no arquees la lumbar para empujar.",
      "Empuja en línea vertical; baja controlado a orejas/hombros.",
      "Últimas reps exigentes con forma limpia; no uses impulso de piernas.",
    ],
    videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
  },
  {
    id: "upper-5",
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
    id: "upper-6",
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
    id: "upper-7",
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

export const routineDays: RoutineDay[] = [
  {
    id: "day-1",
    number: 1,
    label: "Día 1",
    focus: "Legs",
    detail: "Glúteos / Isquios",
    summary:
      "Calienta 5 min y estira isquios/glúteos antes del RDL en Smith. En hip thrust prioriza el apriete arriba, no el peso. Cierra con crunch en polea y plancha.",
    exercises: legsGluteIsquio,
  },
  {
    id: "day-2",
    number: 2,
    label: "Día 2",
    focus: "Pull",
    detail: "Espalda / Bíceps",
    summary:
      "Calienta 5 min y estira dorsales/hombros antes del jalón neutro. Remo en Smith (prono) y remo en V en polea baja. En face pulls prioriza rotación externa. Curls: inclinado, predicador y martillo.",
    exercises: pullExercises,
  },
  {
    id: "day-3",
    number: 3,
    label: "Día 3",
    focus: "Legs",
    detail: "Cuádriceps / Fuerza",
    summary:
      "Calienta 5 min y movilidad de tobillo/cadera antes de la sentadilla en Smith. No bloquees las rodillas en prensa ni extensiones. Cierra con crunch en polea y plancha.",
    exercises: legsCuadFuerza,
  },
  {
    id: "day-4",
    number: 4,
    label: "Día 4",
    focus: "Push",
    detail: "Pecho / Tríceps / Hombros",
    summary:
      "Calienta 5 min y estira pecho/hombros antes del press. Militar tras pecho (hombros frescos); laterales después; tríceps al final con codos fijos.",
    exercises: pushExercises,
  },
  {
    id: "day-5",
    number: 5,
    label: "Día 5",
    focus: "Legs",
    detail: "Completo / Volumen",
    summary:
      "Calienta 5 min y movilidad de cadera/cuádriceps antes de la sentadilla en Smith. Pierna completa: RDL en Smith y búlgaras; cierra con crunch en polea y plancha.",
    exercises: legsCompletoVolumen,
  },
  {
    id: "day-6",
    number: 6,
    label: "Día 6",
    focus: "Upper",
    detail: "Tren superior",
    summary:
      "Calienta 5 min y estira espalda/pecho/hombros. Orden: jalón neutro → pecho alto → remo Smith → militar → face pulls → tríceps soga → curl martillo.",
    exercises: upperBodyExercises,
  },
];
