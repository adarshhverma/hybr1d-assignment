/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";

export function* getBlogDetails(action) {
    let resp;
    yield api
        .get(`/items/${action.payload.blogId}`,)
        .then((response) => {
            resp = response;

        })
        .catch((error) => {
            resp = error;
        });
    return resp;
}
