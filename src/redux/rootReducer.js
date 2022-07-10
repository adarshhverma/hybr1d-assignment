import {
    FETCH_BLOGS,
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE, 
    FTECH_BLOG_DETAILS,
    FTECH_BLOG_DETAILS_SUCCESS,
    FTECH_BLOG_DETAILS_FAILURE
} from "./action.types";

const initialState = {
    blogs: [],
    blogDetails: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOGS:
            return { ...state, blogs: [], };
        case FETCH_BLOGS_SUCCESS:
            return { ...state, blogs: action.payload.data.hits, };
        case FETCH_BLOGS_FAILURE:
            return { ...state, blogs: [], };
        case FTECH_BLOG_DETAILS:
            return { ...state, blogDetails: {}, };
        case FTECH_BLOG_DETAILS_SUCCESS:
            return { ...state, blogDetails: action.payload.data, };
        case FTECH_BLOG_DETAILS_FAILURE:
            return { ...state, blogDetails: {}, };

        default:
            return state;
    }
};

export default rootReducer;
