/*/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 25, 2022
 *
 * Content(s): Lab 12: Conditionals
 */

 // We are attempting to make something that will have a sorting hat sort you into one of four hogwarts houses!

 //creating a function called sortingHat that takes strings as an argument. Remeber that functions have {} and arrays have []
 //counting the letters in the string(str) and assigning it to a variable length (len)
 //uses modulus (% operator) to get the remainder with 4. The mod will now be a value between 0 and 3
 //a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3

 function sortingHat(str) {
   length = str.length;
   modulus = length % 4;
    if (modulus == 0) {
      return "Gryffindor"
    }
    else if (modulus == 1) {
      return "Ravenclaw"
    }
    else if (modulus == 2) {
      return "Slytherin"
    }
    else if (modulus == 3) {
      return "Hufflepuff"
    }
 }

 //attaching button to #button and assigning it a click listener. Remember that $("txt") is used with jQuery instead of document.getElementById('id')!
 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
 })
