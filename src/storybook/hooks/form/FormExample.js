import React from 'react'
import { useForm } from 'src'

const onSubmit = async values => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log('Form submitted', values)
}

const fields = {
  email: 'email',
  password: 'password'
}

// simple custom validator
const validator = values => {
  const errors = {}
  if (!values[fields.email]) {
    errors[fields.email] = 'Enter an email to continue'
  }
  if (!values[fields.password]) {
    errors[fields.password] = 'Enter a password to continue'
  }
  return errors
}

const FormExample = () => {
  const { handleSubmit, getFieldProps, submitting } = useForm({
    onSubmit,
    validator
  })

  const emailProps = getFieldProps(fields.email)
  const passwordProps = getFieldProps(fields.password)

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="d-block">Email</label>
        <input name="email" type="email" label="Email" {...emailProps} />
        {emailProps.errors && <p>{emailProps.errors}</p>}
      </div>
      <div>
        <label className="d-block">Password</label>
        <input
          name="password"
          type="password"
          label="Password"
          {...passwordProps}
        />
        {passwordProps.errors && <p>{passwordProps.errors}</p>}
      </div>
      <button type="submit">Submit</button>
      {submitting && <div>Loading</div>}
    </form>
  )
}

export default FormExample
