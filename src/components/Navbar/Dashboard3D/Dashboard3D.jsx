
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box } from '@react-three/drei';
import './Dashboard3D.css';

const BarChart = ({ data }) => {
  return (
    <group>
      {data.map((value, index) => (
        <group key={index} position={[index * 2 - 4, value / 2, 0]}>
          <Box args={[1, value, 1]}>
            <meshStandardMaterial color={`hsl(${120 - value * 5}, 70%, 50%)`} />
          </Box>
          <Text 
            position={[0, value + 0.5, 0]}
            color="white"
            fontSize={0.5}
            anchorX="center"
            anchorY="bottom"
          >
            {value}
          </Text>
          <Text 
            position={[0, -0.5, 0]}
            color="white"
            fontSize={0.4}
            anchorX="center"
            anchorY="top"
          >
            {['Jan', 'Feb', 'Mar', 'Apr', 'May'][index]}
          </Text>
        </group>
      ))}
    </group>
  );
};

const Dashboard3D = () => {
  // Sample data - could be replaced with real carbon emission data
  const emissionData = [3, 7, 5, 8, 4];
  
  return (
    <div className="dashboard-3d">
      <Canvas camera={{ position: [0, 5, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <BarChart data={emissionData} />
        <OrbitControls enablePan={false} />
        <gridHelper args={[20, 20, '#888888', '#444444']} />
      </Canvas>
    </div>
  );
};

export default Dashboard3D;
