var makeJigglypuffDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="dancer jigglypuff oscillate" src="./assets/jigglypuff.png" data-alt-src="./assets/poo.png" alt="jigglypuff">');
  this.$node.hover(this.sourceSwap, this.sourceSwap); 



  makeDancer.prototype.setPosition.apply(this, [top,left]);
};

makeJigglypuffDancer.prototype = Object.create(makeDancer.prototype);
makeJigglypuffDancer.prototype.constructor = makeJigglypuffDancer;

makeJigglypuffDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.toggleClass('oscillate');
};

