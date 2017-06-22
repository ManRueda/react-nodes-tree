import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import NodeOpenLineContent from './node-open-line-content'
import NodeCloseLineContent from './node-close-line-content'
import { StyledOL, HighlightLine } from './node-styled'

class Node extends Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: props.opened
    }
    this.onNodeOpenerClick = this.onNodeOpenerClick.bind(this)
  }

  onNodeOpenerClick () {
    this.setState({ ...this.state, opened: !this.state.opened })
  }

  render () {
    const { name, attrs, children } = this.props.node
    const { level } = this.props
    const { opened } = this.state
    if (!children || children.length === 0) {
      return (
        <StyledOL>
          <li className='no-child'>
            <HighlightLine level={level + 1} />
            <NodeOpenLineContent name={name} attrs={attrs} />
            <NodeCloseLineContent name={name} />
          </li>
        </StyledOL>
      )
    }
    if (children && children.length > 0 && !opened) {
      return (
        <StyledOL>
          <li className={classNames({ opened, closed: !opened })} onClick={this.onNodeOpenerClick} >
            <HighlightLine level={level} />
            <NodeOpenLineContent name={name} attrs={attrs} />
            <span>...</span>
            <NodeCloseLineContent name={name} />
          </li>
        </StyledOL>
      )
    }
    if (children && children.length > 0 && opened) {
      return (
        <StyledOL>
          <li className={classNames({ opened, closed: !opened })} onClick={this.onNodeOpenerClick}>
            <HighlightLine level={level} />
            <NodeOpenLineContent name={name} attrs={attrs} />
          </li>
          <li>
            <ol>
              {children.map((child, i) => (
                <li key={i}>
                  <Node node={child} level={level + 1} />
                </li>
              ))}
            </ol>
          </li>
          <li>
            <HighlightLine level={level} />
            <NodeCloseLineContent name={name} />
          </li>
        </StyledOL>
      )
    }
  }
}

const nodeProps = PropTypes.shape({
  name: PropTypes.string.isRequired,
  attrs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired,
      PropTypes.bool.isRequired
    ])
  })).isRequired,
  children: PropTypes.arrayOf(PropTypes.object)
})

Node.propTypes = {
  node: nodeProps.isRequired,
  level: PropTypes.number,
  opened: PropTypes.bool
}

Node.defaultProps = {
  level: 0,
  opened: false
}

export default Node
