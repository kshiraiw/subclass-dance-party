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
    // console.log(window.dancers[0].top + "initialization");
    // console.log(window.dancers[0].left);
  });

  $('.lineUp').on('click', function(e){
    var numOfDancers = window.dancers.length;
    var height = $("body").height() * .75;
    var widthSpacing = $("body").width() / (numOfDancers + 2);

    for(var i = 0; i < numOfDancers; i++){
      window.dancers[i].setPosition(height, widthSpacing * (i + 1));
    }
    // console.log(window.dancers[0].top + "LINE UP");
    // console.log(window.dancers[0].left);
  });





 //  $('body').on('click', '.dancer', function(e) {
 //    var top = parseInt(this.style.top);
 //    var left = parseInt(this.style.left);
 //    var closest;
 //    var shortestHypo = 1000000;
 //    var currentHypo;
 //    for (var i = 0; i < window.dancers.length; i++) {
 //      currentHypo = Math.sqrt(Math.pow(top - window.dancers[i].top, 2) + Math.pow(left - window.dancers[i].left, 2));
 //      console.log(currentHypo)
 //      if(currentHypo < 5){
 //        continue;
 //      }
 //      if(currentHypo < shortestHypo){
       
 //        shortestHypo = currentHypo;
 //        closest = window.dancers[i];
 //      }
 //    }
 //    this.style.top = closest.top + 'px';
 //    left = closest.left + 200;
 //    this.style.left = left + 'px';
 //    closest = undefined;
 // });

});

