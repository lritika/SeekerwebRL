
fn.slider = {};

fn.slider.showLogin = function () {
	$("#sliderBody").animate({left: '0%'});
	$('#signupbox').hide();
	$('#loginbox').show();
	$('#signup-msg').css({"opacity": ""});
	$('#login-msg').css({"opacity":0});
};


fn.slider.showSignup = function () {
	$("#sliderBody").animate({left: '35%'});
	$('#signupbox').show();
	$('#loginbox').hide();
	$('#signup-msg').css({"opacity":0});
	$('#login-msg').css({"opacity": ""});
};