export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function matchesQuery(query: string, ...fields: Array<string | undefined>): boolean {
  return searchScore(query, fields.filter((field): field is string => Boolean(field))) > 0;
}

/** Higher scores prefer matches in earlier fields (title before body). */
export function searchScore(query: string, fields: string[]): number {
  const needle = normalizeSearch(query);
  if (!needle) return 1;
  let best = 0;
  fields.forEach((field, index) => {
    const haystack = normalizeSearch(field);
    if (!haystack.includes(needle)) return;
    const weight = Math.max(1, (fields.length - index) * 2);
    const bonus = haystack.startsWith(needle) ? 2 : 0;
    best = Math.max(best, weight + bonus);
  });
  return best;
}
