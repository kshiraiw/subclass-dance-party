$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000 + 100
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(e){
    var numOfDancers = window.dancers.length;
    var height = $("body").height() * .50;
    var widthSpacing = $("body").width() / (numOfDancers + 2);

    for(var i = 0; i < numOfDancers; i++){
      window.dancers[i].setPosition(height, widthSpacing * (i + 1));
    }
  });

  $('.continue').on('click', function(e) {
    for (var i = 0; i < window.dancers.length; i++) {
      var randomTop = (Math.random() * $('body').height() - ($('body').height() * .25));
      var randomLeft= Math.random() * $('body').width();
      window.dancers[i].setPosition(randomTop, randomLeft);
    }
  });

  $('.pairing').on('click', function(e){
    var firstLine = window.dancers.slice(0, Math.ceil(window.dancers.length / 2));
    var secondLine = window.dancers.slice(Math.ceil(window.dancers.length / 2), window.dancers.length);
    var firstWidthSpacing = $("body").width() / (firstLine.length + 2);
    var secondWidthSpacing = $("body").width() / (secondLine.length + 2);
    var firstLineHeight = $("body").height() * 0.25;
    var secondLineHeight = $("body").height() * 0.75;

    for(var i = 0; i < firstLine.length; i++){
      firstLine[i].setPosition(firstLineHeight, firstWidthSpacing * (i + 1));
    }
    for(var i = 0; i < secondLine.length; i++){
      secondLine[i].setPosition(secondLineHeight, secondWidthSpacing * (i + 1));
    }
  });


  $('body').on('click', '.dancer', function(e) {
    var top = parseInt(this.style.top);
    var left = parseInt(this.style.left);
    var object;
    var closest;
    var shortestHypo = 1000000;
    var currentHypo;


    for (var i = 0; i < window.dancers.length; i++) {
      currentHypo = Math.sqrt(Math.pow(top - window.dancers[i].top, 2) + Math.pow(left - window.dancers[i].left, 2));
      if(currentHypo < shortestHypo){
       
        shortestHypo = currentHypo;
        object = window.dancers[i];
      }
    }
    console.log(object)    
    shortestHypo = 1000000;
    for (var i = 0; i < window.dancers.length; i++) {
      currentHypo = Math.sqrt(Math.pow(object.top - window.dancers[i].top, 2) + Math.pow(object.left - window.dancers[i].left, 2));
      console.log(currentHypo)
      if(currentHypo < 5){
        continue;
      }
      if(currentHypo < shortestHypo){
       shortestHypo = currentHypo;
        closest = window.dancers[i];
      }
    }

    console.log(closest)

    left = closest.left + (Math.random() * 200);
    object.setPosition(closest.top, left);
 });

});

