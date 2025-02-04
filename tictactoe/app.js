let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg")
let turnO=true;
let count=0; //to track draw
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("box was clicked");
//         if(turnO){
//             box.innerText="O";
//             turnO=false;
//         }else{
//             box.innerText="X";
//             turnO="true";           
//         }
//         box.disabled=true;
//         checkWinner();
//     })
// })

// const checkWinner=()=>{

//     for(let pattern of winPatterns){
//         let pos1Val=boxes[pattern[0]].innerText;
//         let pos2Val=boxes[pattern[1]].innerText;
//         let pos3Val=boxes[pattern[2]].innerText;

//         if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
//             if(pos1Val===pos2Val && pos2Val===pos3Val){
//                 console.log("winner",pos1Val)
//             }
//         }
//     }

// }

const gameDraw=()=>{
    msg.innerText="Game Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        //box.innerText="erg"
        if(turnO){
            box.innerText="0";
            turnO=false
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    })


})

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;

}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();


}

const checkWinner=()=>{
    for(let pattern of winPatterns){       
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        

        if (pos1val!="" && pos2val!="" && pos3val!="") {
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val)
                showWinner(pos1val);
                return true;
            }
        }
    }return false;

}

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);