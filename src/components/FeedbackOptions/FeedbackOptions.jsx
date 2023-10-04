export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      {options.map(name => (
        <button key={name} onClick={() => onLeaveFeedback(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};
