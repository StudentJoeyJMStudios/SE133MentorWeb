Parse.initialize("eBuYMHtEfY5emBFuHzQWHDjdxRsxxw3NQIQlrl9g", "cJeb591BLAskGN9bXsgPbY1c7uxdind30MfJUMPU");

var moreParse = document.createElement('script');
moreParse.type = "text/javascript";
moreParse.src = "//www.parsecdn.com/js/parse-1.2.18.min.js";

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';

(function gatherMentors()
{
    var mentor = Parse.Object.extend("Mentors");
    var query = new Parse.Query(mentor);
    query.find(
    {
        success: function (results)
        {

            for (var i = 0; i < results.length; i++)
            {
                var object = results[i];
                //need to display images here to mentee web network

                //alert(object.id + ' - ' + object.get('firstName') + '\n' + object.get('lastName') + '\n' );
                var mentorImage = document.createElement("img");
                mentorImage.src = object.get('image').url();
                mentorImage.height = 60;
                mentorImage.width = 60;

				var firstName = object.get('firstName');
				var lastName = object.get('lastName');
				var imageString = mentorImage;
                var label = "\nFirst Name: " + firstName +
                    "\nLast Name: " + lastName + "\n";

				$('#myNetwork').append( mentorImage);
                document.querySelector('#myNetwork').innerHTML += label; 

            }
        },
        error: function (error)
        {
            alert("Error: " + error.code + " " + error.message);
        }
    });
})();





