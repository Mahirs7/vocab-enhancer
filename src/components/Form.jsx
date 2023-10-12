import React from 'react';
import './Form.css';

const Form = ({ input, onInputUpdate, onEnhanceText, onGoBack }) => {

  const handleInputChange = (e) => {
    const newInput = e.target.value;
    onInputUpdate(newInput);
  };

  const handleEnhanceText = () => {
    onEnhanceText();
  };

  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <div className="Form">
      <textarea 
        className="text-area"
        placeholder="Start writing your paragraph..."
        cols={100}
        rows={20}
        onChange={handleInputChange}
        value={input}
      />
      <div className="buttons">
        <button className="enhancing-button" onClick={handleEnhanceText}>
          Translate
        </button>
        <button className="back-button" onClick={handleGoBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Form;
