console.log("active")
const tasks=[
{name:"Yes, yes! I can do it! I'll fix my life's clock!",
description:"My children called me dad. My wife call me Milien but from now on the world will come to know me as.... Nox"
},

]


 display =() =>{document.querySelector("#target").innerHTML = ""
tasks.forEach((task) => {
    document.querySelector("#target").innerHTML += `
    <div class="taskItem">
    <h3>${task.name}</h3>
    <p>${task.description}</p>
</div>
    `; 
})}
display()
addToTasks = () =>{
    let TaskName= document.querySelector("#taskInput").value
    let TaskDescription = document.querySelector("#taskDescription").value
    tasks.push({name:TaskName,
        description:TaskDescription},)
        console.log("entry successful")
        display()
        
    }
    searchTasks=() =>{
        let FindTask= document.querySelector("#SecondR").value
       let SearchResult= tasks.find( tasks=> tasks.name===FindTask); 

     console.log(SearchResult)
}