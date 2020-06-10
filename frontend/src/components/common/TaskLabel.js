/* eslint-disable camelcase */
import React from 'react'
import { Label } from 'semantic-ui-react'
import { taskCategories } from '../tasks/TaskCategories'

function TaskLabel(category) {
  const string = category.category
  
  // const jobCategory = str.replace(/ /g,'_').toLowerCase()
  // console.log(jobCategory)

  const filterCategories = (array, string) => {
    return array.filter(item => {
      if (item.value === string) {
        return item
      }
    })
  }
  const filteredCategory = filterCategories(taskCategories, string)
  const text = filteredCategory[0].text
  const color = filteredCategory[0].label.color

  return (
    <Label color={color}>{text}</Label>
  )
}

export default TaskLabel
