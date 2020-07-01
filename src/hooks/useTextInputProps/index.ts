import { useCallback } from 'react'

interface UseTextInputOptions {
  handleValueChange: (fieldKey: string, value: string) => any
  handleBlur: (fieldKey: string) => any
  values: any
  errors: any
}

export default ({
  handleValueChange,
  handleBlur,
  values,
  errors
}: UseTextInputOptions) =>
  useCallback(
    fieldKey => ({
      value: values[fieldKey] || '',
      onChange: ({ target: { value } }: any) =>
        handleValueChange(fieldKey, value),
      onBlur: () => handleBlur(fieldKey),
      errors: errors[fieldKey]
    }),
    [handleBlur, handleValueChange, values, errors]
  )
