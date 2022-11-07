/*
 * Author(s): Ramola Datta <rsdatta@ucsc.edu>
              Kiyo Leong <maaleong@ucsc.edu>
 * Created: Nov. 7, 2022
 */

function attemptOne() {
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

//output

document.writeln("Here's your name back! ",
        attemptOne(), "</br>");
