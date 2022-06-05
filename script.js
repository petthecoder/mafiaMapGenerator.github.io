


// Draw the map

var map = document.createElement("div");
for(var i = 0; i < 20; i++){
  var row = document.createElement("div");
  for(var j = 0; j < 30; j++){
    var cell = document.createElement("div");
    cell.classList.add("map-cell");
    row.append(cell);
  }
  map.append(row);
}
document.getElementById("map").append(map);
