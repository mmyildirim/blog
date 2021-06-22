import axios from "axios";

export function api(){
    return axios.create({
        baseURL:"https://blog-yazi-yorum.herokuapp.com",
    });
};