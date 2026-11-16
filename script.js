
const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");
const themeBtn = document.querySelector(".theme-btn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  });
}

const service = document.querySelector("#service");
const price = document.querySelector("#price");

if (service && price) {
  service.addEventListener("change", () => {
    price.textContent = service.options[service.selectedIndex].dataset.price || "";
  });
}

const form = document.querySelector("#bookingForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const phone = document.querySelector("#phone").value.trim();
    const serviceValue = service.value;
    const message = document.querySelector("#formMessage");

    if (phone.length < 10 || !/^[0-9+ -]+$/.test(phone)) {
      message.textContent = "Please enter a valid phone number.";
      message.style.color = "#b9667b";
      return;
    }

    if (!serviceValue) {
      message.textContent = "Please select a service.";
      message.style.color = "#b9667b";
      return;
    }

    message.textContent = "Appointment request sent successfully.";
    message.style.color = "#4d8b61";
    form.reset();
    price.textContent = "";
  });
}
