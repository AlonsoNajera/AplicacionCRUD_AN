document.querySelector('#btnRegistrar').addEventListener('click',save);
drawFriendsTable();

const IDInput = document.getElementById("txtid");
const nombreInput = document.getElementById("txtnombreInput");
const apellidoInput = document.getElementById("txtapellidoLocal");
const ocupacionInput = document.getElementById("txtocupacionLocal");
const sueldoInput = document.getElementById("txtsueldoLocal");


function save(){
    const id = IDInput.value;
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const ocupacion = ocupacionInput.value;
    const sueldo = sueldoInput.value;


    var sID=document.querySelector('#txtid').value;
     snombre=document.querySelector('#txtnombreInput').value;
     sapellido=document.querySelector('#txtapellidoLocal').value;
     socupacion=document.querySelector('#txtocupacionLocal').value;
     ssueldo=document.querySelector('#txtsueldoLocal').value;

    addFriend (sID,snombre,sapellido,socupacion,ssueldo);

  

    IDInput.value = "";
    nombreInput.value = "";
    apellidoInput.value = "";
    ocupacionInput.value = "";
    sueldoInput.value = "";

    drawFriendsTable();

}


function drawFriendsTable() {

var list=getFriendList(),
    tbody=document.querySelector('#tblInfo tbody');
    
tbody.innerHTML='';

    for (var i=0; i<list.length; i++){
        var row=tbody.insertRow(i);
        var idcell=row.insertCell(0),
            nombrecell=row.insertCell(1),
            apellidocell=row.insertCell(2),
            ocupacioncell=row.insertCell(3),
            sueldocell=row.insertCell(4),
            Eliminar=row.insertCell(5);


            idcell.innerHTML=list[i].id;
            nombrecell.innerHTML=list[i].name;
            apellidocell.innerHTML=list[i].apellido;
            ocupacioncell.innerHTML=list[i].ocupacion;
            sueldocell.innerHTML=list[i].sueldo;

           

            var inputEliminar=document.createElement('input');
            inputEliminar.value=list[i].id;

            Eliminar.appendChild(inputEliminar);


    tbody.appendChild(row);

    }

}