window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    myGameArea.start();
    myGameArea.background();
    myGameArea.car();
  }
};


const myGameArea = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  start: function () {
    this.ctx = this.canvas.getContext('2d');
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
background: function() {
  const drawBackground = new Image();
  drawBackground.src = '/lab-canvas-race-car/images/road.png'
  drawBackground.addEventListener('load', () => {
    this.ctx.drawImage(drawBackground, 0, 0, this.canvas.width, this.canvas.height);
  });
},

/* car: function () {
  const drawCar = new Image();
  drawCar.src = './images/car.png';
  drawCar.addEventListener('load', () => {
    this.ctx.drawImage(drawCar, 210, 560, 100, 150);
  });
}  */

  
};

function updateGameArea() {
 
  
  //myGameArea.clear();
  //myGameArea.newPos();
  
};

class Component {
  constructor(width, height, img, x, y) {
    this.width = width;
    this.height = height;
    this.img = img;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
  left() {
    return this.x;
  }
  right() {
    return this.y;
  }

newPos() {
  this.x += this.speedX;
  this.y += this.speedY;
}

/*  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }*/

  update() {
    const drawCar = new Image();
    drawCar.src = './images/car.png';
    drawCar.addEventListener('load', () => {
      this.ctx.drawImage(drawCar, this.x, this.y, 80, 120);
    });
    
  }  
}

const Car = new Component(100, 150, )

