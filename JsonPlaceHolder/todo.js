document.addEventListener("DOMContentLoaded", () => {
    console.log("Page is loaded");

    const submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Call your displayInfo function
        displayInfo();
    });
});

const displayInfo = () => {
    let userNumber = document.getElementById("todoId").value;
    console.log(userNumber);
    let url = `https://jsonplaceholder.typicode.com/todos/${userNumber}`;
    console.log(url);
    // Add any other code related to displaying information here
};
