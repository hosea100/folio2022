import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import Level from "./Level";

export default function Room1Canvas() {
  return (
    <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [0, 0, 8] }}>
      <color attach="background" args={["transparent"]} />
      <ambientLight />
      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, -Math.PI / 4, 0]}
        polar={[0, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
      <group position-y={-0.75} dispose={null}>
        <Suspense fallback={null}>
          <Level />
        </Suspense>
      </group>
      </PresentationControls>
    </Canvas>
  );
}
