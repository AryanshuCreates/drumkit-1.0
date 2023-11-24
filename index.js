document.getElementById('w').addEventListener('click', function() {
    var audio = document.getElementById('wdrum');
    audio.play();
  });

  document.getElementById('a').addEventListener('click', function() {
    var audio = document.getElementById('adrum');
    audio.play();
  });
  document.getElementById('s').addEventListener('click', function() {
    var audio = document.getElementById('sdrum');
    audio.play();
  });
  document.getElementById('d').addEventListener('click', function() {
    var audio = document.getElementById('ddrum');
    audio.play();
  });
  document.getElementById('j').addEventListener('click', function() {
    var audio = document.getElementById('jdrum');
    audio.play();
  });
  document.getElementById('k').addEventListener('click', function() {
    var audio = document.getElementById('kdrum');
    audio.play();
  });
  document.getElementById('l').addEventListener('click', function() {
    var audio = document.getElementById('ldrum');
    audio.play();
  });
  
  document.addEventListener('keydown',function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  function makeSound(key){
    switch(key){
      case "w":
        var audio1=new Audio("./sounds/tom-1.mp3");
        audio1.play();
        break;
      case "a":
        var audio2=new Audio("./sounds/tom-2.mp3");
        audio2.play();
        break;
      case "s":
        var audio3=new Audio("./sounds/tom-3.mp3");
        audio3.play();
        break;
      case "d":
        var audio4=new Audio("./sounds/tom-4.mp3");
        audio4.play();
        break;
      case "j":
        var audio5=new Audio("./sounds/crash.mp3");
        audio5.play();
        break;
      case "k":
        var audio6=new Audio("./sounds/kick-bass.mp3");
        audio6.play();
        break;
      case "l":
        var audio7=new Audio("./sounds/snare.mp3");
        audio7.play();
        break;
      default: console.log("press the right key/");

    } 
  }

  function buttonAnimation(key){
    var activebutton= document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function(){
      activebutton.classList.remove("pressed")
    },100);
  }