// Init FB SDK
window.fbAsyncInit = function() {
	FB.init({
		appId      : '1135205373203292',
		xfbml      : true,
		version    : 'v2.6'
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Called when click on FB sign up button
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

function statusChangeCallback(response) {
	//alert("ChangeCallBack was called");
	//console.log(response);
	if(response.status == 'connected') {
		updateForm();
	}
};

// Update the form with API results
function updateForm() {
	FB.api('/me?fields=first_name, last_name, email', function (response) {
		//alert("update form" + response.first_name + response.last_name + response.email);
		document.getElementsByName("fname")[0].value = response.first_name;
		document.getElementsByName("lname")[0].value = response.last_name;
		document.getElementsByName("email")[0].value = response.email;
	});
};