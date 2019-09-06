// @ts-check
import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000
});

export default {
    /**
     * @param {Number} offset
     * @param {Number} limit
     */
    getPosts(offset, limit) {
        return new Promise((resolve, reject) => {
            axios.get(`/posts/${offset}/${limit}`)
                .then(response => {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else {
                        reject({ code: response.status, message: response.statusText });
                    }
                })
                .catch(err => reject({ error: err }));
        });
    },

    /**
     * @param {String} username
     * @param {String} password
     */
    login(username, password) {
        return new Promise((resolve, reject) => {
            axios.post('/login', { username, password })
                .then(response => {
                    if (response.status == 200) {
                        resolve(response.data);
                    } else {
                        reject({ code: response.status, message: response.statusText });
                    }
                })
                .catch(err => reject({ error: err }));
        });
    },

    /**
     * @param {String} uuid
     */
    logout(uuid) {
        return new Promise((resolve, reject) => {
            axios.get(`/logout/${uuid}`)
                .then(response => {
                    if (response.status == 200) {
                        resolve();
                    } else {
                        reject({ code: response.status, message: response.statusText });
                    }
                })
                .catch(err => reject({ error: err }));
        });
    }
}