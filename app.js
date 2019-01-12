const yargs = require("yargs");

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const weatherPromise = require('./weather/weatherPromise')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "The address to check weather for",
      String: true
    }
  }).help().alias('help', 'h').argv;

var address = argv['address'];
weatherPromise.geocodeAddress(address);
geocode.geocodeAddress(argv.address, (errorMSG, results) => {
  if (errorMSG){
    console.log(errorMSG);
  } else{
    //console.log(JSON.stringify(results, undefined, 2));
    lat = results.latitude;
    lng = results.Longitude;
    weather.getWeather(lat,lng, (errorMSG, weatherResults) => {
      if (errorMSG){
        console.log(errorMSG);
      }else{
        //console.log(JSON.stringify(weatherResults,undefined,2));
        console.log(`It's currently: ${weatherResults.temperature}.\nIt feels like: ${weatherResults.apparentTemperature}`);
      }
    });
  }
});
