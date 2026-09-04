"use client";

import { useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn("inline-flex will-change-transform", className)}
      onPointerMove={(event) => {
        if (reduce) return;
        const node = ref.current;
        if (!node) return;
        const box = node.getBoundingClientRect();
        const x = event.clientX - box.left - box.width / 2;
        const y = event.clientY - box.top - box.height / 2;
        node.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      }}
      onPointerLeave={() => {
        const node = ref.current;
        if (!node) return;
        node.style.transform = "translate3d(0, 0, 0)";
      }}
    >
      {children}
    </div>
  );
}
