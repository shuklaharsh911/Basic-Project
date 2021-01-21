var ctx1 = document.getElementById("myChart1");
var ctx2 = document.getElementById("myChart2");
var ctx3 = document.getElementById("myChart3");
var ctx4 = document.getElementById("myChart4");
var ctx5 = document.getElementById("myChart5");
var bColor = ["#111", "#111"];

var colouarray1 = ['red', 'lightgray'];
var colouarray2 = ['aqua','lightgray'];
var initialData = [10,90];
var chart4_label = [];
var chart3_label = [];
var initial_data1 = [];
var initial_data2 = [];
//Let's updatedDataSet[] be the array to hold the upadted data set with every update call
var i=0;
var x = [];
$.ajax('http://localhost:8081/', 
{
    dataType: 'json', // type of response data
    success: function (data,status,xhr) {   // success callback function
       x=data.data;
    },
    error: function (jqXhr, textStatus, errorMessage) { // error callback 
        console.log(errorMessage);
    }
});

var myChart = new Chart(ctx1, {
  type: 'doughnut',
    data: {
        labels: ['Temprature', ''],
        datasets: [{
            data: initialData,
            backgroundColor: colouarray1,
            borderColor: bColor,
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      legend: {
        position: 'top',
        display:  false
      },animation: {
        animateScale: true,
        animateRotate: true
      }
  }
});
var myChart1 = new Chart(ctx2, {
  type: 'doughnut',
    data: {
        labels: ['Current', ''],
        datasets: [{
            data: [20,80],
            backgroundColor: colouarray2,
            borderColor: bColor, 
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
var bColor1 = ["aqua"];
var myChart3 = new Chart(ctx3, {
  type: 'line',
    data: {
        labels: chart3_label,
        datasets: [{
            data: initial_data1,
            borderColor: bColor1,
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
        labels: chart4_label,
        datasets: [{
            data: initial_data2,
            borderColor: bColor1,
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
var initial_data3 = [];
var initial_data4 = [];
var chart5_label = [];

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
  data : {
    labels : chart5_label,
    datasets : [
      {
        label : "TeamA score",
        data : initial_data3,
        backgroundColor : ["red","red","red","red","red"],
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
        data : initial_data4,
        backgroundColor : ["green","green","green","green","green" ],
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
  },
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

var len=0;
function my_Chart(chart,data) {
  var x=chart.data.datasets[0].data[0]-data;
  if(x>0){
    chart.data.datasets[0].data[0]-=x;
    chart.data.datasets[0].data[1]+=x;
  }
  else{
    chart.data.datasets[0].data[0]-=x;
    chart.data.datasets[0].data[1]+=x;
  }
  chart.update();
}

function my_Chart1(chart,data) {
  var x=chart.data.datasets[0].data[0]-data;
  if(x>0){
    chart.data.datasets[0].data[0]-=x;
    chart.data.datasets[0].data[1]+=x;
  }
  else{
    chart.data.datasets[0].data[0]-=x;
    chart.data.datasets[0].data[1]+=x;
  }
  chart.update();
}

function my_Chart2(chart,data,time,len) {
  chart.data.labels.push(time);
  chart.data.datasets[0]["data"].push(data);
  if(len>6){
    console.log(chart.data.datasets[0]["data"]);
    chart.data.datasets[0]["data"].shift();
    chart.data.labels.shift();
  }
  chart.update();
}

function my_Chart3(chart,data,time,len) {
  chart.data.labels.push(time);
  chart.data.datasets[0]["data"].push(data);
  if(len>6){
    console.log(chart.data.datasets[0]["data"]);
    chart.data.datasets[0]["data"].shift();
    chart.data.labels.shift();
  }
  chart.update();
}

function my_Chart4(chart,data1,data2,time,len) {
  chart.data.labels.push(time);
  chart.data.datasets[0].data.push(data1);
  chart.data.datasets[1].data.push(data2);
  if(len>4){
    chart.data.datasets[0].data.shift();
    chart.data.datasets[1].data.shift();
    chart.data.labels.shift();
  }
  chart.update();
}

function getTimeFromDate(timestamp) {
  var s="";
  for(var i=12;i<=18;i++){
     s+=timestamp[i];
  }
  return s;
}
setInterval(function() {
  var updatedDataSet1 = x[i]["temperature"];
  var updatedDataSet2 = x[i]["current"];
  var time = getTimeFromDate(x[i]["insert_datetime"]);
  my_Chart(myChart, updatedDataSet1);
  my_Chart1(myChart1, updatedDataSet2);
  my_Chart2(myChart3, updatedDataSet2,time,len);
  my_Chart3(myChart4, updatedDataSet1,time,len);
  my_Chart4(mychart5, updatedDataSet1,updatedDataSet2,time,len);
  document.getElementById("temp1").innerHTML = updatedDataSet1;
  document.getElementById("temp2").innerHTML = updatedDataSet2;
  len++;
  i++;
}, 2000);