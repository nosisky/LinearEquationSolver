function Word(word){
  var count = [];
  var cc = 0;
 var myword = word.split("");

 var final = myword.filter(function(a,b){

   if(myword.indexOf(a) === b){
     count.push("true");
   }

   else {
     count.push("false");
   }

 });

for(var i = 0; i<count.length; i++){
  if(count[i] === "false") {
    cc+=1;
  }
 
} 
 return(cc>=1) ? true:false;
}

Word("my mom is");