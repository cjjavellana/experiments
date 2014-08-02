/*  
 * Sets up a count down timer against 12AM PST.
 * 
 * This utility works by:
 * 1. Retrieving the current time
 * 2. Converting it to PST
 * 3. Subtracting it against 12AM PST
 *
 * @param jQueryDivObj A jQuery div element to update everytime the timer is decremented
 * Ref: http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
 */
function CountdownTimer(jQueryDivObj) {

	var timer, 
		instance = this,
		obj = jQueryDivObj,
		hoursLeft, 
		minsLeft, 
		secsLeft;


	function decrement(){
		hoursLeft = parseInt(hoursLeft);
		minsLeft = parseInt(minsLeft);
		secsLeft = parseInt(secsLeft);

		secsLeft --;
	
		if(secsLeft < 0) {
			minsLeft --
			secsLeft = 59;
		}

		if(minsLeft < 0) {
			hoursLeft --;
			minsLeft = 59;
		}

		if(hoursLeft < 0) {
			hoursLeft = 23;
		}

		if(hoursLeft < 10) hoursLeft = '0' + hoursLeft;
		if(minsLeft < 10) minsLeft = '0' + minsLeft;
		if(secsLeft < 10) secsLeft = '0' + secsLeft;

		if(hoursLeft == '00' && minsLeft == '00' && secsLeft == '00'){
			obj.html('OFFER HAS EXPIRED');
			instance.stop();
		} else {
			obj.html(hoursLeft + ':' + minsLeft + ':' + secsLeft);
		}
	}

	this.start = function (){
		clearInterval(timer);

		var PST_OFFSET_FROM_UTC = 8;

		//get the current time
		var pstTime = new Date();

		//(pstTime.getTimezoneOffset() / 60) - Will return the user's offset from UTC
		pstTime.setHours(pstTime.getHours() - PST_OFFSET_FROM_UTC + (pstTime.getTimezoneOffset() / 60));

		hoursLeft = 23 - pstTime.getHours();
		minsLeft = 59 - pstTime.getMinutes();
		secsLeft = 59 - pstTime.getSeconds();

		timer = setInterval(decrement, 1000);
	};

	this.stop = function (){
		clearInterval(timer);
	};
}