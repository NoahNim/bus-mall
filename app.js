function Image(imagePath){
  this.imagePath = imagePath;
  this.imageVotes = 0;
  this.imageShown = 0;
}

function clickCounter(){
  clickCount++
  console.log(clickCount);
}

var bag = new Image('img/bag.jpg');
var banana = new Image('img/banana.jpg');
var bathroom = new Image('img/bathroom.jpg')
var bubblegum = new Image('img/bubblegum.jpg')
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
var taunttaun = new Image('img/tauntaun.jpg')
var unicorn = new Image('img/unicorn.jpg');
var usb = new Image('img/usb.gif');
var waterCan = new Image('img/water-can.jpg');
var wineGlass = new Image('img/wine-glass.jpg');

var oneEl = document.getElementById('one');
var twoEl = document.getElementById('two');
var threeEl = document.getElementById('three');
var clickOne = document.getElementById('one');
var clickTwo = document.getElementById('two');
var clickThree = document.getElementById('three');
var theImage = [bag, banana, bathroom, bubblegum, boots, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, taunttaun, unicorn, usb, waterCan, wineGlass]

// Benton helped me figure out this block
function randomImgs() {
  console.log('Random images function is running')
  var imageOne = Math.floor(Math.random() * theImage.length);
  oneEl.src = theImage[imageOne].imagePath;
  var imageTwo = Math.floor(Math.random() * theImage.length);
  twoEl.src = theImage[imageTwo].imagePath;
  var imageThree = Math.floor(Math.random() * theImage.length);
  threeEl.src = theImage[imageThree].imagePath;
}

randomImgs();

// tells the image what to do when clicked. my friend taught me about the onclick function, which I can also call in the HTML but I had to do it here because it did not want to work on the bloody third image!
oneEl.onclick = randomImgs
twoEl.onclick = randomImgs
threeEl.onclick = randomImgs
