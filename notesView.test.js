/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 

describe('Notes view', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    model.addNote('Note 1');
    model.addNote('Note 2');
    const view = new NotesView(model);
    view.displayNotes();
    const notes = document.querySelectorAll('.note');
    expect(notes.length).toBe(2);
    expect(notes[0].innerText).toBe('Note 1');
    expect(notes[1].innerText).toBe('Note 2');
  });
});