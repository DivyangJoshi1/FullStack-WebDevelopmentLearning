import React ,{useState}from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter your text here");
    // text='hey'  --> wrong way to change the state. we have to use setText function every time for changing it.

    const handleOnClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("Changed");
        setText(event.target.value)
    }
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
            <button className="btn btn-primary"style={{margin: 10 + 'px'}} onClick={handleOnClick}>Convert to uppercase</button>
        </div>
    </div>
  )
}
