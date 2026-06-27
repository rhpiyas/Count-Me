document

let x = document.getElementsByClassName("count")[0]

let count = 0;

function increase()
{
    x.innerText = count++;
}

let a = document.getElementsByClassName("button")[0]

a.onclick = increase;
