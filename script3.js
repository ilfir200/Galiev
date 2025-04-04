    document.getElementById("myButton").addEventListener("click", function() 
{
    this.textContent = "Вы нажали на меня!";
});


document.addEventListener("mousemove", function(event) 
{
    let x = event.clientX;
    let y = event.clientY;

    square.style.left = x - 20 + "px"
    square.style.top = y - 20 + "px"

});

    
