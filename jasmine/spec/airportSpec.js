describe('Airport', function(){
  var airport;

  describe('airport instructs', function(){
    it('plane to land', function(){
      airport = new Airport();
      expect(airport.says("land")).toEqual("land")
    });
  });
});
