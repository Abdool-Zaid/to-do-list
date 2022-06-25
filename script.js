const list = JSON.parse(localStorage.getItem("list"))
  ? JSON.parse(localStorage.getItem("list"))
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
  localStorage.setItem("list", JSON.stringify(list));
  window.location.reload();
};
addToTasks = () => {
  let TaskStatus = document.querySelector("#TaskStatus").value;
  let TaskName = document.querySelector("#taskInput").value;
  let TaskDescription = document.querySelector("#taskDescription").value;
  if (TaskName == "") {
    alert("blank entry detected");
  } else {
    list.push({
      id: list.length + 1,
      name: TaskName,
      description: TaskDescription,
      status: TaskStatus,
    });
    localStorage.setItem("list", JSON.stringify(list));
    window.location.reload();
  }
};
// read all
// sort by status
display = () => {
  document.querySelector("#target").innerHTML = "";
  let RetrievedTaskArray = JSON.parse(localStorage.getItem("list"));
  let retrievedTask = localStorage.getItem("list");
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
};
display();
searchTasks = () => {
  let FindTask = document.querySelector("#SecondR").value.toLowerCase();
  let SearchResult = list.find((list) => list.name === FindTask);
  document.querySelector("#target").innerHTML = "";
  document.querySelector("#target").innerHTML = `
  <div class="searchItem" >
  <p class='id'>${SearchResult.id}</p>
  <input type="checkbox" name="checkbox" class="checkbox">
  <label for="taskInput">
  <h3>${SearchResult.name}</h3>
  <p>${SearchResult.description}</p>
  </label>
          <p dir="rtl" class="subInfo">${SearchResult.status}</p>
          <button onclick="editItem()">edit</button>
          <button onclick="deleteOne()">delete</button>
          </div>
          `;
  sessionStorage.setItem(
    "itemToBeEdited",
    JSON.stringify({
      index: SearchResult.id - 1,
      name: SearchResult.name,
      description: SearchResult.description,
    })
  );
};
// update
editItem = () => {
  let values = JSON.parse(sessionStorage.getItem("itemToBeEdited"));
  document.querySelector(".searchItem").innerHTML = "";
  document.querySelector(".searchItem").innerHTML = `
          <div id="editItem">
          <form onsubmit="event.preventDefault()">
          <input type="text" id="subjectName" value="${values.name}" />
          <input type="text" id="taskDescription" value="${values.description}"/>
          <select name="status" id="TaskStatus">
          <option value="need to do">need to do</option>
          <option value="in progress">in progress</option>
          <option value="completed">completed</option>
          </select>
          <button onclick="updateTask()">Update</button>
          </form>
          </div>
          `;
  updateTask = () => {
    JSON.parse(localStorage.getItem("list"));
    let target = list[values.index];
    let name = document.querySelector("#subjectName").value;
    let description = document.querySelector("#taskDescription").value;
    let status = document.querySelector("#TaskStatus").value;
    target.name = name;
    target.description = description;
    target.status = status;
    localStorage.setItem("list", JSON.stringify(list));
    window.location.reload();
  };
};
// update all
// remove completed lis
RemoveFinal = () => {
  JSON.parse(localStorage.getItem("list"));
  list.pop();
  let Newlist = list;
  localStorage.setItem("list", JSON.stringify(Newlist));
  document.querySelector("#target").innerHTML = "";
  display();
};
deleteOne = () => {
  JSON.parse(localStorage.getItem("list"));
  list.splice(document.querySelector(".id").innerText - 1, 1);
  let Newlist = list;
  localStorage.setItem("list", JSON.stringify(Newlist));
  document.querySelector("#target").innerHTML = "";
  display();
};
DeleteFirstTask = () => {
  JSON.parse(localStorage.getItem("list"));
  list.shift();
  let Newlist = list;
  localStorage.setItem("list", JSON.stringify(Newlist));
  document.querySelector("#target").innerHTML = "";
  display();
};
RemoveAll = () => {
  let RetrievedTaskArray = JSON.parse(localStorage.getItem("list"));
  for (let i = 0; i <= RetrievedTaskArray.length; i++) {
    RetrievedTaskArray.pop();
    let clear = RetrievedTaskArray;
    localStorage.setItem("list", JSON.stringify(clear));
    window.location.reload();
  }
};
