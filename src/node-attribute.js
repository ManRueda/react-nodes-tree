import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NodeAttribute = (props) => {
  const { value, name } = props
  return (
    <StyledSpan>
      <span className='name'>{name}</span>
      ="
      <span className='value'>{value}</span>
      "
    </StyledSpan>
  )
}

NodeAttribute.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired
}

const StyledSpan = styled.span`
  color: rgb(93, 176, 215);
  &::before {
    content: " ";
  }

  & .name {
    color: rgb(155, 187, 220);
  }

  & .value {
    color: rgb(242, 151, 102);
  }
`

export default NodeAttribute
