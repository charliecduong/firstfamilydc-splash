$(function(){
//(function($){

	$.fn.shuffleLetters = function(prop){

		var options = $.extend({
			"step"		: 10,			// How many times should the letters be changed
			"fps"		: 15,			// Frames Per Second
			"text"		: "", 			// Use this text instead of the contents
			"callback"	: function(){}	// Run once the animation is complete
		},prop)

		return this.each(function(){

			var el = $(this),
				str = "";


			// Preventing parallel animations using a flag;

			if(el.data('animated')){
				return true;
			}

			el.data('animated',true);


			if(options.text) {
				str = options.text.split('');
			}
			else {
				str = el.text().split('');
			}

			// The types array holds the type for each character;
			// Letters holds the positions of non-space characters;

			var types = [],
				letters = [];

			// Looping through all the chars of the string

			for(var i=0;i<str.length;i++){

				var ch = str[i];

				if(ch == " "){
					types[i] = "space";
					continue;
				}
				else if(/[a-z]/.test(ch)){
					types[i] = "lowerLetter";
				}
				else if(/[A-Z]/.test(ch)){
					types[i] = "upperLetter";
				}
				else {
					types[i] = "symbol";
				}

				letters.push(i);
			}

			el.html("");

			// Self executing named function expression:

			(function shuffle(start){

				// This code is run options.fps times per second
				// and updates the contents of the page element

				var i,
					len = letters.length,
					strCopy = str.slice(0);	// Fresh copy of the string

				if(start>len){

					// The animation is complete. Updating the
					// flag and triggering the callback;

					el.data('animated',false);
					options.callback(el);
					return;
				}

				// All the work gets done here
				for(i=Math.max(start,0); i < len; i++){

					// The start argument and options.step limit
					// the characters we will be working on at once

					if( i < start+options.step){
						// Generate a random character at thsi position
						strCopy[letters[i]] = randomChar(types[letters[i]]);
					}
					else {
						strCopy[letters[i]] = "";
					}
				}

				el.text(strCopy.join(""));

				setTimeout(function(){

					shuffle(start+1);

				},1000/options.fps);

			})(-options.step);


		});
	};

	function randomChar(type){
		var pool = "";

		if (type == "lowerLetter"){
			pool = "abcdefghijklmnopqrstuvwxyz0123456789";
		}
		else if (type == "upperLetter"){
			pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		}
		else if (type == "symbol"){
			pool = ",.?/\\(^)![]{}*&^%$#'\"";
		}

		var arr = pool.split('');
		return arr[Math.floor(Math.random()*arr.length)];
	}

//})(jQuery);


$(".shuffle").shuffleLetters();
});

$(function(){
// Set the date we're counting down to
var countDownDate = new Date("Apr 21, 2018 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "D " + hours + "H "
    + minutes + "M " + seconds + "S ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
});


$(function(){
  $('.mce-last').keyup(function(){
     if($.trim(this.value).length > 0)
         $('#submit-button').addClass('on')
      else
         $('#submit-button').removeClass('on')
  });
});

$(function(){
  window.sr = ScrollReveal();
  sr.reveal('#content');
  sr.reveal('#input-container');
  sr.reveal('.quote');
  sr.reveal('#footer');
});
