import React from 'react'
import { storiesOf } from '@storybook/react'

import List from '../../components/List'
import Code from '../../components/Code'
import { flexClasses } from './classes'

const renderList = classNames => (
  <List
    elements={classNames.map(className => (
      <Code key={className}>{className}</Code>
    ))}
  />
)

storiesOf('Foundation|Utilities', module).add('Flex', () => (
  <div className="sb-m-6">
    <h2 className="sb-text-h2">Flex</h2>
    <p className="sb-mb-4">Utility classes for flexbox layout</p>
    <a
      className="sb-mb-4 d-block"
      href="https://github.com/rootstrap/rootstrap-ui/tree/develop/src/styles/utilities/_flex.scss"
    >
      Development file
    </a>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Display</h5>
      {renderList(flexClasses.display)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Direction</h5>
      {renderList(flexClasses.direction)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Justify content</h5>
      {renderList(flexClasses.justifyContent)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Align items</h5>
      {renderList(flexClasses.alignItems)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Align self</h5>
      {renderList(flexClasses.alignSelf)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Fill, grow and shrink</h5>
      {renderList(flexClasses.flex)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Wrap</h5>
      {renderList(flexClasses.wrap)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Order</h5>
      {renderList(flexClasses.order)}
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Align content</h5>
      {renderList(flexClasses.alignContent)}
    </div>
  </div>
))
