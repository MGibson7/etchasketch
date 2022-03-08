let container = document.getElementById("container");

function addContainerDiv(x){
    for (i=0; i<x; i++){
        let new_div = document.createElement("div");
        new_div.classList.add(`grid${i}`);
        new_div.setAttribute('style', 'display: flex;'); 
        classNames = document.getElementById("container")
        classNames.append(new_div);
    }
    console.log(container);
    


};

function addDiv(x, theClassName){
    for (i=0; i<x; i++){
        let new_div = document.createElement("div");
        new_div.classList.add(`gridItem`);
        new_div.setAttribute('style', 'flex-basis: 100%; border: 10px solid green; padding: 10px;');
        console.log(theClassName);
        let theClass = document.querySelector(`${theClassName}`);
        console.log(theClass);
        theClass.append(new_div);
    }
    console.log(container);


};


addContainerDiv(16);
addDiv(16, ".grid0");
addDiv(16, ".grid1");
addDiv(16, ".grid2");
addDiv(16, ".grid3");
addDiv(16, ".grid4");
addDiv(16, ".grid5");
addDiv(16, ".grid6");
addDiv(16, ".grid7");
addDiv(16, ".grid8");
addDiv(16, ".grid9");
addDiv(16, ".grid10");
addDiv(16, ".grid11");
addDiv(16, ".grid12");
addDiv(16, ".grid13");
addDiv(16, ".grid14");
addDiv(16, ".grid15");

let grids = document.querySelectorAll(".gridItem");
console.log(grids);

grids.forEach(element => {
    element.addEventListener("mouseenter", function(element){
        element.target.style.backgroundColor = "aqua";

    })
    element.addEventListener("mouseout", function(element){
        element.target.style.backgroundColor = "";
    })
})


