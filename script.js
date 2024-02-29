//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
	const squres=document.getElementsByClassName("square");

	squres.forEach(squre=>{
		squre.addEventListener("mouseover",function () {
			squres.forEach(currsqre=>{
				if(currsqre!==squre){
					currsqre.style.backgroundColor = "#6F4E37";
				}
			});
		});

		squre.addEventListener("mouseout",function () {
			squres.forEach(currsqre=>{
				currsqre.style.backgroundColor = "#E6E6FA";
			});
		});
	});
	
});