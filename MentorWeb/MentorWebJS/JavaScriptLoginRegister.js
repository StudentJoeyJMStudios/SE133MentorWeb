Parse.initialize("eBuYMHtEfY5emBFuHzQWHDjdxRsxxw3NQIQlrl9g", "cJeb591BLAskGN9bXsgPbY1c7uxdind30MfJUMPU");
var moreParse = document.createElement('script');
moreParse.type = "text/javascript";
moreParse.src = "//www.parsecdn.com/js/parse-1.2.18.min.js";
//<script type="text/javascript" src="http://www.parsecdn.com/js/parse-1.2.18.min.js"></script>

    
function login(username, password)
{
	
		event.preventDefault();//without this everything doesnt work get error code 100 because of async
		//alert("hello! in the JS file LOGIN: " + username + "\nPassword: " + password);
		Parse.User.logIn(username, password,
		{
		  	success: function(user) 
		  	{
		    	//alert("Success");
		    	window.location.href = 'MainMenu.html';
		  	},
		  	error: function(user, error) 
		  	{
		    alert("Error in LOGIN: " + error.code + "\n\nwhat is the error \n\n " + error.message);

		  	}
		});
		
	
}
function Register(username, password, email)
{
	
 		event.preventDefault();
		//alert("Username IN REGISTER: " + username + "\nPassword:" + password  + "\nemail: " + email);
		var user = new Parse.User();
		user.set("username", username);
		user.set("password", password);
		user.set("email", email);
		//alert("MAKE SURE PARse WORKS parse user object: " + user);//comment to make sure parse is still working properly
		user.signUp(null, {
			  success: function(user) {
			    // Hooray! Let them use the app now.
			    //alert("SUCCESS " );//comment to make sure parse is still working properly
			    window.location.href = 'MainMenu.html';
					
			  },
			  error: function(user, error) {
			    // Show the error message somewhere and let the user try again.
			    alert("Error: " + error.code + " " + error.message);
			  }
			});	
			
};