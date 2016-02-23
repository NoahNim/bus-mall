var images = [];

function Image(imagePath){
  this.imagePath = imagePath;
  this.imageVotes = 0;
  this.imageShown = 0;

  images.push(this);
}

var bag = new Image('img/bag.jpg');
var banana = new Image('img/banana.jpg');
var bathroom = new Image('image/bathroom.jpg')
var bubblegum = new Image('image/bubblegum.jpg')
var boots = new Image('img/boots.jpg');
var chair = new Image('img/chair.jpg');
var cthulhu = new Image('img/cthulhu.jpg');
var dogDuck = new Image('img/dog-duck.jpg')
var dragon = new Image('img/dragon.jpg');
var pen = new Image('img/pen.jpg');
var petSweep = new Image('img/pet-sweep.jpg');
var scissors = new Image('img/scissors.jpg');
var shark = new Image('img/shark.jpg');
var sweep = new Image('img/sweep.png');
var taunttaun = new Image('image/taunttaun.jpg')
var unicorn = new Image('img/unicorn.jpg');
var usb = new Image('img/usb.gif');
var waterCan = new Image('img/water-can.jpg');
var wineGlass = new Image('img/wine-glass.jpg');

var oneEl = document.getElementById('one');
var twoEl = document.getElementById('two');
var threeEl = document.getElementById('three');

var theImage = [bag, banana, bathroom, bubblegum, boots, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, taunttaun, unicorn, usb, waterCan, wineGlass]

// Benton helped me figure out this block
function randomImgs() {
  var index1 = Math.floor(Math.random() * theImage.length);
  oneEl.src = theImage[index1].imagePath;
  var index2 = Math.floor(Math.random() * theImage.length);
  twoEl.src = theImage[index2].imagePath;
  var index3 = Math.floor(Math.random() * theImage.length);
  threeEl.src = theImage[index3].imagePath;
}

randomImgs();
