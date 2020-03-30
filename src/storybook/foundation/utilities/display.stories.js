import React from 'react'
import { storiesOf } from '@storybook/react'

import List from '../../components/List'
import Code from '../../components/Code'
import { displayClasses } from './classes'

const renderList = classNames => (
  <List
    elements={classNames.map(className => (
      <Code key={className}>{className}</Code>
    ))}
  />
)

storiesOf('Foundation|Utilities', module).add('Display', () => (
  <div className="sb-m-6">
    <h2 className="sb-text-h2">Dispay</h2>
    <p className="sb-mb-4">
      Change the value of the{' '}
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">
        display property
      </a>{' '}
      with our responsive display utility classes
    </p>
    <a
      className="sb-mb-4 d-block"
      href="https://github.com/rootstrap/rootstrap-ui/tree/develop/src/styles/utilities/_display.scss"
    >
      Development file
    </a>
    <div>
      <p>The classes are named using the format:</p>
      {renderList(displayClasses.display)}
      <p>Where value is one of:</p>
      {renderList(displayClasses.values)}
    </div>
    <div>
      <h4 className="sb-text-h4">Customize display utilities</h4>
      <p>
        The display values can be altered by changing the{' '}
        <code className="sb-text--code">$displays</code> variable before
        importing <code className="sb-text--code">rootstrap-ui</code>&#39;s
        styles.
      </p>
    </div>
  </div>
))
