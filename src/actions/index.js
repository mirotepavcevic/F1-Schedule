import formula from '../apis/formula';
import { FETCH_DRIVER, FETCH_RACE, FETCH_CONSTRUCTOR } from './types';


export const fetchRace = () => async dispatch => {
    const response = await formula.get('https://ergast.com/api/f1/2013.json');

    dispatch({
        type: FETCH_RACE,
        payload: response.data.MRData.RaceTable.Races
    })
};

export const fetchDriver = () => async dispatch => {
    const response = await formula.get('/drivers.json');

    dispatch({
        type: FETCH_DRIVER,
        payload: response.data.MRData.DriverTable.Drivers 
    })
};

export const fetchConstructor = () => async dispatch => {
    const response = await formula.get('/constructors.json');

    dispatch({
        type: FETCH_CONSTRUCTOR,
        payload: response.data.MRData.ConstructorTable.Constructors 
    })
};