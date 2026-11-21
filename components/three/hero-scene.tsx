'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei';
import { motion, useInView, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { AdditiveBlending, DoubleSide, MathUtils, type Group, type Mesh } from 'three';

interface HeroSceneProps {
  scrollProgress: MotionValue<number>;
  reducedMotion: boolean;
}

interface OrbitRingProps {
  radius: number;
  tube: number;
  color: string;
  rotation: [number, number, number];
  speed: number;
  reducedMotion: boolean;
}

function OrbitRing({ radius, tube, color, rotation, speed, reducedMotion }: OrbitRingProps) {
  const ringRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ringRef.current || reducedMotion) return;
    ringRef.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ringRef} rotation={rotation}>
      <torusGeometry args={[radius, tube, 12, 220]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.75}
        metalness={0.8}
        roughness={0.18}
        transparent
        opacity={0.75}
        wireframe
      />
    </mesh>
  );
}

function SceneObject({ scrollProgress, reducedMotion }: HeroSceneProps) {
  const rootRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);
  const glowRef = useRef<Mesh>(null);
  const leftOrbitRef = useRef<Mesh>(null);
  const rightOrbitRef = useRef<Mesh>(null);
  const progress = useRef(0);

  useFrame((state, delta) => {
    const targetProgress = reducedMotion ? 0 : scrollProgress.get();
    progress.current = MathUtils.damp(progress.current, targetProgress, 5, delta);
    const scroll = progress.current;
    const time = reducedMotion ? 0 : state.clock.elapsedTime;
    const pointerX = reducedMotion ? 0 : state.pointer.x;
    const pointerY = reducedMotion ? 0 : state.pointer.y;

    if (rootRef.current) {
      rootRef.current.rotation.x = pointerY * 0.55 + Math.sin(time * 0.7) * 0.2;
      rootRef.current.rotation.y = pointerX * 0.7 + time * 0.42 + scroll * 1.1;
      rootRef.current.position.y = Math.sin(time * 1.1) * 0.15 - scroll * 0.25;
    }

    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.45 + scroll * 0.9;
      coreRef.current.rotation.y = time * 0.6 + pointerX * 0.5;
      coreRef.current.rotation.z = Math.sin(time * 0.4) * 0.5 - scroll * 0.4;
      coreRef.current.scale.setScalar(1.02 - scroll * 0.12);
    }

    if (glowRef.current) {
      const pulse = reducedMotion ? 1 : 1 + Math.sin(time * 1.8) * 0.08;
      glowRef.current.scale.setScalar(pulse * (1.05 - scroll * 0.14));
    }

    if (leftOrbitRef.current) {
      leftOrbitRef.current.rotation.x = time * 0.35 + pointerY * 0.45;
      leftOrbitRef.current.rotation.y = -time * 0.52 + scroll * 0.8;
      leftOrbitRef.current.position.y = 1.3 + Math.sin(time * 0.9) * 0.16;
    }

    if (rightOrbitRef.current) {
      rightOrbitRef.current.rotation.x = -time * 0.28 + pointerY * 0.35;
      rightOrbitRef.current.rotation.y = time * 0.5 + scroll * 0.7;
      rightOrbitRef.current.position.y = -1.45 + Math.cos(time * 0.8) * 0.12;
    }

    state.camera.position.x = MathUtils.damp(state.camera.position.x, pointerX * 0.4, 4, delta);
    state.camera.position.y = MathUtils.damp(state.camera.position.y, pointerY * 0.35, 4, delta);
    state.camera.position.z = MathUtils.damp(state.camera.position.z, 6.4 + scroll * 2.1, 4, delta);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={rootRef}>
      <Stars radius={20} depth={16} count={reducedMotion ? 500 : 1200} factor={3.8} saturation={0.25} fade speed={reducedMotion ? 0 : 0.6} />
      {!reducedMotion && <Sparkles count={90} scale={[7.5, 6, 6]} size={2.4} speed={0.4} color="#dbeafe" />}

      <mesh ref={glowRef} position={[0, 0, 0.18]}>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.1}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={coreRef} position={[0, 0, 0.1]}>
        <icosahedronGeometry args={[1.15, 2]} />
        <MeshDistortMaterial
          color="#7dd3fc"
          emissive="#22d3ee"
          emissiveIntensity={0.9}
          metalness={0.9}
          roughness={0.12}
          distort={0.32}
          speed={reducedMotion ? 0 : 1.2}
        />
      </mesh>

      <mesh position={[0, 0, -0.45]} scale={0.9}>
        <icosahedronGeometry args={[1.45, 1]} />
        <meshBasicMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.36}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <OrbitRing radius={2.15} tube={0.03} color="#c4b5fd" rotation={[Math.PI / 3.2, Math.PI / 4, 0]} speed={0.14} reducedMotion={reducedMotion} />
      <OrbitRing radius={2.7} tube={0.025} color="#67e8f9" rotation={[Math.PI / 2.2, 0.2, Math.PI / 5]} speed={-0.11} reducedMotion={reducedMotion} />
      <OrbitRing radius={3.3} tube={0.02} color="#f9a8d4" rotation={[0.42, Math.PI / 2.8, Math.PI / 3]} speed={0.08} reducedMotion={reducedMotion} />

      <mesh ref={leftOrbitRef} position={[-2.1, 1.3, 0.8]}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={1.2} metalness={0.7} roughness={0.14} />
      </mesh>

      <mesh ref={rightOrbitRef} position={[2.1, -1.45, 1.1]}>
        <dodecahedronGeometry args={[0.38, 0]} />
        <meshStandardMaterial color="#f9a8d4" emissive="#ec4899" emissiveIntensity={1.1} metalness={0.72} roughness={0.18} />
      </mesh>

      <mesh position={[0, -2.4, -0.9]} rotation={[-Math.PI / 2.3, 0, 0]}>
        <ringGeometry args={[1.2, 2.9, 120]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.12} side={DoubleSide} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

