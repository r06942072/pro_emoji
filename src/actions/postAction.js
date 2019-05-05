import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    console.log('fetching and dispatch');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json)
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
};
//below is equivalent
//fetchPosts is a function
//dispatch is a function
/*
export function fetchPosts() {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json)
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }));
    }
}
*/