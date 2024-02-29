//your JS code here. If required.
document.addEventListner(DOMContentLoaded,function(){
	const squres=document.getElementsByClassName("square");

	squres.forEach(squre=>{
		squre.addEventListner("mouseover",function () {
			squres.forEach(currsqre=>{
				if(currsqre!==squre){
					currsqre.style.backgroundColor = "#6F4E37";
				}
			});
		});

		squre.addEventListner("mouseout",function () {
			squres.forEach(currsqre=>{
				currsqre.style.backgroundColor = "#E6E6FA";
			});
		});
	});
	
});