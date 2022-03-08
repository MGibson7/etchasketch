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
        new_div.setAttribute('style', 'flex-basis: 100%; border: 5px solid black; padding: 10px;');
        let theClass = document.querySelector(`${theClassName}`);
        theClass.append(new_div);
    }


};


let user_choice = 24;

function buildBoard(squares){
    addContainerDiv(squares);
    for (y = 0; y<squares; y++){
        addDiv(squares, `.grid${y}`);
        console.log(y);
    }

}

buildBoard(user_choice);


let grids = document.querySelectorAll(".gridItem");
console.log(grids);

grids.forEach(element => {
    element.addEventListener("mouseenter", function(element){
        element.target.style.backgroundColor = "aqua";

    })

})


