export const FeedbackOptions = ({ goodIncr, neutralIncr, badIncr }) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button onClick={goodIncr}>Good</button>
      <button onClick={neutralIncr}>Neutral</button>
      <button onClick={badIncr}>Bad</button>
    </div>
  );
};
