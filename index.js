let checkbox = document.querySelectorAll(".check-box");
let range = document.querySelectorAll(".range");
let btnLaunch = document.getElementById("button__launch");
let btnOk = document.getElementById("button__ok");
let txtPass = document.getElementById("password");
let imgCohete = document.getElementById('rocket')
let activarFunClickCheckbox = false;
let detenerIntervalo //esta variable es llamada es la funcion para detener el coehete



/*Funcion cuando que se activa cuando se apreta el btn of*/
btnOk.addEventListener('click', function (){
    if (txtPass.value === 'TrustNo1') { //verifica que la contraseña sea correcta
        removeDisabled(checkbox)//llama a la función
        removeDisabled(range)
        txtPass.setAttribute('disabled', 'true');//agrega el atributo de para que no se pueda acceder mas
        btnOk.setAttribute('disabled', 'true');
        activarFunClickCheckbox = true;//variable para activar la casilla de verificacion
    }else {
        alert('Usuario No autorizado');
        }
})


/*funcion que se activa al presionar el boton de lanzamiento*/
btnLaunch.addEventListener("click", function (){
    alert('despegando')
    detenerIntervalo = setInterval(moverCohete,20,); //llama a la función para mover el cohete y le asigna el intervalo de tiempo que lo va a llamar

})


/*Funcion que toma cuando se hace click dentro de la caja de texto*/
function clickCheckbox(){
    if (activarFunClickCheckbox === true) { // si está activada la funcion activa las cajas y el ranGo
        let checkOK = controlCheck(); //llama a la funcion para controlar que esten activadas las 6 casillas
        let rangeOk = controlRango(); // llama a la fun para controlar que este en 100 todos los input de rango
        if (checkOK ==='true' && rangeOk === 'true') { // si ambos da true entra
            btnLaunch.style.transform = 'scale(1.10)'
            btnLaunch.removeAttribute('disabled'); //activa el boton de lanzamiento
            /*addDisabled(checkbox); //desactiva las caja de check y rango
            addDisabled(range);*/
          /*  activarFunClickCheckbox = false //vuelve a poner en falso la variable para ya no entre a la función cada vez que se da click*/
        }
    }
}

/*funcion para mover el cohete*/
function moverCohete() {
    let desplazar = obtenerPositionCohete() //llamna a la funcion y lo que retorna lo asigna a una variable
    if (desplazar < 1000) { //si el cohete llega a los 100px llama a la función lo detiene
        desplazar += 5; //cada vez que el intervalo de tiempo llama a la función le agrega un px
        imgCohete.style.bottom = desplazar + 'px'; //agrega la nueva medida al estilo botton, esto hace que de efecto de movimiento cada vez que es llamada la funcion
    }else {
        clearInterval(detenerIntervalo)
    }
    console.log(desplazar)//es para ver cual es la nueva posicion de cohete
}

/*Funcion que devuelve la poosicion donde se encuentra el cohete*/
function obtenerPositionCohete() {
    let positionCoheteString = getComputedStyle(imgCohete).getPropertyValue('bottom') /*Accedo al valor de bottom en css devuelve string*/
    let positionCohete = ''
    for (let i = 0; i < positionCoheteString.length - 2; i++) { // para acceder eliminar el px que tiene la cadena
        positionCohete += (positionCoheteString[i]);// asigno el valor que necesito de la posición
    }
    let desplazar = parseInt(positionCohete) //convierto la cadena de caracteres en un entero
    return desplazar
}

/*Funcion que controla que todas las cajas estén en check*/
function controlCheck(){
    let controlDeCheck = 0;
    for (let i = 0; i < checkbox.length; i++) {  /* cada vez que entra al bucle controla que las casillas esten todas en true*/
        let check = checkbox[i].checked.valueOf();
        check === true ? controlDeCheck += 1 : controlDeCheck = 0;/*si hay alguna casilla desactivada vuelve el contador a 0*/
    }
    return controlDeCheck === 6 ? 'true' : 'false'; /*si el contador es igual a la cantidad de casillas devuelve true, si no false*/
}
/*Funcion que controla que todas las cajas de control de rango estén en 100*/
function controlRango(){
    let controlDeRango = 0;
    for (let i = 0; i < range.length; i++){
        let numRango = range[i].value
        numRango === '100' ? controlDeRango += 1 : controlDeRango = 0;/*esta funcion controla que el rango este en 100*/
    }
    return  controlDeRango === 5 ? 'true' : 'false';
}

/*Remueve el atributo de desactivado del array*/
function removeDisabled(array){
    for (let i = 0; i < array.length; i++) {
        array[i].removeAttribute('disabled');
    }
}
/*agrega el atributo de desactivado en un array*/
function addDisabled(array){
    for (let i = 0; i < array.length; i++) {
        array[i].setAttribute('disabled', 'true');
    }
}