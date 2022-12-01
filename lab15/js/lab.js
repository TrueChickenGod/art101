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
  })
});
