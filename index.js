let checkbox = document.querySelectorAll(".check-box");
let range = document.querySelectorAll(".range");
let btnLaunch = document.getElementById("button__launch");
let btnOk = document.getElementById("button__ok");
let txtPass = document.getElementById("password");
let imgCohete = document.getElementById('rocket');
let activarFunClickCheckbox = false;


btnOk.addEventListener('click', function (){
    if (txtPass.value === 'TrustNo1') {
        removeDisabled(checkbox)
        removeDisabled(range)
        txtPass.setAttribute('disabled', 'true');
        btnOk.setAttribute('disabled', 'true');
        activarFunClickCheckbox = true;
    }else {
        alert('Usuario No autorizado');
        }
})



function clickCheckbox(){
    if (activarFunClickCheckbox === true) {
        let checkOK = controlCheck();
        let rangeOk = controlRango();
        if ((checkOK && rangeOk) === 'true') {
            alert('Cohete listo')
            btnLaunch.removeAttribute('disabled');
            addDisabled(checkbox);
            addDisabled(range);
            activarFunClickCheckbox = false
        }
    }
}

btnLaunch.addEventListener("click", function (){
    alert('despegando')

})


function controlCheck(){
    let controlDeCheck = 0;
    for (let i = 0; i < checkbox.length; i++) {
        let check = checkbox[i].checked.valueOf();
        check === true ? controlDeCheck += 1 : controlDeCheck = 0;
    }
    return controlDeCheck === 6 ? 'true' : 'false';
}

function controlRango(){
    let controlDeRango = 0;
    for (let i = 0; i < range.length; i++){
        let numRango = range[i].value
        numRango === '100' ? controlDeRango += 1 : controlDeRango = 0;
    }
    return  controlDeRango === 5 ? 'true' : 'false';
}

function removeDisabled(array){
    for (let i = 0; i < array.length; i++) {
        array[i].removeAttribute('disabled');
    }
}

function addDisabled(array){
    for (let i = 0; i < array.length; i++) {
        array[i].setAttribute('disabled', 'true');
    }
}