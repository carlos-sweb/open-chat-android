function createRipple(event) {
	  const button = event.currentTarget;
	  const circle = document.createElement("span");
	  const diameter = Math.max(button.clientWidth, button.clientHeight);
	  const radius = diameter / 2;
	  circle.style.width = circle.style.height = `${diameter}px`;
	  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
	  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
	  circle.classList.add("ripple");
	  const ripple = button.getElementsByClassName("ripple")[0];

	  if (ripple) {
	    ripple.remove();
	  }

	  button.appendChild(circle);
}

	const buttons = document.getElementsByClassName("item"); //document.getElementsByTagName("button");

	for (const button of buttons) {
	  button.addEventListener("click", function(event){
	  	createRipple(event);

	  	const number = event.currentTarget.getAttribute("number-value")
	  	const numberPrevius = document.getElementById("textshow").innerText;

	  	if(number != null){
	  		document.getElementById("textshow").innerText = numberPrevius + number;
	  	}

	  	if( event.currentTarget.hasAttribute("backspace") ){
	  		    
	  		document.getElementById("textshow").innerText = numberPrevius.slice(0, -1);
	  	}
	  	

	  });	  
	}