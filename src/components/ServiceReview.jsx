import "./styles.css";

function ServiceReview({ option, onSetPercentage, children }) {
  console.log(option);
  return (
    <div className="service">
      <p>{children}</p>
      <select
        value={option}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatified (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default ServiceReview;
