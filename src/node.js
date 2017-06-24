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
      opened: props.opened,
      selected: props.selected
    }
    this.onNodeOpenerClick = this.onNodeOpenerClick.bind(this)
    this.changeSelected = this.changeSelected.bind(this)
  }

  onNodeOpenerClick (event, node) {
    // If the target is the LI and the relatedTarget is null, should be the ::before section
    if (event.relatedTarget === null && event.target.nodeName === 'LI') {
      this.setState({ ...this.state, opened: !this.state.opened })
    } else {
      this.changeSelected(node)
    }
  }

  changeSelected (node) {
    this.props.onSelect(node)
    this.setState({ ...this.state, selected: node })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.opened !== this.props.opened) {
      this.setState({ ...this.state, opened: nextProps.opened })
    }
    if (nextProps.selected !== this.props.selected) {
      this.setState({ ...this.state, selected: nextProps.selected })
    }
  }

  render () {
    const { name, attrs, children } = this.props.node
    const { level, node } = this.props
    const { opened } = this.state
    if (!children || children.length === 0) {
      return (
        <StyledOL className={classNames({ selected: node === this.state.selected })}>
          <li className='no-child' onClick={() => this.changeSelected(node)}>
            <HighlightLine level={level + 1} />
            <NodeOpenLineContent name={name} attrs={attrs} />
            <NodeCloseLineContent name={name} />
          </li>
        </StyledOL>
      )
    }
    if (children && children.length > 0 && !opened) {
      return (
        <StyledOL className={classNames({ selected: node === this.state.selected })}>
          <li className={classNames({ opened, closed: !opened })} onClick={(event) => this.onNodeOpenerClick(event, node)} >
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
        <StyledOL className={classNames({ selected: node === this.state.selected })}>
          <li className={classNames({ opened, closed: !opened })} onClick={(event) => this.onNodeOpenerClick(event, node)}>
            <HighlightLine level={level} />
            <NodeOpenLineContent name={name} attrs={attrs} />
          </li>
          <li>
            <ol>
              {children.map((child, i) => (
                <li key={i}>
                  <Node node={child} level={level + 1} onSelect={this.changeSelected} selected={this.state.selected} />
                </li>
              ))}
            </ol>
          </li>
          <li onClick={() => this.changeSelected(node)}>
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
  opened: PropTypes.bool,
  onSelect: PropTypes.func,
  selected: nodeProps
}

Node.defaultProps = {
  level: 0,
  opened: false
}

export default Node
