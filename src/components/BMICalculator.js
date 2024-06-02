import { useRef, useState } from "react";

function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [isShow, setIsShow] = useState(false);

  function handleCalculate() {
    if (!height || !weight) return;

    setIsShow((isShow) => (isShow ? isShow : !isShow));
    setBmi(weight / (height * height));

    setHeight("");
    setWeight("");
  }

  return (
    <>
      <Input name="height" value={height ? height : ""} setValue={setHeight} />

      <Input name="weight" value={weight ? weight : ""} setValue={setWeight} />

      <button onClick={() => handleCalculate()}>Click to Calculate BMI</button>

      {isShow && <Info bmi={bmi} />}
    </>
  );
}

function Info({ bmi }) {
  const bmiRes = bmi * 10000;
  let result;

  if (bmiRes < 18.5) {
    result = `😥 Underweight`;
  } else if (bmiRes >= 18.5 && bmiRes <= 25) {
    result = `😀 Normal Weight`;
  } else if (bmiRes > 25 && bmiRes <= 30) {
    result = `🤔 Overweight`;
  } else if (bmiRes > 30) {
    result = `😐 Obese`;
  }

  return (
    <div className="info">
      <p>
        Your BMI: <strong>{bmiRes.toFixed(2)}</strong>
      </p>
      <p>
        Result: <span className="highlight">{result}</span>
      </p>
    </div>
  );
}

function Input({ name, value, setValue }) {
  return (
    <div className="box">
      <label htmlFor={name}>Enter your {name} (cm):</label>
      <input
        id={name}
        type="text"
        value={value}
        onChange={(e) => setValue(+e.target.value)}
      />
    </div>
  );
}

export default BMICalculator;
