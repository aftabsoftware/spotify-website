let next = document.querySelector("#next");
let start = document.querySelector("#start");
//Random Question Generate Section Start
var counter = 0;
// This all Question are stored in array
var words = [
  {//Question number 01
    question : "What is the color of mirror",//Question
    wrong_answer_1 : "White",//Option no1
    correct_answer : "Silver",//Option no2
    wrong_answer_2 : "green",//Option no3
    wrong_answer_3 : "Black"//Option no4
  },
  {//Question number 02
    question : "I am a color you can eat. What I am",
    wrong_answer_1 : "Green",
    correct_answer : "orange",
    wrong_answer_2 : "black",
    wrong_answer_3 : "blue"
  },
  {//Question number 03
    question : "I belong to you but other use me more often then you do what am I?",
    wrong_answer_1 : "Age",
    correct_answer : "My name",
    wrong_answer_2 : "Future",
    wrong_answer_3 : "Brain"
  },
  {//Question number 04
    question : "Which month has 28 days",
    wrong_answer_1 : "January",
    correct_answer : "Februry",
    wrong_answer_2 : "March",
    wrong_answer_3 : "April"
  },
  {//Question number 05
    question : "what has to be broken before you can use it?",
    wrong_answer_1 : "Promise",
    correct_answer : "Glass",
    wrong_answer_2 : "Water",
    wrong_answer_3 : "Heart"
  },
  {//Question number 06
    question : "What has one eye, but can't see?",
    wrong_answer_1 : "Human",
    correct_answer : "Needle",
    wrong_answer_2 : "Animal",
    wrong_answer_3 : "Bird"
  },
  {//Question number 07
    question : "I'm toll when I'm young and i'm short when I'm old. What am I?",
    wrong_answer_1 : "Age",
    correct_answer : "Candle",
    wrong_answer_2 : "black",
    wrong_answer_3 : "blue"
  },
  {//Question number 08
    question : "I'm toll when I'm young and i'm short when I'm old. What am I?",
    wrong_answer_1 : "Age",
    correct_answer : "Candle",
    wrong_answer_2 : "black",
    wrong_answer_3 : "blue"
  }
  ];
  //Random Question Generate Section End
  
   
    

  //Question display box Section Start
  var level_gif = document.getElementById("gif"); //Level COmplete Gif 

  function next_question(){

    // Game is Started Section Start
   var btn = document.getElementById("start"); //Start button is stored in btn variable
   
   if(btn.style.display === "block"){
     btn.style.display = "none";//When user click on the start button the game will game and the start button will hide
   }
   else{
     btn.style.display = "none";//same as 
   }
   // Game is Start Section End

   // Counter For Question Number Start
   counter++;
   var question_no = document.getElementById("question").innerHTML = " Q " + counter + ")" ;
   qcount = counter;
   var q_count = document.getElementById("ques-count").value = qcount + "/" + "8";
    // Counter For Question Number End

  //Question is display in th Question box Start
  var randomobj = Math.floor(Math.random() * words.length);
  var word = words[randomobj];
  
  document.getElementById("question").innerHTML = question_no + word["question"]; // Question is displaying
  document.getElementById("wrong-1").innerHTML =  word["wrong_answer_1"];// Options are displaying
  document.getElementById("wrong-2").innerHTML =  word["wrong_answer_2"];// Options are displaying
  document.getElementById("wrong-3").innerHTML =  word["wrong_answer_3"];// Options are displaying
  document.getElementById("correct").innerHTML =  word["correct_answer"];// Options are displaying

  //Question is display in th Question box End

  //Level is Completed Start
  let level = document.getElementById("main");
  let level_title = document.getElementById("level-complete");
  if(qcount > 8 && level_gif.style.display === "none" || level.style.display === "block" || level_title.style.display === "none"){
    alert ("Congrats"); // Level Completed notifacation will display and also gif will display
    level_gif.style.display = "block"; //gif
    level.style.display = "none";
    level_title.style.display = "block";
    q_count = document.getElementById("ques-count").value = "" + "/" + "8"; // user Answered Question will display
    exit;// and exit The Level
 }
 else{
  level_gif.style.display = "none";
  
  
 }
  //Level is Completed End 
};
//Question display box Section End


//Hide and show jquery start
$(document).ready(function(){ 
  $("#start").click(function(){ 
    $("#next").show(200);// When the game will start The Next button will Display from the game
    $(".option").show(200);//When the game will Start the option button will display in the game
  });
});
//Hide and show jquery End

//Checking the Answer is correct or not  
function check_answer(){
  var words = [
    {
      question : "What is the color of mirror",//questions
      wrong_answer_1 : "White",//Option no1
      correct_answer : "Silver",//Option no2
      wrong_answer_2 : "green",//Option no3
      wrong_answer_3 : "Black"//Option no4
    }
  ];
 words["correct_answer"];
 words["wrong_answer"];
if(check_word === wrong){
  alert("correct answer")
  words.style.background = "green";
}
else{
  alert(" wrong answer");

};
};

















