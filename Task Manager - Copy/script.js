
const form = document.querySelector("form");
const tasks=document.querySelector(".tasks")
const inputtask = document.querySelector("#inputtask");
const category = document.querySelector("#category");
const all = document.querySelector(".all")
const work = document.querySelector(".work")
const study = document.querySelector(".study")
const personal = document.querySelector(".personal")
const inputsearch = document.querySelector("#search")
const darkMode = document.querySelector("#darkMode")
const nav = document.querySelector("nav")
const button = document.querySelectorAll("button")

let alltask = [];

const ui=(arr=alltask)=>{
tasks.innerHTML=""
arr.forEach((elem,index)=>{
  tasks.innerHTML+=`<div class="task">
          <div class="task-info">
            <h2>${elem.taskinputvalue}</h2>
            <span class="badge ${elem.categoryvalue}"> ${elem.categoryvalue} </span>
          </div>

          <div class="btn">
            <button id="editbtn" onclick="editButton(${index})" >Edit</button>

            <button id="completebtn" onclick="completeButton(${index})">${elem.completed ?"Undo":"completed"}</button>

            <button id="deletebtn" onclick="deleteButton(${index})" >Delete</button>
          </div>
        </div>`
})
}

let editIndex = null

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskinputvalue = form[0].value;
  const categoryvalue = form[1].value;

    if(taskinputvalue.trim()==="" || categoryvalue.trim()==="Select Category"){
    alert("Value can not be empty")
    return
  }
  const obj = {
    taskinputvalue,
    categoryvalue,
    completed : false
  };
  if(editIndex==null){
  alltask.push(obj);
  }
  else{
    alltask[editIndex]=obj
    editIndex=null
  }
  ui();
  form.reset()
});

const deleteButton=(index)=>{
  alltask.splice(index,1)
  ui()
}
const completeButton=(index)=>{
  alltask[index].completed=!alltask[index].completed
ui()
}
const editButton=(index)=>{
  inputtask.value = alltask[index].taskinputvalue
  category.value = alltask[index].categoryvalue
  editIndex=index
}
all.addEventListener("click",()=>{
  ui(alltask)
})

work.addEventListener("click",()=>{
  let worktask=alltask.filter((task)=>{
    return task.categoryvalue==="Work"
  })
  ui(worktask)
})

study.addEventListener("click",()=>{
  let studytask=alltask.filter((task)=>{
    return task.categoryvalue==="Study"
  })
  ui(studytask)
})

personal.addEventListener("click",()=>{
  let personaltask=alltask.filter((task)=>{
    return task.categoryvalue==="Personal"
  })
  ui(personaltask)
})

inputsearch.addEventListener("input",()=>{
  let searchedValue=inputsearch.value.toLowerCase()

  let searchedTask=alltask.filter((task)=>{
     return task.taskinputvalue.toLowerCase().includes(searchedValue);
  });

  ui(searchedTask);
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkMode.innerHTML = `
      Light Mode
      <i class="ri-sun-fill"></i>
    `;
  } else {
    darkMode.innerHTML = `
      Dark Mode
      <i class="ri-moon-fill"></i>
    `;
  }
});