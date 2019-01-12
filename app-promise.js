const yargs = require("yargs");
const axios = require("axios");



const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "The address to check weather for",
      String: true
    }
  }).help().alias('help', 'h').argv;

  var encoded = encodeURIComponent(argv.address)+"&format=json";
  var geocodeUrl = `https://us1.locationiq.com/v1/search.php?key=pk.7985cf74c33d8156e3b85a180ab24255&q=${encoded}`;
  axios.get(geocodeUrl).then((response) =>{
    if (response.data[0].status === "Unable to geocode") {
      throw new Error("Unable to geocode")
    }

    var lat = response.data[0].lat;
    var lng = response.data[0].lon;
    var weatherURL = `https://api.darksky.net/forecast/2b5eda20a14fea494180976da9e67cc8/${lat},${lng}?units=us`
    return axios.get(weatherURL);
  }).then((response2) => {
    var temperature = response2.data.currently.temperature;
    var apparentTemperature = response2.data.currently.apparentTemperature;
    console.log(`It's like ${temperature}, but feels like ${apparentTemperature}`);
  }).catch((e) => {
    console.log("ERROR ERROR ERROR");
  });
