module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactNodesTree',
      externals: {
        react: 'React'
      }
    }
  }
}
