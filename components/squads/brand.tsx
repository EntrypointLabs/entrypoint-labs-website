import type { SVGProps } from "react";

export function Logomark({
  size = 24,
  ...props
}: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      {...props}
    >
      {/* Ring with 4 corner cuts via dash pattern: quarter-perimeter 16 = 14 dash + 2 gap, offset centers gaps mid-corner */}
      <rect
        x={2.5}
        y={2.5}
        width={19}
        height={19}
        rx={7}
        stroke="currentColor"
        strokeWidth={3}
        strokeDasharray="14 2"
        strokeDashoffset={4.5}
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-[500] tracking-[0.18em] text-current ${className}`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      ENTRYPOINT
    </span>
  );
}

/* Product marks reproduce each product's own vector logo (white/currentColor
   variants also shipped as files in public/logos/). Each mark's ink is scaled
   so all four read at the same optical size in an equal box (~80% coverage) —
   their native viewBoxes have very different ink-to-canvas ratios. */

export function XendMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden>
      <g transform="translate(100 100) scale(0.96)">
        <path
          d="M -95 0 C -50 -22 50 -22 95 0 C 50 22 -50 22 -95 0 Z"
          fill="currentColor"
          transform="rotate(45)"
        />
        <path
          d="M -95 0 C -50 -22 50 -22 95 0 C 50 22 -50 22 -95 0 Z"
          fill="currentColor"
          transform="rotate(-45)"
        />
      </g>
    </svg>
  );
}

export function UltrapropMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden>
      <g transform="translate(50 50) scale(0.8) translate(-50 -50)">
        <path
          d="M18 0 L38 0 L50 28 L28 28 L28 50 L0 38 L0 18 L12 12 Z M82 0 L62 0 L50 28 L72 28 L72 50 L100 38 L100 18 L88 12 Z M18 100 L38 100 L50 72 L28 72 L28 50 L0 62 L0 82 L12 88 Z M82 100 L62 100 L50 72 L72 72 L72 50 L100 62 L100 82 L88 88 Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export function CortexMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="currentColor" aria-hidden>
      <g transform="translate(60 60) scale(1.18) translate(-60 -60)">
        <circle cx={60} cy={60} r={13} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 60 60)`}>
            <rect x={51.5} y={19} width={6.5} height={25} rx={3.25} />
            <rect x={62} y={19} width={6.5} height={25} rx={3.25} />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function XLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function PontoonMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <g transform="translate(12 12) scale(1.07) translate(-12 -12)">
        <rect x={3} y={5} width={18} height={4} rx={2} fill="currentColor" />
        <rect x={6.25} y={9} width={2.5} height={3.5} fill="currentColor" fillOpacity={0.72} />
        <rect x={15.25} y={9} width={2.5} height={3.5} fill="currentColor" fillOpacity={0.72} />
        <rect x={4} y={12.5} width={7} height={4} rx={2} fill="currentColor" fillOpacity={0.72} />
        <rect x={13} y={12.5} width={7} height={4} rx={2} fill="currentColor" fillOpacity={0.72} />
        <path
          d="M3 20.25c1.5 -1.4 3 -1.4 4.5 0c1.5 1.4 3 1.4 4.5 0c1.5 -1.4 3 -1.4 4.5 0c1.5 1.4 3 1.4 4.5 0"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          opacity={0.55}
        />
      </g>
    </svg>
  );
}

export function ArrowIcon({
  size = 16,
  ...props
}: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M4 4 L12 12 M12 5.5 V12 H5.5"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="square"
      />
    </svg>
  );
}

export function ArrowLink({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute bottom-8 right-9 text-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ${className}`}
    >
      <ArrowIcon />
    </span>
  );
}
