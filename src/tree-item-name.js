import React from 'react'
import PropTypes from 'prop-types'

const TreeItemName = (props) => {
  const { name, close } = props
  return (
    <span>{close ? '/' : ''}{name}</span>
  )
}

TreeItemName.propTypes = {
  name: PropTypes.string.isRequired,
  close: PropTypes.bool
}

export default TreeItemName
