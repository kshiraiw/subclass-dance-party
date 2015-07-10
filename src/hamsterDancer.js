var makeHamsterDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer hamster" src="./assets/Hamtaro.png" alt="hamster">');
  makeDancer.prototype.setPosition.apply(this, [top, left]);
};


makeHamsterDancer.prototype = Object.create(makeDancer.prototype);
makeHamsterDancer.prototype.constructor = makeHamsterDancer;

makeHamsterDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.toggleClass('oscillate');
  // this.$node.toggleClass('oscillate');
};