import { Box } from "@mui/material";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = 
  `
    void main() {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    }
  `

const fragmentShader = 
  `
    void main() {
      gl_FragColor = vec4(0.80, 0.53, 0.96, 1.0);
    }
  `

const CustomGeometryParticles = (props) => {
  const { count, shader } = props;

  // This reference gives us direct access to our points
  const points = useRef();

  // Generate our positions attributes array
  const {positions, indices} = useMemo(() => {
    const positions = [];
    const indices = [];

    let offset = 0;
    
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++){
        let x = ((i%count - (count/2)) / count) * 5;
        let y = ((j%count - (count/2)) / count) * 5;
        let z = (Math.random() / count) * 2;
        positions.push(x, y, z);
        offset = offset + 1;
      }
    }

    for (let y = 0; y < count - 1; y++) {
      for (let x = 0; x < count - 1; x++) {
        const a = x + y * count;
        const b = x + (y + 1) * count;
        const c = x + 1 + y * count;
        const d = x + 1 + (y + 1) * count;

        // Triangle 1
        indices.push(a, b, c);
        // Triangle 2
        indices.push(c, b, d);
      }
    }
    
    return {
      positions: new Float32Array(positions),
      indices: new Uint16Array(indices),
    };
  }, [count]);

  const uniforms = useMemo(() => ({

  }), [])

  // useFrame((state) => {
  //   const { clock } = state;

  //   points.current.material.uniforms.uTime.value = clock.elapsedTime;
  // });

  return (
    <>
    <mesh ref={points}   onPointerMove={(e) => console.log(e)}>
      <bufferGeometry onUpdate={(geo) => geo.computeVertexNormals()}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={indices}
          count={indices.length}
          itemSize={1}
        />
      </bufferGeometry>
      {/* <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        /> */}
        <meshStandardMaterial color="black" flatShading={true} roughness={0.5}/>
    </mesh>

    <mesh ref={points}>
      <bufferGeometry onUpdate={(geo) => geo.computeVertexNormals()}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={indices}
          count={indices.length}
          itemSize={1}
        />
      </bufferGeometry>
      {/* <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        /> */}
        <meshStandardMaterial color="white" wireframe/>
    </mesh>
    </>
  );

  
};

const Scene = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 2.0] }}>
      <directionalLight position={[1.0,1.0,2.0]} intensity={2}/>
      <CustomGeometryParticles count={30}/>
      <OrbitControls/>
    </Canvas>
  );
};


export default Scene;

export function Particles (){
  return(
    <Box sx={{height:"140vh"}}>
      <Scene/>
    </Box>
  );
}
