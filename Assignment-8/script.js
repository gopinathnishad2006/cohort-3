const addtransactionbtn = document.querySelector(".addtransactionbtn");
const addtransaction = document.querySelector(".addtransaction");
const closeform = document.querySelector(".closeform");
const overlay = document.querySelector(".overlay");
const savetransaction = document.querySelector(".savetransaction");
const alltransactions = document.querySelector(".alltransactions");
const input1 = document.querySelector("#selecttrans");
const input2 = document.querySelector("#desctrans");
const input3 = document.querySelector("#amttrans");
const input4 = document.querySelector("#datetrans");
const input5 = document.querySelector("#categorytrans");
const form = document.querySelector("form")

const ui = (obj) => {
  alltransactions.innerHTML = "";
  alltransactions.innerHTML += `<h4>${obj.select}</h4>
              <h4>${obj.description}</h4>
              <h4>${obj.amount}</h4>
              <h4>${obj.date}</h4>
              <h4>${obj.category}</h4>`;
};

addtransactionbtn.addEventListener("click", () => {
  addtransaction.style.display = "block";
  overlay.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeform.addEventListener("click", () => {
  addtransaction.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let select = input1.value;
  let description = input2.value;
  let amount = input3.value;
  let date = input4.value;
  let category = input5.value;

  let obj = {
    select,
    description,
    amount,
    date,
    category,
  };

  ui(obj);
  form.reset();
});
