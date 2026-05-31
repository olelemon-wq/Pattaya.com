"use client";

import { useEffect, useRef, useState } from "react";

/** Eased count-up/down for displayed totals */
export function useAnimatedAmount(target: number, durationMs = 480) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef({ value: target, time: 0 });

  useEffect(() => {
    const from = display;
    const to = target;
    if (from === to) return;

    startRef.current = { value: from, time: performance.now() };

    const tick = (now: number) => {
      const elapsed = now - startRef.current.time;
      const t = Math.min(1, elapsed / durationMs);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(Math.round(from + (to - from) * eased));
      if (t < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- animate from last frame
  }, [target, durationMs]);

  return display;
}
