/* eslint-disable camelcase */
import React from 'react'
import { useHistory } from 'react-router-dom'

import { editTask, getAllJobs } from '../../lib/api'

import GetDate from '../common/GetDate'
import TaskFormComputer from './TaskFormComputer'

function TaskEditComputer({ closeForm, data, getData, handleDeleteConfirmModal }) {
  const history = useHistory()
  const [task, setTask] = React.useState(null)
  const [jobs, setJobs] = React.useState(null)
  const [formData, setFormData] = React.useState(null)
  

  const getJobsData = async () => {
    try {
      const res = await getAllJobs()
      setJobs(res.data)
    } catch (err) {
      console.log(err)
      history.push('/notfound')
    }
  }

  React.useEffect(() => {
    if (!data) return 
    setTask(data)
    getJobsData()
    if (!data.job) {
      setFormData({
        ...data,
        task_category: data.task_category.id
      })
    } else {
      setFormData({
        ...data,
        job: data.job.id,
        task_category: data.task_category.id
      })
    }
  }, [data])

  //* useForm not used at taskId not set from params
  const handleChange = ({ target: { name, value, type, completed } }) => {
    const newValue = (type === 'checkbox' ? completed : value) 
    const updatedFormData = { ...formData, [name]: newValue }
    setFormData(updatedFormData)
  }

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

  const toggleCheckbox = async () => {
    setFormData({ ...formData, completed: !formData.completed })
  }

  const handleSubmit = async event => {
    event.preventDefault()  
    try {
      await editTask(formData, task.id)
      closeForm()
      getData()
      console.log('updated') 
    } catch (err) {
      console.log(err)
      history.push('/notfound')
    }
  }

  if (!formData) return null
  const { added_date, reminder_date } = formData
  if (!task) return null
  
  const dateProvided = () => {
    if (reminder_date) {
      return GetDate(reminder_date)
    } else {
      return GetDate(added_date)
    }
  }
  const date = dateProvided(reminder_date, added_date)

  if (!jobs) return null
  const jobOptions = jobs.map((job => {
    return (
      {
        key: `${job.job_title} - ${job.company}`,
        text: `${job.job_title} - ${job.company}`,
        value: job.id
      }
    )
  }))


  return (
    <TaskFormComputer
      task={task}
      jobOptions={jobOptions}
      date={date}
      closeForm={closeForm}
      formData={formData}
      toggleCheckbox={toggleCheckbox}
      selectDropdown={selectDropdown}
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      deleteItem={handleDeleteConfirmModal}
      handleSubmit={handleSubmit}
    />
  )
}
export default TaskEditComputer