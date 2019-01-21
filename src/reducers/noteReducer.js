import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function noteReducer(state = initialState.notes, action) {
    console.log(action);
    switch(action.type) {
        case types.LOAD_NOTES_SUCCESS:
            return action.notes;
        case types.CREATE_NOTE_SUCCESS:
            return [
                ...state.filter(note => note.id !== action.note.id),
                Object.assign({}, action.note)
            ]
        case types.UPDATE_NOTE_SUCCESS:
            return [
                ...state.filter(note => note.id !== action.note.id),
                Object.assign({}, action.note)
            ]
        case types.DELETE_NOTE_SUCCESS:
            const newState = Object.assign([], state);
            const indexOfCatToDelete = state.findIndex(note => {
            return note.id == action.note.id
            })
            newState.splice(indexOfCatToDelete, 1);
            return newState;
        default:
            return state;
    }
}