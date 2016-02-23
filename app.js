function Image(imagePath){
  this.imagePath = imagePath;
  this.imageVotes = 0;
  this.imageShown = 0;

  images.push(this);
}

var bag = new Image('img/bag.jpg');
var banana = new Image('img/banana.jpg');
var boots = new Image('img/boots.jpg');
var chair = new Image('img/chair.jpg');
var cthulhu = new Image('img/cthulhu.jpg');
var dragon = new Image('img/dragon.jpg');
var pen = new Image('img/pen.jpg');
var scissors = new Image('img/scissors.jpg');
var shark = new Image('img/shark.jpg');
var sweep = new Image('img/sweep.png');
var unicorn = new Image('img/unicorn.jpg');
var usb = new Image('img/usb.gif');
var waterCan = new Image('img/watercan.jpg');
var wineGlass = new Image('img/wineglass.jpg');

var oneEl = document.getElementById('one');
var twoEl = document.getElementById('two');
var threeEl = document.getElementById('three');

var theImage = [bag, banana, boots, chair, cthulhu, dragon, pen, scissors, shark, sweep, unicorn, usb, waterCan, wineGlass]

function randomImgs() {
  var index1 = Math.floor(Math.random() * theImage.length);
  oneEl.textContent = theImage[index1];
  var index2 = Math.floor(Math.random() * theImage.length);
  twoEl.textContent = theImage[index2];
  var index3 = Math.floor(Math.random() * theImage.length);
  threeEl.textContent = theImage[index3];
}

randomImgs();
