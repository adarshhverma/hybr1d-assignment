// import { spawn } from "redux-saga/effects";
import { takeLatest, takeEvery, put } from "@redux-saga/core/effects";
import {
    FETCH_BLOGS,
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    FTECH_BLOG_DETAILS,
    FTECH_BLOG_DETAILS_SUCCESS,
    FTECH_BLOG_DETAILS_FAILURE

} from "../redux/action.types";
import { getBlogs } from "../services/getBlogs.api"
import { getBlogDetails } from "../services/getBlogDetails.api"


function* fetchBlogs(action) {
    const response = yield getBlogs(action);
    if (response) {
        if (response.status >= 200 && response.status < 300) {
            yield put({
                type: FETCH_BLOGS_SUCCESS,
                payload: response,
            });
        } else {
            yield put({
                type: FETCH_BLOGS_FAILURE,
                payload: { message: response.response.data },
            });
        }
    } else {
        yield put({
            type: FETCH_BLOGS_FAILURE,
            payload: response,
        });
    }
}

function* fetchBlogDetails(action) {
    const response = yield getBlogDetails(action);
    if (response) {
        if (response.status >= 200 && response.status < 300) {
            yield put({
                type: FTECH_BLOG_DETAILS_SUCCESS,
                payload: response,
            });
        } else {
            yield put({
                type: FTECH_BLOG_DETAILS_FAILURE,
                payload: { message: response.response.data },
            });
        }
    } else {
        yield put({
            type: FTECH_BLOG_DETAILS_FAILURE,
            payload: response,
        });
    }
}


function* rootSaga() {
    yield takeEvery(FETCH_BLOGS, fetchBlogs);
    yield takeEvery(FTECH_BLOG_DETAILS, fetchBlogDetails);


}

export default rootSaga;
