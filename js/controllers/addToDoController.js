
import { createToDo } from "../models/toDoListModel"

let dialog
let closeButton
let exitButton
let form
let uid

export function addToDoController() {

    dialog = document.querySelector('#create-to-do') //-> refrence to the dialog
    exitButton = dialog.querySelector('#exit')
    closeButton = dialog.querySelector("#close")
    form = dialog.querySelector('form')
    configureListeners()
    dialog.showModal()
}

function configureListeners() {
    exitButton.addEventListener('click', onCloseDialog)
    closeButton.addEventListener('click', onCloseDialog)
    form.addEventListener('submit', onCreateToDoItem)
}

function onCreateToDoItem(e) {
    e.preventDefault()
    
    //imputting user input
    const todo = e.currentTarget.todo.value.trim()
    const category = e.currentTarget.category.value.trim()
    const status = e.currentTarget.status.value.trim()

    createToDo ({
        todo,
        category,
        status,
        uid,
    })

    form.reset()
}

function onCloseDialog(e) {
    dialog.close()
}