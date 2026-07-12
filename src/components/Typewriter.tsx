import { Fragment, useEffect, useRef } from "react";
import { useTypewriter, type TypewriterSegment } from "@/hooks/use-typewriter";

interface TypewriterProps {
  segments: TypewriterSegment[];
  speed?: number;
  startDelay?: number;
  active?: boolean;
  onDone?: () => void;
  cursorClassName?: string;
}

const Typewriter = ({
  segments,
  speed,
  startDelay,
  active = true,
  onDone,
  cursorClassName = "",
}: TypewriterProps) => {
  const { revealed, done } = useTypewriter(segments, { speed, startDelay, active });
  const firedRef = useRef(false);

  useEffect(() => {
    if (done && !firedRef.current) {
      firedRef.current = true;
      onDone?.();
    }
  }, [done, onDone]);

  return (
    <>
      {revealed.map((seg, i) => (
        <span key={i} className={seg.className}>
          {seg.text.split("\n").map((line, j, arr) => (
            <Fragment key={j}>
              {line}
              {j < arr.length - 1 && <br />}
            </Fragment>
          ))}
        </span>
      ))}
      {active && !done && (
        <span
          aria-hidden="true"
          className={`ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.08em] animate-[typewriter-blink_0.9s_step-end_infinite] bg-primary align-middle md:w-[3px] ${cursorClassName}`}
        />
      )}
    </>
  );
};

export default Typewriter;
