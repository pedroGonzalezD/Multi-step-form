const ProgressBar = ({ step }) => {
  const stepPercentage = (step - 1) * 50;

  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${stepPercentage}%` }}></div>
      {[1, 2, 3].map((num) => (
        <div key={num} className={`progress-step ${step >= num ? 'active' : ''}`}></div>
      ))}
    </div>
  );
};

export default ProgressBar;

