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
var moves=-1
var move_map={"e4":"c5","e5":"c5","f3":"d5","c6":"c5","c4":"f5","c5":"e5","g1":"c5","f6":"c5","d4":"d5","d4":"g5","e5":"f4"}
var move_numbered = ["C5","C5","D5","C5","F5","E5","C5","C5","D5","C5","G5","F4","C5","C5","C6","A5","F5","E5","D5","A#5","A#5","A5","F5","G5","F5"] 
//"e4","e5","f3","c6","c4","c5","O-O","f6","d4","d4","e5","g4","f4","O-O","h3","h6","h6","h6","d2","d5","d3","e8","h6","f8","h7"];
var interval = .300
function generate_sound(from,to){
	moves+=1
  	var time = Tone.context.currentTime
  	console.log(to)
	console.log("gg",move_map[to])
 	synth.triggerAttackRelease(move_numbered[moves], 0.4, time+=interval/1)
 	
}
