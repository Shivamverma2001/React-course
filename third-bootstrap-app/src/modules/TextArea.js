import React, { useState } from 'react'

export default function TextArea(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
        console.log("Lowercase was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        console.log("Clear text");
        setText("")
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText]= useState("Enter text here");
    return (
        <>
        <div className='container'>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary mx-1">UpperCase</button>
            <button onClick={handleLowClick} className="btn btn-primary mx-1">LowerCase</button>
            <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
