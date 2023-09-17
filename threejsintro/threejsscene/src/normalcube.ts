import * as THREE from "three";

export const normalcube = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerWidth);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 2, 1);
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  camera.position.set(0, 0, 10);
  camera.lookAt(0, 0, 0);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
};
