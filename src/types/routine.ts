export type TrainingDayId =
  | "day-1"
  | "day-2"
  | "day-3"
  | "day-4"
  | "day-5"
  | "day-6";

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: string;
  /** Rango de descanso, p. ej. "90-120s" o "120-180s". */
  rest: string;
  /** Qué trabaja el ejercicio y para qué sirve. */
  description: string;
  /** Tips de técnica y elección de carga (2–3). */
  tips: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface RoutineDay {
  id: TrainingDayId;
  number: number;
  label: string;
  focus: string;
  detail: string;
  /** Tip o recomendación corta para la sesión (calentamiento, técnica, etc.). */
  summary?: string;
  exercises: Exercise[];
}
