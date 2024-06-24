document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('form1');

    if (localStorage.getItem('fname') && localStorage.getItem('lname') && localStorage.getItem('mail1') && localStorage.getItem('password1')) {
        document.getElementById('fname').value = localStorage.getItem('fname');
        document.getElementById('lname').value = localStorage.getItem('lname');
        document.getElementById('mail1').value = localStorage.getItem('mail1');
        document.getElementById('password1').value = localStorage.getItem('password1');
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let mail1 = document.getElementById('mail1').value;
        let password1 = document.getElementById('password1').value;

        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname); 
        localStorage.setItem('mail1', mail1);
        localStorage.setItem('password1', password1);
        
        alert("Your details are saved");
        
        location.reload();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('form');


    if (localStorage.getItem('email') && localStorage.getItem('password')) {
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('password').value = localStorage.getItem('password');
       
    }
 

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

          
        localStorage.getItem('email', email);
        localStorage.getItem('password', password);
        
        alert("Your details are saved");
        
    });
    
});
