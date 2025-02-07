const gameSelector = document.getElementById('game-selector');
const gameContainer = document.getElementById('game-container');




gameSelector.addEventListener("change",function(){
    gameContainer.innerHTML ="";
    switch(gameSelector.value){
        case"none":
            gameContainer.textContent="なにしてん"
            break;
        case "click-counter":
            ClickcounterGame();
            break;
        case "number-guess":
            NumberGuessGame();
            break;
        case "RPS":
            RPS();
            break;
    }
})

function NumberGuessGame(){
    const randomNumber = Math.floor(Math.random()*100)+1;
    let  message = document.createElement("p");
    let  input = document.createElement("input");
    input.type = "number";
    input.max = "100";
    input.min = "1";
    input.placeholder = "好きな数字を入力してください (1-100)"
    let  button = document.createElement("button");
    button.textcontent = "予想"
    button.addEventListener("click",function(){
        const userGuess= parseInt(input.value);
        if(userGuess === randomNumber){
            message.textContent = "正解!"
        }else if(userGuess > randomNumber){
            message.textContent = "値が高いって"
        }else{
            message.textContent = "値が小さいって"
        }

    })
    gameContainer.appendChild(input);
    gameContainer.appendChild(button);
    gameContainer.appendChild(message);
}




function ClickcounterGame(){
    let count = 0;

    let button1 = document.createElement("button");
    button1.textContent = "+1ボタン";

    let button2 = document.createElement("button");
    button2.textContent = "+10ボタン";

    let counter = document.createElement("p");
    counter.textContent = count;

    button1.addEventListener("click",function(){
        count++;
        counter.textContent = count;
    })

    button2.addEventListener("click",function(){
        count=count+10;
        counter.textContent = count;
    })      

    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(counter);
}