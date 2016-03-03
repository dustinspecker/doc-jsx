'use strict'

/**
 * Flatten an array by a depth of 1
 *
 * @param {Array[]} array - An array potentially having array elements
 * @return {Array} - A flattened array
 */
const flattenArray = array => array.reduce((a, b) => a.concat(b), [])

/**
 * Create a DOM element or text node
 *
 * @example element('div', {class: 'red', onClick: () => alert('hi')}, 'click me!')
 *
 * @param {String} tag - DOM tag name
 * @param {Object} attrs - attributes to attach to created element
 * @param {...Element | Element[]} children - A list of children to append to created element
 *
 * @return {Element} - a DOM element
 */
module.exports = (tag, attrs, ...children) => {
  const element = document.createElement(tag)

  Object.keys(attrs).forEach(attr => {
    if (typeof attrs[attr] === 'function') {
      // convert `onClick`, etc. to `click`
      const eventName = attr.slice(2).toLowerCase()
      element.addEventListener(eventName, attrs[attr])
    } else {
      element.setAttribute(attr, attrs[attr])
    }
  })

  flattenArray(children).forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child))
    } else {
      element.appendChild(child)
    }
  })

  return element
}
