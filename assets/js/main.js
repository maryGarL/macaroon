var alerta1= document.getElementById('valida1');
var alerta2= document.getElementById('valida2');
var admitir= ["maryel_565@hotmail.com","maryel@hotmail.com","laboratoria@laboratoria.la","gian@laboratoria.la", "papu@laboratoria.la"]
var nombre= document.getElementById('persona');
var contrasenha= document.getElementById('contra');


function validate(){
  if (!(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(nombre.value))||(nombre.value.length==0)){
    alerta1.innerHTML="La dirección de email es incorrecta."
    return false;

    for each (var i in admitir){
      if (nombre.value!=admitir[i]) {
        alerta1.innerHTML="La dirección de email es incorrecta."
      };
      return false;
    }

    }
  }
}
