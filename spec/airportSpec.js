'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    //plane = jasmine.createSpyObj('plane',['land','takeoff']);   //stubbing new plane object
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);   //expect airport to contain no planes
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('instructs plane to land at an airport', function(){
    plane.land(airport);     //lands plane at airport
    expect(airport.planes()).toContain(plane); //expects there to be planes at the airport
  });

  it('instructs plane to takeoff at an airport', function(){
    plane.land(airport)     //lands plane at airport
    plane.takeoff(airport)  //takesoff plane from airport
    expect(airport.planes()).not.toContain(plane) //expects there to be planes at the airport
  });

  it('can clear planes for takeoff', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
});
