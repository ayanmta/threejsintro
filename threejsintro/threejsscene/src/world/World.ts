import { createCamera } from "../components/camera";
import { createCube } from "../components/cube";
import { createScene } from "../components/scene";
import { Resizer } from "../systems/Resizer";
import { createRenderer } from "../systems/renderer";

let camera;
let scene;
let renderer;
class World {
  constructor(document) {
    camera = createCamera();
    scene = createScene();

    renderer = createRenderer();
    document.body.append(renderer.domElement);
    const cube = createCube();
    scene.add(cube);

    // const resizer = new Resizer(document, camera, renderer);
  }

  render() {
    renderer.render(scene, camera);
  }
}
export { World };
