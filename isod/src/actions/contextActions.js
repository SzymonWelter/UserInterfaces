import { actionTypes } from './actionTypes';

const fetchItems = (payload) => {
    return {
        type: actionTypes.FETCH_ITEMS,
        payload: payload
    };
}

const filterItems = (value) => {
    return{
        type: actionTypes.FILTER_ITEMS,
        filter: value
    };
}   

export {
    fetchItems,
    filterItems
}