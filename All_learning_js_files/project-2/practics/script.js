let box = document.querySelectorAll(".box");
let showWinner = document.getElementById("showWinner");
let hide = document.getElementById("hideme");

let turnO = true;


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

box.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("button was clicked");

        if(turnO){
            btn.innerHTML = "O";
            turnO = false;
        }else{
            btn.innerHTML = "X";
            turnO  = true;
        }

        btn.disabled = true;
        checkWinner();

    });
});


let disab = () => {
    for(let dis of box){
        dis.disabled = true;
    }
}

let finalWin = (win) => {
    showWinner.innerHTML = `Winner = ${win}🥇`;
    hide.classList.remove("hide");
    disab();
}


let checkWinner = () => {
    for(let pattern of winPattern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     box[pattern[0]].innerHTML,
        //     box[pattern[1]].innerHTML,
        //     box[pattern[2]].innerHTML,
        // );

        let pos1Val = box[pattern[0]].innerHTML;
        let pos2Val = box[pattern[1]].innerHTML;
        let pos3Val = box[pattern[2]].innerHTML;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner🥇 = ",pos1Val);
                finalWin(pos1Val);
            }
        }

        

    }
}

