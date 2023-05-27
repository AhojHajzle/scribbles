let vic = "('RPC/vic.png')";
let def = "('RPC/def.png')";
let draw = "('RPC/GID.jpg')";

let lmnt = document.getElementById("RPC");



document.getElementById("Rock").onclick = function(){
  let ran = Math.floor(Math.random() * 3)
  console.log(ran);
  switch (ran) {
    case 0:
      console.log("victory")
      lmnt.style.backgroundImage = "url" + vic;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Scissors";
      break;
    case 1:
      console.log("draw")
      lmnt.style.backgroundImage = "url" + draw;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Rock";
      break;
    case 2:
      console.log("defeat")
      lmnt.style.backgroundImage = "url" + def;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Paper";
      break;
    default:

  }
}


document.getElementById("Paper").onclick = function(){
  let ran = Math.floor(Math.random() * 3)
  console.log(ran);
  switch (ran) {
    case 0:
      console.log("defeat")
      lmnt.style.backgroundImage = "url" + def;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Scissors";
      break;
    case 1:
      console.log("victory")
      lmnt.style.backgroundImage = "url" + vic;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Rock";
      break;
    case 2:
      console.log("draw")
      lmnt.style.backgroundImage = "url" + draw;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Paper";
      break;
    default:

  }
}


document.getElementById("Scissors").onclick = function(){
  let ran = Math.floor(Math.random() * 3)
  console.log(ran);
  switch (ran) {
    case 0:
      console.log("draw")
      lmnt.style.backgroundImage = "url" + draw;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Scissors";
      break;
    case 1:
      console.log("defeat")
      lmnt.style.backgroundImage = "url" + def;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Rock";
      break;
    case 2:
      console.log("victory")
      lmnt.style.backgroundImage = "url" + vic;
      lmnt.style.backgroundRepeat = "no-repeat";
      lmnt.style.backgroundSize = "256px";
      lmnt.style.backgroundPosition = "center";
      document.getElementById("final").innerHTML = "Paper";
      break;
    default:

  }
}

/*let rnd = 0;

document.getElementById("Rock").onclick = function(){
  let rnd = Math.floor(Math.random() * 3);
  console.log(rnd);

  if(rnd == 0){
    window.alert("win");
  }
  else{
    window.alert(":(");
  }
}
*/
