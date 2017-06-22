import React from 'react'
import PropTypes from 'prop-types'
import NodeAttribute from './node-attribute'

const NodeOpenLineContent = (props) => {
  const { attrs, name } = props
  return (
    <span>
      &lt;
      <span>{name}</span>
      {attrs.map(attr => (
        <NodeAttribute key={attr.name} name={attr.name} value={attr.value} />
      ))}
      &gt;
    </span>
  )
}

NodeOpenLineContent.propTypes = {
  name: PropTypes.string.isRequired,
  attrs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.bool.isRequired
    ])
  })).isRequired
}

export default NodeOpenLineContent
