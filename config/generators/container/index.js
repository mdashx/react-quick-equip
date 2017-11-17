module.exports = {
  description: 'Create a new container',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What is the container\'s name?',
  }],
  actions: [{
    type: 'add',
    path: '../../src/containers/{{properCase name}}/index.js',
    templateFile: './container/container.hbs.js',
  }, {
    type: 'add',
    path: '../../src/containers/{{properCase name}}/index.test.js',
    templateFile: './container/container-test.hbs.js',
  }]
}
