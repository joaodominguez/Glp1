"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

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
        trackEvent(event, { link_url: href });
      }}
    >
      {children}
    </Link>
  );
}
