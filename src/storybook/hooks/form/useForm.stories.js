import React from 'react'
import { storiesOf } from '@storybook/react'

import CodeBlock from '../../components/CodeBlock'
import FormExample from './FormExample'

storiesOf('Hooks|Form', module).add('useForm', () => (
  <div className="container sb-my-6">
    <h2 className="sb-text-h2">useForm</h2>
    <p className="sb-mb-4">A simple hook to handle forms.</p>
    <h5 className="sb-text-h5 sb-mb-2">Usage</h5>
    <CodeBlock language="JavaScript">
      {`
        import { useForm } from 'rootstrap-ui'

        const { values, errors, getFieldProps, submitting } = useForm(
          {
            initialValues,
            onSubmit,
            validator,
            validateOnChange: true,
            validateOnBlur: true
          },
          [dependencies]
        );
      `}
    </CodeBlock>
    <h6 className="sb-text-h6 sb-mt-4">Parameters</h6>
    <ul>
      <li>
        <span className="sb-text--bold">initialValues</span>: Object with
        initial values for the fields - object
      </li>
      <li>
        <span className="sb-text--bold">onSubmit</span>: Async function to
        submit the form - {'(values: object) => Promise<any>'}
      </li>
      <li>
        <span className="sb-text--bold">validator</span>: Validator function
        that returns an object with errors for each field -{' '}
        {'(values: object) => object'}
      </li>
      <li>
        <span className="sb-text--bold">validateOnChange</span>: If true the
        validator will run every time that a field changes - boolean
      </li>
      <li>
        <span className="sb-text--bold">validateOnBlur</span>: If true the
        validator will run when the blur function for a field is called -
        boolean
      </li>
    </ul>
    <h6 className="sb-text-h6">Return values</h6>
    <h5 className="sb-text-h5">Example</h5>
    <a>Show me the code!</a>
    <FormExample />
  </div>
))
