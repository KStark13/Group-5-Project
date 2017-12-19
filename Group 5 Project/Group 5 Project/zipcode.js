//fuction to put html to display
function displayWeatherInfo() {
	var zipCodeSearch = $(this).attr("data-name");
	var queryURL = "http://api.wunderground.com/api/a2bdd3389a6bb0c6/hourly/q/" + zipcode;
//creating an ajax call for specific info
	$.ajax({
          url: queryURL,
          method: "GET"
          })
		.done(function(response) {
//creating a div to hold the zipcode
    	var zipDiv = $("<div class ='zipcode'");
//storing the forecast data
   		 var forecast = response.hourly_forecast;
//creating an element to display forecast
   		 var pOne = $("<p>").html(forecast);
//displaying forecast
   			zipcode.append(pOne);
//putting zipcode info in
   		$("#forecastOutput").html(zipcode);
   		});

};

//click fuction
$("#zipcodeSearch").on("click", function(event)){
	var zipcode = $("#zipcodeInput").val().trim();
};
//adding listener for zipcode
$(document).on("click", ".zipcode" displayWeatherInfo);