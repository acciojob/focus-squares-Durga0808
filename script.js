//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
	const squares = document.getElementsByClassName("square");

	squares.forEach(square => {
		square.addEventListener("mouseover", function () {
			for(let i=0;i<squares.length;i++){
				let otherSquare=squares[i];
				if (otherSquare !== square) {
					otherSquare.style.backgroundColor = "#6F4E37";
				}
			}
			});
		});
		square.addEventListener("mouseout", function () {
			squares.forEach(otherSquare => {
				otherSquare.style.backgroundColor = "#E6E6FA";
			});
		});
	});
});