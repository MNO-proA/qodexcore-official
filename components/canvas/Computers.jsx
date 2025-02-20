"use client";
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "@/components/Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Gentle floating animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      if (hovered) {
        modelRef.current.rotation.y += 0.01;
      } else {
        // Smoothly return to original rotation
        modelRef.current.rotation.y *= 0.95;
      }
    }
  });

  return (
    <mesh
      ref={modelRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main hemisphere light for ambient illumination */}
      <hemisphereLight 
        intensity={0.5} 
        groundColor="black" 
        skyColor="#ffffff"
      />

      {/* Key light - main illumination */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.25}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Fill light - reduces harsh shadows */}
      <spotLight
        position={[20, 50, -10]}
        angle={0.25}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Rim light - highlights edges */}
      <pointLight 
        position={[10, 5, -10]}
        intensity={0.5} 
        color="#ffffff"
      />

      {/* Ambient light - ensures no part is completely dark */}
      <ambientLight intensity={0.3} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
