describe('Airport', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('instructs plane to land', function(){
    expect(airport.land(plane)).toBe("plane landed")
  });

  it('instructs plane to take off', function() {
    expect(airport.takeoff(plane)).toBe("plane no longer in the airport")
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([])
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  // describe('airport prevents landing when', function() {
  //   it('airport is full', function() {
  //     airport = new Airport();
  //
  //     expect(airport.land(plane)).toThrowError("airport is full")
  //   });
  // });
});
