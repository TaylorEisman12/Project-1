// Taylor Eisman
// 01/12
// SDI Project 1 "Opening my safe."

alert("JavaScript works!");

var myName = "Taylor",
	openSafe = true,
	codeTimer = 3,
	passInput = 2,
	guestName = "Bobby"
;

console.log("My name is " + myName + ".");
console.log("My guest username is " + guestName + ".");
console.log("It takes me " + passInput + " seconds to type in my password." );

// added extra boolean hope thats okay.
if (openSafe == true){
	console.log("Taylor wants to open his safe.");
	console.log("You only have " + codeTimer + " seconds to type in the password.");
	}
	else {
		console.log("Not a problem, come back when you would like to open your safe.");
	}
;

console.log("Are you Taylor?");

if (myName == "Taylor"){
	console.log("Welcome back to your safe " + myName + ".");
	console.log("You now have " + codeTimer + " seconds to punch in your password.");
	}
	else {
		console.log("Please enter your guest username.");	
	}
if (guestName == "Bobby"){
	console.log("Welcome to Taylor's safe. You may only make deposits.");
	}
		else{
			console.log("You are not allowed in.");
			}
;
