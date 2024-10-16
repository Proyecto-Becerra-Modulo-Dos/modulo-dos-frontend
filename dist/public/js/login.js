"use strict";

var input = document.querySelector("#url").value;
var url1 = localStorage.setItem("url", input);
var url = localStorage.getItem("url");
var boton = document.querySelector(".boton").addEventListener("click", function (e) {
  e.preventDefault();
  var usuario = document.querySelector("#usuario").value;
  var contrasena = document.querySelector("#contrasena").value;
  fetch(url + "/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuario: usuario,
      contrasena: contrasena
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    sessionStorage.setItem("token", data.body.token);
    fetch(url + "/users/historial-sesion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: data.body.id,
        ip: data.body.ip,
        platform: data.body.platform
      })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    })["catch"](function (err) {
      return console.log(err);
    });
  })["catch"](function (err) {
    return console.log(err);
  });
});