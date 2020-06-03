import React from 'react'
import { storiesOf } from '@storybook/react'

import List from '../../components/List'
import Code from '../../components/Code'

// Story styles
import './index.scss'

storiesOf('Foundation|Grid', module).add('Grid System', () => (
  <div className="container sb-my-6">
    <h2 className="sb-text-h2">Grid System</h2>
    <p className="sb-mb-4">
      The grid system should be used for creating layouts through a series of
      columns that contain your content. The system is responsive and works with
      every screen size, its columns could scale according to screen sizes.
    </p>
    <p className="sb-mb-4">
      <a
        href="https://github.com/rootstrap/rootstrap-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rootstrap UI
      </a>{' '}
      extends Bootstrap’s Grid System, so most of their documentation inherits
      to Rootstrap UI’s Grid. Check out{' '}
      <a
        href="https://getbootstrap.com/docs/4.5/layout/grid/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bootstrap docs here.
      </a>
    </p>
    <h4 className="sb-text-h4">Containers</h4>
    <p>
      Containers will keep the edge of your content lined up, as well as adding
      a barrier between the content and edge of screen. The width maxes out at{' '}
      <Code>$container-max-widths</Code> variable, and padding depends on screen
      size.
    </p>
    <p>
      Containers are the most basic layout element and{' '}
      <span className="sb-text--bold">
        are required when using our default grid system.
      </span>
    </p>
    <List
      elements={['.container', '.container-{breakpoint}'].map(className => (
        <Code key={className}>{className}</Code>
      ))}
    />
    <h6 className="sb-text-h6">Container fluid</h6>
    <p>Identical to a normal container, but the width does not max out.</p>
    <List
      elements={['.container-fluid'].map(className => (
        <Code key={className}>{className}</Code>
      ))}
    />
    <p className="sb-mb-4">
      For more{' '}
      <a
        href="https://getbootstrap.com/docs/4.5/layout/overview/#containers"
        target="_blank"
        rel="noopener noreferrer"
      >
        view the full documentation
      </a>
    </p>
    <h4 className="sb-text-h4">Rows and columns</h4>
    <p className="sb-mb-4">
      Grid system uses a series of containers, rows, and columns to layout and
      align content. It’s built with flexbox and is fully responsive.
    </p>
    <p>Classes for defining rows and columns:</p>
    <List
      elements={['.row', '.col', '.col-{breakpoint}'].map(className => (
        <Code key={className}>{className}</Code>
      ))}
    />
    <h5 className="sb-text-h5 sb-mb-4">Example</h5>
    <div className="row">
      <div className="col-6">
        <div className="grid-col-example">.col-6</div>
      </div>
      <div className="col-6">
        <div className="grid-col-example">.col-6</div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="grid-col-example">.col-sm-12.col-md-4</div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="grid-col-example">.col-sm-12.col-md-4</div>
      </div>
      <div className="col-sm-12 col-md-4">
        <div className="grid-col-example">.col-sm-12.col-md-4</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
      <div className="col-md">
        <div className="grid-col-example">.col-md</div>
      </div>
    </div>
    <h5 className="sb-text-h5 sb-mt-4">Gutters</h5>
    <p className="sb-mb-4">
      Columns have horizontal padding to create the gutters between individual
      columns.
    </p>

    <h6 className="sb-text-h6">No gutters</h6>
    <p className="sb-mb-4">
      The gutters between columns in our predefined grid classes can be removed
      adding the class <Code>.no-gutters</Code> to the row element.
    </p>
    <h5 className="sb-text-h5 sb-mt-4">Customize grid</h5>
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
            <Code>$grid-columns</Code>
          </td>
          <td>12</td>
          <td>Number of grid columns</td>
        </tr>
        <tr>
          <td>
            <Code>$grid-gutter-width</Code>
          </td>
          <td>30px</td>
          <td>Defines grid&apos;s gutter width</td>
        </tr>
        <tr>
          <td>
            <Code>$container-max-widths</Code>
          </td>
          <td>
            sm: <Code>$bp-sm</Code>, md: <Code>$bp-md</Code>, lg:{' '}
            <Code>$bp-lg</Code>, xl: <Code>$bp-xl</Code>
          </td>
          <td>Maximum width of the container for different screen sizes.</td>
        </tr>
      </tbody>
    </table>
  </div>
))
