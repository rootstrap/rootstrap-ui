import { addParameters } from '@storybook/react'
import theme from './theme'

// storybook styles
import './styles.scss'

addParameters({
  options: {
    theme,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
    showPanel: false,
    sortStoriesByKind: false,
  },
})
