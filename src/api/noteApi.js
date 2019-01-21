export default class NoteApi {
    static getAllNotes() {
        return fetch('http://private-9aad-note10.apiary-mock.com/notes')
            .then(response => response.json())
            .catch(error => {
                return error;
            });
    }

    static updateNote(note) {
        return fetch('http://private-9aad-note10.apiary-mock.com/notes/' + note.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                note: note
            })
        })
        .then(response => response.json())
        .catch(error => {
            return error;
        });
    }

    static createNote(note) {
        return fetch('http://private-9aad-note10.apiary-mock.com/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                note: note
            })
        })
        .then(response => response.json())
        .catch(error => {
            return error;
        });
    }

    static deleteNote(note) {
        return fetch('http://private-9aad-note10.apiary-mock.com/notes/' + note.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .catch(error => {
            return error;
        });
    }
}