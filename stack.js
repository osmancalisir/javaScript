/* Stacks! 
 functions: push(pushing data), pop(removing data), peek(displaying top element), length(determining the size of the stack)
 First-in, Last out
*/
var letters = []; //this is our stack
var word = "racecar"
var rword = "";

//put letters of word into the stack
for(var i = 0; i < word.length; i++){
	letters.push(word[i]);
}

//pop off the stack in reverse order
for(var i = 0; i < word.length; i++){
	rword += letters.pop();
}

if(rword === word){
	console.log(word + " is a palindrome.");
} else {
	console.log(word + " is not a pelindrome.");
}

//Creates a stack
var Stack = function() {
	this.count = 0;
	this.storage = {};
	
	//Adds a value onto the end of the stack
	this.push = function(value) {
		this.storage[this.count] = value;
		this.count++;
	}
	
	//Removes and returns the value at the end of the stack
	this.pop = function(){
		if(this.count === 0) {
			return undefined;
		}
		
		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}
	
	this.size = function(){
		return this.count;
	}
	
	//Returns the value at the end of the stack
	this.peek = function(value){
		return this.storage[this.count - 1];
	}
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("stackExample");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
