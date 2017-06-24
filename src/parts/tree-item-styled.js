import styled from 'styled-components'

export default (component) => styled(component)`
  & {
    margin-left: ${props => props.theme.levelMargin}px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.font.color};
    font-family: ${props => props.theme.font.family};
  }
  * {
    box-sizing: border-box;
  }
  ol {
    z-index: 0;
    display: block;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
`
