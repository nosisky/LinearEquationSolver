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






function done(n) {
	var me = [];
	var words = prompt("Give me the words");
	var text = prompt("Give me the text to search");
	var sp = words.split(" ");
	for(var i = 0; i<sp.length; i++) {
		if(sp[i].match(text)) {
		  var mes = sp[i].split("");
   me += mes;
		}
	}
	var ttt = me.replace(/[^a-zA-Z]/g,"");
console.log(ttt.split(""));
}
done();




const getPrime = function(n) {
  var arr = Array.from(Array(n), (v,i) => i + 1);
  var answer = arr.map(function(a) {
   (Math.pow(a,4) - Math.pow(a,3) * (2*(Math.floor(a/2))) + (3*(Math.floor(a/3)))+(5*(Math.floor(a/5)))+(7*(Math.floor(a/7))) + (Math.pow(a,2)) * (35 * Math.floor(a/5)) * (Math.floor(a/7)) + (21 * (Math.floor(a/3))) * (Math.floor(a/7)) + (15 * (Math.floor(a/3))) * (Math.floor(a/5)) + (14 * (Math.floor(a/2))) * (Math.floor(a/7) + 10) * (Math.floor(a/2)) * (Math.floor(a/5)) + 6 * (Math.floor(a/2)) * (Math.floor(a/3)) - (a*(105*(Math.floor(a/3) * (Math.floor(a/5) * Math.floor(a/7) + 70 * (Math.floor(a/2) * (Math.floor(a/5) * Math.floor(a/7) + 42 * (Math.floor(a/2)) * Math.floor(a/3) * Math.floor(a/7) + 30 * Math.floor(a/2) * Math.floor(a/3) * Math.floor(a/5) + 210 *( Math.floor(a/2) * Math.floor(a/3) * Math.floor(a/5) * Math.floor(a/7)) === 0) ? true : false;
   
else if (Math.floor(Math.sqrt(a)) < 11) {
  return true;
}
else {
  for(var i = 11; i <= Math.floor(Math.sqrt(a)); i+=1) {
    ((a%i) === 0) ? false : true;
  }
}
})
return answer;
}

getPrime(9);  



 for(var i = 0; i < arr.length; i+=1){
    if((arr[0] * 10 + arr[1])%arr[2] === 0) || ((arr[0] * 10 + arr[1])%arr[2] === 0)) || ((arr[1] * 10 + arr[0])%arr[2] === 0)) || ((arr[1] * 10 + arr[2])%arr[0] === 0)) || ((arr[0] * 10 + arr[2])%arr[1] === 0)) || ((arr[2] * 10 + arr[0])%arr[1] === 0)) || ((arr[2] * 10 + arr[1])%arr[0] === 0))){
      return true;
    }
  }