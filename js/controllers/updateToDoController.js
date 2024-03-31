import { getStore } from "../models/store"
import { updateToDo } from "../models/toDoListModel"

//refrence variables
let dialog
let closeButton
let exitButton
let form
let uid

export function updateToDoController(itemUid) {
    uid = itemUid
    
    //get local copy of the store
    const todo = getStore().find((item) => item.uid === uid)
    dialog = document.querySelector('#update-to-do') //-> refrence to the dialog
    exitButton = dialog.querySelector('#exit')
    closeButton = dialog.querySelector("#close")
    form = dialog.querySelector('form')
    configUi(todo)
    configureListeners()
    dialog.showModal()

}

function configUi(item) {
    dialog.querySelector('#todo').value = item.todo
    dialog.querySelector('#category').value = item.category
    dialog.querySelector('#status').value = item.status
}

function configureListeners() {
    exitButton.addEventListener('click', onCloseDialog)
    closeButton.addEventListener('clisk', onCloseDialog)
    form.addEventListener('submit', onUpdateToDoItem)
}

function onUpdateToDoItem(e) {
    e.preventDefault()
    
    //updating user input
    const todo = e.currentTarget.todo.value.trim()
    const category = e.currentTarget.category.value.trim()
    const status = e.currentTarget.status.value.trim()

    updateToDo({
        todo,
        category,
        status,
        uid,
    })
}

function onCloseDialog(e) {
    dialog.close()
}