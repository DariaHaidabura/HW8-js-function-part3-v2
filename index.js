console.log('------------- #4')
function number(a, b) {
  console.log(a);
  if(a < b) {
    a+= 1;
    number(a,b);
  }
  return;
}

number(1, 10)

console.log('------------- #5')
let button = document.querySelector('button');
let p = document.querySelector('p');
let isFull = true;
button.addEventListener('click', switchFormat);

function switchFormat() {
  isFull = !isFull;
}

setInterval(
  function() { 
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    p.innerText = isFull ? h + ":" + m + ":" + s : h + ":" + m;
  }, 500);


