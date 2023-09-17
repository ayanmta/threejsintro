import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, //fov
    1,
    0.2,
    100
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera };
