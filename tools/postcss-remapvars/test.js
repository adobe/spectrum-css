const fs = require('fs');
const test = require('ava');
const postcss = require('postcss');
const plugin = require('./index.js');

function compare(t, fixtureFilePath, expectedFilePath, options = {}){
  return postcss([ plugin(options) ])
    .process(
      readFile(`./fixtures/${fixtureFilePath}`),
      { from: fixtureFilePath }
    )
    .then(result => {
      const expected = result.css;
      const actual = readFile(`./expected/${expectedFilePath}`);
      t.is(expected, actual);
      t.is(result.warnings().length, 0);
    });
}

function readFile(filename) {
  return fs.readFileSync(filename, 'utf8');
}

test('remap with find and replace', t => {
  return compare(t, 'find-replace.css', 'find-replace.css');
});

test('support regexp', t => {
  return compare(t, 'regexp.css', 'regexp.css');
});

test('support filter', t => {
  return compare(t, 'filter.css', 'filter.css');
});

test('support a list of filters', t => {
  return compare(t, 'filter-list.css', 'filter-list.css');
});

test('support a list of filters with regex', t => {
  return compare(t, 'filter-list-regex.css', 'filter-list-regex.css');
});
