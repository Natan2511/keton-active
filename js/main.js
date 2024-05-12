$(document).ready(function () {
    

    $('#slider1').slick({
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
    });

    $('#slider2').slick({
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: true,
        dots: false,
        adaptiveHeight: true

    });

    var pack = 30;
    var timerId = setInterval(function () {
        pack--;
        $('.pack_value').html(pack);
    }, 30000);

    setTimeout(function () {
        clearInterval(timerId);
    }, 150000);


    	// TIME REMAIN
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date());
		let seconds = Math.floor((t / 1000) % 60);
		let minutes = Math.floor((t / 1000 / 60) % 60);
		let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	function initializeClock(id, endtime) {

		function updateClock() {
			var t = getTimeRemaining(endtime);

			if (t.total <= 0) {
				clearInterval(timeinterval);
				var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
				initializeClock('clockdiv', deadline);
			}

			let clock = document.querySelectorAll('.time-remain').forEach(item => {
				item.querySelector(".hour").innerHTML = ("0" + t.hours).slice(-2);
				item.querySelector(".minutes").innerHTML = ("0" + t.minutes).slice(-2);
				item.querySelector(".seconds").innerHTML = ("0" + t.seconds).slice(-2);
			});
		}
		updateClock();
		var timeinterval = setInterval(updateClock, 1000);
	}
	var deadline = new Date(Date.parse(new Date()) + 13500 * 1000);
  initializeClock("clockdiv", deadline);

});


	// Функция для плавной прокрутки
	function smoothScroll(target, duration) {
		var targetElement = document.getElementById(target);
		var targetPosition = targetElement.getBoundingClientRect().top;
		var startPosition = window.pageYOffset;
		var distance = targetPosition - startPosition;
		var startTime = null;
	  
		function animation(currentTime) {
		  if (startTime === null) startTime = currentTime;
		  var timeElapsed = currentTime - startTime;
		  var run = ease(timeElapsed, startPosition, distance, duration);
		  window.scrollTo(0, run);
		  if (timeElapsed < duration) requestAnimationFrame(animation);
		}
	  
		function ease(t, b, c, d) {
		  t /= d / 2;
		  if (t < 1) return c / 2 * t * t + b;
		  t--;
		  return -c / 2 * (t * (t - 2) - 1) + b;
		}
	  
		requestAnimationFrame(animation);
	  }
	  
	  // Обработчик события для клика по первой кнопке
	  document.getElementById('buy1').addEventListener('click', function() {
		smoothScroll('buy2', 1000); // buy2 - id второй кнопки, 1000 - время анимации в миллисекундах
	  });


	  const buy = document.querySelector("#buy2");
	  buy.addEventListener("click", action);

	  function action() {
		window.location.replace(
		  atob(
			"aHR0cHM6Ly9jaGVja291dC5wZXJmb21hbnNkZWFsLm1lL2NoZWNrb3V0Lz9vcmRlcj1KVGRDSlRCQkpUSXdKVEl3SlRJd0pUSXdKVEl5Ym1GdFpTVXlNaVV6UVNVeU1DVXlNa3RsZEc5dUpUSXdRV3QwYVhZbE1qSWxNa01sTUVFbE1qQWxNakFsTWpBbE1qQWxNakprWlhOamNtbHdkR2x2YmlVeU1pVXpRU1V5TUNVeU1rUnBjMk52ZFc1MEpUSXdOVEFsTWpVbE1qSWxNa01sTUVFbE1qQWxNakFsTWpBbE1qQWxNakp3Y21salpTVXlNaVV6UVNVeU1EUTVKVEpESlRCQkpUSXdKVEl3SlRJd0pUSXdKVEl5WVcxdmRXNTBKVEl5SlROQkpUSXdNU1V5UXlVd1FTVXlNQ1V5TUNVeU1DVXlNQ1V5TW1sdFlXZGxKVEl5SlROQkpUSXdKVEl5YUhSMGNITWxNMEVsTWtZbE1rWnRNUzUwYjNBbE1rWjFjR3h2WVdSekpUSkdiMlptWlhKekpUSkdiMlptWlhKZmFXMW5NVEF3ZURFd01DVXlSakl3TWpNd09ESXhNVGd5TlRRME9EY3dMbXB3WnlVeU1pVXlReVV3UVNVeU1DVXlNQ1V5TUNVeU1DVXlNbkJoZVhWeWJDVXlNaVV6UVNVeU1DVXlNaVV5TWlVeVF5VXdRU1V5TUNVeU1DVXlNQ1V5TUNVeU1tTjFjbkpsYm1ONUpUSXlKVE5CSlRJd0pUSXlKVEkwSlRJeUpUSkRKVEJCSlRJd0pUSXdKVEl3SlRJd0pUSXljM1ZqWTJWemMxOTFjbXdsTWpJbE0wRWxNakFsTWpJbE1qSWxNa01sTUVFbE1qQWxNakFsTWpBbE1qQWxNakptWVdsc1pXUmZkWEpzSlRJeUpUTkJKVEl3SlRJeUpUSXlKVEJCSlRkRSZsYW5nPWVu"
		  )
		);
		const decodedString = atob(encodedString);
		window.location.replace(decodedString);
	  }