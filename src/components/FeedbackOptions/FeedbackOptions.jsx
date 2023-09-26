export const FeedbackOptions = ({ GoodIncr, NeutralIncr, BadIncr }) => {
  return (
    <div>
      <h1>Please leave feedbaak</h1>
      <button onClick={GoodIncr}>Good</button>
      <button onClick={NeutralIncr}>Neutral</button>
      <button onClick={() => BadIncr()}>Bad</button>
    </div>
  );
};
