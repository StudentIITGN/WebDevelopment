let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];    
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    //console.log("game was draw");
    msg.innerText="Game was draw.play again";
    msg.style.backgroundColor="yellow";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("you win!");
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        //console.log("you lose!");
        msg.innerText=`you lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //console.log("user choice=",userChoice);
        //to generate computer choice  ->moduler
    const compChoice=genComputerChoice();
    //console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false:true;
        }else if(userChoice=== "paper"){
            userWin=compChoice==="scissors"?false:true;
        }else {
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }    
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});