import axios from 'axios';
const url = `http://${window.location.hostname}:8080/`;

const companyregister = (data) => {
    return axios.post(`${url}api/companyregister`, data);
};
const userregister = (data) => {
    return axios.post(`${url}api/userregister`, data);
};

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
    login: login,
};
