import React from 'react'

const TreeHtmlTag = ({children}) => {
  return (
    <span>
      &lt;
      {children}
      &gt;
    </span>
  )
}

export default TreeHtmlTag
