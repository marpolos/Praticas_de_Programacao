function onOffLigth()
{
    var button = document.getElementById("interruptor");
    var lampada = document.getElementById("lampada");

    if (button.innerText == "Ligar")
    {
        button.innerHTML = "Desligar";
        lampada.setAttribute("src", "./imagens/pic_bulbon.gif");
    }
    else {
        button.innerHTML = "Ligar";
        lampada.setAttribute("src", "./imagens/pic_bulboff.gif");
    }
}

// function offLigth()
// {
//     var lampada = document.getElementById("lampada");
//     lampada.setAttribute("src", "./imagens/pic_bulboff.gif");
// }