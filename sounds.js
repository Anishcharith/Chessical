var synth = new Tone.Synth().toMaster()

function generate_sound(from){
	if(from[0]=='h')
	{ 
	
	console.log(from[0]);
	}
	else
	synth.triggerAttackRelease(from, '8n');
}
