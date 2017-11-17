# react-quick-equip
Yet another ReactJS starter kit. Built for my specific use cases,
based on many hours of experience building with react-boilerplate.

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

## Differences from react-boilerplate

This starter kit uses a feature oriented directory structure, but the
containers and components remain separate from the Redux features.

There are no plans to inject reducers and sagas dynamically... if that
happens at all, it will not be the default behavior.

## Boilerplate Generation

### Container Boilerplate
`npm new container` creates a new directory named after the component,
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
