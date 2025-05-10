document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  let myName = document.getElementById("nameInput").value.trim().toLowerCase();
  let myAge = parseInt(document.getElementById("ageInput").value);

  if (!myName || isNaN(myAge) || myAge < 1) {
    document.getElementById("output").textContent = "Please enter a valid name and age.";
    return;
  }

  let earlyYears = 2;
  earlyYears *= 10.5;

  let laterYears = myAge - 2;
  laterYears *= 4;

  let myAgeInDogYears = earlyYears + laterYears;

  document.getElementById("output").textContent =
    `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`;
});
