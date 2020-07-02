import React from 'react'
import PropTypes from 'prop-types'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const CodeBlock = ({ children, language = 'scss' }) => (
  <SyntaxHighlighter language={language} style={vs2015}>
    {children}
  </SyntaxHighlighter>
)

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  language: PropTypes.string
}

export default CodeBlock
