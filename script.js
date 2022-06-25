console.log("active");
// create
const tasks = JSON.parse(localStorage.getItem("tasks"))
  ? JSON.parse(localStorage.getItem("tasks"))
  : [
    {
      id: 1,
      name: "Yes, yes! I can do it! I'll fix my life's clock!",
      description:
      "My children called me dad. My wife call me Milien but from now on the world will come to know me as.... Nox",
      status: "need to do",
    },
  ];

  resetTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    window.location.reload();
  };
  
  addToTasks = () => {
  let TaskStatus = document.querySelector("#TaskStatus").value;
  let TaskName = document.querySelector("#taskInput").value;
  let TaskDescription = document.querySelector("#taskDescription").value;
  if (TaskName == "") {
    alert("blank entry detected");
  } else {
    tasks.push({
      id: tasks.length + 1,
      name: TaskName,
      description: TaskDescription,
      status: TaskStatus,
    });
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    
    window.location.reload();
    console.log("entry successful");
  }
};


// read all
// sort by status
display = () => {
  document.querySelector("#target").innerHTML = "";
  let RetrievedTaskArray = JSON.parse(localStorage.getItem("tasks"));
  
  // display
  // if (listed tasks.staus = "selected status"?display from index 1:display index o)
  // let selectionStatus = document.querySelector("#selectType").value;
  // for (let i = 0; i < RetrievedTaskArray.length; i++) {
    //   //
    //   if (selectionStatus =RetrievedTaskArray.status){
      
      //     document.querySelector("#target").innerHTML += `
      //     <div class="selectedtasks"   >
      //     <p>${tasks.id}</p>
      //     <h3 id="h3">${tasks.name}</h3>
      //     <p>${tasks.description}</p>
      //     `
      //   }
      // else{
        
        let retrievedTask = localStorage.getItem("tasks");
        JSON.parse(retrievedTask).forEach((task) => {
          document.querySelector("#target").innerHTML += `
        <div class="taskItem"   >
        <p>${task.id}</p>
        <input type="checkbox" name="checkbox" class="checkbox">
        <label for="taskInput">
        <h3 id="h3">${task.name}</h3>
        <p>${task.description}</p>
        </label>
        <p dir="rtl" class="subInfo">${task.status}</p>
        </div>
        `;
  });

  // }
  // };
};
display();

// read one

// update

// update all
// remove completed tasks

// delete
// deleted all selected(sorted)

// delete last
RemoveFinal = () => {
  JSON.parse(localStorage.getItem('tasks'))
  console.log(tasks);
  let NewTasks = tasks.pop();
  console.log(NewTasks);
  
  localStorage.setItem(tasks,JSON.stringify(NewTasks));
  console.log("removed last item");
  display();
  // window.location.reload();
};





// delete first








// addToTasks = () => {
//   let TaskStatus = document.querySelector("#TaskStatus").value;
//   let TaskName = document.querySelector("#taskInput").value;
//   let TaskDescription = document.querySelector("#taskDescription").value;
//   if (TaskName == "") {
//     alert("blank entry detected");
//   } else {
//     tasks.push({
//       id: tasks.length + 1,
//       name: TaskName,
//       description: TaskDescription,
//       status: TaskStatus,
//     });
//     localStorage.getItem(tasks)
//       ? console.log("in memory")
//       : localStorage.setItem("tasks", JSON.stringify(tasks));

//     console.log("entry successful");
//   }

//   display();
// };
// clearTasks = () => {
//   localStorage.length=0;
//   console.log(localStorage);
//   resetTasks();
// };
// searchTasks = () => {
//   let FindTask = document.querySelector("#SecondR").value.toLowerCase();
//   let SearchResult = tasks.find((tasks) => tasks.name === FindTask);
//   console.log(SearchResult);
//   document.querySelector("#target").innerHTML = "";
//   document.querySelector("#target").innerHTML = `
//           <div class="searchItem" >
//           <p>${SearchResult.id}</p>
//           <h3>${SearchResult.name}</h3>
//           <p>${SearchResult.description}</p>
//           <p dir="rtl" class="subInfo">${SearchResult.status}</p>
//           <button onclick="deleteItem()">delete task</button>

//           </div>

//           `;
// };

// editTasks = () => {
//   alert("alert");
// };

// reviewTask = (caller) => {
//   // use search function to select task
//   let target = caller.id;
//   console.log("area element id = " + target);
// };

// deleteItem = () => {
//   let rawText = document.querySelector(".searchItem").textContent;
//   let id = JSON.parse(rawText.split(" ").slice(10, 11)) - 1;
//   console.log(id);
//   localStorage.removeItem(tasks[id]);
//   console.log(tasks);
//   // window.location.reload();
//   console.log("removal=complete");
// };
