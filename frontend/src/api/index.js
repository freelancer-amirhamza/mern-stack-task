import axios from "axios";


const API = axios.create({
    baseURL: "https://mern-stack-task-vsel.onrender.com",
})

// get All users
export const getUsers = async ()=> await API.get()

// create user
export const createUser = async (data)=> await API.post("/createUser", data);

// get user by id
export const getUserById = async (id)=> await API.get(`/getUsers/${id}`);

// update user
export const updateUser = async(id, data)=> await API.put(`/updateUser/${id}`, data);

// delate user
export const deleteUser = async (id) => await API.delete(`/deleteUser/${id}`)