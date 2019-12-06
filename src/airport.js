var Airport = function() {};
var Plane = function() {};

Airport.prototype.land = function(plane) {
  console.log("plane land");
  return "plane land";
};

Airport.prototype.takeoff = function(plane) {
  console.log("plane no longer in the airport")
  return "plane no longer in the airport"
}

var plane = new Plane()
var airport = new Airport()
airport.land(plane)
airport.takeoff(plane)
