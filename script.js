console.log("active");
let today=new Date().toLocaleString(undefined, {
    month: "numeric", day: "numeric", 
});
const tasks = [
  {
    id: 1,
    name: "Yes, yes! I can do it! I'll fix my life's clock!",
    description:
      "My children called me dad. My wife call me Milien but from now on the world will come to know me as.... Nox",
      createdDate: today,
      status: "need to do",
  },
];

display = () => {
    
    document.querySelector("#target").innerHTML = "";
    tasks.forEach((task) => {
        document.querySelector("#target").innerHTML += `
        <div class="taskItem">
        <p>${task.id}</p>
        <h3>${task.name}</h3>
        <p>${task.description}</p>
        <p dir="rtl" class="subInfo">${task.createdDate}</p>
        <p dir="rtl" class="subInfo">${task.status}</p>
        </div>
        `; 
    });
};
display();
addToTasks = () => {
    let TaskStatus = document.querySelector("#TaskStatus").value;
    let TaskName = document.querySelector("#taskInput").value;
    let TaskDescription = document.querySelector("#taskDescription").value;
    if(TaskName==""){
        alert("blank entry detected")
    }
    else{
        tasks.push({ id:tasks.length+1 ,name: TaskName, description: TaskDescription, createdDate: today, status:TaskStatus  });
        console.log("entry successful");
        //  if item exists do nothing else add to storage
        localStorage.getItem(tasks)?console.log("in memory"):localStorage.setItem("tasks", tasks);
    }
    display();
    clearTasks=()=>{    

    }
};
searchTasks = () => {
    let FindTask = document.querySelector("#SecondR").value;
    let SearchResult = tasks.find((tasks) => tasks.name === FindTask);
    display(SearchResult);
    console.log(SearchResult);
};
