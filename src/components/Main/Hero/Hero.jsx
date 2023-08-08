import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';

function Hero() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 30 }}>
      <Experience />
    </Canvas>
  );
}

export default Hero;
