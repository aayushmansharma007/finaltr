import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AdvancedThree = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    let scene, camera, renderer, particles, raycaster, mouse;
    let particleSystem, particleCount, particlePositions, particleColors;
    let animationId;
    
    try {
      // Initialize scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.001);
      
      // Camera setup
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 100;
      
      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0.1);
      
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      }
      
      // Raycaster for mouse interaction
      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();
      
      // Particle system setup
      particleCount = 1500;
      const pMaterial = new THREE.PointsMaterial({
        color: 0x6366f1,
        size: 3,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: true
      });
      
      // Create particle positions and colors
      particles = new THREE.BufferGeometry();
      particlePositions = new Float32Array(particleCount * 3);
      particleColors = new Float32Array(particleCount * 3);
      
      const color = new THREE.Color();
      
      for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = (Math.random() - 0.5) * 200;
        
        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;
        
        // Create gradient colors
        const hue = 0.6 + 0.1 * Math.random(); // Blue to purple range
        const saturation = 0.7 + 0.3 * Math.random();
        const lightness = 0.5 + 0.2 * Math.random();
        
        color.setHSL(hue, saturation, lightness);
        
        particleColors[i * 3] = color.r;
        particleColors[i * 3 + 1] = color.g;
        particleColors[i * 3 + 2] = color.b;
      }
      
      particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
      
      // Update material to use vertex colors
      pMaterial.vertexColors = true;
      
      // Create the particle system
      particleSystem = new THREE.Points(particles, pMaterial);
      scene.add(particleSystem);
      
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
      
      // Mouse move event
      const onMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };
      
      window.addEventListener('mousemove', onMouseMove, false);
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize, false);
      
      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        
        // Rotate particle system
        particleSystem.rotation.x += 0.0005;
        particleSystem.rotation.y += 0.0005;
        
        // Update particles based on mouse position
        raycaster.setFromCamera(mouse, camera);
        
        // Pulse effect
        const time = Date.now() * 0.001;
        const positions = particles.attributes.position.array;
        
        for (let i = 0; i < particleCount; i++) {
          const ix = i * 3;
          const iy = i * 3 + 1;
          const iz = i * 3 + 2;
          
          // Add subtle movement
          positions[ix] += Math.sin(time + positions[iy]) * 0.01;
          positions[iy] += Math.cos(time + positions[ix]) * 0.01;
          
          // Reset particles that go too far
          if (positions[ix] > 100) positions[ix] = -100;
          if (positions[ix] < -100) positions[ix] = 100;
          if (positions[iy] > 100) positions[iy] = -100;
          if (positions[iy] < -100) positions[iy] = 100;
        }
        
        particles.attributes.position.needsUpdate = true;
        
        // Render
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Cleanup function
      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
        
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
        
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        
        // Dispose resources
        particles.dispose();
        pMaterial.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.error("Error in Three.js setup:", error);
    }
  }, []);
  
  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }} />;
};

export default AdvancedThree;