
//btns and input variables defenition
const addBtn = document.querySelector('.tweet-btn');
const inputTask = document.querySelector('.tweet-message');
const reviewsList = document.querySelector('.reviews-list');
const form = document.querySelector('.form');

if(!localStorage.getItem('task')){
    let tasksHolder = [];
    localStorage.setItem('task',JSON.stringify(tasksHolder));

}else{

}


addBtn.addEventListener('click', ()=>{
    addTask();
});

let taskObj =(task)=>{
    return {
        id:new Date().getSeconds().toString(),
        task
    }
};

const addTask = () => {
    const task = taskObj(inputTask.value);
    let tasks = JSON.parse(localStorage.getItem('task'));
    console.log(tasks);
    tasks.push(task);
    let tasksString = JSON.stringify(tasks);
    localStorage.setItem('task' , tasksString);
    reviewsList.insertAdjacentHTML('beforeend', '');

};

const makeReviews = () =>{
    const taskArr = localStorage.getItem('task');
    taskArr2 = JSON.parse(taskArr);
    let markup = taskArr2.map(task =>{
        return `<li class="review-item" id="${task.id}">${task.task} <span class="delete-item">&times;</span></li>`
    });
    return markup;
}

reviewsList.insertAdjacentHTML('beforeend', makeReviews());



console.log(localStorage.getItem('task'));