import axios from 'axios'

const eventRequests = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
});

export const getEvents = async () => {
    const response = await eventRequests.get('events-all/');
    return response.data;
};

export const getSingleEvent = async (eventId) => {
    const response = await eventRequests.get(`events-single/${ eventId }/`);
    return response.data;
};

export const addEvent = async (event) => {
    const response = await eventRequests.post('events-add/', event);
    return response.data;
};

export const deleteEvent = async (eventId) => {
    const response = await eventRequests.get(`events-delete/${ eventId }/`);
    return response.data;
};

export default eventRequests;
