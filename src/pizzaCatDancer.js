var makePizzaCatDancer = function(top, left, time){
  time += 100;
  makeDancer.call(this, top, left, time);
  this.$node = $('<img class="dancer pizza-cat" src="./assets/pizzaCat.gif" alt="Pizza Cat">');
  makeDancer.prototype.setPosition.apply(this, [top, left]);
};

makePizzaCatDancer.prototype = Object.create(makeDancer.prototype);
makePizzaCatDancer.prototype.constructor = makePizzaCatDancer;

makePizzaCatDancer.prototype.step = function() {
  makeDancer.prototype.step.apply(this);
  this.$node.toggleClass('oscillate');
};