import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { BufferGeometryUtils } from 'three/examples/jsm/Addons.js'

export function MiniAntoine(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/ThreeJS/MiniAntoine.glb')
  const { actions, names } = useAnimations(animations, group)

    useEffect(() => {
    actions[names[0]].play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="MiniMoiArmature" position={[-1.589, 2.915, 0]}>
          <skinnedMesh
            name="MiniMoiTextured"
            geometry={nodes.MiniMoiTextured.geometry}
            material={materials.Texture}
            skeleton={nodes.MiniMoiTextured.skeleton}
          />
          <primitive object={nodes.Main} />
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('/MiniAntoine.glb')



export function Cube(props) {
  const { nodes, materials } = useGLTF('/ThreeJS/Cube.glb')
  // let pos = nodes.Cube.geometry.attributes.position
  // let index = nodes.Cube.geometry.index
  // console.log(pos)
  // console.log(index)

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
      />
    </group>
  )
}

useGLTF.preload('/Cube.glb')