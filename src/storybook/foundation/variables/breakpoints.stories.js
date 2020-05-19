import React from 'react'
import { storiesOf } from '@storybook/react'

import Code from '../../components/Code'
import CodeBlock from '../../components/CodeBlock'

// Story styles
import './breakpoints.scss'

storiesOf('Foundation|Variables', module).add('Breakpoints', () => (
  <div className="container sb-my-6">
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
        content, e.g: desktop, tablet, phone, etc).
      </p>
      <table className="sb-m-3 breakpoints-table">
        <thead>
          <tr>
            <th className="sb-text--bold">Variable</th>
            <th className="sb-text--bold">Value</th>
            <th className="sb-text--bold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Code>$bp-xs</Code>
            </td>
            <td>0</td>
            <td>Extra small devices</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-sm</Code>
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
      <p>
        Grid System has its own breakpoints. This gives you flexibility to
        define different breakpoints for the grid and the screens.
      </p>
      <p>
        Grid breakpoints have the same values as Screen breakpoints by default.
      </p>
      <table className="sb-m-3 breakpoints-table">
        <thead>
          <tr>
            <th className="sb-text--bold">Variable</th>
            <th className="sb-text--bold">Value</th>
            <th className="sb-text--bold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Code>$bp-grid-xs</Code>
            </td>
            <td>
              <Code>$bp-xs</Code>
            </td>
            <td>Extra small devices</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-grid-sm</Code>
            </td>
            <td>
              <Code>$bp-sm</Code>
            </td>
            <td>Small devices (phones)</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-grid-md</Code>
            </td>
            <td>
              <Code>$bp-md</Code>
            </td>
            <td>Medium devices (tablets)</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-grid-lg</Code>
            </td>
            <td>
              <Code>$bp-lg</Code>
            </td>
            <td>Large devices (desktops)</td>
          </tr>
          <tr>
            <td>
              <Code>$bp-grid-xl</Code>
            </td>
            <td>
              <Code>$bp-xl</Code>
            </td>
            <td>Extra large devices (large desktops)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="sb-mb-4">
      <h4 className="sb-text-h4">Mixins</h4>
      <p>
        CSS Media query is a technique to take advantage of these breakpoints.{' '}
        <Code>rootstrap-ui</Code> provides mixins to simplify the media queries
        for the different breakpoints.
      </p>
      <table className="sb-m-3 breakpoints-table">
        <thead>
          <tr>
            <th className="sb-text--bold">Mixin</th>
            <th className="sb-text--bold">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Code>media-breakpoint-up($breakpoint)</Code>
            </td>
            <td>
              Media query for devices width upper than <Code>$breakpoint</Code>
            </td>
          </tr>
          <tr>
            <td>
              <Code>media-breakpoint-down($breakpoint)</Code>
            </td>
            <td>
              Media query for devices width less than <Code>$breakpoint</Code>
            </td>
          </tr>
          <tr>
            <td>
              <Code>media-breakpoint-between($lower, $upper)</Code>
            </td>
            <td>
              Media query for devices width between <Code>$lower</Code> and{' '}
              <Code>$upper</Code> breakpoints
            </td>
          </tr>
          <tr>
            <td>
              <Code>media-breakpoint-only($breakpoint)</Code>
            </td>
            <td>
              Media query for devices width between the <Code>$breakpoint</Code>
              &#39;s minimum and maximum widths.
            </td>
          </tr>
        </tbody>
      </table>
      <h5 className="sb-text-h5 sb-mb-3">Example</h5>
      <CodeBlock>
        {`
          // Example: Hide starting at \`min-width: 0\`, and then show at the \`sm\` breakpoint
          .custom-class {
            display: none;
          }
          @include media-breakpoint-up(sm) {
            .custom-class {
              display: block;
            }
          }
        `}
      </CodeBlock>
    </div>
    <div>
      <h4 className="sb-text-h4">Customize breakpoints</h4>
      <p>
        In order to change a breakpoint value, assign a new value to the
        variable name before importing <Code>rootstrap-ui</Code>&#39;s styles.
      </p>
    </div>
  </div>
))
