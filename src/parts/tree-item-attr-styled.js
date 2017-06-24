import styled from 'styled-components'

export default (component) => styled(component)`
  &::before {
    content: " ";
  }

  & .name {
    color: ${props => props.theme.attr.name.color};
  }

  & .value {
    color: ${props => props.theme.attr.value.color};
  }
`
