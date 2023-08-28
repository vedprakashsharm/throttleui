import { useState, useEffect } from 'react'

const useInputField = (initialValue) => {
  const [inputField, setInputField] = useState(initialValue || '')

  useEffect(() => setInputField(initialValue || ''), [initialValue])

  return [inputField, setInputField]
}

export default useInputField
