import React from 'react'
import { storiesOf } from '@storybook/react'

import UnderConstruction from '../../components/UnderConstruction'
import Code from '../../components/Code'

storiesOf('Foundation|Variables', module).add('Breakpoints', () => (
  <div className="sb-m-6">
    <h2 className="sb-text-h2">Breakpoints</h2>
    <p className="sb-mb-4">
      Breakpoints are used to apply CSS props to the content depending on the
      device width/height. <br /> <Code>rootstrap-ui</Code> defines all of these
      breakpoints with SCSS variables.
    </p>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Screen breakpoints</h5>
      <p>
        Usually breakpoints target different devices to display a responsive
        content. e.g: desktop, tablet, phone, etc
      </p>
      <table className="sb-m-3">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Code>$bp-xs</Code>
            </td>
            <td>576px</td>
            <td>Small devices (phones)</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-md</Code>
            </td>
            <td>768px</td>
            <td>Medium devices (tablets)</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-lg</Code>
            </td>
            <td>992px</td>
            <td>Large devices (desktops)</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-xl</Code>
            </td>
            <td>1200px</td>
            <td>Extra large devices (large desktops)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Grid breakpoints</h5>
      <UnderConstruction />
      <p>Extends screen breakpoints</p>
    </div>
    <div className="sb-mb-4">
      <h4 className="sb-text-h4">Mixins</h4>
      <p>
        CSS Media query is a tecnique to take advantage of these breakpoints.{' '}
        <Code>rootstrap-ui</Code> provides mixins to simplify the media queries
        for the different breakpoints.
      </p>
      <UnderConstruction />
    </div>
    <div>
      <h4 className="sb-text-h4">Customize breakpoints</h4>
      <p>
        In order to change a breakpoint value, reassign a new value to the
        variable name after importing <Code>rootstrap-ui</Code>&#39;s styles.
      </p>
    </div>
  </div>
))
