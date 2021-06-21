var arr="#e27d94"; //Default hex

document.getElementById("display").innerHTML = arr;

function random() {
  num='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  document.getElementById("display").innerHTML =num;
  document.body.style.background = num;
  arr=num;  //Save value to a global variable
}

function copy(){
  var dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = arr;
      dummy.select();

      document.execCommand("copy");
      document.body.removeChild(dummy);
      
}
