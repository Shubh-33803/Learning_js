let box = document.querySelectorAll(".box");
let resetbtn = document.getElementById("Reset");
let winner = document.getElementById("winner");
let hide = document.getElementById("win-box");

let turnO  = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

box.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        }

        box.disabled = true;

        checkWinnner();
    });
});


let disab = () => {
    for(let boxes of box){
        boxes.disabled = true;
    }
}

let showWinner = (win) => {
    winner.innerText = `The winner is ${win}`;
    hide.classList.remove("win-b");
    disab();
    
}

let checkWinnner = () => {
    for(let pattern of winPattern){

        let pos1 = box[pattern[0]].innerHTML;
        let pos2 = box[pattern[1]].innerHTML;
        let pos3 = box[pattern[2]].innerHTML;

        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("you are winner 🥇",pos1);
                showWinner(pos1);
            }
        }
    }
}