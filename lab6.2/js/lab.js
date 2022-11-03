/*
 * Author: Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 1, 2022
 * Lab 6 Attempt 2: Arrays and Objects
*/

//All variables declared in Task 1

var myTransport = ["Walking", "Bus Ride", "Biking", "Nissan Leaf"];

var myMainRide = {
  make: "Nissan",
  model: "Leaf",
  year: "2019",
  color: "white",
  age: function() {
      return 2022 - age;
    }
 }

//output
//remember its: 'document.writeIn("What's going to be written", what you're using/showing off, "</br>")

document.writeIn("Some different ways I get around are:", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
