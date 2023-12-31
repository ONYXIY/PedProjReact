import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6e6b632d-eef2-4ab7-875b-72e622c6a1d1'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}
export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`, {
        }).then(response => response.data)
    }
}