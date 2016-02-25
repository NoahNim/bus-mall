function buildChart(){

  if(createdChart != null){
    createdChart.destroy();
  }

  var chart = document.getElementById('votes').getContext('2d');
  var chartData = clickData;


  var barData = {
    labels : ['bag', 'banana', 'bathroom', 'bubblegum', 'boots', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'],
    datasets : [
      {
        fillColor : '#48A497',
        strokeColor : '#48A4D1',
        data : chartData
      }
    ]
  };

  createdChart = new Chart(chart).Bar(barData);
}
