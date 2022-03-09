let container = document.getElementById("container");

function addContainerDiv(x){
    for (i=0; i<x; i++){
        let new_div = document.createElement("div");
        new_div.classList.add(`grid${i}`);
        new_div.setAttribute('style', 'display: flex; text-align: center;'); 
        classNames = document.getElementById("container")
        classNames.append(new_div);
    }
    


};

function addDiv(x, theClassName){
    for (i=0; i<x; i++){
        let new_div = document.createElement("div");
        new_div.classList.add(`gridItem`);
        new_div.setAttribute('style', 'flex-basis: 100%; border: 1px solid black; padding: 1px; padding-top: max(5px);');
        let theClass = document.querySelector(`${theClassName}`);
        theClass.append(new_div);
    }


};

let user_choice = 0;

squarePick = document.getElementById("pick");



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




squarePick.addEventListener("click", function(){
    container.innerHTML="";
    user_choice = squarePick.value;
    buildBoard(user_choice);
    let grids = document.querySelectorAll(".gridItem");
    grids.forEach(element => {
        element.addEventListener("mouseover", function(element){
            element.target.style.backgroundColor = "white";
    

        })

    })
    

    let mode = document.querySelector('#mode');

    mode.addEventListener("click", function(){
        modePick = mode.textContent;
        console.log(modePick)
        if (modePick == "REGULAR"){
            mode.textContent = ("RAINBOW");
            grids.forEach(element => {
                element.addEventListener("mouseover", function(element){
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    element.target.style.backgroundColor = `#${randomColor}`;
            
        
                })
        
            })
        
        }
        else{
            mode.textContent = ("REGULAR");
            grids.forEach(element => {
                element.addEventListener("mouseover", function(element){
                    element.target.style.backgroundColor = "white";
            
        
                })
        
            })
        
        }

});



    
   
    

    let clear = document.getElementById("clearBoard");



    clear.addEventListener("click", function(){
        grids.forEach(element => {
            element.style.backgroundColor = "";

        })
    })
})
