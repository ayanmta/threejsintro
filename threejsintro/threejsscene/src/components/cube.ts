import {
  BoxBufferGeometry,
  BoxGeometry,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
} from "three";

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(1, 2, 1);
  const material = new LineBasicMaterial({ color: "red" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
