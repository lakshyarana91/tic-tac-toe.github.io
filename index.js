let turn = "X";
let draw = 0;


// Function to change the turn
const changeTurn = () => {
    
    return turn === "X" ? "O" : "X"
}

let winBox = [
            ['null','null','null'],
            ['null','null','null'],
            ['null','null','null'] 
        ]

const checkWin = (ele) =>{
    // console.log(ele);
    const element = parseInt(ele.firstChild.textContent);
    const index = parseInt(element / 3);
    const index2 = element % 3;
    winBox[index][index2] = turn;
    // console.log(winBox);
    
    let count = 0;
    let flag = false;
    for(let i = 0 ; i < winBox.length ; i++){
        if(winBox[i][index2] !== turn){
            break;
        }
        else{
            if(i === 2){
                return true;
            }
        }
    }

    for(let i = 0 ; i < winBox.length ; i++){
        if(winBox[index][i] !== turn){
            break;
        }
        else{
            if(i === 2){
                return true;
            }
        }
    }
    
    
    
    if(index === index2 ){
        for(let i = 0; i < winBox.length ; i++){
            if(winBox[i][i] === turn){
                if(i === 2){
                    return true;
                }
            }
            else{
                break;
            }
        }
    }

    if((index === 0 && index2 === 2) || (index === 1 && index2 === 1) || (index === 2 && index2 === 0) ){
        for(let i = 0; i < winBox.length ; i++){
            // console.log('i = ' + i + ' i2 = ' + (index2 - i));
            if(winBox[i][2 - i] === turn){
                if(i === 2){
                    return true;
                }
            }
            else{
                break;
            }
        }
    }
    
    
    return false;
    // return false;


}

function checkDraw(){
    for(let i = 0 ; i < winBox.length ; i++){
        for(let j = 0 ; j < winBox.length ; j++){
            if(winBox[i][j] === 'null'){
                return false
            }
        }
    }
    return true;
}


// Function to check for a win
// const checkWin = () => {
//     let boxTexts = document.getElementsByClassName("boxText");
//     let wins = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 9],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ]
//     wins.forEach(e => {
//         if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")) {
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else if((boxTexts[e[3]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[5]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[3]].innerText !== "")){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else if((boxTexts[e[6]].innerText === boxTexts[e[7]].innerText) && (boxTexts[e[9]].innerText === boxTexts[e[7]].innerText) && (boxTexts[e[6]].innerText !== "")){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else if((boxTexts[e[0]].innerText === boxTexts[e[3]].innerText) && (boxTexts[e[6]].innerText === boxTexts[e[3]].innerText) && (boxTexts[e[0]].innerText !== "")){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else if((boxTexts[e[1]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[7]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[1]].innerText !== "")){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else if((boxTexts[e[2]].innerText === boxTexts[e[5]].innerText) && (boxTexts[e[8]].innerText === boxTexts[e[5]].innerText) && (boxTexts[e[2]].innerText !== "")){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else if((boxTexts[e[0]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[8]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[0]].innerText !== "")){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else if((boxTexts[e[2]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[6]].innerText === boxTexts[e[4]].innerText) && (boxTexts[e[2]].innerText !== "")){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
//         } else {
//             document.querySelector(".info").innerText = "It's a Tie";
//         }
//     })
// }




//Game Logic
let boxes = document.getElementsByClassName("box");
let info = document.querySelector(".info");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener("click", () => {

        if(draw === 1){
            info.innerText += "\n Click Reset to Reset the Game"
        }
        else if(boxText.innerText != 'X' || boxText.innerText != 'O'){
            
            if(checkWin(element)){
                console.log(turn + ' wins');
                info.innerText = turn + ' wins';
                draw = 1;
            }
            else if (checkDraw()){
                console.log('Its a Draw');
                info.innerText = "It's a Draw";
                draw = 1;
            }

            
                boxText.innerText = turn;
                boxText.style.visibility = 'visible';
                turn = changeTurn();
        }
    })
});

//Reset button
reset.addEventListener("click", () => {
    let boxText = document.querySelectorAll(".boxText");

    Array.from(boxText).forEach((element,index) => {
        element.innerText = index;
        element.style.visibility = 'hidden'
        // element.firstChild.

    })
    document.querySelector(".info").innerText = "";
    
    draw = 0;

    for(let i = 0 ; i < winBox.length ; i++){
        for(let j = 0 ; j < winBox.length ; j++){
            winBox[i][j] = 'null'
        }
    }
    // console.log(winBox);
})


// var turn = "cross";

// var grid = ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'];

// cells.forEach(box => {
//     box.addEventListener("click", () => {
//         if(turn === 'cross'){
//             box.style.background = "url('cross.jpg') no-repeat center"
//             turn = "circle";
//         } else {
//             box.style.background = "url('circle.jpg') no-repeat center"
//             turn = "cross";
//         }  
//     })
// });