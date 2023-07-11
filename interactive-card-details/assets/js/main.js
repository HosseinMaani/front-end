const card_name = document.querySelector(".card-name");
const card_number = document.querySelector(".card-number");
const card_expire = document.querySelector(".card-expire");
const card_cvc = document.querySelector(".card-cvc");
const YY_MM_CVC_error = document.querySelector(".errors");

const card_info = document.querySelector('.form-info');
const thanks = document.querySelector('.thanks');

let mm = "00";
let yy = "00";

function changeCardInfo(element, target) {
  switch (target) {
    case "name":
      card_name.innerHTML = element.value;
      break;
    case "cvc":
      card_cvc.innerHTML = element.value;
      break;
    case "number":
      card_number.innerHTML = fixCardFormat(element.value);
      break;
    case "mm":
      mm = element.value;
      break;
    case "yy":
      yy = element.value;
      break;
    default:
      break;
  }
  card_expire.innerHTML = mm.padEnd(2, "0") + "/" + yy.padEnd(2, "0");
}

function fixCardFormat(number) {
  let newFormat = "";
  if (number.length == 0) {
    return "0000 0000 0000 0000";
  }
  for (let i = 0; i < number.length; i++) {
    if (i % 4 == 0) newFormat += " ";
    newFormat += number[i];
  }
  return newFormat.padEnd(16, "");
}

function CheckValidity(element) {
  if (element.value == "" && element.id.startsWith("Exp")) {
    YY_MM_CVC_error.querySelector("#e1").classList.add("active");
    element.classList.add("show_error");
  } else if (element.value == "" && element.id.startsWith("cvc")) {
    YY_MM_CVC_error.querySelector("#e2").classList.add("active");
    element.classList.add("show_error");
  } else {
    YY_MM_CVC_error.querySelector("#e2").classList.remove("active");
    YY_MM_CVC_error.querySelector("#e1").classList.remove("active");
    element.classList.remove("show_error");
  }
}

function numberOnly(e) {
  var key = e.which || e.KeyCode;
  if (key >= 48 && key <= 57)
    return true;
  else return false;
}

function checkCardOnlyNumber(element){
    let val = element.value;
    for (let i = 0; i < val.length; i++) {
        code = val.charCodeAt(i);
        if(!(code > 47 && code < 58)){
            document.querySelector('.error').classList.add('active');
            element.classList.add('show_error');
            break;
        }
        else{
            document.querySelector('.error').classList.remove('active');
            element.classList.remove('show_error');

        }
        
    }
}

function processFroms(from) {
  if(from == 'thanks'){
    thanks.classList.toggle('hide');
    card_info.classList.toggle('hide');
  }
  else{
    card_info.classList.toggle('hide');
    thanks.classList.toggle('hide');
  }
}
