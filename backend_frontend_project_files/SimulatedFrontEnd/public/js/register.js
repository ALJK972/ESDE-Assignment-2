let $registerFormContainer = $('#registerFormContainer');
console.log(password);
if ($registerFormContainer.length != 0) {
    console.log('Registration form detected. Binding event handling logic to form elements.');
    //If the jQuery object which represents the form element exists,
    //the following code will create a method to submit registration details
    //to server-side api when the #submitButton element fires the click event.
    $('#submitButton').on('click', function(event) {
        event.preventDefault();
        const baseUrl = 'http://ec2-3-83-68-225.compute-1.amazonaws.com:5000';
        let fullName = $('#fullNameInput').val();
        let email = $('#emailInput').val();
        let password = $('#passwordInput').val();
        let webFormData = new FormData();
        console.log(password);
        webFormData.append('fullName', fullName);
        webFormData.append('email', email);
        webFormData.append('password', password);
        axios({
                method: 'post',
                url: baseUrl + '/api/user/register',
                data: webFormData,
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            .then(function(response) {
                //Handle success
                console.dir(response);
                new Noty({
                    type: 'success',
                    timeout: '6000',
                    layout: 'topCenter',
                    theme: 'bootstrap-v4',
                    text: 'You have registered. Please <a href="login.html" class=" class="btn btn-default btn-sm" >Login</a>',
                }).show();
            })
            .catch(function(response) {
                //Handle error
                console.dir(response);
                new Noty({
                    timeout: '6000',
                    type: 'error',
                    layout: 'topCenter',
                    theme: 'sunset',
                    text: 'Unable to register.',
                }).show();
            });
        
    });

} //End of checking for $registerFormContainer jQuery object