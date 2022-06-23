console.log("active");

// const tasks =  [
//   {
//     id: 1,
//     name: "Yes, yes! I can do it! I'll fix my life's clock!",
//     description:
//       "My children called me dad. My wife call me Milien but from now on the world will come to know me as.... Nox",
//     createdDate: today,
//     status: "need to do",
//   },
// ];

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

    
    display = () => {
      let retrievedTask = localStorage.getItem("tasks");
      document.querySelector("#target").innerHTML = "";
      JSON.parse(retrievedTask).forEach((task) => {
        document.querySelector("#target").innerHTML += `
        <div class="taskItem"   >
        <p>${task.id}</p>
        <input type="checkbox" name="checkbox" class="checkbox">
        <label for="taskInput">
        <h3 id="h3">${task.name}</h3>
        <p>${task.description}</p>
        </label>
        <div id="deleteitem"></div>
        <p dir="rtl" class="subInfo">${task.status}</p>
        
        </div>
        `;
        document.querySelector('.taskItem').addEventListener("mouseover",function (){
          document.querySelector('#deleteitem').innerHTML=` <button type="button" onclick="deleteItem()" id="${task.id}">delete</button>`});
          document.querySelector('.taskItem').addEventListener("mouseout",function (){
            document.querySelector('#deleteitem').innerHTML=` `});
          });
        };
        display();  
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
            localStorage.getItem(tasks)
            ? console.log("in memory")
            : localStorage.setItem("tasks", JSON.stringify(tasks));
            
            console.log("entry successful");
          }
          
          display();
        };
        clearTasks = () => {
          localStorage.clear();
          console.log(localStorage);
          resetTasks();
        };
        searchTasks = () => {
          let FindTask = document.querySelector("#SecondR").value;
          let SearchResult = tasks.find((tasks) => tasks.name === FindTask);
          console.log(SearchResult);
          document.querySelector("#target").innerHTML = "";
          document.querySelector("#target").innerHTML = `
          <div class="searchItem" >
          <p>${SearchResult.id}</p>
          <h3>${SearchResult.name}</h3>
          <p>${SearchResult.description}</p>
          <p dir="rtl" class="subInfo">${SearchResult.createdDate}</p>
          <p dir="rtl" class="subInfo">${SearchResult.status}</p>
          
          </div>
          
          `;
        };
        
        editTasks = () => {
          alert("alert");
};

reviewTask = (caller) => {
  // use search function to select task
    let target = caller.id;
    console.log("area element id = " + target);
  };
  
  // document.querySelector('.taskItem').addEventListener("dblclick",function (){ console.log(tasks.length)});
  
  // deleteTask = () => {
    //   tasks.splice(id, 1);
    //   localStorage.setItem("tasks", JSON.stringify(tasks));
    //   display();
    //   console.log("read =true");
    // };
    deleteItem=()=>{
      
      
      console.log("removal=complete")
    }
    
    resetTasks = () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      window.location.reload();
    };