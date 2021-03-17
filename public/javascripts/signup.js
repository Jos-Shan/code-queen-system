    
	function togglePassword() {
		var x =document.getElementById("password");
		if (x.type === "password") {
			x.type ="text";
		} else {
			x.type = "password";
		}
	}
	
    function register()
	{

		let firstName= document.getElementById("firstname").value;
		let lastName= document.getElementById("lastname").value;
		let email= document.getElementById("email").value;
		let username= document.getElementById("username").value;
		let password= document.getElementById("password").value;			
		//let confirmPassword= document.getElementById("confirm password").value;

		let password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		let letters = /^[A-Za-z]+$/;
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		 if(firstName==="")
	{
		alert("Please enter your First Name");
	}
	else if(!letters.test(firstName))
	{
		alert("Name field requires only alphabet characters"); 
	}
	else if(lastName==="")
	{
		alert("Please enter your Last Name");
	}
	else if(!letters.test(lastName))
	{
		alert("Name field requires only alphabet characters");
	}
	else if(username==="")
	{
		alert("Please enter your username");
	}
	else if(email==="")
	{
		alert("Please enter your user email");
	}
	else if (!filter.test(email))
	{
		alert("Invalid email");
	}
	
	else if(password==="")
	{
		alert("Please enter your Password");
	}
	/*else if(confirmPassword==="")
	{
		alert("Confirm your Password");
	}*/
	else if(!password_expression.test(password))
	{
		alert ("Upper case, Lower case, Special character and Numeric letter are required in Password field");
	}
	/*else if(password!= confirmPassword)
	{
		alert ("Passwords do not Match");
	}*/
	else if(document.getElementById("password").value.length < 8)
	{
		alert ("Password minimum length is 8");
	}
	else if(document.getElementById("password").value.length > 12)
	{
		alert ('Password max length is 12');
	}
	else
	{				                            
		   alert("Thank You for signing up");
		   // Redirecting to the studentprofile page. 
		   window.location = "studentprofile.html"; 
	
	}

	//}

	const form = document.getElementById("signupform")

	form.addEventListener("submit", function (e){
		e.preventDefault()
	});

	const formData = new FormData(this);
	
	fetch ("https://localhost:3000/signup",{
		method: "POST",
		body:JSON.stringify({
			body:formData,
		}),
		headers:{
			"Content-Type": "application/json"
		}
		  .then (function(response){
			  return response.json()
		  })
		  .then(function(data){
			  console.log(data)       
			})
	 
	
	})

}
	 	
/*function clearinputfields()
{
	document.getElementById("firstname").value==="";
	document.getElementById("lastname").value==="";
	document.getElementById("username").value==="";
	document.getElementById("email").value==="";
	document.getElementById("password").value==="";
	//document.getElementById("confirm password").value==="";
}*/
 
/* const registerBtn = document.getElementById("register-btn");
 

  const Url = "http://localhost:3000/signup"
  const response = await fetch(Url, {
            method: "POST",
            body: JSON.stringify(register),
            headers: {
                "Content-Type": "application/json",
            },
 });
 registerBtn.addEventListener("click", async() => {
	clearinputfields()
 }); */