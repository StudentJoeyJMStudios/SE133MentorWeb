Parse.initialize("eBuYMHtEfY5emBFuHzQWHDjdxRsxxw3NQIQlrl9g", "cJeb591BLAskGN9bXsgPbY1c7uxdind30MfJUMPU");


//all parse stuff will need to get rid of


var moreParse = document.createElement('script');
moreParse.type = "text/javascript";
moreParse.src = "//www.parsecdn.com/js/parse-1.2.18.min.js";

//jquery script need to keep
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';

var resultsFromParse =new Array;//global array to hold all the users mentors 
(function gatherMentors()//function to gather user mentors from database
{
	var currUser = Parse.User.current();//parse call to get the current logged in user
	var relation = currUser.relation("userMentors");//relation setup to gather all the user's mentors
	
	relation.query().find({//query call to find all the users mentors and store them into a list as parse object, will need to be mentor objects
  	success: function(list) 
  	{
  		resultsFromParse = list;//copy the mentors list into the global array for use
    	
    	for (var i = 0; i < list.length; i++)//for loop logic to get the mentor info from each mentor object logic will need to be the same
        {
        	    
        		var object = list[i];
                var firstName = object.get('firstName');
				var lastName = object.get('lastName');
				if(object.get('image') == null)
				{
					
					var url = '/MentorWeb/MentorWeb/images/eclipse_update_120.jpg';
				}
				else
				{
					var url = object.get('image').url();
				}
				var label = "<br>First Name: " + firstName +"<br >Last Name: " + lastName + "<br /><br /><br /><br /><br />";
				//create string to display content
				var buttonName = i;
				$('#myNetwork').append( "<button name = "+ buttonName+" class = 'getMentor' type='submit' onclick = 'displayInfo( this , event )'><img src= "+url+ " height='60' width = '60' /></button>");
				//display content to iframe MenteeNetwork.html
				
                document.querySelector('#myNetwork').innerHTML += label;
        }
  	}
	});
	
	userProfileInfo(currUser);//function call to display user profile information 
	
})();
function userProfileInfo(currUser)//function to display user's profile information in the user profile slide, logic needs to stay the same
{
	$('#userProfileInfo').empty();
	
	var firstName = currUser.get('firstName');
	var lastName = currUser.get('lastName');
	if(currUser.get('image') == null)
	{
					
		var url = '/MentorWeb/MentorWeb/images/eclipse_update_120.jpg';
	}
	else
	{
		var url = currUser.get('image').url();
	}
	var label = "<br>First Name: " + firstName +"<br >Last Name: " + lastName + "<br />";

	document.querySelector('#userProfileInfo').append(label );
	document.querySelector('#userProfileInfo').innerHTML = label ;
}
function displayInfo( eventType, event)//when user selects what mentor they want to look at then need to get mentor from global array and gather information to display
{
	$('#displayMentorInfo').empty();
	
	var indexOfMentor = parseInt(eventType.name);
	var selectedMentor = resultsFromParse[indexOfMentor];
	var firstName = selectedMentor.get('firstName');
	var lastName = selectedMentor.get('lastName');
	var background = selectedMentor.get('background');
	
	if(selectedMentor.get('image') != null)
	{
		var url = selectedMentor.get('image').url();
	}
	else
	{
		var url = '/MentorWeb/MentorWeb/images/eclipse_update_120.jpg';
	}
	
	var description = "<br>" + firstName + "<br>" + lastName + "<br><br>Background: " + background;
	
	$('#displayMentorInfo').append( "<img src= "+url+ " height='135' width = '150' />");
	
	document.querySelector('#displayMentorInfo').innerHTML += description;
		
}

