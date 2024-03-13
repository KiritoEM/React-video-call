/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useEffect } from "react";
import * as THREE from "three";

const ThreeDScene = () => {
  useEffect(() => {
    let scene;
    let camera;
    let renderer;
    let starGeometry;
    let stars;
    const container = document.querySelector(".space-warp");

    // Création de la scène
    scene = new THREE.Scene();

    // Création de la caméra
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    //positions de la camera
    camera.position.z = 10;
    camera.position.x = Math.PI / 2;

    // Création du rendu
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100vh";
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.zIndex = "5";
    renderer.domElement.style.top = "0";
    container?.appendChild(renderer.domElement);

    // Création de la géométrie des étoiles
    starGeometry = new THREE.BufferGeometry();
    const positions = [];
    for (let i = 0; i < 7000; i++) {
      positions.push(
        Math.random() * 650 - 300,
        Math.random() * 650 - 300,
        Math.random() * 650 - 300
      );
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    // Chargement de la texture de l'étoile
    const sprite = new THREE.TextureLoader().load("/star.png");
    const starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.8,
      map: sprite,
    });

    // Création de l'objet étoile
    stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation de la scène
    const animate = () => {
      const positionsAttribute = starGeometry.getAttribute("position");
      for (let i = 0; i < positionsAttribute.count; i++) {
        const x = positionsAttribute.getX(i);
        const y = positionsAttribute.getY(i);
        const z = positionsAttribute.getZ(i);
        if (y < -200) {
          positionsAttribute.setZ(i, 200);
        } else {
          positionsAttribute.setY(i, y - 0.02);
        }
      }
      positionsAttribute.needsUpdate = true;

      stars.rotation.y += 0.002;
      stars.rotation.x = -1.5;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Nettoyage des ressources
    return () => {
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []);

  return null;
};

export default ThreeDScene;
