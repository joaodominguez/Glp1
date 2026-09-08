"use client";

type SearchChipsProps = {
  items: string[];
  onSelect: (value: string) => void;
  label?: string;
};

export function SearchChips({ items, onSelect, label = "Sugestões" }: SearchChipsProps) {
  return (
    <div className="search-chips" aria-label={label}>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className="search-chip"
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
