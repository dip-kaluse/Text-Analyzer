import React,{useState} from 'react';

export default function TextBox(props) {
    const [text, setText] = useState("Enter A Text Here");
  

    const CnvUpperCase = () =>
    {   
        let newText =text.toUpperCase();
        setText(newText)
    }
    const fcsText = () =>{
        setText("")
    }
    const ClrText = ()=>{
        setText("")
    } 
    const updateState =(event) => {
        setText(event.target.value)
    }
    
  return <> <div>
      <h1 style={{background:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>{props.textHeading }</h1>
      <div style={{background:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} className="mb-3">
  <textarea style={{background:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} className="form-control" onFocus={fcsText} value={text} id="Textarea1" rows="8" onChange={updateState}></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={CnvUpperCase} >ConvertToUpperCase</button>
<button type="button" className="btn btn-primary mx-3" onClick={ClrText} >Clear Text</button>
  </div>
  <div className='container my3' style={{background:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}>
      <h1> Your Text Summary</h1>
      <p> {text.split(" ").length}words and {text.length}characters</p>
  </div>
  </>
}
 