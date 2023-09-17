import { firstScene } from "./firstScene";
import "./style.css";
import { World } from "./world/World";
const world = new World(document);

world.render();

//we need a loop that cause renderer t start scene everytime it renders
//requestAnimationframe does that , adv being it pauses when user nav to other screen so its better than set interval
