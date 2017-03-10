var alerta1= document.getElementById('alerta');
var alerta2= document.getElementById('error');
var admitir= ["maryel_565@hotmail.com","maryel@hotmail.com","laboratoria@laboratoria.la","gian@laboratoria.la", "papu@laboratoria.la"]
var nombre= document.getElementById('usuario');
var contrasenha= document.getElementById('contra');


function validate(){
  if (!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(nombre.value))||(nombre.value.length==0)){
    alerta.innerHTML="La dirección de email es incorrecta."
    return false;

    }

})
