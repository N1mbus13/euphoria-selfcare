const bmiForm = document.getElementById("bmiForm");
const bmiResult = document.getElementById("bmiResult");

bmiForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (height > 0 && weight > 0) {
    const bmi = weight / ((height / 100) ** 2);
    const category = getBmiCategory(bmi);

    bmiResult.innerHTML = `
      <h3>Your BMI is: ${bmi.toFixed(2)}</h3>
      <p>Category: <strong>${category}</strong></p>
    `;
  } else {
    bmiResult.innerHTML = `<p style="color: red;">Please enter valid height and weight values.</p>`;
  }
});

function getBmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  else if (bmi < 24.9) return "Normal weight";
  else if (bmi < 29.9) return "Overweight";
  else return "Obese";
}
