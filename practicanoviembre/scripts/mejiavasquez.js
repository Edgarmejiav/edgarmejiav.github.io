window.onload = () => {
    let flag = 0;
    document.getElementById("hora").addEventListener("click", hora);
    document.getElementById("lectura").addEventListener("click", lectura);
    document.getElementById("lectura2").addEventListener("click", lectura2);
    document.getElementById("lectura3").addEventListener("click", lectura3);
    document.getElementById("lectura4").addEventListener("click", lectura4);

    document.getElementById("turismo").addEventListener("click", turismo);

    let html = document.getElementById("carouselExampleControls").innerHTML;
    let img = document.getElementById("img").innerHTML;
    document.getElementById("carouselExampleControls").innerHTML = " ";

    function turismo() {
        if (flag == 0) {
            document.getElementById("img").innerHTML = " ";
            document.getElementById("carouselExampleControls").innerHTML = html;
            flag = 1;
        } else {
            document.getElementById("img").innerHTML = img;
            document.getElementById("carouselExampleControls").innerHTML = "";
            flag = 0;
        }
    }

    function hora() {
        var f = new Date();
        if (flag == 0) {
            document.getElementById("h").innerHTML = f;

            flag = 1;
        } else {
            document.getElementById("h").innerHTML = "";
            flag = 0;
        }
    }

    function lectura() {
        if (flag == 0) {
            document.getElementById("l1").innerHTML = "Lectura completada";
            flag = 1;
        } else {
            document.getElementById("l1").innerHTML = "Lectura de 3 min";
            flag = 0;
        }
    }

    function lectura2() {
        if (flag == 0) {
            document.getElementById("l2").innerHTML = "Lectura completada";
            flag = 1;
        } else {
            document.getElementById("l2").innerHTML = "Lectura de 2 min";
            flag = 0;
        }
    }

    function lectura3() {
        if (flag == 0) {
            document.getElementById("l3").innerHTML = "Lectura completada";
            flag = 1;
        } else {
            document.getElementById("l3").innerHTML = "Lectura de 3 min";
            flag = 0;
        }
    }

    function lectura4() {
        if (flag == 0) {
            document.getElementById("l4").innerHTML = "Lectura completada";
            flag = 1;
        } else {
            document.getElementById("l4").innerHTML = "Lectura de 5 min";
            flag = 0;
        }
    }



}