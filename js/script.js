var difficulty = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var feedbackDisplay = document.querySelector("#feedbackDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	resetGame();
}

function setupModeButtons() {
	for(var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? difficulty = 3: difficulty = 6;
			resetGame();
		});

	}
}

function setupSquares() {
	for(var i=0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				feedbackDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
			} else {
				feedbackDisplay.textContent = "Try again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

resetButton.addEventListener("click", resetGame);

for(var i=0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? difficulty = 3: difficulty = 6;
		// if(this.textContent === "Easy") {
		// 	difficulty = 3;
		// 	squares[i].style.display = "none";
 		// } else {
		// 	difficulty = 6;
		// 	squares[i].style.display = "block";
		// }

		resetGame();
	});
}

// easyButton.addEventListener("click", function() {
// 	difficulty = 3;
// 	easyButton.classList.add("selected");
// 	hardButton.classList.remove("selected");
// 	resetGame();
// 	for(var i=0; i < squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardButton.addEventListener("click", function() {
// 	difficulty = 6;
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	resetGame();
// 	for(var i=0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i=0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	// picking rgb colors 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

function resetGame() {
	colors = generateRandomColors(difficulty);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	feedbackDisplay.textContent = "";
	for(var i=0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
}