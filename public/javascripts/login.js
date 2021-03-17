function validateform()
{
 //const userName = document.getElementById("username").value;
 //const password = document.getElementById("password").value;
 let username= document.getElementById("username").value;
 let password= document.getElementById("password").value;

 let password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
 let letters = /^[A-Za-z]+$/;
 //let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 if (username==="")
 {  
    alert("Username can't be blank");   
 }
 else if(!letters.test(username))
	{
		alert("UserName field requires only alphabet characters"); 
	}
 else if(password==="")
	{
		alert("Please enter your Password");
	}
 else if(!password_expression.test(password))
	{
		alert ("Upper case, Lower case, Special character and Numeric letter are required in Password field");
	}
 else if(password.length<8)
   {  
    alert("Password must be at least 8characters long.");  
      
    }  
 else
	{				                            
		   alert("Thank You! You have successfully logged in.");
		   // Redirecting to the studentprofile page. 
		   window.location = "studentprofile.html"; 
	}
	const form =document.getElementById("loginform")

	form.addEventListener("submit", function (e){
		e.preventDefault()
	});

	const formData = new FormData(this)
	
	fetch ("https://jsonplaceholder.typicode.com/posts",{
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

