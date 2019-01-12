var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://us1.locationiq.com/v1/search.php?key=pk.7985cf74c33d8156e3b85a180ab24255&q=1301%20lombard%20street%20philadelphia&format=json",
  "method": "GET"
}
const request = require("request");
request({
  url: "https://us1.locationiq.com/v1/search.php?key=pk.7985cf74c33d8156e3b85a180ab24255&q=1301%20lombard%20street%20philadelphia&format=json",
  json: true
}, (error, response, body) => {
  console.log(JSON.stringify(error, undefined, 2));
});
//$.ajax(settings).done( (response) => console.log(response));
