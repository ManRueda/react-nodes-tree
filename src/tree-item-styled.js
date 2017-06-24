import styled from 'styled-components'

export default (component) => styled(component)`
  & {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.font.color};
    font-size: ${props => props.theme.font.size};
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
  ol > * {
    margin-left: ${props => props.theme.levelMargin}em;
  }
  li {
    list-style-type: none;
  }
`
