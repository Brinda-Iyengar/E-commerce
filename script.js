const scriptURL = "https://script.google.com/macros/s/AKfycbzv4PQJIRFWHeJ6IKLVro3ifAE7Jg44FAzwmR1DcY7nvhx7AUyGCx6T-wZt59M8Onn8/exec";
const form = document.forms['Regform'];
        form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
        })
        .then(response => alert("Thanks for Registering!!!"))
        .catch(error => console.error('Error!', error.message))
        })

var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
        function menuToggle()
        {
            if(menuItems.style.maxHeight == "0px")
            {
                menuItems.style.maxHeight = "200px";
            }
            else{
                menuItems.style.maxHeight = "0px";
            }
        }

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
     
        function login(){
            RegForm.style.transform = "translateX(300px)";
            LoginForm.style.transform = "translateX(300px)";
            Indicator.style.transform = "translateX(10px)";
        }

        function register(){
            RegForm.style.transform = "translateX(0px)";
            LoginForm.style.transform = "translateX(0px)";
            Indicator.style.transform = "translateX(130px)";
            
        }
