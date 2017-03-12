
# TODO

- incorporate styling as you work with each component.
- add async via `fetch` with polyfill
- deploy to static server
- add more complex state management

---


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

### defaultProps

Now, if you want to provide defaults for props, do this:

## making the row show meaningful data

create a component for `RowDescription`
it's job will be to format the description
(and also to style it.)

we'll use string literals (or whatever they're called)

## adding a checklist

- create the checklist component (.js and .css files)
- set the proptypes

in your storybook's `index.js`

- add a new story
- manually pass in an array of stuff, anything

your `CheckList` is in charge of receiving an array of orders
and a callback.

for each order, it will produce a `Row` (using `.map`)
each of those `Row` components will receive that single callback

you can specify proptypes (noting that the array is required)
and that the default prop for the clickHandler is the locally 
defined console logger.

But, that handler could be (and will be) a function that will
modify the application's list of pending orders.


### keys

when you have a component that draws a number of childrengg/or,
and therefore acts as their parent, that component should
assign a `key` property to each of them.

the reason for this has to do with how React calculates when to
redraw part of the DOM.

to make it computationally simple for React to know what has
and hasn't been updated, it benefits greatly from having
unique keys assigned to items in a collection.
otherwise, it would burn up a lot of its time and energy
hashing individual elements and comparing those hashes, etc. etc.

## orderform

(need to fill this part out, i just kinda blew through it)

highlights:

- class component
- renders form elements
  - note that everything must be in pairs, or self-closing
- specify type, name, value, and onchange

### state

assign `this.state` in the constructor

also, let's talk about how we normally do this:
in a normal HTML form, the DOM maintains the current state.
This is not how we want to do this in React

why not?
well, the power of react is that the state of the UI, including
the values currently set in a form, should be "rehydratable"

we don't want the form elements to have to maintain their values.
those values are dictated by what is passed into those components
as props.

though it looks a lot like you're just setting the usual properties
on form elements, remember that these are actually all
React elements.

so, because each input's value is set to the value of a variable,
you need a way to accept and reflect changes.

to do that, we hook into the `onChange` handler of each one.
let's write a function that will accept the change event.
with that event, it will read out the name of the element
and the value. 

note that you can't really type into any of the fields.
or rather, you can't see that anything is changing.

let's attach a function to the onChange of the coffee input
let's build up that form slowly

in that function, output the value of `e.target.value`
this shows you the last thing you typed in there.
but the input itself doesn't show anything.

since the value of the input is dictated by the value of `this.state.currentOrder`, you'll use the `this.setState` method
to update the contents of `this.state`

the reason you don't set it directly is that `this.setState` is
async, under the hood. React will collect the various changes that will
be applied to `this.state` and then optimize redrawing the UI.

### bonus: abstract out the label/input pairs

so, you could create your own OrderFormField component
it should take a type, name, onchange, and value.

and really, this shouldn't be a bonus.



## wiring it together as an App

The App module is pretty simple.
In fact, it is very much like what you have written in your stories.

To begin, create a new App module.
Inside of it, create an App class that extends Component.

In the render method, simply return a div that contains one of
your OrderForm stories and one of your CheckList stories from
you `stories.index.js` file.

Confirm that it renders an OrderForm and a CheckList (with dummy info)

Now, add a constructor that accepts `props` calls `super(props)`

set `this.state` to an empty array.

Then add an arrow function called `_addOrder`
it should accept an order object.
inside that function, call `this.setState`

pass `_addOrder` as a prop to OrderForm

Also, pass `this.state.orders` to CheckList as its `ordersArray` prop

confirm that when you submit a new order, it gets added as a checklist item.

now, create an arrow function called `_removeOrder`
have it setState, and filter out an order that matches the id

pass this arrow function to the checklist as its `clickHandler` property.


## persisting to localstorage

## remote sync

## creating a dashboard view

### 

