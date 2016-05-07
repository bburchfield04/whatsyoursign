var sentences = [
    'You will begin developing the most intense romantic interest in someone that you have ever had in your life. Unfortunately for you, that someone is a pet rock named Teddy.',
    'There is no point in telling you what to do this week. You will just do whatever you want anyway.',
    'You know what they say, when life gives you lemons, make lemonade. Except in your case life is giving you a lot of clinically depressed frogs. So make some sad frog juice?',
    'What was supposed to be an enjoyable week is now miserable thanks to some unpleasant phone calls you will have with your long lost relatives in Greenland',
    'You will spend a great deal of time wandering around aimlessly due to the poor quality of all the treasure maps you stole.',
    'Do not mess with powerful forces that you do not understand. One of them being gravity, and the other being the irresistable laugh of Oprah Winfrey.',
    'Slow and gradual change will take place inside yourself. Over the course of 40,000 years you will start to become a much better person. Hold that head up high!',
    'People will travel for miles and miles to seek out your words of wisdom. This is proof that people will do anything in order to get a good laugh.',
    'Allow your decisions and life choices to be influenced by some words you read on the internet. This is especially important when it comes to personal relationships.',
    'Creativity will strike you this week, knocking you completely out, and leaving you with a rather large and noticable black eye.',
    'Your insurance company will still insist that it has no obligation in insure you, as long as your lower body still remains frozen in that carbonite.',
    'You thought that your love would last forever. However, you are shocked to find an expiration date printed on the back, a long with the nuritional facts and warnings.',
    'You will feel cheated when you finally discover that there is no law requiring you to be kind to grieving family members at a funeral.',
    'You will develop an unfortunate personality disorder that causes you to pay more attention to the lives of celebrities then to the current events of the world.',
    'You should remember to check yourself this week. It would not be pleasant to embarrasingly wreck yourself later on.',
    'An attempt to write a beautiful love poem will fall terribly short when you have your heart set on someone named Orange',
    'We tried to tell you that attempting to cuddle with a hibernating grizzly bear was an awful idea, but you did not listen did you?',
    'You have many talents. Extreme ironing is most certainly not one of them, however.',
    'When you are attempting to swim across the Pacific Ocean, the stars strongly suggest that you do no wear a wetsuit that is made entirely out of seal meat.',
    'Aliens will visit the planet and gives you all of the secrets to obtaining world peace, but not before you shoot a few thousand of them.'
];

var horoscopes = document.getElementById("horoscopes");

    document.getElementById("thebutton").addEventListener("click", function() {
          randomIndex = Math.round((Math.random()*sentences.length-1));
          newText = sentences[randomIndex];
          horoscope.innerHTML = newText;
          return false;
    });

    function showHide() {
      if (horoscope.style.display == 'none') {
        horoscope.style.display = 'block';
      }

    }
