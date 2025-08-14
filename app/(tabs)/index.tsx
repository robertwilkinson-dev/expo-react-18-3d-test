import { StyleSheet } from 'react-native';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as THREE from 'three';

function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!);

  // rotate a little every frame
  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.6;
    meshRef.current.rotation.y += delta * 0.8;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111" }}>
      <Canvas
        style={{ flex: 1 }}
        onCreated={({ gl }) => {
          // optional: tweak GL
          gl.setClearColor("#111");
        }}
      >
        {/* some basic lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        {/* the cube */}
        <RotatingBox />
      </Canvas>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
