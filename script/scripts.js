var clipsSelected = {}
//object that holds the selected clips
$(document).ready(function(){
//selected clips will go inside the onload
  $('#noun1').change(function(){
    console.log('noun1 is working')
    clipsSelected.noun1 = $(this, ':selected').val();
  });//end of #noun1 onchange push to clipsSelected object
  $('#noun2').change(function(){
    console.log('noun2 is working')
    clipsSelected.noun2 = $(this, ':selected').val();
  });//end of #noun2 onchange push to clipsSelected object
  $('#phrase1').change(function(){
    console.log('phrase1 is working')
    clipsSelected.phrase1 = $(this, ':selected').val();
  });//end of #noun2 onchange push to clipsSelected object
  $('#phrase2').change(function(){
    console.log('phrase2 is working')
    clipsSelected.phrase2 = $(this, ':selected').val();
  });//end of #noun2 onchange push to clipsSelected object


  //button to launch the player and checkLength function:
  $('#execute').click(function(){
    $('#execute').attr('disabled','true');
    checkLength(clipsSelected);
    $('#execute').removeAttr('disabled');
  });

});//end of document ready function

//to check to make sure there are four (or more?)
//selection if done out of order:
function checkLength(obj){
  var counter = 0
  for (var prop in obj){
    counter++
    if(counter === 4){
      console.log(counter)
      runPlayer(clipsSelected)
    }
    else{
      console.log("please make all selections")
      return
    }
    console.log("obj: " + prop + " = " + obj[prop])
  }
}//end of checkLength function

//assemble the runPlayer once the play order is determined.
function runPlayer(){

  var one   = 'audio/IloveMexicoIloveChina.mp3'
  var two   = 'audio/Imleadingineverypollwith.mp3'
  var three = 'audio/yourmother.mp3'
  var four  = 'audio/sixteenofwhichwereshootingatme.mp3'
  var five  = 'audio/theylovemeIlovethem.mp3'
  var six   = 'audio/TheWall3.mp3'

  var audio1 = document.createElement('audio');
  audio1.src = one;
  audio1.addEventListener('ended', function(){
  var audio2 = document.createElement('audio');
  audio2.src = noun1;
  audio2.addEventListener('ended', function(){
  var audio3 = document.createElement('audio');
  audio3.src = three;
  audio3.addEventListener('ended',function(){
  var audio4 = document.createElement('audio');
  audio4.src = four;
  audio4.addEventListener('ended', function(){
  var audio5 = document.createElement('audio');
  audio5.src = five;
  audio5.addEventListener('ended', function(){
  var audio6 = document.createElement('audio');
  audio6.src = six;

  audio6.play()//plays sixth clip
  });//end audio5 event listener
  audio5.play()//plays fifth clip
  });//end audio4 event listener
  audio4.play();//plays fourth clip
  });//end audio3 event listener
  audio3.play();//plays third clip
  });//end of audio2 event listener
  audio2.play();//plays second clip
  });//end of audio1 event listener
  audio1.play();//plays the first clip

}//end of runPlayer
