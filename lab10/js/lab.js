/*
 * Author(s) Kiyo Leong <maaleong@ucsc.edu>
             Ramola Datta <rsdatta@ucsc.edu>
 * Created Nov. 11, 2022
 * Lab 10: JavaScript Events and Forms
 */

//nameSort function from Lab 7

function nameSort() {
    var userName = window.prompt("May I steal your username for a moment?");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back into string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    return nameSorted;
}

//replacing div output with results (?)
var outputEl = document.getElementById("output");

var new1El = document.createElement("input");
    new1El.innerHTML = "nameSorteds";
