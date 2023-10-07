let currentStatus = "";

function display(event) {
  if (document.getElementById("answer").innerHTML == "") {
    const text = event.currentTarget.innerText;
    currentStatus += text;
    document.getElementById("current").innerHTML = currentStatus;
  } else {
    const text = event.currentTarget.innerText;
    currentStatus = document.getElementById("answer").innerHTML; 
    document.getElementById("answer").innerHTML = "";
    currentStatus += text;
    document.getElementById("current").innerHTML = currentStatus;
  }
}

function clears() {
  document.getElementById("current").innerHTML = "";
  document.getElementById("answer").innerHTML = "";
  currentStatus = "";
}

function calculate() {
  let firstNum = "";
  let x = currentStatus;
  let curSum = 0;
  let tempList = [];
  let symList = [];
  

  for(let i = 0; i < x.length; i++){
    if (x[i] === "+" || x[i] === "-" || x[i] === "x" || x[i] === "/" ){
      tempList.push(parseFloat(firstNum));
      firstNum = "";
      symList.push(x[i]);
    }
    else {
        firstNum += x[i];
        if(i === x.length-1){
        tempList.push(parseFloat(firstNum));
        firstNum = "";
        }
    }
  }

  // first loop to take care of * and /
  let i = 0; 
   while (i < symList.length){
     
    if (symList[i] === "x" ){
      curSum = parseFloat(tempList[i]) * parseFloat(tempList[i+1]);
      tempList.splice(i,2, parseFloat(curSum));
      symList.splice(i,1);
    }
    else if (symList[i] === "/" ){
      curSum = parseFloat(tempList[i]) / parseFloat(tempList[i+1]);
      tempList.splice(i,2, parseFloat(curSum));
      symList.splice(i,1);
      } 
     else {
       i++;
     }
  }
   let j = 0; 
   while ( j < symList.length){
    if (symList[j] === "+" ){
      curSum = parseFloat(tempList[j]) + parseFloat(tempList[j+1]);
      tempList.splice(j,2, parseFloat(curSum));
      symList.splice(j,1);
    }
    else if (symList[j] === "-" ){
      curSum = parseFloat(tempList[j]) - parseFloat(tempList[j+1]);
      tempList.splice(j,2, parseFloat(curSum));
      symList.splice(j,1);
    } 
     else {
       j++;
     }
  }
  document.getElementById("answer").innerHTML = curSum;
}
