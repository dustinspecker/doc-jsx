'use strict'
import jsdom from 'jsdom'
import test from 'ava'

import element from '../lib/'

global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>')
global.window = document.defaultView

test('creates div node with text node and children array', t => {
  const div = element('div', {class: 'hello class'}, ['bye'])

  t.is(div.tagName, 'DIV')
  t.is(div.getAttribute('class'), 'hello class')

  const [child] = div.childNodes
  t.is(child.nodeName, '#text')
  t.is(child.nodeValue, 'bye')
})

test('supports adding children as rest args', t => {
  const div = element('div', {},
    element('button', {}, 'hello'),
    element('a', {href: 'google.com'}, 'google.com')
  )

  t.is(div.childNodes.length, 2)
  const [button, a] = div.childNodes
  t.is(button.childNodes[0].nodeValue, 'hello')
  t.is(a.getAttribute('href'), 'google.com')
  t.is(a.childNodes[0].nodeValue, 'google.com')
})

test('handles attach event listeners', t => {
  let callCount = 0
  const func = () => callCount++
  const button = element('button', {onClick: func})

  button.click()

  t.is(callCount, 1)
})
