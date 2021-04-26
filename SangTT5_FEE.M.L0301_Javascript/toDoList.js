const toDoList = [];
let i = 0;

const addNoteFunc = () => {
    let text = document.getElementById('input-note').value;
    if(text === ''){
        return;
    }
    addNote(text);
    showTodoList(toDoList);
    document.getElementById('input-note').value = '';
}

const addNote = (txt) => {
    let newNote = { 
        id: i++,
        note: txt,
        checked: false
    };
    toDoList.push(newNote);
}

const deletaNoteFunc = (element) => {
    let id = element.getAttribute('data_note');
    deleteNote(id);
    showTodoList(toDoList);
}

const deleteNote = (id) => {
    let newtoDoList = toDoList.map( (item,index) => {
        if ( item.id == id ) {
            toDoList.splice(index,1);
        }
    } )
    return toDoList;
}

const checkNoteFunc = (element) => {
    let id = element.getAttribute('data_note');
    checkNote(id);
}

const checkNote = (id) => {
    toDoList.map( (item, index) => {
        if ( item.id == id ){
            item.checked = true; 
        }
    })
    showTodoList(toDoList);
}

const showTodoList = (toDoList) => {
    let showData = ''
    toDoList.map((item, index) => {
        let checkIcon = item.checked ? `<i class="fas fa-check-circle complete" data_note='${item.id}' onclick="checkNoteFunc(this)"></i>` : `<i class="far fa-circle not_complete" data_note='${item.id}' onclick="checkNoteFunc(this)"></i>`
        let checkText = item.checked ?  `<p class="text"><s>${item.note}</s></p>` : `<p class="text">${item.note}</p>`
        showData += `
        <li class="item" >
            ${checkIcon}
            ${checkText}
            <i class="fas fa-trash-alt delete" data_note='${item.id}' onclick="deletaNoteFunc(this)"></i>
        </li>
        `;
    })
    document.getElementById('show-list-todo').innerHTML = showData;
}

