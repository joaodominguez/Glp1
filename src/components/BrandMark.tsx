import type { SVGProps } from "react";

/** Hybrid of logo 1 (teal G mark) and logo 2 (minimal accent stroke). */
export function BrandMark({
  className,
  title = "Guia GLP-1",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      className={className}
      {...props}
    >
      <title>{title}</title>
      <rect width="64" height="64" rx="16" fill="currentColor" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fill="var(--brand-on-mark)"
        fontSize="30"
        fontWeight="700"
        fontFamily="var(--font-display), system-ui, sans-serif"
        letterSpacing="-0.04em"
      >
        G
      </text>
      <path
        d="M16.5 46c8.2-2.4 14.8-8.2 18-15.5"
        fill="none"
        stroke="var(--brand-accent-on-mark)"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
