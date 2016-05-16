  var clipsSelected = {}
$(document).ready(function(){




  console.log(JSON.stringify(clipsSelected));
  //object that holds the selected clips

  //things to do when page loads:


  $('#statement').select(function(){
    console.log('statement is working')
    clipsSelected.statement = $(this, ':selected').val();
  });//end of #statement onchange push to clipsSelected object

  $('#noun1').select(function(){
    console.log('noun1 is working')
    clipsSelected.noun1 = $(this, ':selected').val();
  });//end of #noun1 onchange push to clipsSelected object

  $('#noun2').select(function(){
    console.log('noun2 is working')
    clipsSelected.noun2 = $(this, ':selected').val();
  });//end of #noun2 onchange push to clipsSelected object

  $('#person').select(function(){
    console.log('person is working')
    clipsSelected.person = $(this, ':selected').val();
  });//end of #person onchange push to clipsSelected object

  $('#noun3').select(function(){
    console.log('noun3 is working')
    clipsSelected.noun3 = $(this, ':selected').val();
  });//end of #noun3 onchange push to clipsSelected object


//button to launch the player and checkLength function:
$('#execute').click(function(){
  $('#execute').attr('disabled','true');
  runPlayer(clipsSelected);
  $('#execute').removeAttr('disabled');
});


//to check to make sure there are four (or more?)
//selection if done out of order:
function checkLength(obj){
  var counter = 0
  for (var prop in obj){
    counter++
    if(counter === 5){
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
function runPlayer(randomName){

  var audio1 = document.createElement('audio');
  audio1.src = 'audio/HitMeHardWithTheWomenCardThatsEnough.mp3';
  audio1.addEventListener('ended', function(){

    var audio2 = document.createElement('audio');
    audio2.src = 'audio/Igohomeandmywifesaid.mp3';
    audio2.addEventListener('ended', function(){

      var audio3 = document.createElement('audio');
      audio3.src = randomName.statement;
      audio3.addEventListener('ended', function(){

        var audio4 = document.createElement('audio');
        audio4.src = 'audio/WAT.mp3';
        audio4.addEventListener('ended', function(){

          var audio5 = document.createElement('audio');
          audio5.src = 'audio/nobodyrespectswomentmorethandonaldtrump.mp3';
          audio5.addEventListener('ended', function(){

            var audio6 = document.createElement('audio');
            audio6.src = 'audio/soweregoingtostraightenout.mp3';
            audio6.addEventListener('ended', function(){

              var audio7 = document.createElement('audio');
              audio7.src = randomName.noun1;
              audio7.addEventListener('ended', function(){

                var audio8 = document.createElement('audio');
                audio8.src = 'audio/theylovemeIlovethem.mp3';
                audio8.addEventListener('ended', function(){

                  var audio9 = document.createElement('audio');
                  audio9.src = 'audio/WAT.mp3';
                  audio9.addEventListener('ended', function(){

                    var audio10 = document.createElement('audio');
                    audio10.src = 'audio/IvyLeagueBetterWordThan.mp3';
                    audio10.addEventListener('ended', function(){

                      var audio11 = document.createElement('audio');
                      audio11.src = randomName.noun2;
                      audio11.addEventListener('ended', function(){

                        var audio12 = document.createElement('audio');
                        audio12.src = 'audio/ImeanIlookatthisguy.mp3';
                        audio12.addEventListener('ended', function(){

                          var audio13 = document.createElement('audio');
                          audio13.src = randomName.person;
                          audio13.addEventListener('ended', function(){

                            var audio14 = document.createElement('audio');
                            audio14.src = 'audio/hesalowenergyweneedlotsof.mp3';
                            audio14.addEventListener('ended', function(){

                              var audio15 = document.createElement('audio');
                              audio15.src = randomName.noun3;
                              audio15.addEventListener('ended', function(){

                                var audio16 = document.createElement('audio');
                                audio16.src = 'audio/WAT.mp3';
                                audio16.addEventListener('ended', function(){

                                  var audio17 = document.createElement('audio');
                                  audio17.src = 'audio/AnchorBaby.mp3';
                                  audio17.addEventListener('ended', function(){

                                    var audio18 = document.createElement('audio');
                                    audio18.src = 'audio/itstoolongwhowantstowatchfiftyhoursofthisstuffright.mp3';
                                    audio18.play()

  })//end audio17 event listener
  audio17.play()
  })//end audio16 event listener
  audio16.play()
  })//end audio15 event listener
  audio15.play()
  })//end audio14 event listener
  audio14.play()
  })//end audio13 event listener
  audio13.play()
  });//end audio12 event listener
  audio12.play()
  });//end audio11 event listener
  audio11.play()
  });//end audio10 event listener
  audio10.play()
  });//end audio9 event listener
  audio9.play()
  });//end audio8 event listener
  audio8.play()
  });//end audio7 event listener
  audio7.play()
  });//end audio6 event listener
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

};//end of runPlayer



});//end of document ready function
