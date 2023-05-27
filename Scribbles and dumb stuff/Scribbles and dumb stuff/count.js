let count = 0;

document.getElementById("sub").onclick = function(){
  count-=1;
  document.getElementById("labelCount").innerHTML = count;
}

document.getElementById("reset").onclick = function(){
  count=0;
  document.getElementById("labelCount").innerHTML = count;
}

document.getElementById("add").onclick = function(){
  count+=1;
  document.getElementById("labelCount").innerHTML = count;
}
