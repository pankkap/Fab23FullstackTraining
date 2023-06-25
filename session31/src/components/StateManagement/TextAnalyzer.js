import React, { useState } from "react";

export default function TextAnalyzer(props) {
  const [text, setText] = useState("Enter Text here");
  // Destructring props
  let { heading } = props;

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const uppercaseFunction = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowercaseFunction = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearTextFunction = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <div>
      <h1 className="text-primary">{heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          rows="5"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button onClick={uppercaseFunction} className="m-2 btn btn-primary">
          Uppercase
        </button>
        <button onClick={lowercaseFunction} className="m-2 btn btn-primary">
          Lowercase
        </button>
        <button onClick={clearTextFunction} className="m-2 btn btn-primary">
          Clear Text
        </button>
        <h1>Your Text Summary</h1>
        <p>
          {text?text.split(" ").length:"0"} Words {text.length} Character
        </p>
        <h1>Preview </h1>
        <p>{text}</p>
      </div>
    </div>
  );
}
