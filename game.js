
var level=0;

var started=false;

$(document).keypress( function(){
  if(!started){
    $("h1").text("Level " + level);
    sequence();
    started=true;

  }

});


var userClickedPattern=[];




var gamePattern=[];


var buttoncolors=["red", "blue", "green", "yellow" ];


function sequence(){

  userClickedPattern.length=0;


  var randomNum =(Math.floor(Math.random()*4));

  var randomChosenColor=buttoncolors[randomNum];

  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var buttonsound=new Audio("sounds/"+ randomChosenColor +".mp3");
  buttonsound.play();
}


$(".btn").on("click", function(event){
   var userChosenColour=event.target.id;
  //console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
  play(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer((userClickedPattern.length)-1);

});



function play(name){

  var clicksound=new Audio("sounds/"+ name +".mp3");
  clicksound.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },100);


}


function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
    if (userClickedPattern.length===gamePattern.length){
      level++;
      $("h1").text("Level " +level);

      setTimeout(function(){
        sequence();
      }, 1000);
    }


  }else{
    var wrong=new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game over, press any key to restart");

    startOver();






  }
}


function startOver(){
  level=0;
  gamePattern.length=0;
  started=false;

}
