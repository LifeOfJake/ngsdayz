"use client";

// =============================================================================
// Types
// =============================================================================

export interface AppBackgroundProps {
  children: React.ReactNode;
}

// =============================================================================
// Component
// =============================================================================

export function AppBackground({
  children,
}: AppBackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08090A] text-white">

      {/* ------------------------------------------------------------------ */}
      {/* Ambient Glow                                                       */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_right,rgba(163,255,0,0.06),transparent_40%)]
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Secondary Glow                                                     */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.025),transparent_45%)]
        "
      />

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                            */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}