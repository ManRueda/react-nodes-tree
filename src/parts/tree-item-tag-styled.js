import styled from 'styled-components'

export default (component) => styled(component)`
  & {
    position: relative;
    z-index: 0;
  }
  & .highlight{
    border-radius: 5px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    box-sizing: border-box;
    margin-left: -${props => (props.level || 0) * props.theme.levelMargin}px;
  }
  &:hover .highlight{
    background-color: ${props => props.theme.highlight.hover.color};
  }
`
