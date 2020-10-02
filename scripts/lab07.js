window.onload = () => {
    document.getElementById("extraer").addEventListener("click", extraer);
    document.getElementById("changeColor").addEventListener("click", changeColor);

    let flag = 0;
    var div1 = document.getElementById("azul")

    function changeColor() {

        if (flag == 0) {
            cambiarclase();
            flag = 1;
        } else {
            quitarclase();
            flag = 0;
        }
    };

    cambiarclase = () => {
        var azul = document.getElementById("azul");
        for (let i = 0; i < azul.getElementsByTagName("label").length; i++) {
            azul.getElementsByTagName("label")[i].setAttribute("class", "labRed");
        }
        var azul1 = document.getElementById("azul1");
        for (let i = 0; i < azul1.getElementsByTagName("label").length; i++) {
            azul1.getElementsByTagName("label")[i].setAttribute("class", "labRed");
        }
        var rojo = document.getElementById("rojo");
        for (let i = 0; i < rojo.getElementsByTagName("label").length; i++) {
            rojo.getElementsByTagName("label")[i].setAttribute("class", "");
        }
        document.getElementById("changeColor").setAttribute("class", "btn");

    }

    quitarclase = () => {

        var azul = document.getElementById("azul");
        for (let i = 0; i < azul.getElementsByTagName("label").length; i++) {
            azul.getElementsByTagName("label")[i].setAttribute("class", "");
        }
        var azul1 = document.getElementById("azul1");
        for (let i = 0; i < azul1.getElementsByTagName("label").length; i++) {
            azul1.getElementsByTagName("label")[i].setAttribute("class", "");
        }
        var rojo = document.getElementById("rojo");
        for (let i = 0; i < rojo.getElementsByTagName("label").length; i++) {
            rojo.getElementsByTagName("label")[i].setAttribute("class", "labRed");
        }
        document.getElementById("changeColor").setAttribute("class", "btn2");


    }


    function extraer() {
        let getName = document.getElementById("name").value;
        let getCadena = getName.split(" ");
        let apaterno = document.getElementById("aPaterno").value = getCadena[0];
        let aMaterno = document.getElementById("aMaterno").value = getCadena[1];
        for (let i = 0; i < getCadena.length; i++) {
            if (i >= 2) {
                let nombre = document.getElementById("nombre").value += getCadena[i] + " ";
            }
        }
        document.getElementById("longuitud").value = getCadena[0].length + getCadena[1].length;

        let f = new Date();
        f = document.getElementById("fecha").value;
        meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        let mes_name = f.split("-");
        let mes = parseInt(mes_name[1] - 1);

        document.getElementById("edad").value = `${calcularEdad(f) } años`;
        document.getElementById("mes").value = meses[mes];
    }

    calcularEdad = (fecha) => {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        return edad;
    }
}