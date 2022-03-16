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
