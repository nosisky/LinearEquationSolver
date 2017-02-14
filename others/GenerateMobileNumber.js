function generate() { 
   var prefix = prompt("give prefix");
   var amount = prompt("give amount");
   var prefix1 = prefix;
   var l = [];
   var len = 11 - prefix.length;
   for(var i = 1; i <= amount; i++) {
     for(var j = 1; j <= len; j++) {
         var me = Math.floor(Math.random() * 10); 
         prefix += me;
          }
   
  l.push(prefix);
prefix = prefix1;
      }
     console.log(l);
}
generate();
