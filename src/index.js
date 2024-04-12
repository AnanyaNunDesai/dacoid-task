$(document).on("click", ".preview-button", function (event) {
  event.preventDefault();
  var url = $(this).data("target");
  location.replace(url);
});

$(document).on("click", ".nav-account", function (event) {
  event.preventDefault();
  var url = $(this).data("target");
  location.replace(url);
});

$(document).ready(function () {
  const initValues1 = [];
  const initValues2 = [];
  const initValues3 = [];

  for (let i = 0; i < 80; i++) {
    if (i < 35) {
      initValues1.push(0);
      initValues2.push(0);
      initValues3.push(0);
    } else {
      if (i == 36) {
        initValues1.push(80);
        initValues2.push(90);
        initValues2.push(100);
      } else if (i == 37) {
        initValues1.push(40);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 38) {
        initValues1.push(20);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 40) {
        initValues1.push(10);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 45) {
        initValues1.push(18);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 46) {
        initValues1.push(38);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 47) {
        initValues1.push(16);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 48) {
        initValues1.push(15);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 58) {
        initValues1.push(70);
        initValues2.push(90);
        initValues3.push(100);
      } else if (i == 59) {
        initValues1.push(30);
        initValues2.push(0);
        initValues3.push(0);
      } else if (i == 60) {
        initValues1.push(28);
        initValues2.push(31);
        initValues3.push(0);
      } else if (i == 65) {
        initValues1.push(38);
        initValues2.push(0);
        initValues3.push(0);
      } else {
        initValues1.push(0);
        initValues2.push(0);
        initValues3.push(0);
      }
    }
  }

  const data2BarColors = [];

  for (let i = 0; i < 80; i++) {
    if (i < 40) {
      data2BarColors.push("#34B009");
    } else {
      data2BarColors.push("#FD8787");
    }
  }

  var labels = initValues1.map((elem, i) => {
    var progress = (i * 1.0) / initValues1.length;

    if (progress == 0 || progress == 0.5) {
      return "12:00";
    } else if (progress == 0.25 || progress == 0.75) {
      return "6:00";
    } else {
      return "";
    }
  });

  barChart = new Chart(document.getElementById("tracker-graph"), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Data 1",
          barThickness: 3,
          data: initValues1,
          backgroundColor: "#8099FF",
          borderRadius: {
            topLeft: 15.0,
            topRight: 15.0,
          },
        },
        {
          label: "Data 2",
          barThickness: 3,
          data: initValues2,
          backgroundColor: data2BarColors,
          borderRadius: {
            topLeft: 15.0,
            topRight: 15.0,
          },
        },
        {
          label: "Data 3",
          barThickness: 3,
          data: initValues3,
          backgroundColor: "#7B7B7B",
          borderRadius: {
            topLeft: 15.0,
            topRight: 15.0,
          },
        },
      ],
    },
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
          },
          border: {
            dash: [2, 4],
          },
          ticks: {
            display: true,
            autoSkip: false,
            maxRotation: 0,
            minRotation: 0,
          },
        },
        y: {
          stacked: true,
          grid: {
            color: "rgba(41, 41, 41, .09)",
            opacity: 6,
          },
          border: {
            dash: [2, 4],
          },
          ticks: { display: false },
        },
      },
    },
  });
});
