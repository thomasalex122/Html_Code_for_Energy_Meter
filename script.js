/*For the chart */
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Months', 'kwt'],
    ['January',  1600],
    ['February',  1100],
    ['March',  660],
    ['April',  1030],
    ['May',  800],
    ['June',  950],
    ['July',  1200],
    ['August',  1350],
    ['September',  1500],
    ['October',  1300],
    ['November',  1000],
    ['December',  1900]
  ]);

  var options = {
    title: 'Energy Used',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}