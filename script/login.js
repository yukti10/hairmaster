
function validate()
{
    
   
    
    var email = $("#email").val();
    var pass = document.getElementById("pass");
    
   
    
   
   
    if(email == "")
    {
        document.getElementById("email-msg").innerHTML = "Email is required";
       
        flag = 0;
    }
    else
    {
        if(IsEMAILVALID())
        {
            document.getElementById("email-msg").innerHTML = "";
            flag = 1;
        } 
        else
        {
            document.getElementById("email-msg").innerHTML = "Invalid Email Address";
            
            flag = 0;
        }
        
        
    }  
 
   

    if(pass.value== "")
    {
        document.getElementById("password-msg").innerHTML = "Password is Required";
      
        flag = 0;
    }
   
   
    if (flag == 0)
    {
        return false;
    }
    else
    {
        var inputEmail= $("#email").val();
        var inputPassword= $("#pass").val();
       debugger;
      var retrievedObject = localStorage.getItem(inputEmail);
      var obj = JSON.parse(retrievedObject);
     
      if(obj!=null)
        {
        if(obj.email == inputEmail && obj.password == inputPassword)
        { 
            alert("Logged IN")
            return true;
        }
        else
        {   
            document.getElementById("email-msg").innerHTML = "Wrong credentials";
            alert("Wrong credentials");
            return false;
        }
        }
        else
        {
            document.getElementById("email-msg").innerHTML = "Wrong credentials";
            alert("Wrong credentials");
            return false;
        }
    }
    
   
}




  function IsEMAILVALID() {


    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

    if (pattern.test($("#email").val())) {
        return true;
        
       
    } else {
       
        return false;
    }

}