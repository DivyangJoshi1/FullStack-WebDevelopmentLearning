import React , {useState} from "react";

export default function Textarea(props) {

    const handleOnClick=()=>{
        console.log("clicked"+text)
        setText("Clicked")
        let lw = text.toUpperCase()
        setText(lw)
    }
    const handleOnClickl=()=>{
        console.log("clicked"+text)
        setText("Clicked")
        let lw = text.toLowerCase()
        setText(lw)
    }
    const handleOnChange=(event)=>{
        console.log("changed")
        setText(event.target.value);
    }

    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
    }

    const handleExtraSpaces=()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
    }

    const handleCopy=()=>{
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text,setText] = useState('Enter your text here');
    // text = "new Textx"; wrong way to change the state
    // setText("newText") correct way to change the state
  return (
    <div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
                 <button className="btn btn-primary my-3" onClick={handleOnClick}>Convert to Uppercase</button>
                 <button className="btn btn-primary mx-3" onClick={handleOnClickl}>Convert to Lowercase</button>
                 <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
                 <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                 <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
             </div>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Summary of your text</h1>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Enter something in the textarea to preview"}</p>

        </div>
    </div>
  );
}
