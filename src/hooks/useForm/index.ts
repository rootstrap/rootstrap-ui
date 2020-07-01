import { useState, useCallback } from 'react'

interface UseFormOptions {
  initialValues: object
  onSubmit: (values: object) => Promise<any>
  validator: (values: any) => object
  validateOnChange: boolean
  validateOnBlur: boolean
}

const useForm = (
  {
    initialValues = {},
    onSubmit,
    validator = () => ({}),
    validateOnChange = true,
    validateOnBlur = false
  }: UseFormOptions,
  ...dependencies: any[]
) => {
  const [values, setValues] = useState<object>(initialValues)
  const [errors, setErrors] = useState<object>({})
  const [blurredFields, setBlurredFields] = useState<object>({})
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSubmit = useCallback(
    async (event: any): Promise<any> => {
      event.preventDefault()
      setSubmitted(true)
      const newErrors: object = validator(values) || {}
      const valid: boolean = !Object.values(newErrors)
        .filter(error => !!error)
        .flat().length
      if (valid) {
        setSubmitting(true)
        try {
          await onSubmit(values)
        } catch (serverErrors) {
          setErrors(serverErrors)
          setSubmitting(false)
        }
      } else {
        setErrors(newErrors)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values, setErrors, validator, onSubmit, ...dependencies]
  )

  const runValidations = useCallback(
    (newValues: object, key: string) => {
      const validations: any = validator(newValues) || {}
      if (key) {
        setErrors({ ...errors, [key]: validations[key] })
      } else {
        setErrors(validator(newValues))
      }
    },
    [validator, errors, setErrors]
  )

  const handleValueChange = useCallback(
    (key: string, value: number | string) => {
      const newValues = {
        ...values,
        [key]: value
      }
      setValues(newValues)
      if (submitted || validateOnChange) {
        runValidations(newValues, key)
      }
    },
    [values, setValues, runValidations, validateOnChange, submitted]
  )

  const handleBlur = useCallback(
    (key: string) => {
      setBlurredFields({
        ...blurredFields,
        [key]: true
      })
      if (validateOnBlur) {
        runValidations(values, key)
      }
    },
    [blurredFields, setBlurredFields, runValidations, values, validateOnBlur]
  )

  return {
    values,
    setValues,
    errors,
    setErrors,
    blurredFields,
    submitting,
    setBlurredFields,
    handleValueChange,
    handleSubmit,
    handleBlur
  }
}

export default useForm
