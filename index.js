document

let x = document.getElementsByClassName("count")[0]

let bt2 = document.getElementsByClassName("button2")[0]

let count = 0;

function increase()
{
    x.innerText = count++;
}

function cl()
{
    x.innerHTML = count = 0
}

let a = document.getElementsByClassName("button")[0]

a.onclick = increase;
bt2.onclick = cl
