import React, { useState } from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

import useWindowSize from '../../utils/useWindowSize'
import { getAllTasks, editTask, deleteTask } from '../../lib/api'
import AddButton from '../common/AddButton'
import PageContainer from '../common/PageContainer'
import DeleteConfirmModal from '../common/DeleteConfirmModal'
import TaskShow from '../tasks/TaskShow'
import TaskEditComputer from './TaskEditComputer'
import TaskAddComputer from '../tasks/TaskAddComputer'



function TaskIndex() {
  const history = useHistory()
  const { width } = useWindowSize()
  const [tasks, setTasks] = React.useState(null)
  const [task, setTask] = React.useState(null)
  const [formVisible, showForm] = React.useState(false)
  const [addFormVisible, showAddForm] = React.useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [taskToDelete, setTaskToDelete] = useState(null)
  const [search, setSearch] = useState('')
  const [, setFormData] = useState('')



  const getData = async () => {
    try {
      const res = await getAllTasks()
      setTasks(res.data)
    } catch (err) {
      console.log(err)
      history.push('/notfound')
    }
  }
  React.useEffect(() => {
    getData()
  }, [])

  const filterTasks = (tasks, taskId) => {
    return tasks.filter(item => {
      return item.id === parseInt(taskId)
    })
  }


  //* Functions to allow the user to tick the task off as completed 
  const toggleCheckbox = async ({ target: { id } }) => {
    const filteredTasks = filterTasks(tasks, id)
    const task = filteredTasks[0]
    if (!task.job) {
      const formData = {
        ...task,
        task_category: task.task_category.id,
        completed: !task.completed
      }
      setFormData(formData)
      handleSubmit(formData, id)
    } else {
      const formData = {
        ...task,
        job: task.job.id,
        task_category: task.task_category.id,
        completed: !task.completed
      }
      setFormData(formData)
      handleSubmit(formData, id)
    }
  }

  const handleSubmit = async (formData, id) => {
    try {
      await editTask(formData, id)
      getData()
    } catch (err) {
      console.log(err)
      history.push('/notfound')
    }
  }

  //* Function to toggle the edit form & set the task to state
  const toggleForm = (event) => {
    event.preventDefault()
    const id = event.currentTarget.value
    if (width < 768) {
      history.push(`/tasks/${id}`)
    } else {
      window.scrollTo(0, 0)
      showForm(!formVisible)
      showAddForm(false)
      const task = filterTasks(tasks, id)
      setTask(task[0])
    }
  }

  const closeForm = () => {
    setFormData(null)
    showForm(false)
  }

  //* Function to toggle the add form
  const onClickAdd = () => {
    if (width < 768) {
      history.push('/tasks/new')
    } else {
      showForm(false)
      showAddForm(!addFormVisible)
    }
  }
  const closeAddForm = () => {
    showAddForm(false)
  }

  // * Function for delete modal
  const handleDeleteConfirmModal = e => {
    e.preventDefault()
    setTaskToDelete(e.currentTarget.value)
    setDeleteModalOpen(true)
  }
  const handleCloseDeleteConfirm = () => {
    setDeleteModalOpen(false)
  }

  const deleteItem = async () => {
    try {
      await deleteTask(taskToDelete)
      console.log('deleted')
      closeForm()
      getData()
      setDeleteModalOpen(false)
    } catch (err) {
      history.push('/notfound')
    }
  }


  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const searchTasks = () => {
    const regexp = new RegExp(search, 'i')
    return tasks.filter(task => {
      if (!task.job) {
        return regexp.test(task.title) || regexp.test(task.task_category.name)
      } else {
        return regexp.test(task.title) || regexp.test(task.task_category.name) || regexp.test(task.job.job_title) || regexp.test(task.job.company)
      }
    }
    )
  }

  //* Separate the tasks between completed & not completed & by most recent first

  if (!tasks) return null
  const sortedTasks = searchTasks().sort((a, b) => new Date(b.added_date) - new Date(a.added_date))
  const filteredTasks = (array, string) => {
    return array.filter(item => {
      return item.completed === string
    })
  }
  const uncompletedTasks = filteredTasks(sortedTasks, false)
  const completedTasks = filteredTasks(sortedTasks, true)

  return (
    <PageContainer>
      <Segment.Group className='TaskIndex'>
        <DeleteConfirmModal
          deleteModalOpen={deleteModalOpen}
          handleCloseDeleteConfirm={handleCloseDeleteConfirm}
          nameOfThingToDelete='Task'
          handleDelete={deleteItem}
        />
        <Segment >
          <Grid >
            <Grid.Column >
              <div className='task-index-header'>
                <Header id='header-font-tasks' as='h1'>Tasks</Header>
                <div className='task-add-btn'>
                  <AddButton color='red' buttonText='Add a new Task' onClick={onClickAdd} />
                </div>
              </div>
              <div className='search'>
                <div className='ui fluid icon input'>
                  <input type='text' placeholder='Search tasks...' name='search' value={search} onChange={handleSearch} />
                  <i aria-hidden='true' className='search icon'></i>
                </div>
              </div>
              <div className={formVisible ? 'task-form' : 'task-form-hidden'} >
                <TaskEditComputer
                  getData={getData}
                  closeForm={closeForm}
                  data={task}
                  handleDeleteConfirmModal={handleDeleteConfirmModal}
                />
              </div>
              <div className={addFormVisible ? 'task-form' : 'task-form-hidden'} >
                <TaskAddComputer
                  getData={getData}
                  closeForm={closeAddForm}
                />
              </div>
              <Header textAlign='left' as='h5'>Still To Complete</Header>
              <hr />
              <div className='uncompleted-tasks'>
                {uncompletedTasks ?
                  uncompletedTasks.map(task => (
                    <TaskShow
                      key={task.id}
                      toggleCheckbox={toggleCheckbox}
                      toggleForm={toggleForm}
                      task={task} />
                  )) : ''}
              </div>
              <br />
              <Header textAlign='left' as='h5'>Completed</Header>
              <hr />
              <div className='completed-tasks'>
                {completedTasks ?
                  completedTasks.map(task => (
                    <TaskShow
                      key={task.id}
                      toggleCheckbox={toggleCheckbox}
                      toggleForm={toggleForm}
                      task={task} />)) : ''}
              </div>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </PageContainer>
  )
}
export default TaskIndex