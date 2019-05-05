import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initState = {
    items: [],
    item: {}
}

export default function(state = initState, action) {
    switch(action.type) {
        case FETCH_POSTS:
            console.log('postReducer');
            return {
                ...state, //spread syntax (three dots)
                item: action.payload
            };
        //case NEW_POST:

        default:
            return state;
    }
}