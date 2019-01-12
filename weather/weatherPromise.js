const request = require("request");

var geocodeAddress = (address) => {
  return new Promise((resolve,reject) => {
    var encoded = encodeURIComponent(address)+"&format=json";

    request({
      url: `https://us1.locationiq.com/v1/search.php?key=pk.7985cf74c33d8156e3b85a180ab24255&q=${encoded}`,
      json: true
    }, (error, response, body) => {
      if (error){
        reject("ERROR, ERROR, ERROR with the server");
      } else if (body.error === "Unable to geocode" || body == null){
        reject("Unable to find address");
      } else {
        resolve( {
        address: body[0].display_name,
        latitude: body[0].lat,
        Longitude: body[0].lon
      });
      }
    });
  });
};


geocodeAddress('Alcatraz Island San Francisco').then((answer) => {
  console.log(JSON.stringify(answer,undefined,2));
}, (errorMSG) => {
  console.log(errorMSG);
});

module.exports = {
  geocodeAddress
}
