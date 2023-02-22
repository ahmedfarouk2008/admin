var ctx = document.getElementById("barChart").getContext('2d');
var barChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun"],
    datasets: [{
      label: 'data-1',
      data: [12, 19, 3, 17, 28, 24, 7],
      backgroundColor: "rgba(255,0,0,1)"
    }, {
      label: 'data-2',
      data: [30, 29, 5, 5, 20, 3, 10],
      backgroundColor: "rgba(0,0,255,1)"
    }]
  }
});


var oilCanvas = document.getElementById("pieChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
        "Iraq",
        "Canada"
    ],
    datasets: [
        {
            data: [133.3, 86.2, 51.2, 50.2],
            backgroundColor: [
                "#4ac0c0",
                "#36a2eb",
                "#ff9f40",
                "#fe6383"
            ]
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  data: oilData
});

