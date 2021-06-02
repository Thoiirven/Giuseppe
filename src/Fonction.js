
import myData from '/images/Secret.json';
function getSecret(){
    var fs = require('browserify-fs');
    fs.readFile(myData, 'utf8', function (err, data) {
        var test = JSON.parse(data);
        var content = test;
        return content;
    });
}