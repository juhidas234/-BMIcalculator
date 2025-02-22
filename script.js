document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // Corrected form selection
    const results = document.querySelector("#results"); // Fixed selector

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Corrected spelling of height and weight
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);

        // Validate input
        if (!height || height <= 0 || isNaN(height)) {
            results.innerHTML = `<p style="color: red;">Please enter a valid height.</p>`;
            return;
        }

        if (!weight || weight <= 0 || isNaN(weight)) {
            results.innerHTML = `<p style="color: red;">Please enter a valid weight.</p>`;
            return;
        }

        // Corrected BMI Calculation
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Display BMI result
       
        if (results<18.6){
            results.innerHTML=`<p>Your BMI is underweigth <strong>${bmi}</strong></p>`;
        }
        else if(18.6<results<24.9){
            results.innerHTML=`<p>Your BMI is in normal range <strong>${bmi}</strong></p>`;
        }
        else if(results>24.9){
            results.innerHTML=`<p>Your BMI is overweigth <strong>${bmi}</strong></p>`;
        }
    });
});
