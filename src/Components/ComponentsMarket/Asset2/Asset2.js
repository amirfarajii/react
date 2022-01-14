import React, { Suspense, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import "./Asset.css";

import Model from "./Gun2";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div class="drawing" id="loading">
        <div class="loading-dot"></div>
      </div>
    </Html>
  );
}

function MyAnimatedModel() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(1);
  const { viewport } = useThree();
  useFrame(() => {
    myMesh.current.rotation.y += 0.005;
  });
  return (
    <mesh
      ref={myMesh}
      scale={(viewport.width/ 500) * (active ? 1.5 : 1)}
      onClick={(e) => setActive(!active)}
    >
      <Model />
    </mesh>
  );
}

export default function Aseet2() {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className="contain-asset">
      <Canvas
        style={{ width: width, height: "98vh" }}
        camera={{ position: [2, 0, 0] }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight />
          <MyAnimatedModel />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
      <div>
        <button className="btn">sdfvcx</button>
      </div>
    </div>
  );
}
