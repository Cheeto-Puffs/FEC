import { useState } from 'react';

const Accordion = ({ question, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>{question}</div>
        <div onClick={() => setIsActive(!isActive)}>
          <i
            className={
              isActive ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'
            }
          ></i>
        </div>
      </div>

      <div className={isActive ? 'expanded' : 'collapsed'}>
        {isActive && children}
      </div>
    </div>
  );
};

export default Accordion;
