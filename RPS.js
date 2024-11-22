function RPS(){
    const choices=["gu","choki","pa"];
    let select = document.createElement("select");
    select.id = "choice"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent = "決定"

    gameContainer.appendChild(choiceButton);

    let image = document.createElement("img");
    image.alt = "Choice";
    image.style.width = "300px";
    image.style.height = "300px";

    let enemyImage = document.createElement("img");
    enemyImage.alt = "Choice";
    enemyImage.style.width = "300px";
    enemyImage.style.height = "300px";

    choiceButton.addEventListener("click",function(){
    switch(select.value){
        case "gu":
            image.src = "https://ddnavi.com/wp-content/uploads/2020/09/1266022.jpg"
            break;
        case "choki":
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevsfZlWoQjuykCSvXeF6cecfuz08nYWajlA&s";
             break;
        case "pa":
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutme5_UiKCN1vLHd2zd3gvqmsjMssNQKGZA&s";
            break;
         default:
            break;
    }
    let enemyHand = choices[Math.floor(Math.random()*choices.length)];

    switch(enemyHand){
        case "gu":
            enemyImage.src = "https://ddnavi.com/wp-content/uploads/2020/09/1266022.jpg"
            break;
        case "choki":
            enemyImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevsfZlWoQjuykCSvXeF6cecfuz08nYWajlA&s";
             break;
        case "pa":
            enemyImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutme5_UiKCN1vLHd2zd3gvqmsjMssNQKGZA&s";
            break;
         default:
            break;
    }
})    
gameContainer.appendChild(image);
gameContainer.appendChild(enemyImage);

 // let select = document.createElement("select");
    // let option1 = document.createElement("option");
    // let option2 = document.createElement("option");
    // let option3 = document.createElement("option");
    // const gu = "gu"
    // option1.value = gu;
    // option1.textContent = gu;
    // select.appendChild(option1);

    // option2.value = choki;
    // option2.textContent = choki;
    // select.appendChild(option2);

    // option3.value = pa;
    // option3.textContent = pa;
    // select.appendChild(option3);
    // gameContainer.appendChild(select);