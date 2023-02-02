const NotesModel = require('./notesModel');

describe('Notes Model', () => {
    it('should return an empty array when there are no notes', () => {
        const model = new NotesModel();
        const notes = model.getNotes();
        expect(notes).toEqual([]);
    });
    it('should add a note', () => {
        const model = new NotesModel();
        model.addNote('Note 1');
        const notes = model.getNotes();
        expect(notes).toEqual(['Note 1']);
    });
    it('should remove all notes', () => {
        const model = new NotesModel();
        model.addNote('Note 1');
        model.addNote('Note 2');
        model.reset();
        const notes = model.getNotes();
        expect(notes).toEqual([]);
    });
});

