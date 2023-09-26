export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h1>Statictics</h1>
      <ul>
        <li>good : {good}</li>
        <li>neutral : {neutral}</li>
        <li>bad : {bad}</li>
        <li>total : {total}</li>
        <li>positive feedback : {positivePercentage}%</li>
      </ul>
    </div>
  );
};
