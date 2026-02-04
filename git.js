const fs = require('fs');
fs.writeFileSync('kashish.txt', 'Hello, World!', function(err){
if (err) {
    return console.log(err);
    console.log('File created successfully');

}
});
const fs = require('fs');
fs.appendFile('kashish.txt', '\nThis is appended text.', function (err) {
    if (err) {
        console.log("errors");
    } else {
        console.log('Text Appended!');
    }
});
const fs = require('fs');
fs.rename('kashish.txt', 'kashish_rename.txt', function(err) {
    if (err) {
        console.log("errors");
    } else {
        console.log('File Renamed!');
    }
});
fs.unlink('kashish_rename.txt', function(err) {
    if (err) {
        console.log("errors");
    } else {
        console.log('File Deleted!');
    }
});
console.log("hiiii");
