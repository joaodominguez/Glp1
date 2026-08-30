import type { SVGProps } from "react";

/** Geometric injection-pen mark — modern, no lettermark. */
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
      {/* Pen body */}
      <rect
        x="28"
        y="12"
        width="8"
        height="28"
        rx="4"
        fill="var(--brand-on-mark)"
      />
      {/* Dose window */}
      <rect
        x="29.5"
        y="18"
        width="5"
        height="8"
        rx="1.5"
        fill="var(--brand-accent-on-mark)"
        opacity="0.9"
      />
      {/* Tip / needle housing */}
      <path
        d="M28 40h8l-2.2 6.2a2 2 0 0 1-3.6 0L28 40Z"
        fill="var(--brand-on-mark)"
      />
      <rect
        x="30.5"
        y="46.5"
        width="3"
        height="5.5"
        rx="1.5"
        fill="var(--brand-accent-on-mark)"
      />
    </svg>
  );
}
