const containerGenerator = require('./container/index.js');

module.exports = (plop) => {
  plop.setGenerator('container', containerGenerator);
}
