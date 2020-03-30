import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Foundation|Utilities', module).add('Flex', () => (
  <div className="sb-m-6">
    <h2 className="sb-text-h2">Flex</h2>
    <p className="sb-mb-4">Utility classes for flexbox layout</p>
    <p className="sb-mb-4">
      <a href="https://github.com/rootstrap/rootstrap-ui/tree/develop/src/styles/utilities/_flex.scss">
        Development file
      </a>
    </p>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Display</h5>
      <ul>
        <li>
          <code className="sb-text--code">.d-flex</code>
        </li>
        <li>
          <code className="sb-text--code">.d-inline-flex</code>
        </li>
        <li>
          <code className="sb-text--code">.d-{'{breakpoint}'}-flex</code>
        </li>
        <li>
          <code className="sb-text--code">.d-{'{breakpoint}'}-inline-flex</code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Direction</h5>
      <ul>
        <li>
          <code className="sb-text--code">.flex-row</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-row-reverse</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-column</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-column-reverse</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-{'{breakpoint}'}-row</code>
        </li>
        <li>
          <code className="sb-text--code">
            .flex-{'{breakpoint}'}-row-reverse
          </code>
        </li>
        <li>
          <code className="sb-text--code">.flex-{'{breakpoint}'}-column</code>
        </li>
        <li>
          <code className="sb-text--code">
            .flex-{'{breakpoint}'}-column-reverse
          </code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Justify content</h5>
      <ul>
        <li>
          <code className="sb-text--code">.justify-content-start</code>
        </li>
        <li>
          <code className="sb-text--code">.justify-content-end</code>
        </li>
        <li>
          <code className="sb-text--code">.justify-content-center</code>
        </li>
        <li>
          <code className="sb-text--code">.justify-content-between</code>
        </li>
        <li>
          <code className="sb-text--code">.justify-content-around</code>
        </li>
        <li>
          <code className="sb-text--code">
            .justify-content-{'{breakpoint}'}-start
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .justify-content-{'{breakpoint}'}-end
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .justify-content-{'{breakpoint}'}-center
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .justify-content-{'{breakpoint}'}-between
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .justify-content-{'{breakpoint}'}-around
          </code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Align items</h5>
      <ul>
        <li>
          <code className="sb-text--code">.align-items-start</code>
        </li>
        <li>
          <code className="sb-text--code">.align-items-end</code>
        </li>
        <li>
          <code className="sb-text--code">.align-items-center</code>
        </li>
        <li>
          <code className="sb-text--code">.align-items-baseline</code>
        </li>
        <li>
          <code className="sb-text--code">.align-items-stretch</code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-items-{'{breakpoint}'}-start
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-items-{'{breakpoint}'}-end
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-items-{'{breakpoint}'}-center
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-items-{'{breakpoint}'}-baseline
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-items-{'{breakpoint}'}-stretch
          </code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Align self</h5>
      <ul>
        <li>
          <code className="sb-text--code">.align-self-auto</code>
        </li>
        <li>
          <code className="sb-text--code">.align-self-start</code>
        </li>
        <li>
          <code className="sb-text--code">.align-self-end</code>
        </li>
        <li>
          <code className="sb-text--code">.align-self-center</code>
        </li>
        <li>
          <code className="sb-text--code">.align-self-baseline</code>
        </li>
        <li>
          <code className="sb-text--code">.align-self-stretch</code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-self-{'{breakpoint}'}-auto
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-self-{'{breakpoint}'}-start
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-self-{'{breakpoint}'}-end
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-self-{'{breakpoint}'}-center
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-self-{'{breakpoint}'}-baseline
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-self-{'{breakpoint}'}-stretch
          </code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Fill, grow and shrink</h5>
      <ul>
        <li>
          <code className="sb-text--code">.flex-fill</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-{'{grow|shrink}'}-0</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-{'{grow|shrink}'}-1</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-{'{breakpoint}'}-fill</code>
        </li>
        <li>
          <code className="sb-text--code">
            .flex-{'{breakpoint}'}-{'{grow|shrink}'}-0
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .flex-{'{breakpoint}'}-{'{grow|shrink}'}-1
          </code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Wrap</h5>
      <ul>
        <li>
          <code className="sb-text--code">.flex-nowrap</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-wrap</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-wrap-reverse</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-{'{breakpoint}'}-nowrap</code>
        </li>
        <li>
          <code className="sb-text--code">.flex-{'{breakpoint}'}-wrap</code>
        </li>
        <li>
          <code className="sb-text--code">
            .flex-{'{breakpoint}'}-wrap-reverse
          </code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Order</h5>
      <ul>
        <li>
          <code className="sb-text--code">.order-{'{0 to $max-order}'}</code>
        </li>
        <li>
          <code className="sb-text--code">
            .order-{'{breakpoint}'}-{'{0 to $max-order}'}
          </code>
        </li>
      </ul>
    </div>
    <div className="sb-mb-4">
      <h5 className="sb-text-h5">Align content</h5>
      <ul>
        <li>
          <code className="sb-text--code">.align-content-start</code>
        </li>
        <li>
          <code className="sb-text--code">.align-content-end</code>
        </li>
        <li>
          <code className="sb-text--code">.align-content-center</code>
        </li>
        <li>
          <code className="sb-text--code">.align-content-between</code>
        </li>
        <li>
          <code className="sb-text--code">.align-content-around</code>
        </li>
        <li>
          <code className="sb-text--code">.align-content-stretch</code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-content-{'{breakpoint}'}-start
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-content-{'{breakpoint}'}-end
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-content-{'{breakpoint}'}-center
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-content-{'{breakpoint}'}-between
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-content-{'{breakpoint}'}-around
          </code>
        </li>
        <li>
          <code className="sb-text--code">
            .align-content-{'{breakpoint}'}-stretch
          </code>
        </li>
      </ul>
    </div>
  </div>
))
