/*
 * Author(s): Ramola Datta <rsdatta@ucsc.edu>
 * Created: Nov. 25, 2022
 *
 * Content: JavaScript for my main webpage
 */

 //for list buttons
 $(document).ready(function(){
   $("#hideLabs").click(function(){
     $("#divThree").hide();
   });
   $("#showLabs").click(function(){
     $("#divThree").show();
   });
 });
