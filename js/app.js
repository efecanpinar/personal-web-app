const name = document.getElementById('name');
const formGroupName = document.getElementsByClassName('form-group')[0];
const formGroupEmail = document.getElementsByClassName('form-group')[1];
const formGroupSubject = document.getElementsByClassName('form-group')[2];
const formGroupMessage = document.getElementsByClassName('form-group')[3];
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const clearBtn = document.getElementsByClassName('btn btn-default');
const submitBtn = document.getElementsByClassName('btn btn-primary submit');
const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
  validation(e);


});


function showAlert(type, message) {
  const alertDanger = document.createElement("div");
  alertDanger.className = "alert alert-danger";
  formGroupMessage.appendChild(alertDanger);
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

  if (name.value === "") {
    e.preventDefault();
    showAlert("danger", "İsim alanı boş bırakılamaz.");
  }

  if (email.value === "") {
    e.preventDefault();
    showAlert("danger", "Email alanı boş bırakılamaz.");
  }
  if (mailRegex.test(email.value) == false) {
    e.preventDefault();
    showAlert("danger", "Format hatalı bir mail.");
  }

  if (subject.value === "") {
    e.preventDefault();
    showAlert("danger", "Konu alanı boş bırakılamaz.");
  }

  if (message.value === "") {
    e.preventDefault();
    showAlert("danger", "Mesaj alanı boş bırakılamaz.");
  }
}








