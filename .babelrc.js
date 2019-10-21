const env = require("./env-config");

module.exports = {
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["transform-define", env],
    "@babel/plugin-transform-runtime"
  ]
}
