import _ from 'lodash';
import { FETCH_DRIVER, FETCH_RACE, FETCH_CONSTRUCTOR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_RACE:
            return { ...state, ..._.mapKeys(action.payload, 'round') };
        case FETCH_DRIVER:
            return { ...state, ..._.mapKeys(action.payload, 'driverId') };
        case FETCH_CONSTRUCTOR:
            return { ...state, ..._.mapKeys(action.payload, 'constructorId') };
        default:
            return state
    }
}