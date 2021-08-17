const input = document.getElementById("input-label");
function pushBtn(obj){
    const pushed = obj.innerText;

    if (pushed == "="){
        // calculate
        input.innerText = eval(input.innerText);
    }
    else if (pushed == "AC"){
        input.innerText = "0";
    }
    else{
        if (input.innerText == "0"){
            input.innerText = pushed;
        }
        else{
            input.innerText += pushed;
        }
    }
}