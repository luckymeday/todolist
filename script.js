// HTML element declare
let todoList = [];

var allButton = document.getElementById("showAll")
var onScheduleButton = document.getElementById("showOnSchedule")
var onGoingButton = document.getElementById("showOnGoing")
var completedButton = document.getElementById("showCompleted")

// constructors
const addTodo = () => {
    let todo = document.getElementById("todoInput").value;
    let itemTodo = { contents: todo, complete: false };

    todoList.push(itemTodo);
    console.log(todoList);
    render(todoList);
};


// buttons
const toggleDone = (index) => {
    todoList[index].complete = !todoList[index].complete
    allButton.classList.add();
    // onScheduleButton.remove();
    onGoingButton.classList.remove();
    completedButton.classList.remove();
    console.log(todoList);
    render(todoList);
}


// why not working? ----------------------------------------------------------------------------------------------------------------*
// const render = (array) => {
//     let todoHTML = array
//         .map((item, index) => {
//             let html = "";
//             if (item.complete == false) {
//                 html += `<div class="item-style">Todo:${item.contents} <a onclick="toggleDone(${index})" href="#">Done</a></div>`;
//             } else {
//                 html += `<div class="item-style">Todo:${item.contents} <a onclick="toggleDone(${index})" href="#">UnDone</a></div>`;
//             }
//             html += `<div class="item-style" a href="#" onclick='remove(${index})'>end</a></div>`;
//             return html
//         })
//         .join("");
//     document.getElementById("resultArea").innerHTML = todoHTML;
// };

const render = (array) => {
    let todoHTML = array
        .map((item, index) => {
            let html = "";
            if (item.complete == false) {
                html += `<div class="item-style list">${item.contents} <a onclick="toggleDone(${index})" href="#"><img src="ongoing-1.gif" width="70px")></a></div>`;
            } else {
                html += `<div class="item-style list"><strike>${item.contents}</strike> <a onclick="toggleDone(${index})" href="#"><img src="completed-1.png" width="70px")></a></div>`;
            }
            html += `<div class="item-style list" a href='#' onclick='remove(${index})'><img src="garbage.png" width="30px")></a></div>`;
            return html
        })
        .join("");
    document.getElementById("resultArea").innerHTML = todoHTML;
};

// what purpose?? ----------------------------------------------------------------------------------------------------------------------*
const remove = (index) => {
    todoList.splice(index, 1)
    console.log(todoList)
    render(todoList)
}

const enter = document.getElementById("todoInput")
enter.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        addTodo();
    }
});

// button
const showAll = () => {
    allButton.classList.add();
    // onScheduleButton.remove();
    onGoingButton.classList.remove();
    completedButton.classList.remove();
    render(todoList)
}

// const showOnSchedule = () => {
//     let scheduleList = todoList.filter(item => item.complete === false)
//     allButton.classList.remove();
//     onScheduleButton.classList.add();
//     onGoingButton.classList.remove();
//     completedButton.classList.remove();
//     render(scheduleList)
// }

const showOnGoing = () => {
    let onGoingList = todoList.filter(item => item.complete === false)
    allButton.classList.remove();
    // onScheduleButton.remove();
    onGoingButton.classList.add();
    completedButton.classList.remove();
    render(onGoingList)
}

const showCompleted = () => {
    let completedList = todoList.filter(item => item.complete === true)
    allButton.classList.remove();
    // onScheduleButton.remove();
    onGoingButton.classList.remove();
    completedButton.classList.add();
    render(completedList)
}
