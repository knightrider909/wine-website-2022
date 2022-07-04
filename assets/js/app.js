// homepage overlay
$("#btn").on("click", function () {
	$(".overlay").fadeOut();
	$(".mainScreen").fadeIn();
});

// shop currency

let currency = "£";

// currency exchange
// const eurToGBP = 0.86;
// const dollarToGBP = 0.82;
const GBPToDollar = 1.21;
const GBPToEuro = 1.16;
let currentCurrencyType = $("#currency").val();

$("#currency").on("change", function () {
	currency = $("#currency").val();
	$(".currencyType").html(currency);
	let prices = document.querySelectorAll(".currentAmount");

	// currecny exchange
	if (currency == "£") {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice);
			return $(this).html(basePrice);
		});
		console.log("change pound");
	} else if (currency == "€") {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice * GBPToEuro);
			let newValue = $(this).html(basePrice * GBPToEuro);
			console.log(newValue);
			$(this).attr("currentCost", newValue);
			return newValue;
		});
		console.log("change euro");
	} else {
		$(prices).each(function () {
			const basePrice = $(this).attr("data-price");
			console.log(basePrice * GBPToDollar);
			return $(this).html(basePrice * GBPToDollar);
		});
		console.log("change dollar");
	}
});

// remove amount from shopping cart
$(".removeItem").on("click", function () {
	// $(".shoppingCart-amount").html("&#8356; <span id='total'>0</span>");
	let total = parseInt($("#total").html());
	let price = parseInt($(this).attr("data-price"));
	if (total > 0) {
		total = total - price;
		$("#total").html(total);
	}
});

// add amount from shopping cart
$(".addItem").on("click", function () {
	let price = parseInt($(this).attr("data-price"));
	let total = parseInt($("#total").html());
	total = total + price;
	$("#total").html(total);

	//  let price;
	// let total = parseInt($("#total").html());
	// let currentPrice = document.querySelectorAll(".currentAmount");

	// $(currentPrice).each(function (i, e) {
	// 	let price = parseInt($(this).html());
	// 	console.log(price);
	// });

	// total = total + price;
	// $("#total").html(total);
});

// style
$(function () {
	$().timelinr({
		orientation: "vertical",
		issuesSpeed: 300,
		datesSpeed: 100,
		arrowKeys: "true",
		startAt: 3,
	});
});

// scroll effect - homepage

var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = window_top_position + window_height;

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = element_top_position + element_height;

		//check to see if this current container is within viewport
		if (
			element_bottom_position >= window_top_position &&
			element_top_position <= window_bottom_position
		) {
			$element.addClass("in-view");
		} else {
			$element.removeClass("in-view");
		}
	});
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");
