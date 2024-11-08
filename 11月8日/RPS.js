function RPS(){
    const choices=["gu","choki","pa","muteki"];


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

    let select = document.createElement("select");
    choices.forEach(choice => {
        let option = document.createElement("option")
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img")
    image.alt = "choice";
    image.style.width = "100px";
    image.style.height = "900px";
    image.src = "https://ddnavi.com/wp-content/uploads/2020/09/1266022.jpg"

    gameContainer.appendChild(image);
}