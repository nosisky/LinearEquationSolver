const Linear = function() {
	const getString = function() {
	  let liketermscol = [];
	  let others = [];
	  let eqn = "32y+3=66-26y";
	 let vart = eqn.split(/[\d+-=]/);
	  vart = vart.reduce(function(a,b){
	    return b.match(/[a-z]/);
	  });
	eqn = eqn.replace(/[\s]/g, "");
		var col;
		
	let split_regex = /([^a-z0-9]+)/i;
    let result_regex = /([0-9])+([a-z]+)/i;
    let indexes = eqn.split(split_regex);
    for(let i = 0; i <indexes.length; i++) {
    	if(indexes[i].match(result_regex)) {
    		if(indexes[i-1] === "-") {
    			 col = "-" + indexes[i];
    		
    	indexes[i-1] = col;
    	indexes.splice(indexes.indexOf(i),1);
}
else if(indexes[i-1] === "+") {
    			 col = "+" + indexes[i];
    		
    	indexes[i-1] = col;
    	indexes.splice(indexes.indexOf(i),1);
}
    	}
    }

		let getIt = indexes;
		let cols = getIt.filter(function(a) {
			return a.match(result_regex);
		});
		let fff = getIt.filter(function(c){
		  return cols.indexOf(c) == -1;
		});
	
	  for(let ind = 0; ind < fff.length; ind++) {
	    if(fff[ind] === "=") {
	      for(let mm = 0; mm<ind; mm++) {
	 	        if(fff[mm].match(/[\d]/) && fff[mm-1] =="+") {
	      liketermscol.push("-"+fff[mm]);
	        }
	        else if(fff[mm].match(/[\d]/) && fff[mm-1] =="-") {
	          liketermscol.push("+"+fff[mm]);
	        }
	      }
	    }
	   if(fff[ind] === "=") {
	      for(let mn = ind+1; mn<fff.length; mn++) {
	 	        others.push(fff[mn]);
	        }
	}
	  }
	  let col2 = cols.join("");
	  let tro = 0;
	  let mon = col2.replace(/[a-z]/g, "");
	let terms = cols.join("") +"=" + others.join("") + liketermscol.join("");
	let thism = terms.split("");
	console.log("Welcome to my Linear equation solver!"+ "\n\n" + "Your equation is: "+ '\n\n' + eqn+"\n\n");
	console.log("Let's collect like terms: " + '\n\n' + col2 + "=" + others.join("") + liketermscol.join(""));
let mon2 = mon.split(/([^a-z0-9]+)/i);
for(let t = 0; t<mon2.length-1; t++){
	  if(mon2[t] > 0){
	    tro+=Number(mon2[t]);
	   }
	   if(mon2[t] === "-")
	  {
	    tro -= Number(mon2[t+1]);
	  }
	 //console.log(tro);
	}
	console.log(tro+vart[0]+" = " + others.join("") + liketermscol.join("") );
	let otherLike = others.join("") + liketermscol.join("");
 let ott = otherLike.split(/([^a-z0-9]+)/i);
 let tt2 = 0;
	for(let r = 0; r<ott.length-1; r++){
	  if(ott[r] > 0){
	    ott2+=Number(ott[r]);
	   }
	   if(ott[r] === "-")
	  {
	    ott2 -= Number(ott[r+1]);
	  }

	}
	console.log(tro+vart[0]+" = " + ott2+"\n");
	
	console.log("Let us divide through by "+tro+ "\n"+ vart[0]+ "=" + ott2 + "/" +tro+"\n");
	
	console.log("finally! The value of "+ vart[0] +" "+ "is: " + "\n" +vart[0]+ " = " + ott2/tro);

	}
	
return getString();
}
Linear(); 




