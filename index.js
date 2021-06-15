const plans = {
  basic: {
    monthly: 19.99,
    annually: 199.99,
  },
  professional: {
    monthly: 24.99,
    annually: 249.99,
  },
  master: {
    monthly: 39.99,
    annually: 399.99,
  },
};

const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

document.querySelector("#basic").innerText = formatCurrency(
  plans.basic.annually
);
document.querySelector("#professional").innerText = formatCurrency(
  plans.professional.annually
);
document.querySelector("#master").innerText = formatCurrency(
  plans.master.annually
);

document.querySelector("#billing-option").addEventListener("click", (e) => {
  const checked = e.target.checked;
  const basicPlan = checked ? plans.basic.monthly : plans.basic.annually;
  document.querySelector("#basic").innerText = formatCurrency(basicPlan);

  const professionalPlan = checked
    ? plans.professional.monthly
    : plans.professional.annually;
  document.querySelector("#professional").innerText =
    formatCurrency(professionalPlan);

  const masterPlan = checked ? plans.master.monthly : plans.master.annually;
  document.querySelector("#master").innerText = formatCurrency(masterPlan);
});
