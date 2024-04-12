import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
  }

export function notesIndex(user) {
    return sendRequest(BASE_URL, user)
}

export function notesShow(noteId) {
    return sendRequest(`${BASE_URL}/${noteId}`)
}

export function notesCreate(note) {
    return sendRequest(BASE_URL, 'POST', note)
}

export function notesDelete(noteId) {
    return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE')
}