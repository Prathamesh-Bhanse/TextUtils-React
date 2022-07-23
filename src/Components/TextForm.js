import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
const click1 = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
}

const click2 = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
}

const clear = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success");
}

const capitalize = () =>{
    let newText = text.charAt(0).toUpperCase()+text.slice(1);
    setText(newText);
    props.showAlert("Text Capitalized","success");
}

const reverse = () =>{   
    let newText = text.split(" ").reverse().join();
    setText(newText);
    props.showAlert("Text Splitted","success");
}

const newLine = () =>{  
    let newText = text.replaceAll('.',"\n");
    setText(newText);
    props.showAlert("Entered New Line","success");
}

const copy = () => {
    var text = document.getElementById('box');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
}
const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces","success");
}


const edit = (event) =>{
    // console.log("You can Edit Your Text Now");
   setText(event.target.value);
}

    const [text,setText] = useState("");

  return (<>
    
     <div className="container" style = {{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="box" rows="8" value={text} onChange={edit} style = {{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}}></textarea>
        </div>   
        <button className="bt btn-primary mx-1" onClick={click1}>Convert To UpperCase</button> 
        <button className="bt btn-primary mx-1" onClick={click2}>Convert To LowerCase</button> 
        <button className="bt btn-primary mx-1" onClick={clear}>Clear Text</button> 
        <button className="bt btn-primary mx-1" onClick={capitalize}>Capitalize Text</button> 
        <button className="bt btn-primary mx-1" onClick={reverse}>Reverse Text</button>
        <button className="bt btn-primary mx-1" onClick={newLine}>New Line</button>
        <button className="bt btn-primary mx-1" onClick={copy}>Copy Text</button>
        <button className="bt btn-primary mx-1" onClick={extraSpace}>Remove Extra Space</button>
    </div>
    <div className="container" style = {{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length} Minutes are required to read</p>
        <h2>Preview</h2>
        <p>  {text.length>0?text:"Enter Something in text Box above to preview it here"}  </p> </div>
  </>
  )
}

TextForm.propTypes = {
    heading : PropTypes.string
}

TextForm.defaultProps = {
    heading : "Enter your text below "
}