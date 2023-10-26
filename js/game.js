import Tamagotchi from "./modules/tamagotchi.js";

export default class Game {
  constructor() {
    this.tamagotchi = new Tamagotchi();
  }

  start = (elements) => {
    this.tamagotchi.mount(elements);
    console.log("Game started");
  };

  update = () => {
    this.tamagotchi.update();
  };
}
