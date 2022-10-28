
	const numbers = [1,1,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2];
	const suffelarray = numbers =>{
		for(let i = numbers.length -1; i>0; i--){
			const j = Math.floor(Math.random() * (i+1));
			const temp = numbers[i];
			numbers[i] = numbers[j];
			numbers[j] = temp;


		}
		return numbers;
	};
	const suffelnumbers = suffelarray(numbers);


hit = 0;
miss = 0;
function myfunc_3() {
	if(hit !=3){
			if (suffelnumbers[0]==1) {
	        document.getElementById("b1").value = "Gift";
	        document.getElementById("b1").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[0]==0) {
	        document.getElementById("b1").value = "Miss";
	        document.getElementById("b1").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b1").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }

	}
	else{
		myfunc_disable();

	}
    
}
 
function myfunc_4() {
	if(hit !=3){
	    if (suffelnumbers[1]==1) {
	        document.getElementById("b2").value = "Gift";
	        document.getElementById("b2").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[1]==0) {
	        document.getElementById("b2").value = "Miss";
	        document.getElementById("b2").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b2").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}
}
 
function myfunc_5() {
	if(hit !=3){
	    if (suffelnumbers[2]==1) {
	        document.getElementById("b3").value = "Gift";
	        document.getElementById("b3").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[2]==0) {
	        document.getElementById("b3").value = "Miss";
	        document.getElementById("b3").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b3").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}
}

function myfunc_6() {
	if(hit !=3){
	    if (suffelnumbers[3]==1) {
	        document.getElementById("b4").value = "Gift";
	        document.getElementById("b4").disabled = true;
	        hit = hit + 1

	        
	    }
	    else if(suffelnumbers[3]==0) {
	        document.getElementById("b4").value = "Miss";
	        document.getElementById("b4").disabled = true;
	        miss = miss+1;
	            }
	            else{
	            	document.getElementById("b4").value = "Danger";
	    			
	    			myfunc_2()
	    }
	    }
	else{
		myfunc_disable();
	}

}
 
function myfunc_7() {
	if(hit !=3){
	    if (suffelnumbers[4]==1) {
	        document.getElementById("b5").value = "Gift";
	        document.getElementById("b5").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[4]==0) {
	        document.getElementById("b5").value = "Miss";
	        document.getElementById("b5").disabled = true;
	        miss = miss+1;
	       
	    }
	    else{
	    	document.getElementById("b5").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
 
function myfunc_8() {
	if(hit !=3){
	    if (suffelnumbers[5]==1) {
	        document.getElementById("b6").value = "Gift";
	        document.getElementById("b6").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[5]==0) {
	        document.getElementById("b6").value = "Miss";
	        document.getElementById("b6").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b6").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }

	}
	else{
		myfunc_disable();
	}
}
 
function myfunc_9() {
	if(hit !=3){
	    if (suffelnumbers[6]==1) {
	        document.getElementById("b7").value = "Gift";
	        document.getElementById("b7").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if (suffelnumbers[6]==0) {
	        document.getElementById("b7").value = "Miss";
	        document.getElementById("b7").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b7").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
 
function myfunc_10() {
	if(hit !=3){
	    if (suffelnumbers[7]==1) {
	        document.getElementById("b8").value = "Gift";
	        document.getElementById("b8").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if (suffelnumbers[7]==0){
	        document.getElementById("b8").value = "Miss";
	        document.getElementById("b8").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b8").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	    
	}
	else{
		myfunc_disable();
	}

}
 
function myfunc_11() {
	if(hit !=3){
	    if (suffelnumbers[8]==1) {
	        document.getElementById("b9").value = "Gift";
	        document.getElementById("b9").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[8]==0){
	        document.getElementById("b9").value = "Miss";
	        document.getElementById("b9").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b9").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
function myfunc_12() {
	if(hit !=3){
	    if (suffelnumbers[9]==1) {
	        document.getElementById("b10").value = "Gift";
	        document.getElementById("b10").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[9]==0){
	        document.getElementById("b10").value = "Miss";
	        document.getElementById("b10").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b10").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
function myfunc_13() {
	if(hit !=3){
	    if (suffelnumbers[10]==1) {
	        document.getElementById("b11").value = "Gift";
	        document.getElementById("b11").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[10]==0){
	        document.getElementById("b11").value = "Miss";
	        document.getElementById("b11").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b11").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
function myfunc_14() {
	if(hit !=3){
	    if (suffelnumbers[11]==1) {
	        document.getElementById("b12").value = "Gift";
	        document.getElementById("b12").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[11]==0){
	        document.getElementById("b12").value = "Miss";
	        document.getElementById("b12").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b12").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
function myfunc_15() {
	if(hit !=3){
	    if (suffelnumbers[12]==1) {
	        document.getElementById("b13").value = "Gift";
	        document.getElementById("b13").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[12]==0){
	        document.getElementById("b13").value = "Miss";
	        document.getElementById("b13").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b113").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
function myfunc_16() {
	if(hit !=3){
	    if (suffelnumbers[13]==1) {
	        document.getElementById("b14").value = "Gift";
	        document.getElementById("b14").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[13]==0){
	        document.getElementById("b14").value = "Miss";
	        document.getElementById("b14").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b14").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
function myfunc_17() {
	if(hit !=3){
	    if (suffelnumbers[14]==1) {
	        document.getElementById("b15").value = "Gift";
	        document.getElementById("b15").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[14]==0){
	        document.getElementById("b15").value = "Miss";
	        document.getElementById("b15").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b15").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}
function myfunc_18() {
	if(hit !=3){
	    if (suffelnumbers[15]==1) {
	        document.getElementById("b16").value = "Gift";
	        document.getElementById("b16").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[15]==0){
	        document.getElementById("b16").value = "Miss";
	        document.getElementById("b16").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b16").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_19() {
	if(hit !=3){
	    if (suffelnumbers[16]==1) {
	        document.getElementById("b17").value = "Gift";
	        document.getElementById("b17").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[16]==0){
	        document.getElementById("b17").value = "Miss";
	        document.getElementById("b17").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b17").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_20() {
	if(hit !=3){
	    if (suffelnumbers[17]==1) {
	        document.getElementById("b18").value = "Gift";
	        document.getElementById("b18").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[17]==0){
	        document.getElementById("b18").value = "Miss";
	        document.getElementById("b18").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b18").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_21() {
	if(hit !=3){
	    if (suffelnumbers[18]==1) {
	        document.getElementById("b19").value = "Gift";
	        document.getElementById("b19").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[18]==0){
	        document.getElementById("b19").value = "Miss";
	        document.getElementById("b19").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b19").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_22() {
	if(hit !=3){
	    if (suffelnumbers[19]==1) {
	        document.getElementById("b20").value = "Gift";
	        document.getElementById("b20").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[19]==0){
	        document.getElementById("b20").value = "Miss";
	        document.getElementById("b20").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b20").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_23() {
	if(hit !=3){
	    if (suffelnumbers[20]==1) {
	        document.getElementById("b21").value = "Gift";
	        document.getElementById("b21").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[20]==0){
	        document.getElementById("b21").value = "Miss";
	        document.getElementById("b21").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b21").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_24() {
	if(hit !=3){
	    if (suffelnumbers[21]==1) {
	        document.getElementById("b22").value = "Gift";
	        document.getElementById("b22").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[21]==0){
	        document.getElementById("b22").value = "Miss";
	        document.getElementById("b22").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b22").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_25() {
	if(hit !=3){
	    if (suffelnumbers[22]==1) {
	        document.getElementById("b23").value = "Gift";
	        document.getElementById("b23").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[22]==0){
	        document.getElementById("b23").value = "Miss";
	        document.getElementById("b23").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b23").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_26() {
	if(hit !=3){
	    if (suffelnumbers[23]==1) {
	        document.getElementById("b24").value = "Gift";
	        document.getElementById("b24").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[23]==0){
	        document.getElementById("b24").value = "Miss";
	        document.getElementById("b24").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b24").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_27() {
	if(hit !=3){
	    if (suffelnumbers[24]==1) {
	        document.getElementById("b25").value = "Gift";
	        document.getElementById("b25").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[24]==0){
	        document.getElementById("b25").value = "Miss";
	        document.getElementById("b25").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b25").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_28() {
	if(hit !=3){
	    if (suffelnumbers[25]==1) {
	        document.getElementById("b26").value = "Gift";
	        document.getElementById("b26").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[25]==0){
	        document.getElementById("b26").value = "Miss";
	        document.getElementById("b26").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b26").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_29() {
	if(hit !=3){
	    if (suffelnumbers[26]==1) {
	        document.getElementById("b27").value = "Gift";
	        document.getElementById("b27").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[26]==0){
	        document.getElementById("b27").value = "Miss";
	        document.getElementById("b27").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b27").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_30() {
	if(hit !=3){
	    if (suffelnumbers[27]==1) {
	        document.getElementById("b28").value = "Gift";
	        document.getElementById("b28").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[27]==0){
	        document.getElementById("b28").value = "Miss";
	        document.getElementById("b28").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b28").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_31() {
	if(hit !=3){
	    if (suffelnumbers[28]==1) {
	        document.getElementById("b29").value = "Gift";
	        document.getElementById("b29").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[28]==0){
	        document.getElementById("b29").value = "Miss";
	        document.getElementById("b29").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b29").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_32() {
	if(hit !=3){
	    if (suffelnumbers[29]==1) {
	        document.getElementById("b30").value = "Gift";
	        document.getElementById("b30").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[29]==0){
	        document.getElementById("b30").value = "Miss";
	        document.getElementById("b30").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b30").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_33() {
	if(hit !=3){
	    if (suffelnumbers[30]==1) {
	        document.getElementById("b31").value = "Gift";
	        document.getElementById("b31").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[30]==0){
	        document.getElementById("b31").value = "Miss";
	        document.getElementById("b31").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b31").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_34() {
	if(hit !=3){
	    if (suffelnumbers[31]==1) {
	        document.getElementById("b32").value = "Gift";
	        document.getElementById("b32").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[31]==0){
	        document.getElementById("b32").value = "Miss";
	        document.getElementById("b32").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b32").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_35() {
	if(hit !=3){
	    if (suffelnumbers[32]==1) {
	        document.getElementById("b33").value = "Gift";
	        document.getElementById("b33").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[32]==0){
	        document.getElementById("b33").value = "Miss";
	        document.getElementById("b33").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b33").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_36() {
	if(hit !=3){
	    if (suffelnumbers[33]==1) {
	        document.getElementById("b34").value = "Gift";
	        document.getElementById("b34").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[33]==0){
	        document.getElementById("b34").value = "Miss";
	        document.getElementById("b34").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b34").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_37() {
	if(hit !=3){
	    if (suffelnumbers[34]==1) {
	        document.getElementById("b35").value = "Gift";
	        document.getElementById("b35").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[34]==0){
	        document.getElementById("b35").value = "Miss";
	        document.getElementById("b35").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b35").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}

function myfunc_38() {
	if(hit !=3){
	    if (suffelnumbers[35]==1) {
	        document.getElementById("b36").value = "Gift";
	        document.getElementById("b36").disabled = true;
	        hit = hit + 1
	        
	    }
	    else if(suffelnumbers[35]==0){
	        document.getElementById("b36").value = "Miss";
	        document.getElementById("b36").disabled = true;
	        miss = miss+1;
	        
	    }
	    else{
	    	document.getElementById("b36").value = "Danger";
	    	
	    	myfunc_2()
	    	
	    }
	}
	else{
		myfunc_disable();
	}

}







function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
    document.getElementById("b7").value = '';
    document.getElementById("b8").value = '';
    document.getElementById("b9").value = '';
    document.getElementById('b10').value = '';
    document.getElementById("b11").value = '';
    document.getElementById("b12").value = '';
    document.getElementById("b13").value = '';
    document.getElementById("b14").value = '';
    document.getElementById("b15").value = '';
    document.getElementById("b16").value = '';
    document.getElementById("b17").value = '';
    document.getElementById("b18").value = '';
    document.getElementById('b19').value = '';
    document.getElementById("b20").value = '';
    document.getElementById("b21").value = '';
    document.getElementById("b22").value = '';
    document.getElementById("b23").value = '';
    document.getElementById("b24").value = '';
    document.getElementById("b25").value = '';
    document.getElementById("b26").value = '';
    document.getElementById("b28").value = '';
    document.getElementById('b29').value = '';
    document.getElementById("b30").value = '';
    document.getElementById("b31").value = '';
    document.getElementById("b32").value = '';
    document.getElementById("b33").value = '';
    document.getElementById("b34").value = '';
    document.getElementById("b35").value = '';
    document.getElementById("b36").value = '';
    
 
}

function myfunc_disable() {
	let accuracy = (hit / (hit + miss)) * 100
	console.log(accuracy);
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById("b5").disabled = true;
	document.getElementById("b6").disabled = true;
	document.getElementById("b7").disabled = true;
	document.getElementById("b8").disabled = true;
	document.getElementById("b9").disabled = true;
	document.getElementById("b10").disabled = true;
	document.getElementById("b11").disabled = true;
	document.getElementById("b12").disabled = true;
	document.getElementById("b13").disabled = true;
	document.getElementById("b14").disabled = true;
	document.getElementById("b15").disabled = true;
	document.getElementById("b16").disabled = true;
	document.getElementById("b17").disabled = true;
	document.getElementById("b18").disabled = true;
	document.getElementById("b19").disabled = true;
	document.getElementById("b20").disabled = true;
	document.getElementById("b21").disabled = true;
	document.getElementById("b22").disabled = true;
	document.getElementById("b23").disabled = true;
	document.getElementById("b24").disabled = true;
	document.getElementById("b25").disabled = true;
	document.getElementById("b26").disabled = true;
	document.getElementById("b27").disabled = true;
	document.getElementById("b28").disabled = true;
	document.getElementById("b29").disabled = true;
	document.getElementById("b30").disabled = true;
	document.getElementById("b31").disabled = true;
	document.getElementById("b32").disabled = true;
	document.getElementById("b33").disabled = true;
	document.getElementById("b34").disabled = true;
	document.getElementById("b35").disabled = true;
	document.getElementById("b36").disabled = true;
	
	


}





