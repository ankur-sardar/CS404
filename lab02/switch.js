var b = require('bonescript');
b.pinMode('P9_40', b.INPUT);
b.pinMode('P9_12', b.OUTPUT);
setInterval(check,100);

function check(){
b.digitalRead('P9_12', checkButton);
}

function checkButton(x) {
  if(x.value == 1){
    b.digitalWrite('P9_12', b.HIGH);
  }
  else{
    b.digitalWrite('P9_12', b.LOW);
  }
}
