# doc-jsx
[![NPM version](https://badge.fury.io/js/doc-jsx.svg)](https://badge.fury.io/js/doc-jsx) [![Build Status](https://travis-ci.org/dustinspecker/doc-jsx.svg)](https://travis-ci.org/dustinspecker/doc-jsx) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/doc-jsx.svg)](https://coveralls.io/r/dustinspecker/doc-jsx?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/doc-jsx/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/doc-jsx) [![Dependencies](https://david-dm.org/dustinspecker/doc-jsx.svg)](https://david-dm.org/dustinspecker/doc-jsx/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/doc-jsx/dev-status.svg)](https://david-dm.org/dustinspecker/doc-jsx/#info=devDependencies&view=table)

> A JSX pragma for document

## Install
```
npm install --save doc-jsx
```

## Usage with JSX
```javascript
/** @jsx element */
// JSX PRAGMA MUST BE THE SAME NAME AS THE IMPORT FROM 'doc-jsx'
import element from 'doc-jsx'

const handleClick = () => alert('Hello!')

const component = (
  <div class='hi'>
    <button onClick={handleClick}>Click Me!</button>
    <a href='google.com'>Google</a>
  </div>
)

// need to manually insert into DOM
document.querySelector('body').appendChild(component)
```

## Usage with [dscript](https://github.com/dustinspecker/dscript)
```javascript
import dscript from 'dscript'
import element from 'docs-jsx'

const {a, button, div} = dscript(element)

const handleClick = () => alert('Hello!')

const component = (
  div('.hi', [
    button({onClick: handleClick}, ['Click Me!']),
    a({href: 'google.com'}, ['Google'])
  ])
)

// need to manually insert into DOM
document.querySelector('body').appendChild(component)
```

## Usage with [dscript-doc](https://github.com/dustinspecker/dscript-doc)
```javascript
import {a, button, div} from 'dscript-doc'

const handleClick = () => alert('Hello!')

const component = (
  div('.hi', [
    button({onClick: handleClick}, ['Click Me!']),
    a({href: 'google.com'}, ['Google'])
  ])
)

// need to manually insert into DOM
document.querySelector('body').appendChild(component)
```

## API
### element(tag, attrs, children)

#### tag

type: `string`

The tag name of the element to create. For example, 'div' or 'button'.

#### attrs

type: `object`

An object of attributes and event handlers to attach to the created element.

#### children

type: `array[Element]` | `...Element`

A list of Elements to append to the created element. If a child is a `string`, then it will be appended as a text node.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
