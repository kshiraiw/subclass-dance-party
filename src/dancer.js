// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.time = 0;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dot dancer"></span>');

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

  makeDancer.prototype.step = function() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  makeDancer.prototype.setPosition = function (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.top = top;
    this.left = left;

    this.$node.css(styleSettings);
  };

makeDancer.prototype.sourceSwap = function(){
  var $this = $(this)
  var newSource = $this.data('alt-src');
  $this.data('alt-src', $this.attr('src'));
  $this.attr('src', newSource);
};


makeDancer.prototype.orbit = function(neighbor){
  this.step();
  this.left = Math.sin(this.left);
  this.top = Math.sin(this.top);

};