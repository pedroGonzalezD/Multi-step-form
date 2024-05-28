import { forwardRef } from 'react';

const Step2 = forwardRef(({ data, setData, next, prev }, ref) => {
  const toggleTopic = (topic) => {
    setData((data) => ({
      ...data,
      topics: data.topics.includes(topic)
        ? data.topics.filter((t) => t !== topic)
        : [...data.topics, topic]
    }));
  };

  return (
    <div ref={ref}>
      <h2>Which topics are you interested in?</h2>
      <div className="topics">
        {['Software Development', 'User Experience', 'Graphic Design'].map((topic) => (
          <button
            key={topic}
            type="button"
            className={data.topics.includes(topic) ? 'selected' : ''}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
      <div className="button-group">
        <button type="button" onClick={prev}>Back</button>
        <button type="button" onClick={next}>Continue</button>
      </div>
    </div>
  );
});

Step2.displayName = 'Step2'

export default Step2;
