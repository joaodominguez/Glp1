import type { SVGProps } from "react";

/**
 * Stylized weekly injection pen — KwikPen-class silhouette.
 * Generic geometric illustration: no brand wordmarks or logos on the device.
 */
export function HeroPen({
  className,
  title = "",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      viewBox="0 0 140 380"
      role="img"
      className={className}
      fill="none"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id="hero-pen-body" x1="40" y1="60" x2="100" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--pen-mid)" />
          <stop offset="55%" stopColor="var(--pen-body)" />
          <stop offset="100%" stopColor="var(--pen-deep)" />
        </linearGradient>
        <linearGradient id="hero-pen-metal" x1="50" y1="40" x2="90" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--pen-metal-hi)" />
          <stop offset="100%" stopColor="var(--pen-metal)" />
        </linearGradient>
        <linearGradient id="hero-pen-sheen-grad" x1="48" y1="50" x2="58" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--pen-sheen)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--pen-sheen)" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse
        className="hero-pen-shadow"
        cx="70"
        cy="366"
        rx="34"
        ry="7"
        fill="var(--pen-shadow)"
      />

      {/* Needle tip / cap */}
      <path
        d="M56 332c0 3 3 12 14 12s14-9 14-12v-16H56v16Z"
        fill="var(--pen-cap)"
      />
      <rect x="62" y="302" width="16" height="16" rx="3" fill="var(--pen-metal)" />

      {/* Main barrel */}
      <rect
        x="44"
        y="168"
        width="52"
        height="140"
        rx="12"
        fill="url(#hero-pen-body)"
      />

      {/* Accent band */}
      <rect x="44" y="252" width="52" height="16" fill="var(--pen-band)" />
      <rect x="44" y="252" width="52" height="2" fill="var(--pen-sheen)" opacity="0.25" />

      {/* Label panel */}
      <rect
        x="54"
        y="188"
        width="32"
        height="48"
        rx="5"
        fill="var(--pen-label)"
      />
      <rect x="58" y="198" width="24" height="5" rx="2" fill="var(--pen-label-ink)" opacity="0.5" />
      <rect x="58" y="210" width="16" height="4" rx="2" fill="var(--pen-label-ink)" opacity="0.28" />
      <rect x="58" y="220" width="20" height="4" rx="2" fill="var(--pen-label-ink)" opacity="0.2" />

      {/* Mid collar */}
      <rect x="42" y="152" width="56" height="22" rx="7" fill="url(#hero-pen-metal)" />

      {/* Dose dial */}
      <rect x="48" y="68" width="44" height="90" rx="10" fill="var(--pen-dial)" />
      <rect
        x="56"
        y="92"
        width="28"
        height="32"
        rx="4"
        fill="var(--pen-dose)"
        stroke="var(--pen-dose-rim)"
        strokeWidth="1.5"
      />
      {/* Dose mark — geometric, not branded text */}
      <circle cx="70" cy="108" r="5" fill="var(--pen-dose-mark)" />

      {/* Grip rings */}
      <path
        d="M52 138h36M52 144h36M52 150h36"
        stroke="var(--pen-grip)"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Side clip */}
      <path
        d="M92 84c10 3 14 12 14 24v52c0 5-2.5 7-6 7h-4V90c0-4 0-7-4-6Z"
        fill="var(--pen-clip)"
      />

      {/* Injection button */}
      <rect x="54" y="44" width="32" height="30" rx="9" fill="var(--pen-button)" />
      <rect x="60" y="30" width="20" height="20" rx="6" fill="var(--pen-plunger)" />

      {/* Specular sheen */}
      <path
        d="M56 52c-2 10-3 48 0 130 0.6 20 1.2 70 1.5 110"
        stroke="url(#hero-pen-sheen-grad)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
