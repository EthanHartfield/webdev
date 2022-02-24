// initialize the counter and the array
var numbernames = 0;
var names = new Array();
function SortNames() {
   // Get the name from the text field
   thename = document.theform.newname.value;
   // Add the name to the array
   names[numbernames] = thename.toUpperCase();
   // Increment the counter by 1
   numbernames++;    //equivalent to numbernames = numbernames + 1
   // Sort the array
   names.sort();
   //Display each name in the textarea
   document.theform.sorted.value = names.join("\n");
}
