"use client";

import { useEffect, useRef } from "react";

export function SiteCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("cursor-hidden");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let scale = 1;
    let scaleTarget = 1;
    let frame = 0;
    let running = true;

    const isHot = (node: EventTarget | null) => {
      if (!(node instanceof Element)) return false;
      return Boolean(node.closest("a, button, [data-cursor], summary, label"));
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      scaleTarget = isHot(event.target) ? 1.85 : 1;
    };

    const tick = () => {
      if (!running) return;
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      scale += (scaleTarget - scale) * 0.16;
      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      dot.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("cursor-hidden");
    };
  }, []);

  return (
    <div className="site-cursor" aria-hidden>
      <div ref={ringRef} className="site-cursor-ring" />
      <div ref={dotRef} className="site-cursor-dot" />
    </div>
  );
}
