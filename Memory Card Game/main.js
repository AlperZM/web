catsAndBatsGame();
function catsAndBatsGame() {
	let cards = document.getElementsByClassName("card");
	let figures = document.getElementsByClassName("card-back");
	let innerCards = document.getElementsByClassName("card-inner");
	let reset = document.querySelector("#reset");
	let score = document.querySelector("#score");
	let arr = ["&#128571;", "&#128128;", "&#129415;"];
	let cacheFigures = [];
	let cacheCard = [];
	let unmatched = [];
	let points = 0;
	//reset game
	reset.addEventListener("click", () => {
		[...innerCards].map((e) => {
			e.classList.contains("is-flipped") ? 
				e.classList.remove("is-flipped") : e;
		});
		[...cards].map((e) => {
			e.style.boxShadow = "0 0 5px 5px #000";
			e.classList.remove("disabled");
		});
		score.textContent = "Your Score: ";
	});

	// add figures in to the cards
	for (let i = 0; i < figures.length; i++) {
		let number = Math.floor(Math.random() * arr.length);
		figures[i].innerHTML = `<p class="hidden-figures">${arr[number]}</p>`;
	}

	// flip cards
	for (let i = 0; i < cards.length; i++) {
		cards[i].addEventListener("click", () => {
			innerCards[i].classList.toggle("is-flipped");
			cards[i].classList.add("disabled");
			
			// set cards logic
			cacheFigures.push(figures[i].textContent);
			cacheCard.push(cards[i]);
			unmatched.push(innerCards[i]);

			// control logic
			if (cacheFigures.length == 3) {
				matchCards();
			}
		});
	}

	// if match cards
	function matchCards() {
		if (cacheFigures[0] == cacheFigures[1]) {
			cacheCard[0].style.boxShadow = "0 0 5px 5px var(--fourth)";
			cacheCard[1].style.boxShadow = "0 0 5px 5px var(--fourth)";
			cacheCard[2].classList.remove("disabled");
			points += 20;
			score.textContent = `Your Score: ${points}.`;
			unmatched[2].classList.remove("is-flipped");
		} else {
			[...unmatched].map((e) => e.classList.remove("is-flipped"));
			[...cacheCard].map((e) => e.classList.remove("disabled"));
		}
		cacheCard.length = 0;
		cacheFigures.length = 0;
		unmatched.length = 0;
	}
}
