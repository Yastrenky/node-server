const formInput = document.querySelector('.form input')
const tasksContainer = document.querySelector('.tasks-container')
const editor = document.querySelector('.editor')
const editorInput = document.querySelector('.editor input')
const editorBtn = document.querySelector('.editor button')
const Task = require('./Task.js')
const actions = require('./action.js')

function renderTaskContainer(){
  tasksContainer.innerHTML = actions.buildTasks()
}

renderTaskContainer()



formInput.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    actions.saveNewTask(e.target.value)
    renderTaskContainer()
    formInput.value = ''
  }

})
tasksContainer.addEventListener('click', function(event) {

  if (event.target.classList.contains('text')) {
    event.target.classList.toggle('completed')
  }
  if (event.target.classList.contains('delete')) {
    const id = event.target.parentElement.id
    actions.deleteTask(id)
    renderTaskContainer()
  }
  if (event.target.classList.contains('edit')) {
    editor.dataset.id = event.target.parentElement.id
    editor.classList.toggle('open')
    editorInput.value = event.target.previousSibling.textContent
  }

})
editorBtn.addEventListener('click', function(){
  actions.editTask(editor.dataset.id, editorInput.value)
  renderTaskContainer()
  editor.classList.remove('open')

})
