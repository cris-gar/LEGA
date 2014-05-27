/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var static = 0;
var i = 1;
var contadorParaRestarSemestres = 1;
var p = document.getElementById("llevar");

function llevar() {
    var singleValues = $("#cantidad_anos").val() * 2;
    localStorage.setItem("cantidadSemestre", singleValues);
    //alert(localStorage.getItem("cantidadSemestre"));
    document.getElementById('form_account').style.display = 'block';
}

function test() {
    var Semestre = document.getElementById('primerramo').value;
    //alert(Semestre);
    var static2 = localStorage.getItem("cantidadSemestre");

    if (static <= (parseInt(static2) - parseInt(contadorParaRestarSemestres))) {
        //document.write(JSON.stringify(db.get('test')));
        var test = {Ramo1: "" + Semestre + "", test2: "thing2", test3: [0, 2, 44]};
        localStorage.setItem(i, JSON.stringify(test));
        alert(JSON.stringify(test));
        //db.get(i, function(err, doc) {});
        contadorParaRestarSemestres++;
        i++;
        $('#form_account')[0].reset();
    }
    else {
        window.location.href = "./index.html";
    }
}

var registerBtn = document.getElementById('llevar');

registerBtn.addEventListener('click', function() {

    //alert('Push notifications not supported');
    llevar();

});

var llenar_malla = document.getElementById('llenar_malla');

llenar_malla.addEventListener('click', function() {

    //alert('Push notifications not supported');
    test();

});