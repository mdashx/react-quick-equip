module.exports = {
  description: 'Create a new feature',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What is the features\'s name?',
  }],
  actions: [
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/constants.js',
      templateFile: './feature/constants.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/actions.js',
      templateFile: './feature/actions.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/actions.test.js',
      templateFile: './feature/actions-test.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/reducer.js',
      templateFile: './feature/reducer.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/reducer.test.js',
      templateFile: './feature/reducer-test.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/selectors.js',
      templateFile: './feature/selectors.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/selectors.test.js',
      templateFile: './feature/selectors-test.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/sagas.js',
      templateFile: './feature/sagas.hbs.js',
    },
    {
      type: 'add',
      path: '../../src/features/{{lowerCase name}}/sagas.test.js',
      templateFile: './feature/sagas-test.hbs.js',
    }
  ]
}
