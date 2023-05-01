 function toggleBtn(){
	 const btn = document.getElementById("btn");
	 
	 // bnt 숨기기 (display: non)
	 
	 if(btn.style.display !== "none") {btn.style.display = "none";}
	 
	 // bnt 보이기 	 (display: block)
	 
	 else{btn.style.display = "block";}
 }