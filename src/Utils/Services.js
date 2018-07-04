import axios from './axios'

const PROJECTS = "projects"
const VERSIONS = "versions"
const UPLOAD = "upload"

export const getAllProject = () => (axios.get(`/${PROJECTS}`))
export const getProjectDetail = (id) => (axios.get(`/${PROJECTS}/${id}`))
export const getVersionForProject = (pid) => (axios.get(`/${PROJECTS}/${pid}/${VERSIONS}`))

export const addProject = (pname) => (axios.post(`/${PROJECTS}`, { name: pname }))
export const showAllDataForVersion = (pid, vtag) => (axios.get(`/${PROJECTS}/${pid}/${VERSIONS}/${vtag}`))
export const uploadNewVersion = (data) => (axios.post(`/${UPLOAD}`, data))