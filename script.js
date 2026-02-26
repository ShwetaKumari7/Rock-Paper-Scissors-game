const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");

const options = document.querySelectorAll(".options button");
options.forEach(option => {
    option.addEventListener("click",() => {
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(() => {
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");

           const playerChoice = option.innerHTML.toLowerCase();

            player.src= `assets/${playerChoice}-player.jpeg`;

            const choice = ["rock","paper","scissors"];

            let computerChoice = choice[Math.floor(Math.random()*3)];

            computer.src = `assets/${computerChoice}-computer.jpeg`;

             let cPoints = parseInt(computerPoints.innerHTML);
            let pPoints = parseInt(playerPoints.innerHTML);

         if(playerChoice === "rock"){
             if(computerChoice === "paper")
                    computerPoints.innerHTML = cPoints+1;
                else if(computerChoice === "scissors")
                    playerPoints.innerHTML = pPoints+1;
            }else if(playerChoice === "paper"){
                if(computerChoice === "scissors")
                  computerPoints.innerHTML = cPoints+1;
                else if(computerChoice === "rock")
                playerPoints.innerHTML = pPoints+1;
            }else {
              if(computerChoice === "rock")
                    computerPoints.innerHTML = cPoints+1;
                else if(computerChoice === "paper")
                playerPoints.innerHTML = pPoints+1; 
         }
},900);
    });
});