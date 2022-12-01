/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 30, 2022
 *
 * Content(s): Lab 15: AJAX
 */

//add a click event to button!activate which will then fetch API output
//this is a GET request(?)

//add a click event to the button
//When a user clicks the button, use a jQuery AJAX call to fetch output from your API
$("#activate").click(function() {
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/rapidash",
    data: {id: 78},
    type: "GET",
    dataType: "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
        //sorting through the JSON to get the url (front_default was in official artwork which was in other blah blah)
        var imgUrl = data.sprites.other["official-artwork"].front_default;
        //creating a new img obj and changing source attribute to the url
        var imgObj = $("<img>").attr("src", imgUrl);
        //placing the img obj on the page
        $("#output").html(imgObj);
        //if you wanted to put more you would sort of repeat it here but change it to what you wanted to show
        //only difference would probably be using 'append' instead of html otherwise you'll erase everything you wrote and also not use attribute since you wouldn't be changing the URL to an img you'd just be putting words (probably)
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })
});
