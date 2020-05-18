import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Basics|Introduction', module).add('Getting Started', () => (
  <div className="sb-m-6">
    <h2 className="sb-text-h2">Rootstrap UI - Components & Styles</h2>
    <p>
      <span className="font-weight-bold">Rootstrap UI</span>
      {
        " is the components & styles library to build user interfaces in Rootstrap's projects."
      }
    </p>
    <h5 className="sb-text-h5 sb-mt-4">Includes</h5>
    <ul>
      <li>Internal, generic and extensible components</li>
      <li>Core styles</li>
      <li>Design guidelines</li>
    </ul>
    <h5 className="sb-text-h5 sb-mt-4">Goals</h5>
    <ul>
      <li>Unify shared components implementation</li>
      <li>Define style standard for Engineering & Design</li>
      <li>Generate guidelines documentation</li>
      <li>
        Create Design Systems for specific projects using rootstrap-ui as a
        start point
      </li>
    </ul>
  </div>
))
