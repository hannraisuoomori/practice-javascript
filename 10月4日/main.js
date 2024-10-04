function errorInput(){
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;
    if(month<1 || month>12){
        alert("適切な値ではありません");
        return
    }
    console.log("Month:",month,"Day",day)
}

const  monthselect = document.getElementById("month2");
monthselectlist(){
    for(let i=1;i<12;i++){
        let option = document.createElement('option');
        option.value = i;
        option.textcontent = i + 日;
        monthselect.appendchild(option);
    }
}