import React from 'react'
import PropTypes from 'prop-types'

const NodeCloseLineContent = (props) => {
  const { name } = props
  return (
    <span>
      &lt;
      <span>/{name}</span>
      &gt;
    </span>
  )
}

NodeCloseLineContent.propTypes = {
  name: PropTypes.string.isRequired
}

export default NodeCloseLineContent
