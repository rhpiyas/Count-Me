let x = document.getElementsByClassName("count")[0];

let bt2 = document.getElementsByClassName("button2")[0];

let count = 0;

function increase()
{
    x.innerText = ++count;

    let hue = (count % 10) * 36;

    x.style.color = `hsl(${hue}, 100%, 50%)`;
}

function cl()
{
    count = 0;
    x.innerText = count;
    x.style.color = "white";
}

function dec()
{
    if(count <= 0)
    {
        count = 0;
    }
    else
    {
        x.innerHTML = --count;
    }
    
    let hue = (count % 10) * 36;

    x.style.color = `hsl(${hue}, 100%, 50%)`;
}


let a = document.getElementsByClassName("button")[0];

let bt3 = document.getElementsByClassName("button3")[0];


a.onclick = increase;
bt2.onclick = cl;
bt3.onclick = dec;