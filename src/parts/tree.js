import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeWrapper from './tree-wrapper'
import TreeItem from './tree-item'
import { ThemeProvider } from 'styled-components'
import * as darkTheme from './themes/dark'

class Tree extends Component {
  render () {
    const { node, theme } = this.props
    return (
      <ThemeProvider theme={theme || darkTheme}>
        <TreeWrapper>
          <TreeItem node={node} />
        </TreeWrapper>
      </ThemeProvider>
    )
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

Tree.propTypes = {
  node: nodeProps.isRequired,
  theme: PropTypes.arrayOf(PropTypes.object)
}

export default Tree
