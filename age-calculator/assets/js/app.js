const current_dateTime = new Date();
// input
var day_input = document.getElementById("day");
var month_input = document.getElementById("month");
var year_input = document.getElementById("year");

// label
var day_label = document.getElementById("lday");
var month_label = document.getElementById("lmonth");
var year_label = document.getElementById("lyear");

// span error
var day_error = document.getElementById("day_error");
var month_error = document.getElementById("month_error");
var year_error = document.getElementById("year_error");

// display field
var day_display = document.getElementById("day_display");
var month_display = document.getElementById("month_display");
var year_display = document.getElementById("year_display");

// from error
var form_error = document.getElementById("from_error");

function deleteInvalidState(params) {
  day_input.classList.remove("invalid");
  day_label.classList.remove("invalid");
  day_error.innerHTML = "";

  month_input.classList.remove("invalid");
  month_label.classList.remove("invalid");
  month_error.innerHTML = "";

  year_input.classList.remove("invalid");
  year_label.classList.remove("invalid");
  year_error.innerHTML = "";
}

function validateForm() {
  deleteInvalidState();
  let validate_status = true;
  let day_val = day_input.value;
  let month_val = month_input.value;
  let year_val = year_input.value;

  if (day_val == "") {
    day_input.classList.add("invalid");
    day_label.classList.add("invalid");
    day_error.innerHTML = "the field is requierd";
    validate_status = false;
  }
  if (month_val == "") {
    month_input.classList.add("invalid");
    month_label.classList.add("invalid");
    month_error.innerHTML = "the field is requierd";
    validate_status = false;
  }
  if (year_val == "") {
    year_input.classList.add("invalid");
    year_label.classList.add("invalid");
    year_error.innerHTML = "the field is requierd";
    validate_status = false;
  }

  if (!validate_status) {
    return false;
  }

  if (day_val > 31) {
    day_input.classList.add("invalid");
    day_label.classList.add("invalid");
    day_error.innerHTML = "must be valid day";
    validate_status = false;
  }
  if (month_val > 12) {
    month_input.classList.add("invalid");
    month_label.classList.add("invalid");
    month_error.innerHTML = "must be valid month";
    validate_status = false;
  }
  if (year_val > current_dateTime.getFullYear()) {
    year_input.classList.add("invalid");
    year_label.classList.add("invalid");
    year_error.innerHTML = "must be in the past";
    validate_status = false;
  }
  return validate_status;
}

function Calc() {
  if (validateForm()) {
    let d1 = day_input.value;
    let m1 = month_input.value;
    let y1 = year_input.value;

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var date = current_dateTime
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    let age_year = y;
    let age_month = m;
    let age_day = d;

    day_display.innerHTML = age_day;
    year_display.innerHTML = age_year;
    month_display.innerHTML = age_month;
  } else {
    day_display.innerHTML = "- - ";
    year_display.innerHTML = "- - ";
    month_display.innerHTML = "- - ";
  }
}
