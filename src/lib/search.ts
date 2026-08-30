export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function matchesQuery(query: string, ...fields: Array<string | undefined>): boolean {
  const needle = normalizeSearch(query);
  if (!needle) return true;
  const haystack = normalizeSearch(fields.filter(Boolean).join(" "));
  return haystack.includes(needle);
}
