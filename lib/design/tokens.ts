// =============================================================================
// Sentinel Design Tokens
// =============================================================================

export const COLORS = {
  background: "bg-[#08090A]",

  surface: "bg-white/[0.03]",

  surfaceHover: "hover:bg-white/[0.05]",

  border: "border-white/10",

  borderStrong: "border-white/20",

  accent: "text-lime-400",

  accentBackground: "bg-lime-400/10",

  accentBorder: "border-lime-400/20",

  muted: "text-muted-foreground",

  foreground: "text-foreground",
} as const;

export const RADIUS = {
  sm: "rounded-md",

  md: "rounded-lg",

  lg: "rounded-xl",

  xl: "rounded-2xl",
} as const;

export const SHADOWS = {
  sm: "shadow-sm",

  md: "shadow-lg",

  lg: "shadow-[0_10px_40px_rgba(0,0,0,0.35)]",

  glow: "shadow-[0_0_40px_rgba(163,255,0,0.08)]",
} as const;

export const TRANSITIONS = {
  fast: "duration-150",

  normal: "duration-200",

  slow: "duration-300",
} as const;