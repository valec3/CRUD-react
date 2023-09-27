import axios from 'axios';

const personApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/modelo/api/v1/modelo/'
});

export const getAllPersons = () => {
    return personApi.get('/');
}
export const getPerson = (id) => {
    return personApi.get(`/${id}`);
}

export const createPerson = (person) => {
    return personApi.post('/', person);
}

export const deletePerson = (id) => {
    personApi.delete(`/${id}`);
}

export const updatePerson = (id, person) => {
    personApi.put(`/${id}`, person);
}