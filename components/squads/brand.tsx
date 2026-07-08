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
      STACKS
    </span>
  );
}

export function PixelMesh({ className = "" }: { className?: string }) {
  return (
    <span
      className={`text-current ${className}`}
      style={{ fontFamily: "var(--font-pixel)", fontWeight: 600 }}
    >
      Mesh
    </span>
  );
}

export function MeridianGlyph({ size = 25 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={(size * 22) / 25}
      viewBox="0 0 25 22"
      fill="none"
      aria-hidden
    >
      <path d="M2 20 L8 5 L12.5 12.5 L17 3 L23 20 Z" fill="currentColor" />
    </svg>
  );
}

export function FluxGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 9 L13 5 L19 13 L11 19 Z"
        stroke="currentColor"
        strokeOpacity={0.45}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <circle cx={5} cy={9} r={2.6} fill="currentColor" />
      <circle cx={13} cy={5} r={2.6} fill="currentColor" />
      <circle cx={19} cy={13} r={2.6} fill="currentColor" />
      <circle cx={11} cy={19} r={2.6} fill="currentColor" />
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
