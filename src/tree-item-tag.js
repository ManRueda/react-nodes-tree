import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TreeItemHighlight from './tree-item-highlight'
import TreeItemGutter from './tree-item-gutter'
import TreeItemName from './tree-item-name'
import TreeItemAttr from './tree-item-attr'
import TreeHtmlTag from './tree-html-tag'

import styled from './tree-item-tag-styled'

const TreeItemTag = (props) => {
  const { name, attrs, expanded, hasChildren, children, className, closeTag } = props
  return (
    <li
      className={classnames({ [className]: true, expanded, hasChildren, closeTag })}
      onClick={(event) => beforeSectionClick(event, props)}>
      <TreeItemHighlight />
      <TreeItemGutter />
      {children && <span>{children}</span>}
      {!children && <span>
        <TreeHtmlTag>
          <TreeItemName name={name} />
          {attrs.map(attr => (
            <TreeItemAttr key={attr.name} name={attr.name} value={attr.value} />
          ))}
        </TreeHtmlTag>
        {!expanded && hasChildren && <span>...</span>}
        {(!expanded || !hasChildren) && <TreeHtmlTag>
          <TreeItemName name={name} close />
        </TreeHtmlTag>}
      </span>}
    </li>
  )
}

function beforeSectionClick (event, props) {
  if (event.relatedTarget === null && props.onArrowClick) {
    props.onArrowClick()
  }
}

TreeItemTag.propTypes = {
  name: PropTypes.string.isRequired,
  attrs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.bool.isRequired
    ])
  })),
  expanded: PropTypes.bool,
  hasChildren: PropTypes.bool
}
TreeItemTag.defaultProps = {
  attrs: [],
  expanded: true,
  hasChildren: false
}

export default styled(TreeItemTag)
