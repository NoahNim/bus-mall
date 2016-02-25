function supports_html5_storage() {
  try {
    console.log('Local storage is available!');
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

supports_html5_storage();

var createdChart = null;
var clicks = 0;

function Image(imagePath, imageClass){
  this.imagePath = imagePath;
  this.imageClass = imageClass;
  this.imageVotes = 0;
  this.imageShown = 0;
}

var bag = new Image('img/bag.jpg', 'bag');
var banana = new Image('img/banana.jpg', 'banana');
var bathroom = new Image('img/bathroom.jpg', 'bathroom');
var bubblegum = new Image('img/bubblegum.jpg', 'bubblegum');
var boots = new Image('img/boots.jpg', 'boots');
var chair = new Image('img/chair.jpg', 'chair');
var cthulhu = new Image('img/cthulhu.jpg', 'cthulhu');
var dogDuck = new Image('img/dog-duck.jpg', 'dogDuck');
var dragon = new Image('img/dragon.jpg', 'dragon');
var pen = new Image('img/pen.jpg', 'pen');
var petSweep = new Image('img/pet-sweep.jpg', 'petSweep');
var scissors = new Image('img/scissors.jpg', 'scissors');
var shark = new Image('img/shark.jpg', 'shark');
var sweep = new Image('img/sweep.png', 'sweep');
var tauntaun = new Image('img/tauntaun.jpg', 'tauntaun');
var unicorn = new Image('img/unicorn.jpg', 'unicorn');
var usb = new Image('img/usb.gif', 'usb');
var waterCan = new Image('img/water-can.jpg', 'waterCan');
var wineGlass = new Image('img/wine-glass.jpg', 'wineGlass');

var oneEl = document.getElementById('one');
var twoEl = document.getElementById('two');
var threeEl = document.getElementById('three');
var theImage = [bag, banana, bathroom, bubblegum, boots, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];
var imageOne;
var imageTwo;
var imageThree;
var results = document.getElementById('button');
var reset = document.getElementById('restart');
var theChart = document.getElementById('votes');
var clickData = [];

function voteData(){
  for(var i = 0; i < theImage.length; i++){
    clickData.push(theImage[i].imageVotes);
  }
}

function setLocalData(){
  var stringedArrayData = JSON.stringify(theImage);
  localStorage.setItem('imageData', stringedArrayData);
}

function updateLocalData(){
  if(window.localStorage.length > 0){
    console.log('Local storage has data stored');
    var retrievedData = localStorage.getItem('imageData');
    var parsedData = JSON.parse(retrievedData);

    for(i = 0; i < parsedData.length; i++){
      theImage[i].imageVotes = parsedData[i].imageVotes;
      theImage[i].imageShown = parsedData[i].imageShown;
    }
  }
}
// Carrie helped me learn all this now
function imageClick(){
  clickData = [];
  console.log(this.id);
  console.log(this.className);
  var clickClass = this.className;
  for(var i = 0; i < theImage.length; i++){
    if(clickClass === theImage[i].imageClass){
      theImage[i].imageVotes++;
      setLocalData();
    }
  }
  function showResults(){
    if(clicks === 25){
      results.style.display = 'block';
      reset.style.display = 'block';
    }
  }

  clicks++;
  if(clicks < 25){
    randomImgs();
  }
  voteData();
  showResults();
}

// Benton helped me figure out this block
function randomImgs() {
  console.log('Random images function is running');
  imageOne = Math.floor(Math.random() * theImage.length);
  imageTwo = Math.floor(Math.random() * theImage.length);
  imageThree = Math.floor(Math.random() * theImage.length);

  while(imageOne === imageTwo){
    imageTwo = Math.floor(Math.random() * theImage.length);
  }
  while(imageOne === imageThree || imageTwo === imageThree){
    imageThree = Math.floor(Math.random() * theImage.length);
  }

  oneEl.src = theImage[imageOne].imagePath;
  oneEl.setAttribute('class', theImage[imageOne].imageClass);
  theImage[imageOne].imageShown++;
  twoEl.src = theImage[imageTwo].imagePath;
  twoEl.setAttribute('class', theImage[imageTwo].imageClass);
  theImage[imageTwo].imageShown++;
  threeEl.src = theImage[imageThree].imagePath;
  threeEl.setAttribute('class', theImage[imageThree].imageClass);
  theImage[imageThree].imageShown++;
  setLocalData();
}
updateLocalData();
randomImgs();

function renderChart(){
  buildChart();
  theChart.style.visibility = 'visible';
}

function resetChart(){
  clicks = 15;
  clickData = [];
  randomImgs();
  results.style.display = 'none';
  reset.style.display = 'none';
  theChart.style.visibility = 'hidden';
}

oneEl.addEventListener('click', imageClick);
twoEl.addEventListener('click', imageClick);
threeEl.addEventListener('click', imageClick);
results.addEventListener('click', renderChart);
reset.addEventListener('click', resetChart);
