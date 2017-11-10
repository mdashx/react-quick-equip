# react-quick-equip
Yet another ReactJS starter kit. Built for my specific use cases,
based on many hours of experience building with react-boilerplate.

### Adding Data Attributes Vs Binding Click Handlers
Instead of creating a `data-username` attribute on the ListUser <li>
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
