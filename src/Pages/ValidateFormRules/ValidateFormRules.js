export default function validate(values){
    let errors = {};
    // let password_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		let letters = /^[A-Za-z]+$/;
		let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!values.firstname) {
        errors.firstname = 'Firstname is required';
    }else if(!letters.test(values.firstname)){
        errors.firstname='Name field requires only alphabet characters';
    }if (!values.lastname) {
        errors.lastname = 'Lastname is required';
    }else if(!letters.test(values.lastname)){
        errors.lastname='Name field requires only alphabet characters';
    }
    if (!values.username) {
        errors.username = 'Username is required';
    }else if(!letters.test(values.username)){
        errors.username='Name field requires only alphabet characters';
    }
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!filter.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = 'Password is required';
    }else if(values.password!==values.confirmpassword){
        errors.confirmpassword='Passwords do not match';
    }

    return errors;
  };

 