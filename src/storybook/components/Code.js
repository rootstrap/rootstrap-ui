import React from 'react'
import PropTypes from 'prop-types'

const Code = ({ children }) => <code className="sb-text--code">{children}</code>

Code.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Code
