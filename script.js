console.log("active");

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
    console.log("entry successful");
  }
};

// read all
// sort by status





display = () => {
  document.querySelector("#target").innerHTML = "";
  let RetrievedTaskArray = JSON.parse(localStorage.getItem("list"));

  // display
  // if (listed list.status = "selected status"?display from index 1:display index o)
  // let selectionStatus = document.querySelector("#selectType").value;
  // for (let i = 0; i < RetrievedTaskArray.length; i++) {
  //   //
  //   if (selectionStatus =RetrievedTaskArray.status){

  //     document.querySelector("#target").innerHTML += `
  //     <div class="selectedtasks"   >
  //     <p>${list.id}</p>
  //     <h3 id="h3">${list.name}</h3>
  //     <p>${list.description}</p>
  //     `
  //   }
  // else{

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
  
  // }
  // };
};
display();


searchTasks = () => {
  let FindTask = document.querySelector("#SecondR").value.toLowerCase();
  let SearchResult = list.find((list) => list.name === FindTask);
  console.log(SearchResult);
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
};

// update
editItem=()=>{
console.log('edit')
}



// update all
// remove completed list


RemoveFinal = () => {
  JSON.parse(localStorage.getItem("list"));
  console.log(list);
  list.pop();
  let Newlist = list;
  console.log(Newlist);

  localStorage.setItem("list", JSON.stringify(Newlist));
  console.log(list);

  document.querySelector("#target").innerHTML = "";
  console.log("removed last item");
  display();
};



deleteOne=()=>{
  JSON.parse(localStorage.getItem("list"));
  console.log(list);
  list.splice((document.querySelector('.id').innerText-1),1);
  let Newlist = list;
  console.log(Newlist);

  localStorage.setItem("list", JSON.stringify(Newlist));
  console.log(list);

  document.querySelector("#target").innerHTML = "";
  console.log("removed last item");
  display();
}


DeleteFirstTask= () => {
  JSON.parse(localStorage.getItem("list"));
  console.log(list);
  list.shift();
  let Newlist = list;
  console.log(Newlist);

  localStorage.setItem("list", JSON.stringify(Newlist));
  console.log(list);

  document.querySelector("#target").innerHTML = "";
  console.log("removed last item");
  display();
};

// addToTasks = () => {
//   let TaskStatus = document.querySelector("#TaskStatus").value;
//   let TaskName = document.querySelector("#taskInput").value;
//   let TaskDescription = document.querySelector("#taskDescription").value;
//   if (TaskName == "") {
//     alert("blank entry detected");
//   } else {
//     list.push({
//       id: list.length + 1,
//       name: TaskName,
//       description: TaskDescription,
//       status: TaskStatus,
//     });
//     localStorage.getItem(list)
//       ? console.log("in memory")
//       : localStorage.setItem("list", JSON.stringify(list));

//     console.log("entry successful");
//   }

//   display();
// };
// clearTasks = () => {
//   localStorage.length=0;
//   console.log(localStorage);
//   resetTasks();
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
//   localStorage.removeItem(list[id]);
//   console.log(list);
//   // window.location.reload();
//   console.log("removal=complete");
// };
