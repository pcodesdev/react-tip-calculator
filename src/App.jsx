
import { useState } from 'react';
import './App.css'
import Bill from './components/Bill'
import ServiceReview from './components/ServiceReview'
import Total from './components/Total';
import Reset from './components/Reset';

function App() {
  const [inputValue, setInputValue] = useState('')
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)

  const tip = inputValue * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setInputValue('');
    setPercentage1(0);
    setPercentage2(0);
}

  return (
    <>
      <Bill inputData={inputValue} setInputValue={setInputValue} />
      <ServiceReview option={percentage1} onSetPercentage={setPercentage1}>
        How did you like the service?
      </ServiceReview>
      <ServiceReview option={percentage2} onSetPercentage={setPercentage2}>
        How did your friend like the service?
      </ServiceReview>

      {inputValue > 0 && (
        <>
          {" "}
          <Total inputData={inputValue} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </>
  );
}

export default App
