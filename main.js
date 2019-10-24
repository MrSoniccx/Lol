//botonsitos uapos
var BtnEj1 = document.querySelector('#BtnEj1')
var BtnEj2 = document.querySelector('#BtnEj2')
var BtnEj3 = document.querySelector('#BtnEj3')
var BtnEj4 = document.querySelector('#BtnEj4')
var BtnEj5 = document.querySelector('#BtnEj5')
var BtnEj6 = document.querySelector('#BtnEj6')
var BtnEj7 = document.querySelector('#BtnEj7')
var BtnEj8 = document.querySelector('#BtnEj8')
var BtnEj9 = document.querySelector('#BtnEj9')
var BtnEj10 = document.querySelector('#BtnEj10')
var BtnEj11 = document.querySelector('#BtnEj11')
var BtnEj12 = document.querySelector('#BtnEj12')

//textitos uapos

var title = document.querySelector('#Title')
var desc = document.querySelector('#Description')
var input1 = document.querySelector('#input1')
var input2 = document.querySelector('#input2')
var input3 = document.querySelector('#input3')
var input4 = document.querySelector('#input4')
var input5 = document.querySelector('#input5')
var text1 = document.querySelector('#text1')
var text2 = document.querySelector('#text2')
var text3 = document.querySelector('#text3')
var text4 = document.querySelector('#text4')
var text5 = document.querySelector('#text5')

//Form para responder

var BtnRes = document.querySelector('#BtnRes')
var BtnErase = document.querySelector('#BtnErase')
var Output = document.querySelector('#output')


//Esta variable me servira para identificar en cual ejercicio estoy :D
var i=0;


//Aqui cambiare los textos para que se vea bien chido pero da weba explicar cada uno asi que
//copy-paste!!!

BtnEj1.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=1;

})
BtnEj2.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=2;
})
BtnEj3.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=3;

})
BtnEj4.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=4;
})
BtnEj5.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=5;
})
BtnEj6.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=6;
})
BtnEj7.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=7;
})
BtnEj8.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=8;
})
BtnEj9.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=9;
})
BtnEj10.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=10;
})
BtnEj11.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=11;
})
BtnEj12.addEventListener('click', () => {
    //Activacion de textos uapos
    activacion();
    title.innerHTML = "Cambio !"
    desc.innerHTML = "weno quien tiene hambre"
    text1.innerHTML = "Inserte su nombre!"
    i=12;
})

//Yei acabe el copy-paste!!!!
//Ahora si Codigo de verdad >:D

BtnRes.addEventListener('click', () => {
    switch(i)
    {
        case 1://aqui empieza el 1ero

            break;
        case 2://aqui empieza el 2do

            break;
        case 3://aqui empieza el 3ero

            break;
        case 4://aqui empieza el 4to

            break;
        case 5://aqui empieza el 5to

            break;
        case 6://aqui empieza el 6to

            break;
        case 7://aqui empieza el 7mo

            break;
        case 8://aqui empieza el 8vo

            break;
        case 9://aqui empieza el 9no

            break;
        case 10://aqui empieza el 10mo

            break;
        case 11://aqui empieza el el 11vo

            break;
        case 12://aqui empieza el 12vo

            break;
    }
})


BtnErase.addEventListener('click', () => {
    Output.value = null
})

//activando lo tipico
function activacion(){
    document.getElementById("aveer").style.display = "block";
    document.getElementById("aveerr").style.display = "block";
    text1.style.display = "block";
    input1.style.display = "block";
}