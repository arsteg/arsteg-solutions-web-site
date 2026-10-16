"use client";

import { Canvas, extend } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { TextureLoader } from "three";
import { Suspense, useEffect } from "react";

extend({ TextureLoader });

interface Canvas3DProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  shadows?: boolean;
  cameraPosition?: [number, number, number];
  fov?: number;
  orthographic?: boolean;
}

export function Canvas3D({
  children,
  className = "",
  style,
  shadows = false,
  cameraPosition = [0, 0, 5],
  fov = 50,
  orthographic = false,
}: Canvas3DProps) {
  return (
    <div className={className} style={{ width: "100%", height: "100%", ...style }}>
      <Canvas
        shadows={shadows}
        camera={{
          position: cameraPosition,
          fov,
          near: 0.1,
          far: 1000,
        }}
        orthographic={orthographic}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}

interface HtmlOverlayProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function HtmlOverlay({ children, className = "", style }: HtmlOverlayProps) {
  return (
    <Html
      transform
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        ...style,
      }}
      className={className}
    >
      {children}
    </Html>
  );
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return reduced;
}

import { useState } from "react";
