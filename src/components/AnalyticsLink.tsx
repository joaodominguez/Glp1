"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = {
  href: string;
  event: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "onClick" | "children" | "className">;

/** Client link that sends a GA4 custom event on click. */
export function AnalyticsLink({
  href,
  event,
  children,
  className,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={className}
      {...rest}
      onClick={() => {
        if (typeof window === "undefined" || typeof window.gtag !== "function") {
          return;
        }
        window.gtag("event", event, {
          link_url: href,
          transport_type: "beacon",
        });
      }}
    >
      {children}
    </Link>
  );
}
