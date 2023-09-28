import axios from 'axios';

const facultadApi = axios.create({
    baseURL: "http://127.0.0.1:8000/modelo/api/v1/facultad/"
});
const programaApi = axios.create({
    baseURL: "http://127.0.0.1:8000/modelo/api/v1/programa/"
})

// CRUD de facultad
// -----------------------------------------

export const getAllFacultades = () => {
    return facultadApi.get('/');
}
export const createFacultad = (facultad) => {
    return facultadApi.post('/', facultad);
}
export const deleteFacultad = (id) => {
    facultadApi.delete(`/${id}`);
}
export const updateFacultad = (id, facultad) => {
    facultadApi.put(`/${id}/`,facultad);
}
export const getFacultad = (id) => {
    return facultadApi.get(`/${id}/`);
}

// CRUD de programa
// -----------------------------------------

export const getAllProgramas = () => {
    return programaApi.get('/');
}
export const createPrograma = (programa) => {
    return programaApi.post('/', programa);
}
export const deletePrograma = (id) => {
    programaApi.delete(`/${id}`);
}
export const updatePrograma = (id, programa) => {
    programaApi.put(`/${id}/`,programa);
}
export const getPrograma = (id) => {
    return programaApi.get(`/${id}/`);
}