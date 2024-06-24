// const addbtn=document.querySelector("add-btn");
// const newTaskInput=document.querySelector("wrapper input");
// const tasksContainer=document.querySelector("#task1");
// const error=document.getElementById("error");
// const countValue=document.querySelector("count-value");
// let taskCount=0;

// const displayCount=(taskCount)=>{
//     countValue.innerText=taskCount;
// };

// const addTask = () => {
//   const taskName = newTaskInput.ariaValueMax.trim();
//   error.style.display = "none";
//   if(!taskName){
//     setTimeout(() =>{
//         error.style.display="block";
//     },200);
//     return;
//   }

//    const task = `<div class="task">
//     <input type="checkbox" class="task-check">
//     <span class="taskname">${taskName}</span>
//     <button class="edit">
//     <i class="fa-regular fa-pen-to-square"></i>
//     </button>
//     <button class="delete">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//    </div>`;

//    tasksContainer.insertAdjacentHTML("beforeend",task);
 
//    const deleteButton=document.querySelector(".delete");
//    deleteButton.forEach((button) => {
//     button .onclick=()=>{
//       button.parentNode.remove();
//       taskCount=-1;
//       displayCount(taskCount);
//     };
//    });
//    const editButtons=document.querySelectorAll(".edit");
//    editButtons.forEach((editBtn)=>{
//     editBtn.onclick= (e) => {
//       let targetElement=e.target;
//       if(!(e.target.className=="edit")){
//         targetElement=e.target.parentElement;
//       }
//       newTaskInput.value=targetElement.previousElementSibling?.innerText;
//       targetElement.parentNode.remove();
//       taskCount-=1;
//       displayCount(taskCount);
//     };
//    });
//    const tasksCheck=document.querySelectorAll(".task-check");
//    tasksCheck.forEach((checkBox)=>{
//     checkBox.enChange=()=>{
//       checkBox.nextElementSibling.classList.toggle("completed");
//       if(checkBox.checked){
//         taskCount-=1;
//       }else{
//         taskCount+=1;
//       }
//       displayCount(taskCount);
//     };
//    });
//   taskCount+=1;
//   displayCount(taskCount);
//   newTaskInput.value="";
// };
// addbtn.addEventListener("click",addTask);


// window.onload=()=>{
//   taskCount=0;
//   displayCount(taskCount);
//   newTaskInput.value="";
// }


const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');
const dialog=document.getElementById('dialog');
addButton.addEventListener('click', () => {
    if (textInputField.value.trim().length == '')
        return;

    const todoItemContainer = document.createElement('div');
    todoItemContainer.classList.add('todo-item-container');

    todosContainer.appendChild(todoItemContainer);

    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

    todoText.addEventListener('dblclick', () => {
        todoText.classList.add('line-through');
        editButton.setAttribute("disabled", "disabled");
    })



    const editButton = document.createElement('button');
    editButton.id = 'edit-button';
   
    const editImage = document.createElement('img');
    editImage.src = 'edit.svg';
    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);
   
    editButton.addEventListener('click', () => {
        textInputField.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    });


    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';

    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.svg';
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });


    textInputField.value = "";

});
addButton.addEventListener('click', () => {
    dialog.style.display='block';
});