var result = document.getElementById('res')

function clr() {
    result.innerHTML = '0';
}

function dig(i) {
    if(parseInt(result.innerHTML)==0)
        result.innerHTML = i;
    else{
        result.innerHTML += i;
    }      
}

function calc() {
    var sol = eval(result.innerHTML);
    result.innerHTML = sol;
}