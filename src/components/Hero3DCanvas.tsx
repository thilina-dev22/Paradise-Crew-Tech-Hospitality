import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Sri Lanka geographic coordinates
const SL_LAT = 7.87 * (Math.PI / 180);  // ~7.87° N
const SL_LON = 80.77 * (Math.PI / 180); // ~80.77° E
const GLOBE_RADIUS = 62;

// Convert lat/lon to 3D cartesian (sphere surface)
const slX = GLOBE_RADIUS * Math.cos(SL_LAT) * Math.sin(SL_LON);
const slY = GLOBE_RADIUS * Math.sin(SL_LAT);
const slZ = GLOBE_RADIUS * Math.cos(SL_LAT) * Math.cos(SL_LON);

const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Guard against zero-size container (common on mobile during first render)
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects — start rotated so Sri Lanka faces the camera
    const mainGroup = new THREE.Group();
    mainGroup.rotation.y = -SL_LON; // Bring Sri Lanka to face +Z (camera)
    scene.add(mainGroup);

    // 1. Central Wireframe Globe
    const sphereGeometry = new THREE.IcosahedronGeometry(60, 3);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const globe = new THREE.Mesh(sphereGeometry, sphereMaterial);
    mainGroup.add(globe);

    // 2. Inner Glowing Core
    const innerGeometry = new THREE.IcosahedronGeometry(45, 2);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerCore);

    // 3. Floating Connection Nodes
    const nodesGroup = new THREE.Group();
    const nodeCount = 18;
    const nodeGeom = new THREE.SphereGeometry(2, 16, 16);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const x = 62 * Math.cos(theta) * Math.sin(phi);
      const y = 62 * Math.sin(theta) * Math.sin(phi);
      const z = 62 * Math.cos(phi);
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      node.position.set(x, y, z);
      nodesGroup.add(node);
    }
    mainGroup.add(nodesGroup);

    // 4. Orbital Ring 1
    const ringGeom1 = new THREE.TorusGeometry(85, 0.6, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    mainGroup.add(ring1);

    // 5. Orbital Ring 2 (Tropical Gold accent)
    const ringGeom2 = new THREE.TorusGeometry(105, 0.4, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xd97706,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 6. Background Particle Dust
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 350;
      positions[i + 1] = (Math.random() - 0.5) * 350;
      positions[i + 2] = (Math.random() - 0.5) * 350;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 1.8,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ─── 7. Sri Lanka Highlight ───────────────────────────────────────────
    const sriLankaGroup = new THREE.Group();
    mainGroup.add(sriLankaGroup);

    // a) Core dot — bright amber/gold
    const slDotGeom = new THREE.SphereGeometry(3.5, 16, 16);
    const slDotMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const slDot = new THREE.Mesh(slDotGeom, slDotMat);
    slDot.position.set(slX, slY, slZ);
    sriLankaGroup.add(slDot);

    // b) Outer glow sphere — semi-transparent amber halo
    const slGlowGeom = new THREE.SphereGeometry(7, 16, 16);
    const slGlowMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.25,
    });
    const slGlow = new THREE.Mesh(slGlowGeom, slGlowMat);
    slGlow.position.set(slX, slY, slZ);
    sriLankaGroup.add(slGlow);

    // c) Pulsing ring flat on sphere surface
    const slRingGeom = new THREE.TorusGeometry(8, 0.6, 8, 48);
    const slRingMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.85,
    });
    const slRing = new THREE.Mesh(slRingGeom, slRingMat);
    slRing.position.set(slX, slY, slZ);
    // Orient ring perpendicular to the sphere surface (normal points outward)
    slRing.lookAt(slX * 2, slY * 2, slZ * 2);
    sriLankaGroup.add(slRing);

    // d) Second expanding ring for pulse effect (larger, more transparent)
    const slRing2Geom = new THREE.TorusGeometry(12, 0.4, 8, 48);
    const slRing2Mat = new THREE.MeshBasicMaterial({
      color: 0xfcd34d,
      transparent: true,
      opacity: 0.4,
    });
    const slRing2 = new THREE.Mesh(slRing2Geom, slRing2Mat);
    slRing2.position.set(slX, slY, slZ);
    slRing2.lookAt(slX * 2, slY * 2, slZ * 2);
    sriLankaGroup.add(slRing2);

    // e) Pin spike — line from sphere surface outward
    const outDir = new THREE.Vector3(slX, slY, slZ).normalize();
    const spikeStart = new THREE.Vector3(slX, slY, slZ);
    const spikeEnd = outDir.clone().multiplyScalar(GLOBE_RADIUS + 18);
    const spikePts = [spikeStart, spikeEnd];
    const spikeGeom = new THREE.BufferGeometry().setFromPoints(spikePts);
    const spikeMat = new THREE.LineBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.9,
    });
    const spike = new THREE.Line(spikeGeom, spikeMat);
    sriLankaGroup.add(spike);

    // f) Pin tip dot at the top of the spike
    const tipGeom = new THREE.SphereGeometry(2.5, 12, 12);
    const tipMat = new THREE.MeshBasicMaterial({ color: 0xfde68a });
    const tip = new THREE.Mesh(tipGeom, tipMat);
    tip.position.copy(spikeEnd);
    sriLankaGroup.add(tip);
    // ─────────────────────────────────────────────────────────────────────

    // Mouse / Touch Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const w = container.clientWidth || width;
      const h = container.clientHeight || height;
      mouseX = (x / w - 0.5) * 2;
      mouseY = (y / h - 0.5) * 2;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 0) return;
      const touch = event.touches[0];
      const rect = container.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const w = container.clientWidth || width;
      const h = container.clientHeight || height;
      mouseX = (x / w - 0.5) * 2;
      mouseY = (y / h - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Animation Loop — skip animation if user prefers reduced motion
    let animationFrameId: number;

    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        mainGroup.rotation.y += 0.005;
        mainGroup.rotation.x = targetY * 0.3;
        mainGroup.rotation.z = targetX * 0.2;

        innerCore.rotation.y -= 0.008;
        ring1.rotation.z += 0.003;
        ring2.rotation.z -= 0.004;

        particles.rotation.y += 0.0008;

        // Pulse Sri Lanka rings
        const t = Date.now() * 0.002;
        const pulse = 1 + 0.25 * Math.sin(t * 2.5);
        slRing.scale.set(pulse, pulse, pulse);
        slRingMat.opacity = 0.6 + 0.35 * Math.abs(Math.sin(t * 2.5));

        const pulse2 = 1 + 0.4 * Math.sin(t * 2.5 + Math.PI);
        slRing2.scale.set(pulse2, pulse2, pulse2);
        slRing2Mat.opacity = 0.15 + 0.3 * Math.abs(Math.sin(t * 2.5 + Math.PI));

        // Pulse the glow halo
        slGlowMat.opacity = 0.1 + 0.2 * Math.abs(Math.sin(t * 2));

        renderer.render(scene, camera);
      };
      animate();
    }

    // Use ResizeObserver for accurate resize detection
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newW = container.clientWidth || 400;
      const newH = container.clientHeight || 400;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
      }
    });
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[260px] lg:h-[300px] relative cursor-grab active:cursor-grabbing"
    />
  );
};

export default Hero3DCanvas;
