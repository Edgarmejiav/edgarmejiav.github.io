"use strict";

window.onload = function () {
  document.getElementById("extraer").addEventListener("click", extraer);
  document.getElementById("changeColor").addEventListener("click", changeColor);
  var flag = 0;
  var div1 = document.getElementById("azul");

  function changeColor() {
    if (flag == 0) {
      cambiarclase();
      flag = 1;
    } else {
      quitarclase();
      flag = 0;
    }
  }

  ;

  cambiarclase = function cambiarclase() {
    var azul = document.getElementById("azul");

    for (var i = 0; i < azul.getElementsByTagName("label").length; i++) {
      azul.getElementsByTagName("label")[i].setAttribute("class", "labRed");
    }

    var azul1 = document.getElementById("azul1");

    for (var _i = 0; _i < azul1.getElementsByTagName("label").length; _i++) {
      azul1.getElementsByTagName("label")[_i].setAttribute("class", "labRed");
    }

    var rojo = document.getElementById("rojo");

    for (var _i2 = 0; _i2 < rojo.getElementsByTagName("label").length; _i2++) {
      rojo.getElementsByTagName("label")[_i2].setAttribute("class", "");
    }

    document.getElementById("changeColor").setAttribute("class", "btn");
  };

  quitarclase = function quitarclase() {
    var azul = document.getElementById("azul");

    for (var i = 0; i < azul.getElementsByTagName("label").length; i++) {
      azul.getElementsByTagName("label")[i].setAttribute("class", "");
    }

    var azul1 = document.getElementById("azul1");

    for (var _i3 = 0; _i3 < azul1.getElementsByTagName("label").length; _i3++) {
      azul1.getElementsByTagName("label")[_i3].setAttribute("class", "");
    }

    var rojo = document.getElementById("rojo");

    for (var _i4 = 0; _i4 < rojo.getElementsByTagName("label").length; _i4++) {
      rojo.getElementsByTagName("label")[_i4].setAttribute("class", "labRed");
    }

    document.getElementById("changeColor").setAttribute("class", "btn2");
  };

  function extraer() {
    var getName = document.getElementById("name").value;
    var getCadena = getName.split(" ");
    var apaterno = document.getElementById("aPaterno").value = getCadena[0];
    var aMaterno = document.getElementById("aMaterno").value = getCadena[1];

    for (var i = 0; i < getCadena.length; i++) {
      if (i >= 2) {
        var nombre = document.getElementById("nombre").value += getCadena[i] + " ";
      }
    }

    document.getElementById("longuitud").value = getCadena[0].length + getCadena[1].length;
    var f = new Date();
    f = document.getElementById("fecha").value;
    meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    var mes_name = f.split("-");
    var mes = parseInt(mes_name[1] - 1);
    document.getElementById("edad").value = "".concat(calcularEdad(f), " a\xF1os");
    document.getElementById("mes").value = meses[mes];
  }

  calcularEdad = function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || m === 0 && hoy.getDate() < cumpleanos.getDate()) {
      edad--;
    }

    return edad;
  };
};