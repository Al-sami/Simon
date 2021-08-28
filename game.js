//alert("sami");



var level=0;

//$(document).on("keydown", function(){
//  $("h1").text("Level "+ level);
//});

$(document).on("keypress", function(){
   sequence();


});


var userClickedPattern=[];




var gamePattern=[];


var buttoncolors=["red", "blue", "green", "yellow" ];


function sequence(){
  var randomNum =(Math.floor(Math.random()*4));

  var randomChosenColor=buttoncolors[randomNum];
  //console.log(randomChosenColor);
  gamePattern.push(randomChosenColor);
  //console.log(gamePattern);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  var buttonsound=new Audio("sounds/"+ randomChosenColor +".mp3");
  buttonsound.play();

  level++;
  $("#level-title").text("Level " + level);
  userClickedPattern.length=0;



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

}
