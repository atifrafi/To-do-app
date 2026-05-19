document.querySelector("#add").onclick = function (s) {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please write a task");
    console.log(s);
  } else {
    document.querySelector("#tasks").innerHTML += `
        <div class="task">
        <span id="taskname">${document.querySelector("#newtask input").value}</span>
        <button class="delete">
        <i class="fa-solid fa-delete-left"></i>
        </button>
        </div>
        `;
     let currtask = document.querySelectorAll(".delete")
     for(let i=0; i<currtask.length; i++){
        currtask[i].onclick = function (){
            this.parentNode.remove();
        }
     }

     let tasks = document.querySelectorAll(".task")
     for(let i=0; i<tasks.length; i++){
        tasks[i].onclick = function () {
            this.classList.toggle("completed");
        }
     }
  }
};
