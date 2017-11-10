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

One thing I don't like so much about react-boilerplate is that the
default setup is to have all slices of the Redux state correspond to
pages in the app. This can be worked around, but I'd rather organize
state from the start based on how the data fits conceptually into the
app, and not based on where the user is most likely to see that data.

