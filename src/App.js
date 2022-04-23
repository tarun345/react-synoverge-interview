import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [arr, setArr] = useState('');
  const [minSum, setMinSum] = useState('');
  const [maxSum, setMaxSum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArr = arr.split(',');

    const max = newArr.reduce((prev, curr) => {
      return +prev > +curr ? +prev : +curr;
    }, -Infinity);

    const min = newArr.reduce((prev, curr) => {
      return +prev < +curr ? +prev : +curr;
    }, Infinity);

    const sum = newArr.reduce((prev, curr) => {
      return +prev + +curr;
    }, 0);

    setMinSum(+sum - +max);
    setMaxSum(+sum - +min);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={arr}
          onChange={(e) => setArr(e.target.value)}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
      {minSum !== '' && <div>minimum sum: {minSum}</div>}
      {maxSum !== '' && <div>maximum sum: {maxSum}</div>}
    </div>
  );
}
