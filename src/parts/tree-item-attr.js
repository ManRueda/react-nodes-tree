import React from 'react'
import PropTypes from 'prop-types'
import styled from './tree-item-attr-styled'

const TreeItemAttr = ({ value, name, className }) => {
  return (
    <span className={className}>
      <span className='name'>{name}</span>=​"
      <span className='value'>{value}</span>"
    </span>
  )
}

TreeItemAttr.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired
}

export default styled(TreeItemAttr)
