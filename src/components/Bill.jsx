
import './styles.css'

// eslint-disable-next-line react/prop-types
function Bill({inputValue, setInputValue}) {
  // console.log(inputValue)
  return (
    <div className="bill">
      <p>How much was the bill?</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <div></div>
    </div>
  );
}

export default Bill