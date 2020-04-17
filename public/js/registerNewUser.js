window.onload = function () {
  getLocation();
};

function formSubmit() {
  var alertMsgBody = document.getElementById("alertMsgForRegister");
  var alertMsgDiv = document.createElement("div");
  alertMsgDiv.className = "alert alert-success MessageDiv";
  alertMsgDiv.setAttribute("role", "alert");

  var alertMsgHeader = document.createElement("p");
  alertMsgHeader.className = "alert-heading";
  alertMsgHeader.innerHTML = "Success";

  alertMsgDiv.appendChild(alertMsgHeader);
  alertMsgBody.appendChild(alertMsgDiv);
}

function removeAlertMsg() {
  var alertMsgBody = document.getElementById("alertMsgForRegister");
  var alertMsgDiv = document.getElementsByClassName("MessageDiv")[0];
  if (alertMsgDiv != null) alertMsgBody.removeChild(alertMsgDiv);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
