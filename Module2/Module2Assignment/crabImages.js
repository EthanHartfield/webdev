function showImage(image){
    var largeImg = document.getElementById('large_img');
    largeImg.src = image;
    
    if (image.includes("CrabCard"))
    {
      document.getElementById('imgDescr').innerHTML = "After a dear friend of his was murdered in the great human re-uprising he has sworn vengence upon all humans.And with the help of his REALLY unbalanced stats and moveset shown above I can't imagine it being that difficult.";
    }
    if (image.includes("CrabDock"))
    {
      document.getElementById('imgDescr').innerHTML = "He made his way to the dock where he would begin his destructuon.";
    }
    if (image.includes("CrabRoad"))
    {
      document.getElementById('imgDescr').innerHTML = "He made his way down a road to find more humans";
    }
    if (image.includes("CrabAndTheBoys"))
    {
      document.getElementById('imgDescr').innerHTML = "";
    }
    if (image.includes("CrabEarth"))
    {
      document.getElementById('imgDescr').innerHTML = "";
    }

  }