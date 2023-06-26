const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');


// добавление задачи
form.addEventListener('submit', addTask) 

// удаление задачи
tasksList.addEventListener('click', deleteTask)

// отмечаем задачу как выполненную 
tasksList.addEventListener('click', doneTask)

function addTask(event) {
    event.preventDefault();
    
    const taskText = taskInput.value;

    const taskHTML = `<li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title">${taskText}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
</li>`;
tasksList.insertAdjacentHTML('beforeend', taskHTML);

// очищаем поле ввода 

taskInput.value = '';
taskInput.focus()

// скрываю
if(tasksList.children.length > 1) 
{
    emptyList.classList.add('none');
}
}

function deleteTask(event){
    // проверяю если клик был не по кнопке "удалить задачу"

    if(event.target.dataset.action !== 'delete') return;
    
    const parenNode = event.target.closest('.list-group-item');
    parenNode.remove();

    if(tasksList.children.length > 1){
        emptyList.classList.remove('none');
    }
}

function doneTask(event){
   if(event.target.dataset.action !== 'done') return

    const parenNode = event.target.closest('.list-group-item');
    const taskTitle = parenNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done')
   }






