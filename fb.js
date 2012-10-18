//inspired and somewhat ripped off of http://www.destructuring.net/2011/12/08/facebook-developer-notes-javascript-sdk-and-asynchronous-woes/
var fb = {
    _initialized : false,
	_runOnInit: [],
    isInitialized: function() {
        return this._initialized;
    },
    // wrap all our facebook init stuff within a function that runs post async, but is cached across the site
    init : function(){
		var appID = '353110578113913';
		var php = true;
		var channel = php ? 'http://localhost/social-bootstrap/bootstrap/channel.php' : 'http://localhost/social-bootstrap/bootstrap/channel.html';
		
        FB.init({
		  appId      : appID, // App ID
		  channelUrl : channel, // Channel File
		  status     : true, // check login status
		  cookie     : true, // enable cookies to allow the server to access the session
		  xfbml      : true  // parse XFBML
		});

		// mark that we've run through the initialization routine
		this._initialized= true;

		// if we have anything to run after initialization, do it.
		while ( this._runOnInit.length ) { (this._runOnInit.pop())(); }
	},
	run: function(f) {
		if(this._initialized)
			f();
		else
			this._runOnInit.push(f);    
	},
	handleLoginStatus : function(loginFunctions){
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				// the user is logged in and has authenticated your
				// app, and response.authResponse supplies
				// the user's ID, a valid access token, a signed
				// request, and the time the access token 
				// and signed request each expire
				var uid = response.authResponse.userID;
				var accessToken = response.authResponse.accessToken;

				if(loginFunctions.connected)
					loginFunctions.connected();
			}
			else if (response.status === 'not_authorized') {
				// the user is logged in to Facebook, 
				// but has not authenticated your app

				if(loginFunctions.not_authorized)
					loginFunctions.not_authorized();
			} else {
				// the user isn't logged in to Facebook.

				if(loginFunctions.not_connected)
					loginFunctions.not_connected();
			}
		});
	}, 
	// this is a silly debug tool , which we'll use below in an example
	event_listener_tests : function(){  
		FB.Event.subscribe('auth.login', function(response){
			console.log('auth.login');
			console.log(response);
		});
		FB.Event.subscribe('auth.logout', function(response){
			console.log('auth.logout');
			console.log(response);
		});
		FB.Event.subscribe('auth.authResponseChange', function(response){
			console.log('auth.authResponseChange');
			console.log(response);
		});
		FB.Event.subscribe('auth.statusChange', function(response){
			console.log('auth.statusChange');
			console.log(response);
		});
	}
}