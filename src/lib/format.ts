/** Versión corta para filas/listas (p. ej. "90-120s"). */
export function formatRestShort(rest?: string): string | null {
  if (!rest?.trim()) return null;
  return rest.trim();
}
