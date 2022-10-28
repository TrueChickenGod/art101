/**
 * Author: Ramola Datta <rsdatta@ucsc.edu>
 * Created: Oct 20, 2022
 * Arrays and Objects
 **/


//define variables

 myTransport = ["Niisan Leaf", "Bus", "Bike", "Walking"];

 myMainRide = {
   make:"Niisan",
   model:"Leaf",
   color:"white",
   year:"2019"
 };

 //output

 document.writeln("How I get around:", myTransport);

 document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
