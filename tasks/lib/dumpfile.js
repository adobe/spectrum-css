var Transform = require('readable-stream/transform');

module.exports = new Transform({
  objectMode: true,
  transform: function(file, enc, callback) {
    console.log(file.contents.toString());
    callback(null, file);
  }
});
