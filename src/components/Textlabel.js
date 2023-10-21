import React, { useState } from 'react';

export default function Textlabel() {
    const [text, setText] = useState("write your text here");
    console.log(text);
    const changeText=(event) => {
       setText(event.target.value);

    }
    const onSub=()=> {
        let a=text.toUpperCase();
        setText(a);

    }

  return (
    <>
    <div>
      
<div className="mb-3">
    <div className="container my-4">
        <h1>Enter your text to analyse</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="13" value={text} onChange={changeText}></textarea>
  <button type="submit" className="btn btn-primary mb-3 my-3" onClick={onSub}>Convert Upercase</button>
  </div>
</div>
    </div>
    </>
  )
}
