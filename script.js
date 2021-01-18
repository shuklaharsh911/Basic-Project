var ctx1 = document.getElementById("myChart1");
var ctx2 = document.getElementById("myChart2");
var ctx3 = document.getElementById("myChart3");
var ctx4 = document.getElementById("myChart4");
var ctx5 = document.getElementById("myChart5");

var myChart = new Chart(ctx1, {
  type: 'doughnut',
    data: {
        labels: ['Temprature', ''],
        datasets: [{
            data: [70, 19],
            backgroundColor: [
              "red",
              "lightgray"
          ],
          borderColor: [
            "#111",
            "#111"
           ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false //This will do the task
     }
  }
});
var myChart1 = new Chart(ctx2, {
  type: 'doughnut',
    data: {
        labels: ['Current', ''],
        datasets: [{
            data: [60,40],
            backgroundColor: [
              "aqua",
              "lightgray"
          ],
          borderColor: [
           "#111",
           "#111"
          ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false //This will do the task
     }
  }
});
var myChart3 = new Chart(ctx3, {
  type: 'line',
    data: {
        labels: ['9pm', '1pm', '5pm', '9pm', '1am', '5am'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            borderColor: [
              "aqua"
          ],
            borderWidth: 3
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false //This will do the task
     }
  }
});
var myChart4 = new Chart(ctx4, {
  type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            borderColor: [
              "aqua"
          ],
            borderWidth: 3
        }]
    },
    options: {
      responsive: true,
      legend: {
        display: false //This will do the task
     }
  }
});
var data = {
  labels : ["match1", "match2", "match3", "match4", "match5"],
  datasets : [
    {
      label : "TeamA score",
      data : [10, 50, 25, 70, 40],
      backgroundColor : [
        getRandomColorHex(),
        getRandomColorHex(),
        getRandomColorHex(),
        getRandomColorHex(),
        getRandomColorHex()
      ],
      borderColor : [
        "#111",
        "#111",
        "#111",
        "#111",
        "#111"
      ],
      borderWidth : 1
    },
    {
      label : "TeamB score",
      data : [20, 35, 40, 60, 50],
      backgroundColor : [
        getRandomColorHex(),
        getRandomColorHex(),
        getRandomColorHex(),
        getRandomColorHex(),
        getRandomColorHex()
      ],
      borderColor : [
        "#111",
        "#111",
        "#111",
        "#111",
        "#111"
      ],
      borderWidth : 1
    }
  ]
};

var options = {
  title : {
    display : true,
    position : "top",
  },
  legend : {
    display : false
  },
  scales : {
    yAxes : [{
      ticks : {
        min : 0
      }
    }]
  }
};

var mychart5 = new Chart( ctx5, {
  type : "bar",
  data : data,
  options : options
});

function getRandomColorHex() {
  var hex = "0123456789ABCDEF",
      color = "#";
  for (var i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
