import { useState } from 'react';
import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Text,
  useCursor,
  useTexture,
} from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';
import { Avatar } from './Avatar';
import { Iam } from './Iam';

export const Experience = () => {
  //   const [show, setShow] = useState(false);
  //   const [hovered, setHovered] = useState(true);
  //   useCursor(hovered);
  //   const map = useTexture('textures/surreal.jpg');

  //   const { animation } = useControls({
  //     animation: {
  //       value: 'Standing',
  //       options: ['Standing', 'Greeting', 'Dancing'],
  //     },
  //   });

  return (
    <>
      <OrbitControls autoRotate={false} />
      <Text
        color="#fff"
        fontSize={0.1}
        position={[0, 1.3, 0.005]}
        anchorY={'top'}
      >
        double click to enter the world
      </Text>
      <Iam />
      {/* <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <RoundedBox
        args={[2, 3, 0.2]}
        onDoubleClick={() => setShow(!show)}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <planeGeometry args={[2, 3]} />
        <MeshPortalMaterial side={THREE.DoubleSide} blend={show ? 1 : 0}>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <Avatar
            scale={0.8}
            position-y={-1}
            hovered={hovered}
            animation={animation}
          />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox> */}
    </>
  );
};
