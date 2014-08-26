var words = ['computer', 'zion', 'virus', 'geek', 'scientist','matrix'];
var newWord="",
	totalIndex;
var total_hang_counter = 0;
var man_order = ['head','neck','hand1','hand2','leg1','leg2'];
function chooseWord () {
    return words[Math.floor(Math.random() * words.length)];
}

function createSpan () {
	newWord = chooseWord().toUpperCase();
	var len = newWord.length;
	var span = "";
	for (var i = 0; i < len; i++) {
		if (newWord[i]===" ") {
			span += "<span data-num='"+i+"' class='space num"+i+"'>  </span>"
		} else {
			span += "<span data-num='"+i+"' class='num"+i+"'> _ </span>";
		}

	};

	console.log(newWord);
	/*console.log(span);*/

	totalIndex = createIndex(newWord);
	console.log(totalIndex);

}

function createIndex (str) {
	// var str = "localisation";
	var arrayOfletter = str.split("");
	var objIndex = [];

	var setCheck = false;
	for (var i = 0; i < arrayOfletter.length; i++) {
			for (var j = 0; j < objIndex.length; j++) {
				if (arrayOfletter[i] === objIndex[j].chars) {
					objIndex[j].indexs.push(i);
					setCheck = true;
				};
			};

			if (!setCheck) {
				objIndex.push({chars : arrayOfletter[i],
					indexs : [i]
				})
			};
			setCheck = false;

	};
	// console.log(objIndex);

	return objIndex;
}


// createIndex();
createSpan();

console.log("smth"+String.fromCharCode(65,66,67));


var $keypad = $(".keypad");

var $keys = [];
for (var i = 0; i < 26; i++) {
	$keys.push(String.fromCharCode(65+i));
};

function keypad () {
	var source = $('#keypad-template').html();
	var template = Handlebars.compile(source);
	var content = {
		keys : $keys
	}
	var html = template(content);
	console.log($keys);
	console.log(html);
	$keypad.html(html);
}

keypad();

function questions () {
	var source = $('#question-template').html();
	var template = Handlebars.compile(source);
	var content = {
		clue : "",
		chars : newWord.split("")
	}
	var html = template(content);
	console.log($keys);
	console.log(html);
	$(".question").html(html);
}


questions();

$(".keypad").on('click','.keys',function () {
	var $val = $(this).data('value');
	//disable the key.
	var $flag = false;
	for (var i = 0; i < totalIndex.length; i++) {
		if(totalIndex[i].chars===$val){
			$flag = true;
		}
	};
	
	if($flag){
		//fill the places.
		
	} else {
		//hang the man
		hang_the_man();
	}

	console.log(totalIndex);
	console.log("keys")
})

function hang_the_man(){
	if(total_hang_counter>=7) {
		alert("Man's hanged! :(");
		
	} else {
		//display the div.
		//alert(man_order[total_hang_counter])
		$("#"+man_order[total_hang_counter]).show();
		total_hang_counter++;
	}
}
