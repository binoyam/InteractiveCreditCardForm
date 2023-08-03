/* inputs */
const form = document.getElementById("form");
const cardName = document.getElementById("name");
const cardNum = document.getElementById("card-number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");
const continueBtn = document.getElementById("finish");

/* outputs to be displayed */
const numDisp = document.querySelector(".dis-card-num");
const nameDisp = document.querySelector(".dis-name");
const monthDisp = document.querySelector(".dis-month");
const yearDisp = document.querySelector(".dis-year");
const cvcDisp = document.querySelector(".dis-cvc");
const completed = document.querySelector(".completed");

/*error state variables*/
const cardNumError = document.querySelector(".card-error");
const dateError = document.querySelector(".date-error");
const cvcError = document.querySelector(".cvc-error");

/*checker*/
let x = 0;


/* functions */
form.addEventListener("submit", submitForm);


function submitForm(e) {
    e.preventDefault();
    checkCardNumber();
    checkName();
    checkDate();
    checkCvc();
    if (x === 4) {
        form.style.display = 'none';
        completed.style.display = 'block';
    }
}

function checkName() {
    if (cardName.value) {
        nameDisp.innerText = cardName.value;
        cardName.classList.remove('error');
        x++;
    }
    else {
        cardName.classList.add('error');
    }
}

function checkCardNumber() {
    const cardNumFormat = /^\d{13}$/;

    if (cardNumFormat.test(cardNum.value)) {
        numDisp.innerText = cardNum.value;
        cardNumError.style.display = 'none';
        cardNum.classList.remove('error');
        x++;
    }
    else {
        cardNum.classList.add('error');
        cardNumError.style.display = 'block';
    }
}

function checkDate() {
    if (month.value === "" && year.value === "") {
        month.classList.add('error');
        year.classList.add('error');
        dateError.style.display = 'block';
    }
    else if (month.value !== "" && year.value === "") {
        dateError.style.display = 'block';
        year.classList.remove('error');
        month.classList.remove('error');
        year.classList.add('error');
    }
    else if (year.value !== "" && month.value === "") {
        dateError.style.display = 'block';
        year.classList.remove('error');
        month.classList.add('error');
    }
    else if (month.value !== "" && year.value !== "") {
        dateError.style.display = 'none';
        year.classList.remove('error');
        month.classList.remove('error');
        monthDisp.innerText = month.value;
        yearDisp.innerText = year.value;
        x++;
    }

}
function checkCvc() {
    const cvcFormat = /\d{3}/;
    if (cvcFormat.test(cvc.value) && cvc.value.length === 3) {
        cvcDisp.innerText = cvc.value;
        cvcError.style.display = 'none';
        cvc.classList.remove('error');
        x++;
    }
    else if (cvc.value === "") {
        cvcError.style.display = 'block';
        cvc.classList.add('error');
    }
    else if (cvc.value.length !== 3) {
        cvc.classList.add('error');
        cvcError.style.display = 'none';
        cvcDisp.innerText = "000";
    }
}

continueBtn.addEventListener('click', newForm);


function newForm(){
    x = 0;
    completed.style.display ='none';
    form.style.display = 'block';
    form.reset();
}