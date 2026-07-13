# Gym Routine

App frontend para anotar tu rutina de gym: 6 días de entrenamiento (Push / Pull / Legs), series, repeticiones y referencias de video/imagen vía URL.

Construido con **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS** y **shadcn/ui**.

## Características

- 6 días numerados (Día 1–6) con selector
- Detalle de ejercicios (series, reps, descanso, notas)
- Embeds de YouTube e imágenes remotas por URL
- Datos 100 % estáticos (sin base de datos ni API)
- Diseño responsive (móvil primero)

## Instalación

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cómo editar tu rutina

Toda la rutina vive en [`src/data/routine.ts`](src/data/routine.ts).

Cada día tiene:

| Campo | Descripción |
|-------|-------------|
| `id` | `day-1` … `day-6` |
| `number` | Número del día (1–6) |
| `label` | Ej. `Día 1` |
| `focus` | `Legs`, `Pull` o `Push` |
| `detail` | Ej. `Glúteos / Isquios` |
| `exercises` | Lista de ejercicios |

Cada ejercicio:

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único |
| `name` | Nombre del ejercicio |
| `sets` | Número de series |
| `reps` | Repeticiones (`"8-12"`, `"10"`, `"30s"`…) |
| `restSeconds` | Descanso entre series (opcional) |
| `notes` | Notas técnicas (opcional) |
| `imageUrl` | URL de imagen de referencia (opcional) |
| `videoUrl` | URL de YouTube (opcional) |

Tipos en [`src/types/routine.ts`](src/types/routine.ts).

## Scripts

```bash
npm run dev    # desarrollo
npm run build  # producción
npm start      # servir build
npm run lint   # ESLint
```

## Estructura

```
src/
├── app/                 # layout y página principal
├── components/
│   ├── routine/         # DaySelector, ExerciseList, ExerciseCard, MediaEmbed
│   ├── navigation/      # Header / Footer
│   └── ui/              # shadcn/ui
├── data/routine.ts      # tu rutina
├── types/routine.ts
└── lib/youtube.ts       # helper de embed YouTube
```
