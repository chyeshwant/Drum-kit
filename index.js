
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    var text=this.innerHTML;
    buttonanimation(text);
  //  this.style.background="black";

    switch (text) {
      case 'w':
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
        break;

        case 'a':
        audio=new Audio("sounds/kick-bass.mp3");
        audio.play();

        break;

        case 's':
        audio=new Audio("sounds/snare.mp3");
        audio.play();

        break;

        case 'd':
        audio=new Audio("sounds/tom-1.mp3");
        audio.play();

        break;

        case 'j':
        audio=new Audio("sounds/tom-2.mp3");
        audio.play();

        break;

        case 'k':
        audio=new Audio("sounds/tom-3.mp3");
        audio.play();

        break;

        case 'l':
        audio=new Audio("sounds/tom-4.mp3");
        audio.play();

        break;

      default:alert(text);

    }
  });
}

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.addEventListener("keydown",function(event)
  {
    var text=event.key;
    makesound(text);
    buttonanimation(text);
  });
}

function makesound(text)
{
  switch (text) {
    case 'w':
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
      break;

      case 'a':
      audio=new Audio("sounds/kick-bass.mp3");
      audio.play();

      break;

      case 's':
      audio=new Audio("sounds/snare.mp3");
      audio.play();

      break;

      case 'd':
      audio=new Audio("sounds/tom-1.mp3");
      audio.play();

      break;

      case 'j':
      audio=new Audio("sounds/tom-2.mp3");
      audio.play();

      break;

      case 'k':
      audio=new Audio("sounds/tom-3.mp3");
      audio.play();

      break;

      case 'l':
      audio=new Audio("sounds/tom-4.mp3");
      audio.play();

      break;

    default:console.log(text);
  }
}

function buttonanimation(key)
{
var activebtn=document.querySelector("."+key);
activebtn.classList.add("pressed");

setTimeout(function()
{
  activebtn.classList.remove("pressed");
},100);
}
