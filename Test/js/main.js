//main.js

var app = {};



//functions
var fn = {};
fn.gen = {};
fn.main = {};

fn.main.initExec = function() {
	fn.main.loadAll();
};

fn.main.loadAll = function() {

	$("#main").append(fn.main.loadHtml("html/main.html"));
	$("#slider").append(fn.main.loadHtml("html/slider.html"));
	$("#sliderData").append(fn.main.loadHtml("html/signin.html"));
	$("#sliderData").append(fn.main.loadHtml("html/signup.html"));
	console.log("All html loaded");
	
};

fn.main.loadHtml = function (htmlUrl) {
	var response;
	$.ajax({ type: "GET",   
	     url: htmlUrl,   
	     async: false,
	     success : function(text)
	     {
	         response = text;
	     }
	});
	return response;
};


//first execution
$(document).ready(function() {
	fn.main.initExec();
});