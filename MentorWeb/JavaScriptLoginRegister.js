function login(username, password)
{
	alert("ALERT!!");
	Parse.User.logIn(username, password,
	{
	  	success: function(user) 
	  	{
	    	// Do stuff after successful login.
	  	},
	  	error: function(user, error) 
	  	{
	    // The login failed. Check error to see why.
	  	}
	});
}
