import React from 'react'
import styled from './tree-wrapper-styled'

const TreeWrapper = (props) => {
  return (
    <div className={props.className}>
      <ol>
        {props.children}
      </ol>
    </div>
  )
}
export default styled(TreeWrapper)
