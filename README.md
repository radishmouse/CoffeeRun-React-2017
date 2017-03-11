# react coffeerun

so, I could just have them copy/paste the code and show them that it renders.
but...maybe we start from scratch and show how we arrive at a similar solution.

## how low do you go?

the right answer is: "somewhere"
because, it doesn't matter.
you can always compose/decompose further as needed.

## start with a functional stateless component.

yeah, yeah at this point we just want to see something.

so, we start with a `Row`

## let's bring that into storybook, shall we?

just go ahead and comment out everything after the first two lines of `src/stories/index.js`

import in your `Row` module

## styling

so, when you do multiple rows, notice that they are rendered inline.

add a style to `Row.css` with a class and give that class
`display: block;`

then import the `Row.css` file into `Row.js`

set the `className` *not* `class`
- this is important, as react currently does
not let you use reserved words (like "class")
in your JSX.

## adding onClick

to handle events, you use attributes like
`onClick`

the value should be a function (or method) that
expects to receive an event object.

create a function called `_handleClick` that does just that. have it `console.log` the value of the event
target.

## adding props

destructure the `val` property out of the (implicit) `props` argument

set it as the `value` property

## receiving a function via props

declare a function in your story that
expects an event and prints its `target`'s `value`

pass that as the `clickHandler` prop

then update your `Row` so that:

- it destructures `clickHandler` out of the `props`
- instead of calling the local `_handleClick`, it calls `clickHandler`

## what's interesting about this...

is that your row does not know or care about what happens when it is clicked. it can display some info,
it can set its `value` to something that was passed in, and it calls a callback when clicked.

you've isolated its responsibilities to displaying some stuff and doing something when clicked.

it handles display and event handling.
but only in a very shallow way.
and that's what you want.

## propTypes

what if you wanted to make sure that `val` was always a number?
You could manually check each prop and run a number of `if/else`
clauses to make sure, but this isn't a sustainable solution over the
life of a project.

So, instead, you can use React's `propType` checking.
Here's how to do that.


### caveat: may not trigger on hot reload?

weird: had to change from `const` to `var`
then `propTypes` were checked for `let`, `const`, et. al

In any case, `propTypes` checks occur always with `class` components