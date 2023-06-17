const bill_amount = document.querySelector("#bill_amount");
const cash_given = document.querySelector("#cash_given");
const check_button = document.querySelector("#check_button");
const errormessage = document.querySelector("#errormessage");
const numberofnotes = document.querySelectorAll(".numberofnotes");


const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

check_button.addEventListener("click", function validateBillAndCashAmount() {
  hideErrorMessage();
  if (parseInt(bill_amount.value) > 0) {

    if (parseInt(cash_given.value) >= parseInt(bill_amount.value)) {
      let amountToBeReturned =
        parseInt(cash_given.value) - parseInt(bill_amount.value);
      console.log(amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
      showErrorMessage(
        "The provided cash must at least be equal to the bill amount. "
      );
    }
  } else {
    showErrorMessage("The bill amount should be greater than 0");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < denominations.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / denominations[i]);
    amountToBeReturned %= denominations[i];
    numberofnotes[i].innerText = numberOfNotes;
  }
}

function hideErrorMessage() {
  errormessage.style.display = "none";
}

function showErrorMessage(message) {
  errormessage.style.display = "block";
  errormessage.innerText = message;
}