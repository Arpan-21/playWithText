import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked.", text)
        let upTxt = text.toUpperCase();
        setText(upTxt)
        props.showAlert("Converted to Upper Case!" , "success")
    }
    const handleLowClick = () => {
        console.log("LowerCase was clicked.", text)
        let lowTxt = text.toLowerCase();
        setText(lowTxt)
        props.showAlert("Converted to Lower Case!" , "success")
    }
    const handleClrClick = () => {
        console.log("Clear text was clicked.", text)
        let lowTxt = ''
        setText(lowTxt)
        props.showAlert("Text Cleared!" , "success")
    }
    const handleCopy = () => {
        var copiedTxt = document.getElementById("myBox")
        copiedTxt.select()
        navigator.clipboard.writeText(copiedTxt.value)
        props.showAlert("Copied to the Clipboard!" , "success")
    }
    const handleOnChange = (event) => {
        console.log("handle changed.")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter your text');
    // text ="new text"; --->wrong way
    // setText = "new text"; --> correct way is to use setText to change the state
    return (
        <>
            <div className="container">
                <h1>{props.heading}: </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} rows="8"  />
                </div>
                <button  className="btn btn-outline-primary mx-2 my-2" onClick={handleUpClick}> Convert to UpperCase</button>
                <button  className="btn btn-outline-info mx-2 my-2" onClick={handleLowClick}> Convert to LowerCase</button>
                <button  className="btn btn-danger mx-2 my-2" onClick={handleClrClick}> Clear Text</button>
                <button  className="btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy Text</button>
            </div>
            <div className="container" >
                <h2 >Your text summary:</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} characters</p>
                <p> It will take {0.008 * text.split(" ").filter((element) => {return element.length !==0}).length} minutes to read the text.</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text: "Nothing to preview!"}</p>
            </div>
        </>
    )
}


// another way to get the heading in h1 tag ny using props...props means putting value in main App.js components ans using them as
// object in every components

//normal values will not be updated/rendered automatically
//hooks used for change the text.
// format example ---> const[text, setText] = useState('Enter text)---> this string is inital text value
//use hooks inside the function component
// to use handleclick funtionality we have to also use handleOnChange functionality
//whenever we make a event listener in react and in that we use a function we get a free object 'event' and use them to get the target value
//event.target.value( value is textarea's value)
