const inputs = document.getElementsByTagName('input');
const btn = document.querySelector('#btn');
let text = document.querySelector('.text');
let string1 = '';
let string2 = '';
btn.addEventListener('click', function () {
    if(Number(inputs[0].value) % 2 === 0){
        string1 = "Số chẵn";
    }else{
        string1 = "Số lẽ";
    }
    if(Number(inputs[0].value) > 0){
        for(let i = 1;i <=Number(inputs[0].value );i++){
            string2 = string2 + ' ' + i;
        }
        text.innerHTML=`<p>${string1} </br> ${string2}</p>`;
    }else{
        while(inputs[0].value < 2){
            string2 = string2 + ' ' + inputs[0].value;
            inputs[0].value++;
            console.log("dsad");
        }
        text.innerHTML=`<p>${string1} </br> ${string2}</p>`;
    }
    string2 = '';
}

);
window.addEventListener('keypress',function(event){
    if(event.keyCode === 13){
        if(Number(inputs[0].value) % 2 === 0){
            string1 = "Số chẵn";
        }else{
            string1 = "Số lẽ";
        }
        if(Number(inputs[0].value) > 0){
            for(let i = 1;i <=Number(inputs[0].value );i++){
                string2 = string2 + ' ' + i;
            }
            text.innerHTML=`<p>${string1} </br> ${string2}</p>`;
        }else{
            while(inputs[0].value < 2){
                string2 = string2 + ' ' + inputs[0].value;
                inputs[0].value++;
                console.log("dsad");
            }
            text.innerHTML=`<p>${string1} </br> ${string2}</p>`;
        }
        string2 = '';
    }
});