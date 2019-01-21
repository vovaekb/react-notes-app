import NoteApi from '../api/noteApi';
import * as types from './actionTypes';

export function loadNotes() {
    return function(dispatch) {
        return NoteApi.getAllNotes().then(notes => {
            dispatch(loadNotesSuccess(notes));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadNotesSuccess(notes) {
    return {type: types.LOAD_NOTES_SUCCESS, notes};
}

export function updateNote(note) {
    return function (dispatch) {
        return NoteApi.updateNote(note).then(responseNote => {
            dispatch(updateNoteSuccess(responseNote));
        }).catch(error => { 
            throw(error); 
        });
    }
}

export function updateNoteSuccess(note) {
    return { type: types.UPDATE_NOTE_SUCCESS, note };
}

export function createNote(note) {
    return function (dispatch) {
        return NoteApi.createNote(note).then(responseNote => {
            dispatch(createNoteSucces(responseNote));
            return responseNote;
        })
        .catch(error => {
            throw (error);
        });
    }
}

  export function createNoteSucces(note) {
      return {type: types.CREATE_NOTE_SUCCESS, note};
  }

  export function deleteNote(note) {
    return function (dispatch) {
        return NoteApi.deleteNote(note).then(() => {
            dispatch(deleteNoteSucces(note));
        })
        .catch(error => {
            throw (error);
        });
    }
}

export function deleteNoteSucces(note) {
    return {type: types.DELETE_NOTE_SUCCESS, note};
}