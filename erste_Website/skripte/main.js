var myHeading = document.querySelector('h1');
myHeading.textContent = "Ich hab die Überschrift verändert";

document.querySelector('html').onclick = 
function()
{
    //alert("Klick");
}
var image = document.querySelector('img');

image.onclick = 
function()
{
    var imgSrc = image.getAttribute('src');
    if(imgSrc === 'bilder/bett.jpg')
    {
        image.setAttribute('src', 'bilder/hundsoldat.jpg');
    }
    else
    {
        image.setAttribute('src', 'bilder/bett.jpg');
    }
}

var change_heading = document.querySelector('h1');

var button = document.querySelector('button');

function setzeBenutername()
{
    var name_eingeben = prompt('Tippe einen Namen ein');

    localStorage.setItem('name', name_eingeben);
   
}

button.onclick = 
function()
{
    if(!localStorage.getItem('name'))
    {
        setzeBenutername();
    }
    else
    {
        var gelagert_name = localStorage.getItem('name');

        change_heading.textContent = 'Blie bla blup ' + gelagert_name;
    }
}