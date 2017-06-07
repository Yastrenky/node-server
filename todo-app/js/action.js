const Task = require('./Task.js')
let data = JSON.parse(localStorage.getItem('.tasks'))

function checkStorage() {
  if(JSON.stringify(data)===JSON.stringify({})) return true
  if(JSON.stringify(data)==='null') return true
  return false

}
if(checkStorage()){
localStorage.setItem('.tasks', JSON.stringify(data))
}

function buildTasks(){
  let taskList=''
  for(let id in data){
    taskList += Task(data[id], id)
  }
  return taskList
}
function updateStorage(){
  localStorage.setItem('task', JSON.stringify(data))
}

function saveNewTask(text) {
const id = Math.round(Math.random()*Math.pow(10,9))
data[id] = text
 updateStorage()
}
function deleteTask(id){
  delete data[id]
   updateStorage()
}
function editTask(id, text){
   data[id] = text
   updateStorage()
}
module.exports.buildTasks= buildTasks
module.exports.saveNewTask= saveNewTask
module.exports.deleteTask= deleteTask
module.exports.editTask= editTask
