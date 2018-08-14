function documentLoaded() {
	console.log('documentLoaded');
}

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function calculate() {
	var num_dice = parseInt(document.getElementById("num_dice").value);
	var hit_on = parseInt(document.getElementById("hit_on").value);
	var wound_on = parseInt(document.getElementById("wound_on").value);

	if(isNaN(num_dice) || isNaN(num_dice) || isNaN(num_dice)) {
		return;
	}

	if(hit_on < 2 || hit_on > 6 || wound_on < 2 || wound_on > 6) {
		return;
	}

	var one_sixth = 1 / 6;
	var perc_hit = (7 - hit_on) * one_sixth;
	var perc_wound = (7 - wound_on) * one_sixth;

	var num_hit = num_dice * perc_hit;
	var num_wound = num_hit * perc_wound;

	console.log("num_hit: ", num_hit);
	console.log("num_wound: ", num_wound);


	document.getElementById("hits").innerText = roundToTwo(num_hit);
	document.getElementById("wounds").innerText = roundToTwo(num_wound);
}