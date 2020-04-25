var email = document.getElementById('username');
var password = document.getElementById('password');
var formGroupMail = document.getElementsByClassName('input-group')[2];
var form = document.getElementById('login-form');

form.addEventListener("submit", (e) => {
    validation(e);


});

function showAlert(type, message) {
    const alertDanger = document.createElement("div");
    alertDanger.className = "alert alert-danger";
    form.appendChild(alertDanger);
    alertDanger.textContent = message;
};

window.setTimeout(
    setInterval(
        (e) => {
            var alerts = document.getElementsByClassName('alert-danger');
            if (alerts.length != 0) {
                for (var i = 0; i < alerts.length; i++) {
                    alerts[i].remove();
                }
            }
        }, 3000));

var mailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
function validation(e) {
    

    if (email.value == null || email.value === "") {
        showAlert("danger", "Email alanı boş bırakılamaz.");
        e.preventDefault();
    }
    if (mailRegex.test(email.value) == false) {
        showAlert("danger", "Format hatalı bir mail.");
    }
    if (password.value == null || password.value === "") {
        showAlert("danger", "Şifre alanı boş bırakılamaz.");
        e.preventDefault();
    }
}