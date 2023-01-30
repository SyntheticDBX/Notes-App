class NotesModel {
    constructor() {
        this.notes = [];
    }
    getNotes = () => {
        return this.notes;
    }
    addNote = (note) => {
        this.notes.push(note);
    }
    reset = (note) => {
        this.notes = [];
    }
}

module.exports = new NotesModel();
