describe('Airport', function(){
  var airport;

  describe('airport instructs', function(){
    it('plane to land', function(){
      airport = new Airport();
      expect(airport.land(plane)).toBe("plane land")
    });
  });

  describe('airport instructs', function() {
    it('plane to take off', function() {
      airport = new Airport();
      expect(airport.takeoff(plane)).toBe("plane no longer in the airport")
    });
  });
});
