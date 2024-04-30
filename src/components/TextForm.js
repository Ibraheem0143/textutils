import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("UPPERCASE");
        setText("You have clicked on handleupclicked")

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Upper Case!", "Success");
    }

    const handleloClick =()=>{
        // console.log("UPPERCASE");
        setText(" You have clicked on handleupclicked")

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lower Case!", "Success");
    }   
    
    const handleClearClick =()=>{
        
        let newText = "";
        setText(newText);
        props.showAlert(" Text Cleared!", "Success")
    }   

    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => { 
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied!", "Success")

    }

    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert(" Extra spaces are removed!", "Success")

    }



    const [text, setText] = useState('');

    return (
        <>
            <div className = "container">
                <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
                <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes are Required to Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>

            </div>
            </>
    )
}
