function renderNotes() {
    let list = document.getElementById("noteList");
    list.innerHTML = "";
    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.textContent = note;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = () => deleteNote(index);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

