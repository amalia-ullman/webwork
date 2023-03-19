import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';

const Model = () => {
    const ufofbx = useLoader(FBXLoader, "./ufo/Spaceship_baked.fbx");
    ufofbx.position.y = 0
    ufofbx.rotation.x = 0
    ufofbx.rotation.z = 0
    return <primitive object={ufofbx} scale={0.008} />;

}

function Ufo() {
  return (
    <div>
    <Canvas frameloop="demand" className='!w-[100vw] !h-[100vh] hover:cursor-pointer'>
        <ambientLight intensity={.5} />
        <Suspense fallback={null}>
            <OrbitControls enableZoom={true} enablePan={true} autoRotate={true} autoRotateSpeed={0.2}/>
            <Model />
        </Suspense>
    </Canvas>
    </div>
  )
}

export default Ufo