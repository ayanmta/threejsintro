import {
  BoxGeometry,
  Color,
  LineBasicMaterial,
  Mesh,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

export const firstScene = () => {
  // just waiting for your beautiful creations!

  const scene = new Scene();

  scene.background = new Color("skyblue");
  const fov = 45; // AKA Field of View
  const aspect = window?.innerWidth / window?.innerHeight;
  const near = 0.2; // the near clipping plane
  const far = 100; // the far clipping plane

  const camera = new PerspectiveCamera(fov, aspect, near, far);

  // every object is initially created at ( 0, 0, 0 )
  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  const renderer = new WebGLRenderer();

  // create a geometry
  const geometry = new BoxGeometry(1, 2, 1);
  const material = new LineBasicMaterial({ color: "red" });

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // add the mesh to the scene
  scene.add(cube);
  document.body.appendChild(renderer.domElement);

  // create the renderer

  // next, set the renderer to the same size as our container element
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
