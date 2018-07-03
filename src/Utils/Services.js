import axios from './axios'

export const getAllProject = () => (axios.get('/projects'))
export const getProjectDetail = (id) => (axios.get(`/projects/${id}`))
export const getVersionForProject = (pid) => (axios.get(`/projects/${pid}/versions`))

export const addProject = (pname) => (axios.post('/projects', { name: pname }))

export const uploadNewVersion = (data) => (axios.post('/upload', data))