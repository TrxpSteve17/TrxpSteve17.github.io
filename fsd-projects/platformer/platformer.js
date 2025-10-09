$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(225, 650, 100, 50, "red");
    createPlatform(400, 575, 50, 70, "blue"); 
    createPlatform(500, 450, 350, 90, "black");
    createPlatform(1200, 520, 40, 500, "blue");
    createPlatform(1150, 650, 50, 500, "black");




    // TODO 3 - Create Collectables
    createCollectable("database", 200, 450, 2, 1);
    createCollectable("database", 450, 350, 1, 1);
    createCollectable("database", 600, 175, 5, 1);
    createCollectable("database", 300, 265, 3, 1);



    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1800);
    createCannon("right", 400, 2500);
    createCannon("right", 650, 1800);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
