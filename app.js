let headline = document.querySelector("h2");
let started = false;
let level =0;
let gameSeq =[];
let userSeq =[];
let btns = ["box1","box2", "box3","box4"];
let currBox = document.querySelector(".box1 , .box2");

let head = document.querySelector(".game");

head.addEventListener("click", function(){
    if(started == false){
        started = true;

        levelup();
    }
});
document.addEventListener("keydown", function(){
    if(started == false){
        started = true;

        levelup();
    }
});

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
     btn.classList.remove("flash");
   },300);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },300);
 }

function levelup(){
    userSeq =[];
    level++;
    headline.innerText =`Level  ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randomBox = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    gameFlash(randomBox);
};

function checkGame(idx){
   
   if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
         setTimeout(levelup, 1000);
      }
   }else{
     let gameover = document.querySelector("body");
     gameover.style.backgroundColor = "red";
     setTimeout(function(){
        gameover.style.backgroundColor = "white";
     }, 150);
     headline.innerText = `GAME OVER! your score is ${level},Press any Key to restart`;
     reset();
   }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkGame(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".col");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level =0;
}