import axios from 'axios';
const url = `http://${window.location.hostname}:8080/`;

// User
const userregister = (data) => {
    return axios.post(`${url}api/u/userregister`, data);
};

// Company
const companyregister = (data) => {
    return axios.post(`${url}api/c/companyregister`, data);
};
const gettasks = async (data, JWTtoken) => {
    return await axios.post(`${url}api/c/gettasks`, data, {
        headers: {
            Authorization: JWTtoken,
        },
    });
};
const addtask = async (data, JWTtoken) => {
    return await axios.post(`${url}api/c/addtask`, data, {
        headers: {
            Authorization: JWTtoken,
        },
    });
};
const deletetask = async (id, JWTtoken) => {
    return await axios.delete(`${url}api/c/deletetask/${id}`, {
        headers: {
            Authorization: JWTtoken,
        },
    });
};

// Shared
const login = (data) => {
    return axios.post(`${url}api/login`, data);
};

const update = (id, newObject) => {
    return axios.post(`${url}/${id}`, newObject);
};
const deleteUser = (id) => {
    return axios.delete(`${url}/${id}`);
};

export default {
    companyregister: companyregister,
    userregister: userregister,
    gettasks: gettasks,
    addtask: addtask,
    deletetask: deletetask,
    login: login,
};
