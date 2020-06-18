/* eslint-disable camelcase */
import React from 'react'


function GetDate(date) {

  const today_date = new Date()
  const formatted_today_date = (new Date(today_date.getTime() - (today_date.getTimezoneOffset() * 60000))).toISOString().split('T')[0]

  const today_date_with_time = new Date().getTime()
  const formatted_date = (new Date(date).getTime())
  const microSecondsDiff = Math.abs(formatted_date - today_date_with_time)

  if (date === formatted_today_date)
    return <p className='due-today'>0 days</p>

  if (formatted_date > today_date_with_time)
    return <p className='due'>{Math.floor(microSecondsDiff / (1000 * 60 * 60 * 24))} days</p>

  if (formatted_date < today_date_with_time)
    return <p className='overdue'>{Math.floor(microSecondsDiff / (1000 * 60 * 60 * 24))} days</p>

  return null
}

export default GetDate