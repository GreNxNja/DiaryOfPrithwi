import { Crosshair } from "lucide-react";

interface CoordinatesProps {
  value: string;
  className?: string;
}

const Coordinates = ({ value, className = "" }: CoordinatesProps) => (
  <span
    className={`inline-flex items-center gap-1.5 font-body text-[11px] font-semibold tracking-[0.14em] text-primary ${className}`}
  >
    <Crosshair className="h-3 w-3 shrink-0" />
    {value}
  </span>
);

export default Coordinates;
