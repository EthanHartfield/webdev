function getQuote() {
  // Create the arrays
  quotes = new Array(5);
  sources = new Array(5);

  // Initialize the arrays with quotes
  quotes[0] =
    "When I was a boy of 14, my father was so " +
    "ignorant...but when I got to be 21, I was astonished " +
    "at how much he had learned in 7 years.";
  sources[0] = "Mark Twain";

  quotes[1] = "Everybody is ignorant. Only on different " + "subjects.";
  sources[1] = "Will Rogers";

  quotes[2] =
    "They say such nice things about people at " +
    "their funerals that it makes me sad that I'm going to " +
    "miss mine by just a few days.";
  sources[2] = "Garrison Keillor";

  quotes[3] = "What's another word for thesaurus?";
  sources[3] = "Steven Wright";

  quotes[4] = "I'M SAYING WORDS!";
  sources[4] = "Ethan Hartfield";

  // Get a random index into the arrays
  i = Math.floor(Math.random() * quotes.length);

  qt = document.getElementById("quote");

  // Write out the quote as HTML
  /*document.write("<p style='background-color: #ffb6c1' >\"");
  document.write(quotes[i] + "\"");
  document.write("<em>- " + sources[i] + "</em>");
  document.write("</p>");*/

  quoteStr = "<p style='background-color: #ffb6c1' >\"" +
              quotes[i] + '"' +
              "<em>- " + sources[i] + "</em></p>";
  qt.innerHML = quoteStr;
  
}

  /*Code for swapping images */
  function showImage(image){
    var largeImg = document.getElementById('large_img');
    largeImg.src = image;
    
    if (image.includes("BirdReversed"))
    {
      document.getElementById('imgDescr').innerHTML = "Here we see the roles of human and animal being reveresed, giving those dasterdly humans a taste of their own medicine.";
    }
    if (image.includes("ThreatenFish"))
    {
      document.getElementById('imgDescr').innerHTML = "However at some point what goes down must go up... (yeah I think that's how the saying goes) and the humans will rise back to dominance, because humans are able to use guns while animals physically can't because most of them don't have fingers. I also have no idea how this fish had any power over any human in any capacity.";
    }
    if (image.includes("crabzilla"))
    {
      document.getElementById('imgDescr').innerHTML = "OH... I because he knew this guy... I guess that makes, some undefined amount of sense. (Also on a side-note this crab is actually in a Lego city which I just absolutely love! ^_^";
    }

  }
  
  /*Write a function OR update the showImage function
  to randomize the aside text related to each different image.*/
