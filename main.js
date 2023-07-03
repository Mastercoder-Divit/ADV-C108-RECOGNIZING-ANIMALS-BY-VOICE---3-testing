var dog = 0;
var cat = 0;
var cow = 0;
var lion = 0;

function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/o2d-mYS9v/modeljson", modelReady);
}

function modelReady()
{
    classifier.classify(gotresult);
}

function gotresult(error, results)
{
    if (error)
    {
        console.error(error);
    } else
    {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog" + dog + "Detected Cat - " + cat + "Detected Cow - " + cow + "Detected Lion - " + lion;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("animal_voices").innerHTML = "Detected voice is of - " + results[0].label; 
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking")
        {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
        }
        else if(results[0].label == "Meowing")
        {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        }
        else if(results[0].label == "Mooing")
        {
            img.src = "http://www.alexdeaton.com/defenders-of-wildlife";
            cow = cow + 1;
        }
        else if(results[0].label == "Roaring")
        {
            img.src = "https://clipart-library.com/images/kc8kgyXMi.gif";
            lion = lion + 1;
        }
        else
        {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}

