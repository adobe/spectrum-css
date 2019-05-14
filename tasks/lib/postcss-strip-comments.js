const postcss = require('postcss');

module.exports = postcss.plugin('postcss-strip-comments', (opts = {}) => {
  return css => {
    css.walk(node => {
      if (node.type === 'comment') {
        if (node.text.trim().indexOf('topdoc') === 0 && opts.preserveTopdoc) {
          return;
        }

        // Get a refernce to the parent before the node is removed
        let parent = node.parent;

        node.remove();

        // If the comment was the last thing left in its parent, remove the parent
        if (parent && parent.nodes && parent.nodes.length === 0) {
          parent.remove();
        }
        return;
      }
    });
  };
});