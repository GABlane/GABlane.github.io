// JavaScript functions
function yesResponse() {
    alert("GAME GAME GAMEEE!!!");
    document.body.style.backgroundImage = "url('hearts.jpeg')"; // Change background image to hearts
    
    // Change text in container and remove buttons
    const container = document.querySelector('.container');
    container.innerHTML = "<h1>YAYYYYY!!!</h1>";
}

function noResponse() {
    alert("sayanggg");
    document.body.style.backgroundImage = "url('sad.jpeg')"; // Change background image to sad
    
    // Change text in container and remove buttons
    const container = document.querySelector('.container');
    container.innerHTML = "<h1>NEXT TIME NEXT TIME!!!</h1>";
}
