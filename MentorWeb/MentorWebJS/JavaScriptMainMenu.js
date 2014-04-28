Parse.initialize("eBuYMHtEfY5emBFuHzQWHDjdxRsxxw3NQIQlrl9g", "cJeb591BLAskGN9bXsgPbY1c7uxdind30MfJUMPU");


//all parse stuff will need to get rid of


var moreParse = document.createElement('script');
moreParse.type = "text/javascript";
moreParse.src = "//www.parsecdn.com/js/parse-1.2.18.min.js";

//google hangouts button scripts api id = AIzaSyByDiwi_Asyvc6geenUFU5O5r44TotKVak
var GOOGLE_APP_ID = "AIzaSyBz_Mwq2MHehSJ_HepAeToEx0nQiC4U_Yg";
var googleHangout = document.createElement('script');
googleHangout.src = 'https://apis.google.com/js/platform.js';
googleHangout.type = 'text/javascript';

//jquery script need to keep
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';

var resultsFromParse =new Array;//global array to hold all the users mentors 
//(function gatherMentors()//function to gather user mentors from database


window.onload = function initializeMentorWebInformation()
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
        userProfileInfo();
  	}
	});
	
	//function call to display user profile information 
};//for using the window.onload thing
//})();
//window.onload = function userProfileInfo()//function to display user's profile information in the user profile slide, logic needs to stay the same
function userProfileInfo()//function to display user's profile information in the user profile slide, logic needs to stay the same
{
	var currUser = Parse.User.current();
	//alert("FirstNam: " + currUser.get('firstName'));
	
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
	
	//$('#userProfileInfo').innerHTML = "what the fluck";
	document.querySelector('#userProfileInfo').append(label );
	//document.querySelector('#userProfileInfo').innerHTML = label ;
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
	
	var description = "<br>" + firstName + "<br>" + lastName + "<br><br>Background: " + background  ;
	
	// <g:hangout render="createhangout" initial_apps="[{ app_id : '184219133185', start_data : 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]"></g:hangout>
	
	
	
	$('#displayMentorInfo').append( "<img src= "+url+ " height='135' width = '150' />");
	
	document.querySelector('#displayMentorInfo').innerHTML += description;
		
}

//google hangout into an iframe possibly
function googleHangoutFunction()
{
	//+ "<br><br><g:hangout render='createhangout' initial_apps='[{ app_id : " + 
	//			GOOGLE_APP_ID + ", start_data : 'dQw4w9WgXcQ', 'app_type': 'ROOM_APP' }]'>mm</g:hangout>" + googleHangoutFunction()
	gapi.client.setApiKey(GOOGLE_APP_ID);
	gapi.client.load('hangouts', 'v1', null);
	googleHangout.gapi.hangout.render('hangout', {
    'render': 'createhangout',
    'initial_apps': [{'app_id' : GOOGLE_APP_ID, 'start_data' : 'hangout', 'app_type' : 'ROOM_APP' }],
    'widget_size': 175
  });
}


//http://stackoverflow.com/questions/19538311/how-can-i-integrate-a-video-conferencing-solution-using-google-hangout-api
//http://vsee.com/api  downloaded something too


//messaging : https://github.com/oyvindkinsey/easyXDM/blob/master/README.md
//http://blog.teamtreehouse.com/cross-domain-messaging-with-postmessage
//https://www.youtube.com/watch?v=Al4SbeVyLm4&feature=youtu.be


