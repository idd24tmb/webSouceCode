import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Sphere, Cone, Line, OrbitControls } from "@react-three/drei";
import { Mesh } from "three"; // 从 'three' 导入 Mesh 类型

type SceneProps = {
  onSelectObject: (id: number) => void;
  selectedObjects: Array<number>;
};

const Scene: React.FC<SceneProps> = ({ onSelectObject, selectedObjects }) => {
  // 使用 Mesh 类型的 ref
  const boxRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  const coneRef = useRef<Mesh>(null);

  // 正方体位于中间
  const positions: [number, number, number][] = [
    [0, 0, 0], // 正方体位置调整为中心
    [-2, -1, 0], // 球体位置
    [2, -1, 0], // 锥体位置
  ];

  const isSelected = (id: number) => selectedObjects.includes(id);

  // 实现物体的缓慢随机运动
  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.003;
      boxRef.current.rotation.y += 0.003;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.003;
      sphereRef.current.rotation.y += 0.003;
    }
    if (coneRef.current) {
      coneRef.current.rotation.x += 0.003;
      coneRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      <Box
        ref={boxRef}
        position={positions[0]}
        onClick={() => onSelectObject(1)}
      >
        <meshPhysicalMaterial
          attach="material"
          color={isSelected(1) ? "#CCFF00" : "white"} // 选中时亮黄绿色，未选中时白色
          transmission={isSelected(1) ? 0.99 : 0.95} // 控制透明度以实现玻璃效果
          roughness={0.5} // 增加一些粗糙度
          clearcoat={0.8} // 适当减少表面涂层的反光性
          reflectivity={0.5} // 减少反光
          clearcoatRoughness={0.5} // 增加表面涂层的粗糙度
          thickness={2} // 控制光在材质内部传播的距离
        />
      </Box>
      <Sphere
        ref={sphereRef}
        position={positions[1]}
        onClick={() => onSelectObject(2)}
      >
        <meshPhysicalMaterial
          attach="material"
          color={isSelected(2) ? "#CCFF00" : "white"} // 选中时亮黄绿色，未选中时白色
          transmission={isSelected(2) ? 0.95 : 0.95} // 控制透明度以实现玻璃效果
          roughness={0.5} // 增加一些粗糙度
          clearcoat={0.8} // 适当减少表面涂层的反光性
          reflectivity={0.5} // 减少反光
          clearcoatRoughness={0.5} // 增加表面涂层的粗糙度
          thickness={2} // 控制光在材质内部传播的距离
        />
      </Sphere>
      <Cone
        ref={coneRef}
        position={positions[2]}
        onClick={() => onSelectObject(3)}
      >
        <meshPhysicalMaterial
          attach="material"
          color={isSelected(3) ? "#CCFF00" : "white"} // 选中时亮黄绿色，未选中时白色
          transmission={isSelected(3) ? 0.95 : 0.95} // 控制透明度以实现玻璃效果
          roughness={0.5} // 增加一些粗糙度
          clearcoat={0.8} // 适当减少表面涂层的反光性
          reflectivity={0.5} // 减少反光
          clearcoatRoughness={0.5} // 增加表面涂层的粗糙度
          thickness={2} // 控制光在材质内部传播的距离
        />
      </Cone>
      {selectedObjects.length === 2 && (
        <Line
          points={[
            positions[selectedObjects[0] - 1],
            positions[selectedObjects[1] - 1],
          ]}
          color="green" // 设置线条颜色为绿色
          lineWidth={5} // 增加线宽以创建粗线效果
          // material={new THREE.LineBasicMaterial({ color: 0x00ff00 })} // Three.js材质，用于更精细的颜色控制
        />
      )}
      <OrbitControls /> {/* 确保用户可以控制视角 */}
    </>
  );
};

export default Scene;
