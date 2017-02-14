function pali(n) {
	var ttt = n.toLowerCase().replace(/[\W_]/g, '');
	var final = ttt.split('').reverse().join('');
console.log(ttt);	
console.log(final);	
return final === ttt;
}
pali("a man, a plan, a canal. panama");