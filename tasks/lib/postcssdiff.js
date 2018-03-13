var Transform = require('readable-stream/transform');
var fs = require('fs');
var postcss = require('postcss');

module.exports = function(pathFunc) {
  return new Transform({
    objectMode: true,
    transform: function(file, enc, callback) {
      // Parse input
      var modPath = pathFunc(file);

      var baseRoot = postcss.parse(file.contents);
      var modRoot = postcss.parse(fs.readFileSync(modPath));

      console.log(`Diffing ${file.path} against ${modPath}`);

      // Iterate over everything so indicies match when performing lookups with nodes[]
      modRoot.walk((modRule, ruleIndex) => {
        if (modRule.type != 'rule') {
          return;
        }

        var baseRule = baseRoot.nodes[ruleIndex];
        if (!baseRule || baseRule.type != 'rule') {
          throw new Error('Rule count mismatch');
        }

        var removeCount = 0;
        modRule.walk((modDelc, delcIndex) => {
          if (modDelc.type != 'decl') {
            return;
          }

          var baseDecl = baseRule.nodes[delcIndex + removeCount];
          if (!baseDecl || baseDecl.type != 'decl') {
            throw new Error('Rule count mismatch');
          }

          if (modDelc.value == baseDecl.value) {
            // Delete the dupe
            modDelc.remove();

            // Track how many dupes we've deleted so indicies match
            removeCount++;
          }
        });
      });

      file.contents = new Buffer(modRoot.toString());

      callback();
    }
  });
};
