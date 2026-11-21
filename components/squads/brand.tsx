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

/* Ribbon from EntrypointLabs/prydd-website public/prydd/mark.svg. */
export function PryddMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 208 214" fill="none" aria-hidden>
      <g transform="translate(104 107) scale(0.92) translate(-104 -107)">
        <g transform="translate(24 24)">
          <g transform="translate(-20 -18)">
            <path
              fill="currentColor"
              d="M 48 40 L 94 40 C 102 40 107 35 113 29 L 119 23 C 123 19 127 18 135 18 L 180 18 L 180 158 C 180 163 177 166 172 166 L 114 166 C 112 166 110 167 108 169 L 94 182 C 92 184 90 184 87 184 L 28 184 C 23 184 20 181 20 176 L 20 91 C 20 85 24 82 30 82 L 58 82 L 58 144 C 58 147 60 149 63 149 L 86 149 C 89 149 91 148 94 145 L 110 129 C 112 127 115 126 119 126 L 143 126 L 143 59 L 133 59 C 125 59 119 65 114 71 C 109 76 104 78 96 78 L 58 78 C 45 78 36 58 36 50 C 36 44 42 40 48 40 Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

/* Chamfered square ring from EntrypointLabs/openfutures packages/ui/src/logo/mark.ts. */
export function OpenFuturesMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-6 -6 112 112" fill="currentColor" aria-hidden>
      <g transform="translate(50 50) scale(0.9) translate(-50 -50)">
        <path
          fillRule="evenodd"
          d="M18.7 0L13 13L0 18.7L0 37L25 48L25 52L0 63L0 81.3L13 87L18.7 100L37 100L48 75L52 75L63 100L81.3 100L87 87L100 81.3L100 63L75 52L75 48L100 37L100 18.7L87 13L81.3 0L63 0L52 25L48 25L37 0ZM28 28L28 72L72 72L72 28Z"
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

export function ArrowRight({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
