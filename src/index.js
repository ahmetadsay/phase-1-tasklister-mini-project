const form = document.getElementById('create-task-form')
const inputUser = document.getElementById('new-task-description')
const deleteButton = document.getElementById('delete-button')



document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    inputRendered(inputUser.value)
    inputUser.value = ''
  })
});

deleteButton.addEventListener('click', function(e) {
   const taskList = document.querySelector('#tasks')
   taskList.innerHTML = ''
})


function inputRendered(input) {
  let list = document.createElement('li')
  list.textContent = input
  document.querySelector('#tasks').appendChild(list)

}