function seleccionarBandera(){

    let objBandera = document.getElementById("banderas");
    let strBandera = objBandera.value;

    console.log(strBandera);

    let objArticule1 = document.getElementById("ejercicio1");
    let objArticule2 = document.getElementById("ejercicio2");
    let objArticule3 = document.getElementById("ejercicio3");
    let objArticule4 = document.getElementById("ejercicio4");
    let objArticule5 = document.getElementById("ejercicio5");

    objArticule1.style.display = "none";
    objArticule2.style.display = "none";
    objArticule3.style.display = "none";
    objArticule4.style.display = "none";
    objArticule5.style.display = "none";

    if ( strBandera == "Guatemala" ){
        objArticule1.style.display = "block";
    }
    else if ( strBandera == "Niger, India" ){
        objArticule2.style.display = "block";
    }
    else if ( strBandera == "Paises Bajos, Francia" ){
        objArticule3.style.display = "block";
    }
    else if ( strBandera == "Suecia" ){
        objArticule4.style.display = "block";
    }
    else if ( strBandera == "Suiza" ){
        objArticule5.style.display = "block";
    }

}