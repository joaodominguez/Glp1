export function normalizeSearch(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function tokenizeSearch(value: string): string[] {
  return normalizeSearch(value).split(/\s+/).filter(Boolean);
}

export function matchesQuery(query: string, ...fields: Array<string | undefined>): boolean {
  return searchScore(query, fields.filter((field): field is string => Boolean(field))) > 0;
}

/** Higher scores prefer matches in earlier fields (title before body). All tokens must match. */
export function searchScore(query: string, fields: string[]): number {
  const tokens = tokenizeSearch(query);
  if (tokens.length === 0) return 1;

  let total = 0;
  for (const token of tokens) {
    let tokenBest = 0;
    fields.forEach((field, index) => {
      const haystack = normalizeSearch(field);
      if (!haystack.includes(token)) return;
      const weight = Math.max(1, (fields.length - index) * 2);
      const prefixBonus = haystack.startsWith(token) ? 3 : 0;
      const wordStartBonus = haystack
        .split(/\s+/)
        .some((word) => word.startsWith(token))
        ? 2
        : 0;
      tokenBest = Math.max(tokenBest, weight + prefixBonus + wordStartBonus);
    });
    if (tokenBest === 0) return 0;
    total += tokenBest;
  }
  return total;
}
