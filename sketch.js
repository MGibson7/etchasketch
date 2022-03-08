let container = document.getElementById("container");

function addContainerDiv(x){
    for (i=0; i<x; i++){
        let new_div = document.createElement("div");
        new_div.classList.add(`grid${i}`);
        new_div.setAttribute('style', 'display: flex;'); 
        classNames = document.getElementById("container")
        classNames.append(new_div);
    }
    


};

function addDiv(x, theClassName){
    for (i=0; i<x; i++){
        let new_div = document.createElement("div");
        new_div.classList.add(`gridItem`);
        new_div.setAttribute('style', 'flex-basis: 100%; border: 5px solid black; padding: 5px;');
        let theClass = document.querySelector(`${theClassName}`);
        theClass.append(new_div);
    }


};


let user_choice = 24;

function buildBoard(squares){
    if (squares > 100){
        squares = 100;
    }
    addContainerDiv(squares);
    for (y = 0; y<squares; y++){
        addDiv(squares, `.grid${y}`);
    }

}

buildBoard(user_choice);


let grids = document.querySelectorAll(".gridItem");


grids.forEach(element => {
    element.addEventListener("mouseenter", function(element){
        element.target.style.backgroundColor = "aqua";

    })

})

let clear = document.getElementById("clearBoard");



clear.addEventListener("click", function(){
    grids.forEach(element => {
        element.style.backgroundColor = "";

    })
})
    
