type Props = {
  className?: string;
  tone?: "teal" | "white";
  flip?: boolean;
};

/**
 * Suptilni brend motiv — orbite (linije), lopte na orbiti i sjaj/zvezdica.
 * Roditeljski element mora biti `relative overflow-hidden`.
 */
export default function OrbitDecor({ className = "", tone = "teal", flip = false }: Props) {
  const ring = tone === "white" ? "#ffffff" : "#008cb2";
  const ballA = tone === "white" ? "#ffffff" : "#f9a11b";
  const ballB = tone === "white" ? "#ffffff" : "#008cb2";
  const spark = tone === "white" ? "#ffffff" : "#f9a11b";
  const ringOp = tone === "white" ? 0.16 : 0.1;
  const ballOp = tone === "white" ? 0.45 : 0.4;

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
        <g stroke={ring} strokeOpacity={ringOp}>
          <ellipse cx="200" cy="200" rx="190" ry="74" transform="rotate(-22 200 200)" strokeWidth="1.5" />
          <ellipse cx="200" cy="200" rx="150" ry="150" strokeWidth="1.5" strokeDasharray="2 10" />
          <circle cx="200" cy="200" r="96" strokeWidth="1.5" />
        </g>
        {/* lopte na orbiti */}
        <circle cx="330" cy="125" r="7" fill={ballA} opacity={ballOp} />
        <circle cx="110" cy="167" r="5" fill={ballB} opacity={ballOp - 0.05} />
        {/* sjaj */}
        <g transform="translate(295.2 133.2) scale(1.4)" className="animate-sparkle">
          <path
            d="M12 0C12.9 6.6 17.4 11.1 24 12 17.4 12.9 12.9 17.4 12 24 11.1 17.4 6.6 12.9 0 12 6.6 11.1 11.1 6.6 12 0Z"
            fill={spark}
            opacity={tone === "white" ? 0.6 : 0.5}
          />
        </g>
      </svg>
    </div>
  );
}
