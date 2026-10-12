"use client";

import { MotionConfig } from "framer-motion";

/**
 * App-wide motion settings. `reducedMotion="user"` makes every framer-motion
 * animation respect the OS "reduce motion" preference automatically.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
