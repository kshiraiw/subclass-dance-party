describe("jigglypuffDancer", function() {

  var jigglypuffDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jigglypuffDancer = new makeJigglypuffDancer(20, 40, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(jigglypuffDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(jigglypuffDancer, "step");
      expect(jigglypuffDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(jigglypuffDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jigglypuffDancer.step.callCount).to.be.equal(2);
    });
  });
});
