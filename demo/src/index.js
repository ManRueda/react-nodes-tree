import React, {Component} from 'react'
import {render} from 'react-dom'

import { Tree, Node } from '../../src'

const node = {
  name: 'super-node',
  attrs: [
    { name: 'id', value: 'dada' },
    { name: 'data-name', value: 55.5 },
    { name: 'name', value: true }
  ],
  children: [{
    name: 'super-node',
    attrs: [
      { name: 'id', value: 'dada' },
      { name: 'data-name', value: 55.5 },
      { name: 'name', value: true }
    ],
    children: [{
      name: 'super-node',
      attrs: [
        { name: 'id', value: 'dada' },
        { name: 'data-name', value: 55.5 },
        { name: 'name', value: true }
      ],
      children: []
    }]
  }, {
    name: 'super-node',
    attrs: [
      { name: 'id', value: 'dada' },
      { name: 'data-name', value: 55.5 },
      { name: 'name', value: true }
    ],
    children: [{
      name: 'super-node',
      attrs: [
        { name: 'id', value: 'dada' },
        { name: 'data-name', value: 55.5 },
        { name: 'name', value: true }
      ],
      children: [{
        name: 'super-node',
        attrs: [
          { name: 'id', value: 'dada' },
          { name: 'data-name', value: 55.5 },
          { name: 'name', value: true }
        ],
        children: [{
          name: 'super-node',
          attrs: [
            { name: 'id', value: 'dada' },
            { name: 'data-name', value: 55.5 },
            { name: 'name', value: true }
          ],
          children: []
        }]
      }]
    }]
  }]
}

class Demo extends Component {
  render () {
    return <div>
      <h1>react-nodes-tree New</h1>
      <Tree node={node} />
      <h1>react-nodes-tree Old</h1>
      <Node node={node} />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
