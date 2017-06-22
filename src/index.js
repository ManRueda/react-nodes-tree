import React, {Component} from 'react'
import Node from './node'

export default class extends Component {
  render () {
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
    return <div>
      <Node node={node} />
    </div>
  }
}
