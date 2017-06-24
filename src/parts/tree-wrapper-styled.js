import styled from 'styled-components'

export default (component) => styled(component)`
  & > ol {
    margin: 0;
    padding: 0;
  }
`
