import { forwardRef } from 'react';

const Step3 = forwardRef(({ data, prev, submit }, ref) => {
  return (
    <div ref={ref}>
      <h2>Summary</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Topics:</strong> {data.topics.join(', ')}</p>
      <div className="button-group">
        <button type="button" onClick={prev}>Back</button>
        <button type="button" onClick={submit}>Confirm</button>
      </div>
    </div>
  );
});

export default Step3;
