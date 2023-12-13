const fs = require("fs");

const postcss = require("postcss");

/**
 * @todo This should likely be a postcss plugin
 *
 * @description This reads the leading metadata from a CSS file
 * @param {string} from - The path to the CSS file
 * @returns {{[key: string]: string|string[]}}
 */
module.exports = function (from) {
  if (!from || !fs.existsSync(from)) return;
  let ret;

  // Check the file for it's leading metadata
  const content = fs.readFileSync(from, "utf8");
  const root = postcss.parse(content, { from });
  root.walkComments((comment) => {
    if (!comment.text.startsWith("*")) return;
    const lines = comment.text.split("\n");
    if (!lines.length) return;

    ret = lines.reduce((acc, line) => {
      const keyword = line.match(/@([a-z]+)\s/)?.[1];
      if (!keyword) return acc;
      let value = line.replace("*", "").replace(`@${keyword}`, "").replace(/\s+/, " ").trim();
      if (!value) return acc;
      if (value.includes(",")) value = value.split(",").map((v) => v.trim());
      acc[keyword] = value;
      return acc;
    }, {});
  });

  return ret;
};
