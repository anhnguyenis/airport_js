var Airport = function() {
  this._hangar = [];
};
var Plane = function() {};

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.land = function(plane) {
  console.log("plane landed");
  return "plane landed";
};

Airport.prototype.takeoff = function(plane) {
  console.log("plane no longer in the airport")
  return "plane no longer in the airport"
}

var plane = new Plane()
var airport = new Airport()
airport.land(plane)
airport.takeoff(plane)
airport.planes()
