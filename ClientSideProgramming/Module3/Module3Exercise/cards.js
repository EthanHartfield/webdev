// define the functions
function printCard() {
   var name_line = "<strong>Name: </strong>" + this.name + "<br>\n";
   var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
   var address_line = "<strong>Address: </strong>" + this.address + "<br>\n";
   var phone_line = "<strong>Phone: </strong>" + this.phone + "<br>\n";
   var personalNotes_line = "<strong>Personal Notes: </strong>" + this.personalNotes + "<hr>\n";
   document.write(name_line, email_line, address_line, phone_line, personalNotes_line);
}

//Defining a card object using a constructor function
//by passing 4 parameters
function Card(name,email,address,phone,personalNotes) {
   this.name = name;
   this.email = email;
   this.address = address;
   this.phone = phone;
   this.personalNotes = personalNotes;
   this.printCard = printCard;
}

// Create the objects
var sue = new Card("Sue Suthers", 
                   "sue@suthers.com", 
                   "123 Elm Street, Yourtown ST 99999", 
                   "555-555-9876",
                   "She's cool I guess.");
var fred = new Card("Fred Fanboy", 
                    "fred@fanboy.com", 
                    "233 Oak Lane, Sometown ST 99399", 
                    "555-555-4444",
                    "He's also cool I guess.");
var jimbo = new Card("Jimbo Jones", 
                     "jimbo@jones.com", 
                     "233 Walnut Circle, Anotherville ST 88999", 
                     "555-555-1344",
                     "He's also also cool I guess.");

// Now print them
sue.printCard();
fred.printCard();
jimbo.printCard();
