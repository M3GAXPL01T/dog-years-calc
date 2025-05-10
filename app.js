document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ageForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ✅ Prevent form from refreshing the page

    const nameInput = document.getElementById("nameInput").value.trim();
    const ageInput = parseInt(document.getElementById("ageInput").value);

    if (!nameInput || isNaN(ageInput) || ageInput < 1) {
      output.textContent = "❌ Please enter a valid name and a positive age.";
      return;
    }

    let earlyYears = 2;
    earlyYears *= 10.5;

    let laterYears = ageInput - 2;
    laterYears *= 4;

    let myAgeInDogYears = earlyYears + laterYears;
    let myName = nameInput.toLowerCase();

    output.textContent = `🐶 My name is ${myName}. I am ${ageInput} years old in human years which is ${myAgeInDogYears} years old in dog years.`;
  });
});
