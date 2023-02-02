class NotesView {
    constructor(model) {
        this.model = model;
    }
    displayNotes = () => {
        const notes = this.model.getNotes();
        notes.forEach(note => {
            const noteDiv = document.createElement('div');
            noteDiv.classList.add('note');
            noteDiv.innerText = note;
            document.body.appendChild(noteDiv);
        });
    }
}

module.exports = NotesView;