// Run the exercise with:
// node src/6_http.js "https://www.codium.team"

var rp = require('request-promise');
rp(process.argv[2])
.then(function(htmlString) {
    console.log(htmlString.substring(0, 200));
})
.catch(function(err) {
    console.log('It cannot be retrieve the webpage');
});
