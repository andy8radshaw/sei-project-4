/* eslint-disable camelcase */
import React from 'react'

function useForm(initialFormState = {}, submitFunction, submitParams = null, onSubmitSuccess = () => {}) {

  // * Initial state 
  const [formData, setFormData] = React.useState(initialFormState)
  const [formErrors, setFormErrors] = React.useState(initialFormState)


  //* HandleChange event for inputting values on form & sets them and the errors to state 
  const handleChange = ({ target: { name, value, type, completed } }) => {
    const newValue = (type === 'checkbox' ? completed : value)   
    const updatedFormData = { ...formData, [name]: newValue }
    const updatedErrors = { ...formErrors, [name]: '' }

    setFormData(updatedFormData)
    setFormErrors(updatedErrors)
  }

  //* HandleChange event for inputting values on form & sets them to state 
  const selectDropdown = (event, result ) => {
    const { name, value } = result   
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (event, data) => {
    const { name, value } = data 
    const formattedDate = (value) => {
      if (!value) {
        return null
      } else {
        return (new Date(value.getTime() - (value.getTimezoneOffset() * 60000))).toISOString().split('T')[0]
      }
    }

    const date = formattedDate(value)

    setFormData({ ...formData, [name]: date })
  }


  const handleSubmit = async event => {
    event.preventDefault()    
    // console.log(formData)
    
    try {
      const response = await submitFunction(formData,submitParams)
      onSubmitSuccess(response)
      setFormData({ ...initialFormState })
    } catch (err) {
      console.log(err)
      setFormErrors(err.response.data)
    }
  }
  
  return { formData, handleChange, selectDropdown, handleDateChange, setFormData, formErrors, setFormErrors, handleSubmit }
}
export default useForm