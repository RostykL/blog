import {fetch_posts} from '../types';

const initialState = {
    posts: [],
    loading: true,
    error: null 
  };

const postsReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case fetch_posts:
            return {
                posts: action.payload,
                loading: false,
                error: null  
            }
        default:
            return {...state};
    }
};

export default postsReducer;