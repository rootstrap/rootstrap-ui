import React from 'react'
import PropTypes from 'prop-types'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeBlock = ({ children, language = 'scss' }) => (
  <SyntaxHighlighter language={language} style={tomorrowNightEighties}>
    {children}
  </SyntaxHighlighter>
)

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}

export default CodeBlock
