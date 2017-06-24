import React from 'react'
import PropTypes from 'prop-types'

import TreeHtmlTag from './tree-html-tag'
import TreeItemName from './tree-item-name'
import TreeItemTag from './tree-item-tag'

const TreeItemTagClose = ({ name, level }) => {
  return (
    <TreeItemTag name={name} level={level}>
      <TreeHtmlTag>
        <TreeItemName name={name} close />
      </TreeHtmlTag>
    </TreeItemTag>
  )
}

TreeItemTagClose.propTypes = {
  name: PropTypes.string.isRequired
}

export default TreeItemTagClose
