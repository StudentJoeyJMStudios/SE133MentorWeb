Parse.initialize("eBuYMHtEfY5emBFuHzQWHDjdxRsxxw3NQIQlrl9g", "cJeb591BLAskGN9bXsgPbY1c7uxdind30MfJUMPU");

var moreParse = document.createElement('script');
moreParse.type = "text/javascript";
moreParse.src = "//www.parsecdn.com/js/parse-1.2.18.min.js";

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';

var resultsFromParse =new Array;
(function gatherMentors()
{
    var mentor = Parse.Object.extend("Mentors");
    var query = new Parse.Query(mentor);
    query.find(
    {
        success: function (results)
        {
			resultsFromParse = results;
			
            for (var i = 0; i < results.length; i++)
            {
                var object = results[i];
                var firstName = object.get('firstName');
				var lastName = object.get('lastName');
				var url = object.get('image').url();
                //need to display images here to mentee web network

                
                //alert(url);
                //var mentorImage = document.createElement("BUTTON");
                //mentorImage.style.backgroundImage
                
                //var mentorImage = document.createElement("img");
                
                 
                //mentorImage.height = 60;
                //mentorImage.width = 60;
				
				
				
                var label = "<br>First Name: " + firstName +"<br >Last Name: " + lastName + "<br /><br /><br /><br /><br /><br />";

				//var url = object.get('image').url();
				var buttonName = i;
				//alert(buttonName);
				$('#myNetwork').append( "<button name = "+ buttonName+" class = 'getMentor' type='submit' onclick = 'displayInfo( this , event )'><img src= "+url+ " height='30' width = '30' /></button>");
				alert("after append");
				//$('#myNetwork').append( mentorImage);
				//alert("hi ");
                document.querySelector('#myNetwork').innerHTML += label; 
                //displayInfo(1);

            }
   
        },
        error: function (error)
        {
            alert("Error: " + error.code + " " + error.message);
        }
    });
})();

function displayInfo( eventType, event)
{
	$('#displayMentorInfo').empty();
	//alert("eventType: " +eventType.name + "\n\nevet: " + event);
	var indexOfMentor = parseInt(eventType.name);
	var selectedMentor = resultsFromParse[indexOfMentor];
	var firstName = selectedMentor.get('firstName');
	var lastName = selectedMentor.get('lastName');
	var background = selectedMentor.get('background');
	var url = selectedMentor.get('image').url();
	var description = "<br>" + firstName + "<br>" + lastName + "<br><br>Background: " + background;
	//alert("Mentor Name" + selectedMentor.get('firstName'));
	$('#displayMentorInfo').append( "<img src= "+url+ " height='100' width = '100' />");
	document.querySelector('#displayMentorInfo').innerHTML += description;
	

	
}
// function display (array) {
    // $.each(array, function(i, val){ 
        // var galleryTitle=val[3],
            // gallerySize=val[2],
            // galleryDate=val[1],
            // galleryDescription=val[4];
// 
        // $('#container').append(
            // '<div id="'+array[i]+'" + <a href="#"><img src=images/'+array[i][5]+'></a></div>'
        // );
// 
        // $("#"+i).hover( 
            // function () { 
                // $(this).append('<div id="description"> +'</div>');
            // },      
            // function () { 
                // $(this).find("div:last").remove(); 
            // } 
        // );
    // });
// }
	// $("#myNetwork").hover(function()
	// {
  		// //aler("hovering over mentor:" )
  	// },function()
  	// {
  		// //alert("NEW MENTOR");
	// });
//from stack overflow trying to get button childnode index within div or name of button to get which index for which mentor to display
	   // $(document).ready(function() {
    // $(".getMentor").click(function(event) {
        // alert(event.target.id);
    // });

//https://discussions.apple.com/thread/5474320?start=180&tstart=0
//https://discussions.apple.com/message/22352505#22352505
//http://support.apple.com/kb/DL1721
//https://discussions.apple.com/message/23548999#23548999


