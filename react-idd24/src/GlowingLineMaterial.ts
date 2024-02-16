// GlowingLineMaterial.ts
import { extend } from '@react-three/fiber';

import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

const GlowingLineMaterial = shaderMaterial(
  // Uniforms
  {
    color: new THREE.Color(0x00ff00), // 发光颜色
    glowIntensity: 1.0, // 发光强度
  },
  // Vertex Shader
  `void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,
  // Fragment Shader
  `uniform vec3 color;
   uniform float glowIntensity;
   void main() {
     gl_FragColor = vec4(color * glowIntensity, 1.0);
   }`
);

extend({ GlowingLineMaterial });
