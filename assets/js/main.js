console.log("Entro al main.js");

var aid=[],
    anombreInput=[],
    aapellidoLocal=[],
    aocupacionLocal=[],
    asueldoLocal=[];

    if (localStorage.getItem('aid_info')!=null)
    {
        aid=JSON.parse(localStorage.getItem('aid_info'));
        anombreInput=JSON.parse(localStorage.getItem('anombreInput_info'));
        aapellidoLocal=JSON.parse(localStorage.getItem('aapellidoLocal_info'));
        aocupacionLocal=JSON.parse(localStorage.getItem('aocupacionLocal_info'));
        asueldoLocal=JSON.parse(localStorage.getItem('asueldoLocal_info'));

    }

 var elementobotonregistrar=document.querySelector('#btnRegistrar');

 elementobotonregistrar.addEventListener('click',registrar);
 
const cid = document.getElementById("id");
const cnom = document.getElementById("nombreInput");
const cape = document.getElementById("apellidoLocal");
const cocp = document.getElementById("ocupacionLocal");
const csueldo = document.getElementById("sueldoLocal");


function registrar() {
var sid=document.querySelector('#id').value,
    snombreInput=document.querySelector('#nombreInput').value,
    sapellidoLocal=document.querySelector('#apellidoLocal').value,
    socupacionLocal=document.querySelector('#ocupacionLocal').value,
    ssueldoLocal=document.querySelector('#sueldoLocal').value;

    aid.push(sid); 
    anombreInput.push(snombreInput); 
    aapellidoLocal.push(sapellidoLocal); 
    aocupacionLocal.push(socupacionLocal); 
    asueldoLocal.push(ssueldoLocal); 

    localStorage.setItem('aid_info',JSON.stringify(aid));
    localStorage.setItem('anombreInput_info',JSON.stringify(anombreInput));
    localStorage.setItem('aapellidoLocal_info',JSON.stringify(aapellidoLocal));
    localStorage.setItem('aocupacionLocal_info',JSON.stringify(aocupacionLocal));
    localStorage.setItem('asueldoLocal_info',JSON.stringify(asueldoLocal));

    cid.value = "";
    cnom.value = "";
    cape.value = "";
    cocp.value = "";
    csueldo.value = "";
    

    llenartabla();

}



