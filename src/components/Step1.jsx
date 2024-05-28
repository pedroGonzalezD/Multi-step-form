import { forwardRef } from 'react';

const Step1 = forwardRef(({ data, setData, next }, ref) => {
  return (
    <div ref={ref}>
      <h2>Register</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Enter your name"
        required
        id="name"
        name="name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder="example@gmail.com"
        required
      />
      <button type="button" onClick={next}>Continue</button>
    </div>
  );
});

Step1.displayName = 'Step1'

export default Step1;
