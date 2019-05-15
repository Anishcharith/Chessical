// Sharath's mapping algo + code

var synth = new Tone.Synth().toMaster()
/*
function generate_sound(from, to){
	if(from[0]=='h')
		console.log(from[0]);
	else
		synth.triggerAttackRelease(from, '8n');
}
*/
var interval = .200
function generate_sound(from,to){
  var time = Tone.context.currentTime
  temp = from[0]
  //no_of_moves=Math.max(Math.abs(from[0].charCodeAt(0)-to[0].charCodeAt(0)), Math.abs(from[1]-to[1]))
  no_of_moves=1
  console.log(no_of_moves+1)
  //count ver used to increase or decrease to pitch ie sa re ga - ga re sa when pieces move horizontally
  var count = -1
  //horizontal direction octave sa0 re ga ma pa dha ni sa1, here sa1 has the same pitch when the s0 is scaled once to next higher octave scale 
  //vertical move does the scaling
  //forward move
  if(from[1]<to[1]){
    console.log("forward")
    for(i=from[1]-1;i<to[1];++i){
      count = count + 1
      if(from[0] < to[0]){
        if(temp < to[0])
          temp = (String.fromCharCode(from[0].charCodeAt()+count))
      }
      else if(from[0] > to[0]){
        if(temp > to[0])
          temp = (String.fromCharCode(from[0].charCodeAt()-count))
      }
      //temp has the required notes to play but without the octave scaling ie (E1 or E2) temp has E, i contains the vertical value for scaling
      var move = temp.toUpperCase()+i.toString()
      //there is no H in musical octave notation so the H file in chess board is assigned the next octave's first note ie sa1.
      if(move[0] == "H") move = "A" + (i+1)
      //(note tune to play, time duration, when to play)
      // duration for high pitched sounds reduced to make it more soothing
      if(i<3)
        synth.triggerAttackRelease(move, 0.3, time+=interval/no_of_moves)
      else if(i<6)
        synth.triggerAttackRelease(move, 0.2, time+=interval/no_of_moves)
      else
        synth.triggerAttackRelease(move, 0.1, time+=interval/no_of_moves)
      console.log(move)
    }
  }
  //backward move
  else if(from[1]>to[1]){
    console.log("backward")
    for(i=from[1]-1;i>=to[1]-1;--i){
      count = count + 1
      if(from[0] < to[0]){
        if(temp < to[0])
          temp = (String.fromCharCode(from[0].charCodeAt(0)+count))
      }
      else if(from[0] > to[0]){
        if(temp > to[0])
          temp = (String.fromCharCode(from[0].charCodeAt(0)-count))
      }
      var move = temp.toUpperCase()+i.toString()
      if(move[0] == "H") move = "A" + (i+1)
      if(i>=0 && i<3)
        synth.triggerAttackRelease(move, 0.3, time+=interval/no_of_moves)
      else if(i>=3 && i<6)
        synth.triggerAttackRelease(move, 0.2, time+=interval/no_of_moves)
      else
        synth.triggerAttackRelease(move, 0.1, time+=interval/no_of_moves)
      console.log(move)
    }
  }
  else{
    tempNum = Number(from[1])
    console.log("horizontal")
    if(from[0] < to[0]){
      for(i=from[0].charCodeAt();i<=to[0].charCodeAt();++i){
        count = count + 1
        temp = (String.fromCharCode(from[0].charCodeAt(0)+count))
        var move = temp.toUpperCase()+String.fromCharCode(from[1].charCodeAt(0)-1)
        if(move[0] == "H") move = "A" + String.fromCharCode(from[1].charCodeAt(0))
        console.log(move)
        if(tempNum>=0 && tempNum<3)
          synth.triggerAttackRelease(move, 0.3, time+=interval/no_of_moves)
        else if(tempNum>=3 && tempNum<6)
          synth.triggerAttackRelease(move, 0.2, time+=interval/no_of_moves)
        else
          synth.triggerAttackRelease(move, 0.1, time+=interval/no_of_moves)
      }
    }
    else{
      for(i=from[0].charCodeAt();i>=to[0].charCodeAt();--i){
        count = count + 1
        temp = (String.fromCharCode(from[0].charCodeAt(0)-count))
        var move = temp.toUpperCase()+String.fromCharCode(from[1].charCodeAt(0)-1)
        if(move[0] == "H") move = "A" + String.fromCharCode(from[1].charCodeAt(0))
        console.log(move)
        if(tempNum>=0 && tempNum<3)
          synth.triggerAttackRelease(move, 0.3, time+=interval/no_of_moves)
        else if(tempNum>=3 && tempNum<6)
          synth.triggerAttackRelease(move, 0.2, time+=interval/no_of_moves)
        else
          synth.triggerAttackRelease(move, 0.1, time+=interval/no_of_moves)  

      }
    }
  }
}
