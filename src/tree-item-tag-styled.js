import styled from 'styled-components'

export default (component) => styled(component)`
  & {
    position: relative;
    z-index: 0;
    word-wrap: break-word;
    box-sizing: border-box;
  }

  &.hasChildren:before {
    box-sizing: border-box;
    -webkit-mask-image: ${props => props.theme.highlight.expand.icon};
    mask-image: ${props => props.theme.highlight.expand.icon};
    -webkit-mask-size: 1.35em 1.35em;
    mask-size: 1.35em 1.35em;
    background-color: ${props => props.theme.highlight.expand.color};
    -webkit-mask-position: 0.35em -0.10em;
    mask-position: 0.35em -0.10em;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;

    content: "";
    position: fixed;
    height: ${props => props.theme.levelMargin}em;
    width: ${props => props.theme.levelMargin}em;
    margin-left: -${props => props.theme.levelMargin}em;
  }
  &.hasChildren {
    margin-left: ${props => props.theme.levelMargin}em;
  }

  &.hasChildren.expanded::before {
    -webkit-mask-position: -0.6em -0.15em;
    mask-position:  -0.6em -0.15em;
  }

  & .highlight, & .gutter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:not(.hasChildren):not(.closeTag) {
    margin-left: ${props => props.theme.levelMargin}em;
  }

  & .highlight{
    border-radius: 5px;
    display: block;
    z-index: -1;
    box-sizing: border-box;
    margin-left: -${props => ((props.level || 0) + 1) * props.theme.levelMargin}em;*/
  }

  &:hover .highlight{
    background-color: ${props => props.theme.highlight.hover.color};
  }
`
