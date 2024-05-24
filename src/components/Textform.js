import React, {useState} from 'react'

export default function Textform(props) {
    const HandleUpClick = ()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase!", "success")
    }

    const HandleDownClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to lowercase!", "success")
    }

    const HandleClearClick = ()=>{
        setText('')
        props.showAlert("Text Cleared!", "success")
    }

    const HandleCopyClick = ()=>{
        // var text = document.getElementById('exampleFormControlTextarea1');
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied!", "success")
    }

    const HandleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success")
    }

    const HandleOnChange = (event)=>{
        setText(event.target.value)
    }
  const [text, setText] = useState('Enter Text here');
  return (
    <>
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <label for="exampleFormControlTextarea1" className="form-label">
            <h1 className='mb-2'>
            {props.heading}
            </h1>
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={HandleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white', color: props.mode==='dark'?'white':'black'}} rows="10"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{color:props.mode==='light'?'black':props.mode==='dark'?'white':'black'}} onClick={HandleUpClick} >Convert to Uppercase</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{color:props.mode==='light'?'black':props.mode==='dark'?'white':'black'}} onClick={HandleDownClick}>Convert to Lowercase</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{color:props.mode==='light'?'black':props.mode==='dark'?'white':'black'}} onClick={HandleClearClick}>Clear Text</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{color:props.mode==='light'?'black':props.mode==='dark'?'white':'black'}} onClick={HandleCopyClick}>Copy Text</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" style={{color:props.mode==='light'?'black':props.mode==='dark'?'white':'black'}} onClick={HandleExtraSpaces}>Remove Extra Spaces</button>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Nothing to Preview here!"}</p>

        </div>
</>
  )
}
