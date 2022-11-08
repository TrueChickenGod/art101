/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 7, 2022
 * Lab 9: JavaScript for the Web
 */

var outputEl = getElementByClassName("div");

var new1El = document.createElement("p");
    new1El.innerHTML = "Random";

var new2El = document.createElement("p");
    new2El.innerHTML = "Again";

//adding new DOM elements?

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);
