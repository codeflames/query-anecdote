import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";


export const getAllAnecdotes = () => axios.get(baseUrl).then(res => {

  return res.data})


export const createNewAnecdote = (content) => axios.post(baseUrl, { content, votes: 0 }).then(res => res.data)