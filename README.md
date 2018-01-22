# react-quick-equip
Yet another ReactJS starter kit.

## Getting Started

Before using `npm run start` to run a dev server, you need to run `npm
run build:dll` to make the DLLs available.

## Coding Conventions

### Adding Data Attributes Vs Binding Click Handlers
Instead of creating a `data-username` attribute on the ListUser `<li>`
element, we could just bind the username value we want, like this:
   
       clickHandler={() => this.props.lookupUsername(username)}

But then we're creating a new function for every username that we
list, so I usually create the attribute on the DOM element instead,
for the sake of performance.

### ImmutableJS
We use ImmutableJS because Redux requires that the state object should
not be changed. Without an immutable library, we'd need to use
`Object.assign()` to create copies of the state object. ImmutableJS
handles making these copies in a more performant way then we would do
naively with just `Object.assign()`.

### Saga Testing

To keep things simple and somewhat useful, we just test that the final
effect yielded by the saga matches what we expect the final effect to
be. We can look at what type of effect (call, put, select, etc.) is
yielded, or look at the argument to the effect (the action, the type
field of the action, the function that is called, etc.), or we can
stringify the entire effect and compare to a known correct value. The
appropriate test value depends on the complexity of the saga.

The goal is to just have a really simple test to make sure the saga
runs. By nature, the sagas are all about creating side effects which
means testing them fully involves setting up a complete mock
environment and it's just not worth the effort. If it becomes worth
the effort, then we'll look into it more.

## Differences from react-boilerplate

This starter kit uses a feature oriented directory structure, but the
containers and components remain separate from the Redux features.

There are no plans to inject reducers and sagas dynamically... if that
happens at all, it will not be the default behavior.

## Boilerplate Generation

### Container Boilerplate
`npm run new container` creates a new directory named after the component,
with an `index.js` and `index.test.js` file. 

The `index.js` file contains a React component that is connected to
the Redux store. The component boilerplate uses the
`class... extends...` syntax and includes placeholder code for
`mapStateToProps`, `mapDispatchToProps`, and the related `import`
statements. The boilerplate code exports both the component class (for
testing) and the connected component (what we actually use in the
app). 

The `index.test.js` file creates two basic unit tests, one test just
makes sure that the component renders, and the other tests creates a
snapshot test of the component using `react-test-renderer`.

### Feature Boilerplate
`npm run new feature` creates a new directory named after the feature,
with files for the constants, actions, reducer, selectors and sagas, and
basic unit tests for each. The features come with a values named
"default" which should be replaced.

### Theming
Instead of doing something similar to the CSS Modules example:
https://github.com/css-modules/css-modules/blob/master/docs/theming.md
we just handle theming by overwriting the shared CSS files before
building.

This means that components are not aware of themes and there's no
ability for a user to change themes.
