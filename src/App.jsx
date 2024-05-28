import { useState, useRef, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Step1 from './components/Step1.jsx';
import Step2 from './components/Step2.jsx';
import Step3 from './components/Step3.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import './styles.css';

function App() {
  const [direction, setDirection] = useState('forward');
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: '',
    email: '',
    topics: []
  });

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const next = () => {
    setDirection('forward');
    setTimeout(() => setStep((prevStep) => prevStep + 1), 0);
  };

  const prev = () => {
    setDirection('backward');
    setTimeout(() => setStep((prevStep) => prevStep - 1), 0);
  };

  const submit = () => {
    alert('Form Submitted!');
    console.log(data);
  };

  const getCurrentRef = () => {
    if (step === 1) return step1Ref;
    if (step === 2) return step2Ref;
    if (step === 3) return step3Ref;
  };

  useEffect(() => {
    const node = getCurrentRef().current;
    if (node) {
      node.classList.add(`step-${direction}`);
      return () => {
        node.classList.remove(`step-${direction}`);
      };
    }
  }, [step, direction]);

  return (
    <div className="container">
        <ProgressBar step={step} />
      <TransitionGroup component={null}>
        <CSSTransition
          key={step}
          timeout={1000}
          classNames={`step-${direction}`}
          nodeRef={getCurrentRef()}
        >
          <div ref={getCurrentRef()}>
            {step === 1 && <Step1 ref={step1Ref} data={data} setData={setData} next={next} />}
            {step === 2 && <Step2 ref={step2Ref} data={data} setData={setData} next={next} prev={prev} />}
            {step === 3 && <Step3 ref={step3Ref} data={data} prev={prev} submit={submit} />}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
