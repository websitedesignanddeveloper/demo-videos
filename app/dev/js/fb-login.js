
window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
        appId: window.FB_APP_ID, // FB App ID
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
    });

    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};
var fbUserName = "";
var fbimageURL = "";
var fbName = "";
// Load the JavaScript SDK asynchronously
(function(d, s, id) {
    var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
    // alert(isOperaMini)
    if (isOperaMini) {
        $("<p>Please upgrade your browser. It doesn't support all our features.</p>").insertBefore('#fbLink');
        return;    
    }
        $('#fbLink').show();
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            // Get and display the user profile data
            getFbUserData();
        } else {
            console.log('User cancelled login or did not fully authorize.')
        }
    }, { scope: 'email' });
}
// got data
var initialized = false;

// Fetch the user profile data from facebook
function getFbUserData() {
    FB.api('/me', { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture.width(1300).height(1300)' },
        function(response) {
            // $("#fbLink").hide();
            // $('#poster').hide();
            
            pictor.data = {
                // define the data here as this will be replacement of data.json
            };

            if(!initialized && pictor.data) {
                initialized = true;
                pictor.init();
            }

            
        });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink').setAttribute("onclick", "fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="fblogin.png"/>';
    });
}