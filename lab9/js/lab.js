/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 7, 2022
 * Lab 9: JavaScript for the Web
 */

var outputEl = document.getElementById("output");

var new1El = document.createElement("p").innerHTML = "Random";

var new2El = document.createElement("p").innerHTML = "Again";

//adding new DOM elements?

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);
