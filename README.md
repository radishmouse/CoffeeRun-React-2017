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

