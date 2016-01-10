function piechart() {
  var pie = document.getElementById("html").getContext("2d");
  new Chart(pie).Doughnut([
    { value: 85, color: "#A69B66" },
    { value: 15, color: '#000000' }
  ], {
    segmentShowStroke: false,
    percentageInnerCutout : 90,
  });

  var pie2 = document.getElementById("php").getContext("2d");
  new Chart(pie2).Doughnut([
    { value: 35, color: "#ababab" },
    { value: 65, color: '#000000' }
  ], {
    segmentShowStroke: false,
    percentageInnerCutout : 80,
  });

  var pie3 = document.getElementById("js").getContext("2d");
  new Chart(pie3).Doughnut([
    { value: 28, color: "#cccccc" },
    { value: 72, color: '#000000' }
  ], {
    segmentShowStroke: false,
    percentageInnerCutout : 96,
  });

  var pie4 = document.getElementById("ps").getContext("2d");
  new Chart(pie4).Doughnut([
    { value: 80, color: "#A69B66" },
    { value: 20, color: '#FFFFFF' }
  ], {
    segmentShowStroke: false,
    percentageInnerCutout : 90,
  });

  var pie5 = document.getElementById("ai").getContext("2d");
  new Chart(pie5).Doughnut([
    { value: 70, color: "#ababab" },
    { value: 30, color: '#FFFFFF' }
  ], {
    segmentShowStroke: false,
    percentageInnerCutout : 80,
  });

  var pie6 = document.getElementById("an").getContext("2d");
  new Chart(pie6).Doughnut([
    { value: 10, color: "#cccccc" },
    { value: 90, color: '#FFFFFF' }
  ], {
    segmentShowStroke: false,
    percentageInnerCutout : 96,
  });
}