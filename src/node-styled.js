import styled from 'styled-components'
import treeoutlineRriangles from './assets/treeoutline-triangles.png'

export const HighlightLine = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  box-sizing: border-box;
  margin-left: -${props => props.level * 12}px;
`
export const StyledOL = styled.ol`
  color: rgb(93, 176, 215);
  background-color: #242424;
  font-size: 12px;
  font-family: Consolas, Lucida Console, Courier New, monospace;
  z-index: 0;
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;

  & > li {
    word-wrap: break-word;
    position: relative;
    box-sizing: border-box;

    &:hover > div {
      background-color: rgb(54, 54, 54);
      border-radius: 5px;
    }
    &:focus > div {
      background-color: rgb(199, 134, 38);
    }

    &.opened::before, &.closed::before{
      -webkit-mask-image: url(${treeoutlineRriangles});
      mask-image: url(${treeoutlineRriangles});
      -webkit-mask-size: 32px 24px;
      mask-size: 32px 24px;
      background-color: rgb(145, 145, 145);
      color: transparent;
      content: '\00A0\00A0';
      margin-right: -3px;
    }
    &.opened::before{
      -webkit-mask-position: -16px 1px;
      mask-position: -16px 1px;
    }
    &.closed::before{
      -webkit-mask-position: 0px 1px;
      mask-position: 0px 1px;
    }
    &.no-child::before{
      content: none;
    }
    &.no-child{
      margin-left: 12px;
    }

    & > ol {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: block;
      padding-left: 12px;

      & > li {
        word-wrap: break-word;
        position: relative;
        min-height: 14px;
        user-drag: element;
        user-select: none;
      }
    }

  }
`
