'use strict';

function Plane(){};  //defines Plane class

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function() {
  this._location.clearForTakeOff();
};
