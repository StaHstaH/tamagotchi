import Game from "./js/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();

  // Start game
  game.start({
    healthElement: "#heart_param",
    hungerElement: "#apple_param",
    energyElement: "#sleep_param",
    funElement: "#ball_param",
  });

  setInterval(() => {
    game.update();
  }, 1000);
});
