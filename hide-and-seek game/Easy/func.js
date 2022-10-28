
	const numbers = [1,1,1,2,0,0,0,0,0];
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


}





