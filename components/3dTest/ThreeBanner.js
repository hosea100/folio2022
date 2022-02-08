import React, { Suspense } from "react";
import styled from "styled-components";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { Section } from "./section";
import { Html, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/assets/3dModel/takodachi.gltf");
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 300, 0]}>
        <mesh position={[0, 35, 0]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className="container">
            <H1>Hello</H1>
          </div>
        </Html>
      </group>
    </Section>
  );
};

const Lights = () => {
  return <ambientLight intensity={0.3} />;
};

function ThreeBanner() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}

const H1 = styled.h1`
  font-family: "Helvetica";
  font-size: 10rem;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  color: #000;
  span {
    display: block;
  }
  @media (max-width: 1440px) {
    font-size: 6rem;
  }
`;

export default ThreeBanner;
