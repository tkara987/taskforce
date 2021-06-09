// Todo Storage
let todos = [];

// New Element

function newElement() {
    // The X sign
    let close = document.createElement("span");
    close.setAttribute("class", "close");
    close.setAttribute("onclick", "deleteThis()");
    close.innerHTML = "×"

    // Store input
    let input = document.getElementById("task").value;

    // Toast
    if (input === "" || input.replace(/^\s+|\s+$/g, "").length == 0) {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");
        // Create new list element
        let newLi = document.createElement("li");
        newLi.innerHTML = input;
        newLi.appendChild(close); // Adding X
        // Creating & pushing object
        let newTodoObject = new Object();
        let currentId = Date.now();
        newTodoObject.id = currentId;
        newTodoObject.name = input;
        newTodoObject.checked = false;
        todos.push(newTodoObject);

        newLi.setAttribute("id", currentId);
        let list = document.getElementById("list");
        
        list.append(newLi);
        document.getElementById("task").value = '';

        console.log(newLi);
    }  
};

// Delete

function deleteThis() {
    let closebtns = document.getElementsByClassName("close");
    let i;

    for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
        // Delete from storage
        let targetId = ev.target.id;
        let currentIndex = todos.findIndex(item => item.id === targetId);
        todos.splice(currentIndex, 1);
        });
    }
};


// Mark as done
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      // Change storage
      let targetId = ev.target.id;
      let currentIndex = todos.findIndex(item => item.id === targetId);
      todos[currentIndex].checked = true;
    }
  },
  false
);

// Render Todos


// Local Storage
function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));

};

console.log(todos);