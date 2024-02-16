import React from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../Scene";
import styles from "./CanvasContainer.module.css";

// Props类型定义
type CanvasContainerProps = {
  selectedObjects: Array<number>;
  onSelectObject: (id: number) => void;
};

const CanvasContainer: React.FC<CanvasContainerProps> = ({
  selectedObjects,
  onSelectObject,
}) => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene
          onSelectObject={onSelectObject}
          selectedObjects={selectedObjects}
        />
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
