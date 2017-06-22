import React, {Component} from 'react'
import PropTypes from 'prop-types'
import NodeAttribute from './node-attribute'
import { NodeOL, NodeLI, NodeTagNameSpan, NodeChildrenOL, NodeChilLI, NodeFullRow } from './node-styled'

class Node extends Component {
  render () {
    const { name, attrs, children } = this.props.node
    return (
      <NodeOL>
        <NodeLI>
          <NodeFullRow level={this.props.level} />
          &lt;
          <NodeTagNameSpan>
            {name}
          </NodeTagNameSpan>
          &#32;
          {attrs.map(attr => (
            <NodeAttribute key={attr.name} name={attr.name} value={attr.value} />
          ))}
          &gt;
        </NodeLI>
        {children && children.length > 0 && <NodeLI>
          <NodeChildrenOL>
            {children.map((child, i) => (
              <NodeChilLI key={i}>
                <Node node={child} level={this.props.level + 1} />
              </NodeChilLI>
            ))}
          </NodeChildrenOL>
        </NodeLI>}
        <NodeLI>
          <NodeFullRow level={this.props.level} />
          &lt;
          <span>/{name}</span>
          &gt;
        </NodeLI>
      </NodeOL>
    )
  }
}

const nodeProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  attrs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.bool.isRequired
    ])
  })).isRequired,
  children: PropTypes.arrayOf(PropTypes.object)
})

Node.propTypes = {
  node: nodeProps.isRequired,
  level: PropTypes.number
}

Node.defaultProps = {
  level: 0
}

export default Node
