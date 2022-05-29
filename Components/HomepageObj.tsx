import type { NextPage } from "next";
import { isValidMotionProp, motion } from "framer-motion";
import { chakra, Container } from "@chakra-ui/react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

const Mesh = () => {
  const globeRef = useRef<any>();
  const [texture, setTexture] = useState("Assets/earth_night.jpg");

  const textureLoader = useLoader(TextureLoader, texture);
  const normalMap = useLoader(TextureLoader, "Assets/normalmap.jpg");

  useFrame((state) => {
    setTexture(
      localStorage.getItem("chakra-ui-color-mode") == "light"
        ? "Assets/earth_night.jpg"
        : "Assets/earth_day.jpg"
    );
    globeRef.current.rotation.x += 0.001;
  });

  const changeTexture = (e: any) => {};

  useEffect(() => {
    changeTexture(null);
  }, []);

  return (
    <>
      {/* <ambientLight /> */}
      <ambientLight />
      <mesh ref={globeRef} scale={6} position={[1, 2, 3]}>
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          maxDistance={20}
          minDistance={10}
        />

        <sphereGeometry />
        <meshStandardMaterial map={textureLoader} />
      </mesh>
    </>
  );
};

const AnimeObj: NextPage = () => {
  return (
    <Container>
      <Canvas
        shadows={true}
        camera={{
          position: [-6, 7, 10],
        }}
        style={{
          width: "700px",
          height: "360px",
        }}
      >
        <Mesh />
      </Canvas>
    </Container>
  );
};

export default AnimeObj;
