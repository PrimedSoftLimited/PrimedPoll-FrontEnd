function _(str) {
    return document.querySelector(str);
}

// Sign Up User

const sign_up =_("#sign_up");



if (sign_up) {

    sign_up.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = _("#ec_email").value;
        const pwd = _("#ec_password").value;
        const cpwd = _("#ec_confirm_password").value;



        const userData = {
            email: email,
            password: pwd,
            password_confirmation: cpwd
        }

        const sign_upUrl = "http://13.59.91.161:8000/api/register";
        console.log("what did you do");


        axios.post(sign_upUrl, userData).then(function (response) {

            console.log("I can't hear you")
            console.log(response.data)


          /*  const token = response.data.token

            localStorage.setItem('primepoll_token', token);

            setTimeout(function () {

                location.replace("completeRegistration.html");

            }, 2000);*/


        }).catch(function (err) {
            console.log(err.response)
        })

    })

}