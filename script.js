function find() {
  event.preventDefault();
  let num = document.getElementById("num");
  let ans = document.getElementById("ans");

  if (num.value == "") {
    alert("Please enter a number");
    // ans.innerHTML = "";
    num.focus();
    return;
  }

  let n = parseInt(num.value);
  let msg = "";

  if (n % 2 == 0)
    msg = "Number is Even";
  else
    msg = "Number is Odd";
  ans.innerHTML = msg;

}