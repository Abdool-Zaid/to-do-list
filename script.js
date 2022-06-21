console.log("active")
const tasks=[
{name:"Yes, yes! I can do it! I'll fix my life's clock!",
description:"My children called me dad. My wife call me Milien but from now on the world will come to know me as.... Nox"
},
{
    name:"shower",
    description:"use soap"
}
]


document.querySelector("#target").innerHTML = ""
tasks.forEach((task) => {
    document.querySelector("#target").innerHTML += `
    <div class="taskItem">
    <h3>${task.name}</h3>
    <p>${task.description}</p>
</div>
    `; 
})