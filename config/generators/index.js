const containerGenerator = require('./container/index.js');
const featureGenerator = require('./feature/index.js');

module.exports = (plop) => {
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('feature', featureGenerator);
}
