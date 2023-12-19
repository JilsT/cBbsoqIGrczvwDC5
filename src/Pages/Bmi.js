import React, { useState } from "react";
import "./Bmi.css";

const defaultValues = {
    weight: 0,
    height: 0
};

const Bmi = () => {
    const [inputs, setInputs] = useState(defaultValues);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        let w = inputs.weight;
        let h = inputs.height;
        const error = document.querySelector('#error');
        const result = document.querySelector('#result');
        const bmi = Math.round((w / (h * h)).toFixed(2) * 10) / 10;
        if (h <= 0.1 || h > 3.0) {
            error.innerHTML = "Please input valid values between 0.1 and 3.0!"
        } else if (bmi < 18.5) {
            error.innerHTML ="";
            result.innerHTML =
                `<h3>You're Underweight!</h3> <p>BMI Value is ${bmi}</p>`

        } else if (bmi < 24.9) {
            error.innerHTML ="";
            result.innerHTML =
                `<h3>You're Fit!</h3> <p>BMI Value is ${bmi}</p>`

        } else if (bmi < 29.9) {
            error.innerHTML ="";
            result.innerHTML =
                `<h3>You're Overweight!</h3> <p>BMI Value is ${bmi}</p>`

        } else {
            error.innerHTML ="";
            result.innerHTML =
                `<h3>You're Obese!</h3> <p>BMI Value is ${bmi}</p>`
        }
        event.preventDefault();
    }
    return (
        <>
            <div className="bmiPage">
                <div className="form">

                    <form onSubmit={handleSubmit}>
                        <div className="formElem">

                            <label className="labelForm">Enter your weight(in Kilograms):
                                <input
                                    className="inputForm"
                                    type="number"
                                    name="weight"
                                    min="1"
                                    max="300"
                                    value={inputs.weight || ""}
                                    onChange={handleChange}
                                />
                            </label>
                            <label className="labelForm">Enter your height(in Metres):
                                <input
                                    className="inputForm"
                                    type="number"
                                    name="height"
                                    value={inputs.height || ""}
                                    onChange={handleChange}
                                />
                            </label>
                            <button type="submit" className="submitBtn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <p id="error"></p>
                <h3 id="result">Results</h3>
                <button className="submitBtn"><a href="/">
                    Back to Home!
                    </a>
                    </button>
            </div>
        </>
    )
}

export default Bmi;