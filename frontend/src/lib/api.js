import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}


//* USER REQUESTS

export const loginUser = data => {
  return axios.post(`${baseUrl}/auth/login/`, data)
}

export const registerUser = (data) => {
  return axios.post(`${baseUrl}/auth/register/`, data)
}

// * JOB REQUESTS

export const getAllJobs = () => {
  return axios.get(`${baseUrl}/jobs/`, withHeaders())
}

export const addNewJob = data => {
  return axios.post(`${baseUrl}/jobs/`, data, withHeaders())
}

export const getSingleJob = id => {
  return axios.get(`${baseUrl}/jobs/${id}/`, withHeaders())
}

export const editJob = (data, id) => {
  return axios.put(`${baseUrl}/jobs/${id}/`, data, withHeaders())
}

export const deleteJob = id => {
  return axios.delete(`${baseUrl}/jobs/${id}/`, withHeaders())
}

// * TASK REQUESTS

export const getAllTasks = () => {
  return axios.get(`${baseUrl}/tasks/`, withHeaders())
}

export const getSingleTask = id => {
  return axios.get(`${baseUrl}/tasks/${id}/`, withHeaders())
}

export const addNewTask = data => {
  return axios.post(`${baseUrl}/tasks/`, data, withHeaders())
}

export const editTask =  (data, id) => {
  return axios.put(`${baseUrl}/tasks/${id}/`, data, withHeaders())
}

export const deleteTask = id => {
  return axios.delete(`${baseUrl}/tasks/${id}/`, withHeaders())
}


// * CONTACTS REQUESTS

export const getAllContacts = () => {
  return axios.get(`${baseUrl}/contacts/`, withHeaders())
}

export const addNewContact = data => {
  return axios.post(`${baseUrl}/contacts/`, data,  withHeaders())
}

export const deleteContact = id => {
  return axios.delete(`${baseUrl}/contacts/${id}/`, withHeaders())
}


// * RESOURCES REQUESTS

export const getAllResources = () => {
  return axios.get(`${baseUrl}/resources/`, withHeaders())
}

export const addNewResource = data => {
  return axios.post(`${baseUrl}/resources/`, data, withHeaders())
}

export const deleteResource = id => {
  return axios.delete(`${baseUrl}/resources/${id}/`, withHeaders())
}