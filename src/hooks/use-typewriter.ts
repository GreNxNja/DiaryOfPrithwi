import { useEffect, useState } from "react";

export interface TypewriterSegment {
  text: string;
  className?: string;
}

interface UseTypewriterOptions {
  speed?: number;
  startDelay?: number;
  active?: boolean;
}

export const useTypewriter = (
  segments: TypewriterSegment[],
  { speed = 32, startDelay = 0, active = true }: UseTypewriterOptions = {}
) => {
  const fullLength = segments.reduce((n, s) => n + s.text.length, 0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    let tickTimer: number;

    const startTimer = window.setTimeout(() => {
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i++;
        setCount(i);
        if (i >= fullLength) {
          setDone(true);
          return;
        }
        tickTimer = window.setTimeout(tick, speed);
      };
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      window.clearTimeout(tickTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, fullLength, speed, startDelay]);

  let remaining = count;
  const revealed = segments.map((s) => {
    const take = Math.max(0, Math.min(s.text.length, remaining));
    remaining -= take;
    return { text: s.text.slice(0, take), className: s.className };
  });

  return { revealed, done };
};
