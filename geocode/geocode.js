const request = require("request");

var geocodeAddress = (address, callback) => {
var encoded = encodeURIComponent(address)+"&format=json";

//console.log(`https://us1.locationiq.com/v1/search.php?key=pk.7985cf74c33d8156e3b85a180ab24255&q=${encoded}`);
request({
  url: `https://us1.locationiq.com/v1/search.php?key=pk.7985cf74c33d8156e3b85a180ab24255&q=${encoded}`,
  json: true
},
(error, response, body) => {
  // console.log(JSON.stringify(body,undefined,2));
  if (error){
    callback("ERROR, ERROR, ERROR with the server");
  } else if (body.error === "Unable to geocode"){
    callback("Unable to find address");
  } else {
    callback(undefined, {
    address: body[0].display_name,
    latitude: body[0].lat,
    Longitude: body[0].lon
  });
  }
}
)};
module.exports = {
  geocodeAddress
};
