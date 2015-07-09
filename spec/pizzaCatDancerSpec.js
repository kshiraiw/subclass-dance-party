describe("pizzaCatDancer", function() {

  var pizzaCatDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pizzaCatDancer = new makePizzaCatDancer(20, 40, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(pizzaCatDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(pizzaCatDancer, "step");
      expect(pizzaCatDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pizzaCatDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pizzaCatDancer.step.callCount).to.be.equal(2);
    });
  });
});
