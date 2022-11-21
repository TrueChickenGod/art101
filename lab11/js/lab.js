/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 20, 2022
 *
 * Content(s): Lab 11: Libraries & jQuery
 */

//We learned this from w3schools! Hope thats okay :3

//buttons for challenges
$(document).ready(function(){
  $("#hideOne").click(function(){
    $("#challenges").hide();
  });
  $("#showOne").click(function(){
    $("#challenges").show();
  });
});

//buttons for problems
$(document).ready(function(){
  $("#hideTwo").click(function(){
    $("#problems").hide();
  });
  $("#showTwo").click(function(){
    $("#problems").show();
  });
});

//buttons for results
$(document).ready(function(){
  $("#hideThree").click(function(){
    $("#results").hide();
  });
  $("#showThree").click(function(){
    $("#results").show();
  });
});
