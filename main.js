var note = 0;
function Start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DAU-dno7T/model.json', modelReady);
    
    
}

function modelReady()
{
    console.log("Model Is Loaded");
    classifier.classify(gotResults);
    
}

function gotResults(error, results)
{
  note = results[0].label;
  if(error)
  {
    console.error(error);
  }
  if(results.length > 0.5)
  {
  if(note == "Background_Noise")
  {
    document.getElementById("canvas").style.backgroundColor = "black";
    console.log("Background Noise");
    document.getElementById("note").innerHTML = "Background Noise";
    
  }
  else if(note =="C")
  {
    document.getElementById("canvas").style.backgroundColor = "red";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "C";
    console.log("C");
    
  }
  else if(note =="C#")
  {
    document.getElementById("canvas").style.backgroundColor = "tomato";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "C#";
    console.log("C#");
    
  }

  else if(note =="D")
  {
    document.getElementById("canvas").style.backgroundColor = "orange";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "D";
    console.log("D");

  }
  else if(note =="D#")
  {
    document.getElementById("canvas").style.backgroundColor = "lightsalmon";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "D#";
    console.log("D#");
  }
  else if(note =="E")
  {
    document.getElementById("canvas").style.backgroundColor = "yellow";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "E";
    console.log("E");

  }
  else if(note =="F")
  {
    document.getElementById("canvas").style.backgroundColor = "gold";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "F";
    console.log("F");

  }
  else if(note =="F#")
  {
    document.getElementById("canvas").style.backgroundColor = "lime";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "F#";
    console.log("F#");

  }
  else if(note =="G")
  {
    document.getElementById("canvas").style.backgroundColor = "greenyellow";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "G";
    console.log("G");

  }
  else if(note =="G#")
  {
    document.getElementById("canvas").style.backgroundColor = "cyan";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "G#";
    console.log("G#");
  }
  else if(note == "A")
  {
    document.getElementById("canvas").style.backgroundColor = "deepskyblue";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "A";
    console.log("A");
  }

  else if(note == "A#")
  {
    document.getElementById("canvas").style.backgroundColor = "deeporchid";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "A#";
    console.log("A#");
  }

  else if(note == "B")
  {
    document.getElementById("canvas").style.backgroundColor = "violet";
    navigator.vibrate(500);
    document.getElementById("note").innerHTML = "B";
    console.log("B");
  }
  else if(note == "Background Noise")
  {
    document.getElementById("canvas").style.backgroundColor = "black";
    console.log("Background Noise");
    document.getElementById("note").innerHTML = "Background Noise";
  }
  
 

  note="";
}
}

function Back()
{
  window.location = "home.html";
}


  
