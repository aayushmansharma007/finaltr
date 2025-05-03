import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimation = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Basic scene setup with error handling
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);
      
      // Simple geometry
      const geometry = new THREE.SphereGeometry(10, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x6366f1,
        wireframe: true 
      });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      
      camera.position.z = 30;
      
      // Simple animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (mountRef.current) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      console.error("Three.js initialization error:", error);
      // Fallback content if Three.js fails
      if (mountRef.current) {
        mountRef.current.innerHTML = '<div style="color: white; padding: 20px;">3D rendering failed to initialize. Please check your browser compatibility.</div>';
      }
    }
  }, []);
  
  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ThreeAnimation;
