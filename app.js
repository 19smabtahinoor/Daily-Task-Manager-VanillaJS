const addButtton = document.getElementById('add_button');
const taskList = document.getElementById("task_list");
let doneTaskCount = 0;

//add the task
addButtton.addEventListener('click',() => {
    
    //get the input value
    const inputField = document.getElementById('input_field');
    inputField.addEventListener('change',(e) =>{
        if (e.target.value !== ' ') {
            //create the list 
            const div = document.createElement('div');
            const p = document.createElement('p');
            const button = document.createElement('button');

            //set the value 
            p.innerText = inputField.value;
            button.innerText = "Done";

            //styling the element 
            div.classList.add('single-task', 'flex', 'items-center', 'space-x-4', 'shadow-xl', 'border', 'border-gray-200', 'p-6', 'box-border', 'rounded-md', 'mt-4', 'text-gray-800');
            p.classList.add('text-lg', 'flex', 'flex-grow', 'break-all');
            button.classList.add('done_button', 'bg-blue-600', 'border', 'border-blue-500', 'py-2', 'px-6', 'rounded-md', 'text-white', 'transform', 'focus:scale-105', 'transition', 'duration-300', 'hover:bg-white', 'hover:text-blue-500');

            //append the value 
            div.append(p);
            div.append(button);

            taskList.appendChild(div);
            inputField.value = " ";
            doneButtonListener();
            updateResult();
        } else {
            e.target.placeholder = "Please write something❗❗";
            inputField.classList.add('border-2', 'border-red-500');
        }
    })
})


//Completed tasks
function doneButtonListener(){
    const doneButtons = document.getElementsByClassName('done_button');

    for ( doneButton of doneButtons) {

        doneButton.addEventListener('click',function(event){

            event.target.parentNode.classList.add('opacity-40')

            if (event.target.innerText == "Done") {
                event.target.innerText = 'Completed';
                doneTaskCount++;
                updateResult();
            }
        })
    }
}

//total result 
function updateResult(){
    const totalTasks = document.getElementById('total_tasks');
    const doneTasks = document.getElementById('done_tasks');
    const undoneTasks = document.getElementById('undone_tasks');

    //total tasks count
    const totalTaskCount = parseInt(taskList.childElementCount);
    totalTasks.innerText = totalTaskCount;

    //done tasks count
    doneTasks.innerText = doneTaskCount;

    //undone tasks count
    undoneTasks.innerText = totalTaskCount - doneTaskCount;
}

//search functionality 

function inputChange(e){
    const searchKey = e.target.value.toLowerCase();
    searchList(searchKey)
}

function searchList(searchKey){
    const task = document.getElementsByClassName("single-task");

    for(element of task){
        if (element.innerText.toLowerCase().includes(searchKey) == true){
            element.style.display = "flex";
        }else{
            element.style.display = "none";
        }
    }
}