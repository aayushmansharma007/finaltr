import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SimpleThree = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    try {
      // Create the simplest possible Three.js scene
      const scene = new THREE.Scene();
      
      // Use window.innerWidth/Height for camera aspect ratio
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      
      // Create renderer with error handling
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true });
      } catch (e) {
        console.error("WebGL renderer creation failed:", e);
        return;
      }
      
      // Set renderer size to match window
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0.5);
      
      // Add renderer to DOM
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
      } else {
        return;
      }
      
      // Create a simple cube
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      
      // Position camera
      camera.position.z = 5;
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Animation function
      const animate = () => {
        const animationId = requestAnimationFrame(animate);
        
        // Store animation ID for cleanup
        if (mountRef.current) {
          mountRef.current.dataset.animationId = animationId;
        }
        
        // Rotate cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        
        // Render scene
        renderer.render(scene, camera);
      };
      
      // Start animation
      animate();
      
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        
        // Cancel animation frame
        if (mountRef.current && mountRef.current.dataset.animationId) {
          cancelAnimationFrame(parseInt(mountRef.current.dataset.animationId));
        }
        
        // Remove renderer from DOM
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        
        // Dispose of Three.js resources
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    } catch (error) {
      console.error("Error in Three.js setup:", error);
    }
  }, []);
  
  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }} />;
};

export default SimpleThree;
