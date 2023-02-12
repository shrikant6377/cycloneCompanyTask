import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'http://localhost:8080';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/get`);
}

export const addUser = async (user) => {
// console.log(user)
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    console.log(id)
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}