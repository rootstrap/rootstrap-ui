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
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
})
