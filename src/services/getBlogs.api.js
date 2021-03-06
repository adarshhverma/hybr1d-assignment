/* eslint-disable import/prefer-default-export */
import api from "./axiosConfig";

export function* getBlogs(action) {
    let resp;
    yield api
        .get(`/search?query=${action.payload.searchText}`,)
        .then((response) => {
            resp = response;

        })
        .catch((error) => {
            resp = error;
        });
    return resp;
}
