/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 28, 2022
 *
 * Content(s): Lab 13: Loops
 */

 //creating a loop that says "FizzBuzz"
 //multiples of 3 it says "Fizz!"
 //multiples of 5 it says "Buzz!"
 //multiples of 7 it says "Boom!"
 //multiples of two or more should combine the words
 //Using a For loop b/c we know that we want it to be printed 200 times
//remember to have multiple of:: 3, 5, 7, 15, 21, 35, 105
  for (loop=1; loop <= 200; loop++) {
        //multiples of 105
      if (loop%105 == 0) {
          console.log("Fizz!Buzz!Boom!");
        //multiples of 35
      } else if (loop%35 == 0) {
          console.log("Buzz!Boom!");
        //multiples of 21
      } else if (loop%21 == 0) {
          console.log("Fizz!Boom!");
        //multiples of 15
      } else if (loop%15 == 0) {
          console.log("Fizz!Buzz!");
        //multiples of 7
      } else if (loop%7 == 0) {
          console.log("Boom!");
        //multiples of 5
      } else if (loop%5 == 0) {
          console.log("Buzz!");
        //multiples of 3
      } else if (loop%3 == 0) {
          console.log("Fizz!");
        //not multiples of any of the above
      } else {
          console.log(loop);
      }
      $("#output").html();
  }
