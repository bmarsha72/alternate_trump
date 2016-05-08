
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

function theWallButton(){
var fuckTheWall = ['audio/TheWall2.mp3','audio/TheWall3.mp3','audio/TheWall1.mp3','audio/TheWall4.mp3']
var audio = document.createElement('audio');
audio.src = fuckTheWall.randomElement();
audio.play()
}

$('#thewall').click(function(){
  theWallButton()
})

function temendous(){
var tremendousArray = []
var audio = document.createElement('audio');
audio.src = tremendousArray.randomElement();
audio.play()
}

$('#tremendous').click(function(){
  theWallButton()
})

function china(){
var chinaArray = ['audio/china.mp3','audio/china2.mp3','audio/china3.mp3','audio/china4.mp3','audio/china5.mp3']
var audio = document.createElement('audio');
audio.src = chinaArray.randomElement();
audio.play()
}

$('#china').click(function(){
  china()
})



  function runPlayer(clipPath){

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
  audio2.src = two;
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

$('#execute').click(function(){
  runPlayer()
});
