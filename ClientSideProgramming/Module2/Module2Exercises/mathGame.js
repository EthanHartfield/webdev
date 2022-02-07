



var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
window.onload = function()
{
    document.getElementById('showMessage').innerHTML = "What is ";
    document.getElementById("num1").innerHTML = num1
    document.getElementById("num2").innerHTML = num2
}

//This function is called when I press the submit button
//to check my answer
function checkAnswer()
{
    var guessNumber = document.getElementById("numberGuess").value;
    var answer = num1 * num2;

    if (guessNumber == answer)
    {
        //window.alert ("Your answer is correct");
        document.getElementById("feedback").innerHTML = '<p style="color:green;">You got it! Good job!</p>';
    }
    else
    {
        window.alert ("Sorry, you entered the wrong answer")
    }

    document.
}