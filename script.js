console.log("active");
let today = new Date().toLocaleString(undefined, {
  month: "numeric",
  day: "numeric",
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
// localStorage.length < 1?document.querySelector("#target").innerHTML += `<button onclick="resetTasks()">reset</button>`:console.log("primed");

resetTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  window.location.reload();

};

display = () => {
  let retrievedTask = localStorage.getItem("tasks");
  document.querySelector("#target").innerHTML = "";
  JSON.parse(retrievedTask).forEach((task) => {
    document.querySelector("#target").innerHTML += `
        <div class="taskItem"  ondblclick="reviewTask()"  >
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
  if (TaskName == "") {
    alert("blank entry detected");
  } else {
    tasks.push({
      id: tasks.length + 1,
      name: TaskName,
      description: TaskDescription,
      createdDate: today,
      status: TaskStatus,
    });
    localStorage.getItem(tasks)
      ? console.log("in memory")
      : localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log("entry successful");
  }
  display();
  clearTasks = () => {
    localStorage.clear();
    console.log(localStorage);
  };
};
searchTasks = () => {
  let FindTask = document.querySelector("#SecondR").value;
  let SearchResult = tasks.find((tasks) => tasks.name === FindTask);
  console.log(SearchResult);
  document.querySelector("#target").innerHTML = "";
  document.querySelector("#target").innerHTML = `
    <div class="searchItem" ondblclick="reviewTask()">
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

reviewTask = () => {
  alert("review");
};
