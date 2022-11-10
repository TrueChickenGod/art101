/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 7, 2022
 * Lab 9: JavaScript for the Web
 */

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
    new1El.innerHTML = "Random";

//new DOM elements?

outputEl.appendChild(new1El);

var new2El = document.createElement("p");
    new2El.innerHTML = "Again";

//new DOM elements?

outputEl.appendChild(new2El);
