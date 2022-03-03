
function getLetterGrade()
{
    if (!document.getElementById)
        return;

    var x = document.getElementById("grade").value;
    var msg = "";
    if ((x >= 90) && (x <= 100)) /* I am comparing x to 90 */
    { //begins the body of the if statement
        msg += "You made an A on yout test! ";
        msg += "Congratulations!";
    } //end the body of the if statement
    else if ((x >= 80) && (x < 90))
    { //begins the body of the else statement/block
        msg += "You made a B on yout test! ";
        msg += "Good job!";
    } //end the body/block of the else statement
    else if ((x >= 70) && (x < 80))
    {
        msg += "You made a C on yout test! ";
        msg += "It is okay!";
    }
    else if ((x >= 60) && (x < 70))
    {
        msg += "You made a D on yout test! ";
        msg += "That is not good!";
    }
    else
    {
        msg += "You made an F on yout test! ";
        msg += "Sorry but you failed!";
    }

    obj = document.getElementById("message");
    obj.innerText = msg;
    obj.style.color = "red";
    
    document.getElementById("grade").value = ""
} //end the function

/* = is not the same as == */
/* = is the asignment operator */
/* == is the comparison operator */
/*
>
<
>=
<=
!= not equal
*/

//AND operator &&
/*
A   B   A&&B
=============
T   T     T
T   F     F
F   T     F
F   F     F

//OR operator ||
A   B   A||B
=============
T   T     T
T   F     T
F   T     T
F   F     F

//NOT operator !
A       !A
===========
T       F
F       T

*/
