document.addEventListener("DOMContentLoaded", () => {
    console.log("Page is loaded");

    const submitButton = document.getElementById("submitButton");

 
    submitButton.addEventListener("click", displayInfo)
    
    
   
});

const displayInfo = () => {
    let todoId = document.getElementById("todoId").value;
    console.log(todoId);
    let url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    
    fetch(url)
        .then(response => response.json())
        .then(todo => {

            let details = document.getElementById("details")
            details.innerHTML = ""
            let title = document.createElement("h6")
            title.innerText = todo.title;
            details.appendChild(title);
            let complete = document.createElement("p")
            complete.innerText = `completed: ${todo.completed}`
            details.appendChild(complete)
        })

    
};



// let url = "https://jsonplaceholder.typicode.com/todos/"
// function displayToDoDetails() {
//     let todoId = document.getElementById("todoId").value;

//     fetch(`${url}${todoId}`)
//         .then(response => response.json())
//         .then(todo => {

//             let details = document.getElementById("details")
//             details.innerHTML = ""
//             let title = document.createElement("h6")
//             title.innerText = todo.title;
//             details.appendChild(title);
//             let complete = document.createElement("p")
//             complete.innerText = `completed: ${todo.completed}`
//             details.appendChild(complete)
//         })



// }