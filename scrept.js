$("ul li a").click(function () {
	$('html , body').animate({
		scrollTop: $('#' + $(this).data('value')).offset().top

	}, 1000)
})
window.onscroll = function () {

	if (window.scrollY > 400) {
		$(".up").css({
			"margin-right": "80px"
		}, 2000)



	}
	else {
		$(".up").css({
			"margin-right": "-20px"
		}, 2000)


	}
	if (window.scrollY > 580) {

		$(".navbar-expend-md").css({
			"background-color": "rgb(12, 12, 43)",
			"color": "white",
			"font-weight": "bold",
			"font-size": "15px"

		}, 1000)
		$(".active").css({

			"color": "#91C827"

		}, 1000)

	}
	else {

		$(".navbar-expend-md").css({
			"background-color": "#eee",
			"color": "black"

		}, 1000)
		$(".active").css({

			"color": "black"

		}, 1000)

	}
	if (window.scrollY > 10) {

		$(".logo2").css({
			"display": "block",
			"transition": "0.5s"

		}, 1000)
	}
	else {

		$(".logo2").css({
			"display": "none",
			"transition": "0.5s"

		}, 1000)

	}
	if (window.innerWidth < 760) {
		if (window.scrollY > 700) {
			$(".porofil").css({
				"opacity": "1",
				"transition": "0.5s",
				"animation": "down 1s ease-in-out"
			})
		}
	}

	else if (window.innerWidth > 760)

		if (window.scrollY > 400) {
			$(".porofil").css({
				"opacity": "1",
				"transition": "0.5s",
				"animation": "down 1s ease-in-out"
			})
		}


	






		if (window.innerWidth < 760) {
			if (window.scrollY > 2000) {
				$(".Contact").css({
					"opacity": "1",
					"transition": "0.5s",
					"animation": "down 1s ease-in-out"
				})
			}
			if (window.scrollY > 2000) {
				$(".disign").fadeIn(1000)
			}
		}
	
		else if (window.innerWidth > 760)
	
			if (window.scrollY > 1100) {
				$(".Contact").css({
					"opacity": "1",
					"transition": "0.5s",
					"animation": "down 1s ease-in-out"
				})
			}
	$(".up").click(function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	})

}
