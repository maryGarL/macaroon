var user= document.getElementById('alerta'); //mensaje de error  en span si no cumple las condiciones de email
var pass= document.getElementById('error');//mensaje de error  en span si no cumple las condiciones de password
var arr= ["maryel_565@hotmail.com","maryel@hotmail.com","laboratoria@laboratoria.la","gian@laboratoria.la", "papu@laboratoria.la"]
var nombre= document.getElementById('usuario'); //id del input email
var contrasenha= document.getElementById('contra');//id del input password
var confirmar = false;

function validate(){
  if (!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(nombre.value))||(nombre.value.length==0)||(nombre.value==null)){
    user.innerHTML="La dirección de email es incorrecta."
  return confirmar;}
  if((contrasenha.value.length==0)||(contrasenha.value==null)||(contrasenha.value.length<7)){
    pass.innerHTML="Escribe un paswword"
  return confirmar;}

  arr.forEach(function(elemento){
    if(elemento==nombre.value){
     confirmar = true;
   }else{
     user.innerHTML="La dirección de email es invalida"
   }
  });
  return confirmar;
  }