export default function HeroScene({ scrollProgress, reducedMotion }: HeroSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sceneRef, { margin: '100px' });
  const ringRotation = useTransform(scrollProgress, [0, 1], [0, reducedMotion ? 0 : 62]);
  const counterRotation = useTransform(scrollProgress, [0, 1], [0, reducedMotion ? 0 : -30]);
  const orbitScale = useTransform(scrollProgress, [0, 1], [1, reducedMotion ? 1 : 0.88]);
  const orbitOpacity = useTransform(scrollProgress, [0, 0.35, 1], [0.7, 0.38, 0.08]);

  return (
    <div ref={sceneRef} className="hero-scene relative h-[390px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.14),transparent_35%),linear-gradient(180deg,rgba(2,6,23,0.96),rgba(4,6,19,1))] shadow-[0_0_100px_rgba(59,130,246,0.18)] md:h-[500px] lg:h-[560px]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] [background-size:42px_42px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_32%,rgba(3,7,18,0.65)_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px] md:h-72 md:w-72" />

      <motion.div
        aria-hidden="true"
        style={{ rotate: ringRotation, scale: orbitScale, opacity: orbitOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20"
      >
        <motion.div style={{ rotate: counterRotation }} className="absolute inset-[12%] rounded-full border border-dashed border-violet-200/25" />
        <span className="absolute left-[9%] top-[24%] h-1.5 w-1.5 rounded-full bg-cyan-100 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
        <span className="absolute bottom-[17%] right-[15%] h-1 w-1 rounded-full bg-pink-100 shadow-[0_0_18px_rgba(244,114,182,0.8)]" />
      </motion.div>

      <Canvas
        className="hero-canvas absolute inset-0"
        camera={{ position: [0, 0, 6.3], fov: 38 }}
        dpr={[1, 1.25]}
        frameloop={reducedMotion || !isInView ? 'demand' : 'always'}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_45%)]">
            <div className="h-40 w-40 rotate-45 rounded-[2rem] border border-cyan-200/50 bg-gradient-to-br from-cyan-300/20 via-violet-400/20 to-pink-300/20 shadow-[0_0_80px_rgba(103,232,249,0.25)]" />
          </div>
        }
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 4, 6]} intensity={1.7} color="#e0f2fe" />
        <pointLight position={[-4, 1, 3]} intensity={18} color="#8b5cf6" />
        <pointLight position={[3, -2, 2]} intensity={15} color="#22d3ee" />
        <pointLight position={[0, 4, -3]} intensity={10} color="#f472b6" />
        <SceneObject scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
      </Canvas>

      <div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] text-slate-400/80 md:bottom-5 md:left-6 md:right-6 md:text-[10px]">
        <span>Signal / 01</span>
        <span>Scroll to explore</span>
      </div>
    </div>
  );
}
