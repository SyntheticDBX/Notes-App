const model = require('./notesModel');

describe('Notes Model', () => {
    it('should return an empty array when there are no notes', () => {
        expect(model.getNotes()).toEqual([]);
    });
    it('should add a note to the notes array', () => {
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });
    it('should reset the notes array to an empty array', () => {
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
});

