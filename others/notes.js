class NotesApplication {
	constructor(author) {
	this.author = author
	this.notes = [];
	}
}
class notes {
	constructor(properties) {   
		this.notes_id = properties.notes_id;
		this.notes_content = properties.notes_content;
		console.log("New Notes Has Been Created!!!");
}
	create(notes_content) {
		this.notes.push(notes);
	}
	listNotes(note_id, notes_content) {
		return notes_content;
	}
	 get(note_id) {
		note_id = [];
	}
	search(search_text) {
		if (search_text.find(notes) === true) { 
			return indexOf(notes);
		}
		else {
			console.log("Not Found!");
		}
	}

    delete(note_id) {
    var index = array.indexOf(notes);
if (index > -1) {
    array.splice(notes, 1);
}
	}
	 edit(note_id, new_content) {
		new_content
	}
	
	
}
var mainNotes = new notes("Dealwap");
console.log("Before", mainNotes);
mainNotes.create("First Notes", mainNotes);

function title(str) {
     str = str.toLowerCase().split(" ");
    for(var i = 0; i <str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
title("the man is here");

function title2(n) {
	return n.toLowerCase().split(" ").map(function(w) {
		return w.charAt(0).toUpperCase() + w.slice(1);
	}).join(" ");
}
title2("the man is here")


function pali(n) {
	var ttt = n.toLowerCase().replace(/[\W_]/g, '');
	var final = ttt.split('').reverse().join('');
console.log(ttt);	
console.log(final);	
return final === ttt;
}
pali("a man, a plan, a canal. panama");

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


Array.prototype.toTwenty = function() {
    return Array.from(Array(20), (v,i) => i+1)
}

Array.prototype.toForty = function() {
 return Array.from(Array(40), (v,i) => i+1);
};

Array.prototype.toOneThousand = function() {
   return Array.from(Array(100), (v,i) => i+1);
};

Array.prototype.search = function search(item, list=this ) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
};

[1,2,3,6].search(7);
