function loginSubmit(){
	
	x = document.getElementById("username").value;
	y = document.getElementById("password").value;
	
	if(x === "username" && y === "password"){
		window.location.assign("view-tools-demo.html");
		//return true;
	}
	else if(x === "admin" && y == "password"){
		window.location.assign("create-patron-demo.html");
	}
	else if(x === ""){
		alert("Error: Username is left blank");
	}
	else if(y === ""){
		alert("Error: Password is left blank");
	}
	else{
		alert("You entered an incorrect username or password");
	}
}




