function addNote() {
    let input = document.getElementById("noteInput");
    let noteText = input.value.trim();
    if (noteText) {
        notes.push(noteText);
        input.value = "";
        renderNotes();
    }
}
function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}
