import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = (): JSX.Element => {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(sceneRef.current);
  }, []);

  return <div ref={sceneRef} />;
};

export default ThreeScene;
