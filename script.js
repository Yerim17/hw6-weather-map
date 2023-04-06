$(document).ready(function () {
  let apiKey = "c5c2ce8d787b1f2bb1506913e375dc3d";
  // let WeatherURL =
  //   "https://api.openweathermap.org/data/2.5/weather?q=" + 39.2904 + -76.6122 =c5c2ce8d787b1f2bb1506913e375dc3d
  let searchButton = $("#search-button");
  let displayCities = $("#Search-card");
  let cities = [];
  let city;
  $("#search-button").on("click", function(){
  var cityName = $ ("#search-city-input").val()
searchWeather(cityName)

});
  // function for current date
  function displayDate() {
    var dateEl = moment().format("DD MMMM YYYY");
    $("#current-date").text(dateEl);
  }
  displayDate();

  function getRecentInput() {
    const lastInput = localStorage.getItem("latestSearch");
    if (lastInput) {
      city = lastInput;
      searchWeather();
    }
  }

  // Function to get users input and store it into local storage
  function storeInputCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
  }

  //function for rendering buttons
  // function displayButtons() {
  //   if (cities) {
  //   }
  // }

    function searchWeather(cityName) {
      
      $.ajax({
        url:
          "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&units=imperial&appid=915689ad0447cc832e74563ad3f9a509",
        type: "get",
        success: function(res){
          console.log(res)
          $("#temp").text(res.main.temp)
          $("#wind").text(res.wind.speed)
          $("#humidity").text(res.main.humidity)
        }

      });
    }
});