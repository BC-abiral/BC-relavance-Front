import axios from './axios'

export const getAllProject = () => (axios.get('/projects'))
export const getProjectDetail = (id) => (axios.get(`/projects/${id}`))

export const addProject = (pname) => (axios.post('/projects', { name: pname }))