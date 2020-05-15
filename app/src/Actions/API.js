import axios from 'axios';
const url = `http://${window.location.hostname}:8080/`;

export const companyregister = (data) => {
    return axios.post(`${url}api/companyregister`, data);
};

export const login = (data) => {
    return axios.post(`${url}api/login`, data);
};

const update = (id, newObject) => {
    return axios.post(`${url}/${id}`, newObject);
};
const deleteUser = (id) => {
    return axios.delete(`${url}/${id}`);
};

export const adminRegister = async (data) => {
    try {
        const res = await axios.post('http://localhost:8080/adminregister', data);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
