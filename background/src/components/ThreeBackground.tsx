import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeBackground = () => {
  const [starPositions, setStarPositions] = useState<any[]>([]);

  useEffect(() => {
    const generateStarPositions = () => {
      const positions = [];
      for (let i = 0; i < 200; i++) {
        // Keep the z position constant to make the stars move only in the xy-plane
        positions.push({
          x: Math.random() * 50 - 25,
          y: Math.random() * 50 - 25,
          z: 0, // All stars are on the same plane (z = 0)
          direction: {
            x: (Math.random() - 0.5) * 0.02, // Random movement along x
            y: (Math.random() - 0.5) * 0.02, // Random movement along y
            z: 0, // No movement in z-axis
          }
        });
      }
      return positions;
    };

    setStarPositions(generateStarPositions());

    const animateStars = () => {
      setStarPositions((prevPositions) => {
        return prevPositions.map((star) => {
          let newX = star.x + star.direction.x;
          let newY = star.y + star.direction.y;

          // Check if the star is out of bounds and reverse direction if necessary
          if (newX > 25 || newX < -25) {
            star.direction.x = -star.direction.x; // Reverse direction on x-axis
            newX = star.x + star.direction.x;
          }
          if (newY > 25 || newY < -25) {
            star.direction.y = -star.direction.y; // Reverse direction on y-axis
            newY = star.y + star.direction.y;
          }

          return {
            ...star,
            x: newX,
            y: newY,
            z: 0, // Keep z position constant
          };
        });
      });
      requestAnimationFrame(animateStars);
    };

    animateStars();
  }, []);

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 30], fov: 75 }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      {starPositions.map((star, index) => (
        <mesh key={index} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[0.1, 5, 5]} />
          <meshBasicMaterial color={'white'} />
        </mesh>
      ))}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeBackground;
