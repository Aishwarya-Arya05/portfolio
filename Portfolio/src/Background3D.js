import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useTheme } from "./ThemeContext";

export default function Background3D() {
  const { theme } = useTheme();

  if (theme === "light") {
    return (
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          background:
            "linear-gradient(135deg, #e0f2fe 0%, #ffedd5 40%, #fce7f3 100%)",
        }}
      >
        {/* Subtle floating orbs for light mode */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(20,184,166,0.12), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(244,63,94,0.10), transparent 70%)",
            filter: "blur(80px)",
            borderRadius: "50%",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars
          radius={300}
          depth={50}
          count={7000}
          factor={5}
          saturation={1}
          fade
          speed={1.5}
        />
        <Sparkles
          count={150}
          scale={14}
          size={6}
          speed={0.6}
          opacity={0.6}
          color="#2dd4bf"
        />
        <Sparkles
          count={100}
          scale={14}
          size={4}
          speed={0.4}
          opacity={0.4}
          color="#fb7185"
        />
      </Canvas>
    </div>
  );
}
