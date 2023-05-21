let luckyNum;

console.log(luckyNum);

luckyNum = null;

luckyNum = "five";

console.log(luckyNum);

let a = 5;
let b = 4;

let result = a + b;

console.log(result);

document.getElementById("zdar").onclick = function(a) {ahoj()};

function ahoj(){
  console.log("ahoj");
  document.getElementById("zdar").innerHTML = "zdar";
}
//self made solution
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(time);

document.getElementById("time0").innerHTML = time;
//self made solution (using web)
function timeNow(){
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


  document.getElementById("time1").innerHTML = time;
  var t = setTimeout(function(){ timeNow() }, 1000);
}

timeNow();
//solution from web
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";


  if(hh > 12){
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;

   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time;
  var t = setTimeout(function(){ currentTime() }, 1000);

}

currentTime();
