//The final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim*/


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

(function(){

	for(var i = 0; i < names.length; i++){

		if (names[i][0] == "J" || names[i][0] == "j"){
			byeSpeaker.speak(names[i]);
			
		}else{
			helloSpeaker.speak(names[i]);
		};
	}

})();

