import Game from "./src/modules/Game";

document.addEventListener("DOMContentLoaded", function () {
  // Assuming you have a 'Play' button with id 'startGame' and a 'mapSelect' dropdown
  document.getElementById("startGame").addEventListener(
    "click",
    function () {
      const selectedMap = document.getElementById("backgroundSelect").value;

      // Now create the game instance with the selected map
      let game = new Game({
        spritesheet: "sprites.json",
        background: selectedMap, // Pass the selected map to the Game
      }).load();

      // Assuming the Game class's 'load' method starts the game
    },
    false
  );
});
