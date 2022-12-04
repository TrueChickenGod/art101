/*
 * Author(s): Kiyo Leong <maaleong@ucsc.edu>
              Ramola Datta <rsdatta@ucsc.edu>
 * Created: Dec. 02, 2022
 *
 * Content(s): Lab 16: JSON and APIs
 */

 // Using the core $.ajax() method

 $.ajax({
     // The URL for the request (from the api docs)
     url: "https://xkcd.com/info.0.json",
     // The data to send (will be converted to a query string)
     data: {
             // here is where any data required by the api
             //   goes (check the api docs)
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(data) {
         // do stuff
         console.log(data);
         //getting url for title
         var titleUrl = data.title;
         //putting title on page
         $("#output").html(titleUrl);
         //getting url for img by sorting through the json stuff
         var comicUrl = data.img;
         //creating a new img obj
         var comicObj = $("<img>").attr("src", comicUrl);
         //placing img on page
         $("#output").append(comicObj);
         //getting url for alt
         var altUrl = data.alt;
         //putting alt on page
         $("#output").append(altUrl);

     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
 })
