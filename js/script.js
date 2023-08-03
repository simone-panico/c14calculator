// Anfang des Skripts
document.getElementsByName("VCL")[0].value = 10;
document.getElementsByName("VCLH")[0].value = -12;
let resultat = 0;
let wechselBool = true;
let numbers1 = JSON.parse(localStorage.getItem("numbers")) || [];
document.getElementById("ohneHoch").style.display = "none";
//document.getElementById("local").innerHTML = localStorage.getItem("numbers");
history(numbers1);

addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculation();
  }
});

// Calculation
function calculation() {
  if (wechselBool == true) {
    var VCT;
    var VCTH;
    var VCL;
    var VCLH;

    VCT = document.getElementsByName("VCT")[0].value;
    VCTH = document.getElementsByName("VCTH")[0].value;
    VCL = document.getElementsByName("VCL")[0].value;
    VCLH = document.getElementsByName("VCLH")[0].value;

      let VCT_bool = false;
      let VCL_bool = false;

      if (VCTH != "") {
        //console.log("Hat Wert");
        VCT_bool = true;
      } else {
        //console.log("Hat keinen Wert");
        VCT_bool = false;
      }

      if (VCLH != "") {
        //console.log("Hat Wert");
        VCL_bool = true;
      } else {
        //console.log("Hat keinen Wert");
        VCL_bool = false;
      }

      if (VCT_bool == false && VCL_bool == false) {
        resultat = Math.round((-Math.log(VCT / VCL) * 5730) / Math.log(2));
      } else if (VCT_bool == true && VCL_bool == false) {
        resultat = Math.round(
          (-Math.log(Math.pow(VCT, VCTH) / VCL) * 5730) / Math.log(2)
        );
      } else if (VCT_bool == false && VCL_bool == true) {
        resultat = Math.round(
          (-Math.log(VCT / Math.pow(VCL, VCLH)) * 5730) / Math.log(2)
        );
      } else if (VCT_bool == true && VCL_bool == true) {
        resultat = Math.round(
          (-Math.log(Math.pow(VCT, VCTH) / Math.pow(VCL, VCLH)) * 5730) /
            Math.log(2)
        );
      }
      if (resultat > 0) {
        document.getElementById("output").innerHTML = resultat + "&nbsp;Jahre";
        addNumber(resultat);
      } else {
        document.getElementById("output").innerHTML = "Ungültig";
      }
  } else if (wechselBool == false) {
    var VCTO;
    var VCLO;

    VCTO = document.getElementsByName("VCTO")[0].value;
    VCLO = document.getElementsByName("VCLO")[0].value;

    
      resultat = Math.round((-Math.log(VCTO / VCLO) * 5730) / Math.log(2));
      if (resultat > 0) {
        document.getElementById("output").innerHTML = resultat + "&nbsp;Jahre";
        addNumber(resultat);
      } else {
        document.getElementById("output").innerHTML = "Ungültig";
      }
      
  }
}



// Rechner Wechsel
function wechsel() {
  if (wechselBool == false) {
    document.getElementById("ohneHoch").style.display = "none";
    document.getElementById("mitHoch").style.display = "block";
    wechselBool = true;
  } else {
    document.getElementById("ohneHoch").style.display = "block";
    document.getElementById("mitHoch").style.display = "none";
    document.getElementsByName("VCL")[0].value = 10;
    document.getElementsByName("VCLH")[0].value = -12;
    wechselBool = false;
  }
}




// Local Storage
function addNumber(resultat) {
  let numbers = JSON.parse(localStorage.getItem("numbers")) || [];

  if (numbers.length >= 5) {
    // Remove the oldest number
    numbers.shift();
  }

  // Add the new number to the end
  numbers.push(resultat);

  // Store the updated numbers in localStorage
  localStorage.setItem("numbers", JSON.stringify(numbers));
  //document.getElementById("local").innerHTML = numbers; 
  history(numbers);
}




// History
function history(numbers) {
  switch (numbers.length) {
    case 1:
      document.getElementById("result1").innerHTML = numbers[0];
      document.getElementById("result2").innerHTML = numbers[1];
      document.getElementById("result3").innerHTML = numbers[2];
      document.getElementById("result4").innerHTML = numbers[3];
      document.getElementById("result5").innerHTML = numbers[4];
      notUndefined();
      break;

    case 2:
      document.getElementById("result1").innerHTML = numbers[1];
      document.getElementById("result2").innerHTML = numbers[0];
      notUndefined();
      break;

    case 3:
      document.getElementById("result1").innerHTML = numbers[2];
      document.getElementById("result2").innerHTML = numbers[1];
      document.getElementById("result3").innerHTML = numbers[0];
      notUndefined();
      break;

    case 4:
      document.getElementById("result1").innerHTML = numbers[3];
      document.getElementById("result2").innerHTML = numbers[2];
      document.getElementById("result3").innerHTML = numbers[1];
      document.getElementById("result4").innerHTML = numbers[0];
      notUndefined();
      break;

    case 5:
      document.getElementById("result1").innerHTML = numbers[4];
      document.getElementById("result2").innerHTML = numbers[3];
      document.getElementById("result3").innerHTML = numbers[2];
      document.getElementById("result4").innerHTML = numbers[1];
      document.getElementById("result5").innerHTML = numbers[0];
      notUndefined();
      break;
      
    default:
      notUndefined();
      break; 
}

function notUndefined() {
  if (document.getElementById("result1").innerHTML == "undefined") {
    document.getElementById("result1").innerHTML = " ";
  }
  if (document.getElementById("result2").innerHTML == "undefined") {
    document.getElementById("result2").innerHTML = " ";
  }
  if (document.getElementById("result3").innerHTML == "undefined") {
    document.getElementById("result3").innerHTML = " ";
  }
  if (document.getElementById("result4").innerHTML == "undefined") {
    document.getElementById("result4").innerHTML = " ";
  }
  if (document.getElementById("result5").innerHTML == "undefined") {
    document.getElementById("result5").innerHTML = " ";
  }
}

}
