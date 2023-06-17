import axios from "axios";

export const TasksApi = {
    getAllTasks: async function (param) {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}data`, {
                params: {
                    _sort: "createAt",
                    _order: "desc",
                    ...param
                }
            });
            return response;
        } catch (e) {
            console.log('error getting tasks');
        }
    },
    createTask: async function (task) {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}data`, task);
        } catch (e) {}
    },
    deleteTask: async function (id) {
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}data/${id}`)
        } catch (e) {}
    },
    doneTask: async function(id, pozz) {
        try {
            await axios.patch(`${process.env.REACT_APP_API_URL}data/${id}`, pozz)
        } catch (e) {}
    }
};
