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
          var lon = res.coord.lon
          var lat = res.coord.lat
          search5dayweather(lon,lat)
        }

      });
    }
});
function search5dayweather(lon,lat) {
      
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon="+ lon+"&appid=915689ad0447cc832e74563ad3f9a509&units=imperial",
    type: "get",
    success: function(res){
      console.log(res)
      for (var i =0;i <res.list.length; i+=8){
        $("#day-1-temp").text("humidity: " +res.list[0].main.humidity)

        $("#day-2-temp").text(res.list[8].main.temp)
        $("#day-3-temp").text(res.list[16].main.temp)
        $("#day-4-temp").text(res.list[24].main.temp)
        $("#day-5-temp").text(res.list[32].main.temp)
      }
      
    }

  });
}

