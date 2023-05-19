import React,{useState} from 'react'

function Hooks1(){
    const [val,setVal]=useState()
    const [val1,setVal1] = useState(0)
    const[text,setText]=useState()

    const handleButtonClick=(type)=>{
        console.log('Button Clicked!',type)
        if(type==='Green')
        {
            setVal('Green')
        }
        else if(type==='Blue')
        {
            setVal('Blue')
        }
        else if(type==='Red')
        {
            setVal('Red')
        }
    }
    
    const handleClick=(type)=>{
        if(type==='Increment')
        {
            setVal1(val1+1)
        }
        else if(type==='Decrement' && val1>0)
        {
            setVal1(val1-1)
        }

    }
    
    const handletextChange=(e)=>{
        setText(e.target.value)
    }
    return(
        <div>
             <button type="submit" className="btn btn-primary" onClick={()=>handleButtonClick('Green')}>Green</button>
             <button type="submit" className="btn btn-primary" onClick={()=>handleButtonClick('Blue')}>Blue</button>
             <button type="submit" className="btn btn-primary" onClick={()=>handleButtonClick('Red')}>Red</button>
             <h2>
                COLOR: {val}
             </h2>
             <div>
                <button type="submit" className="btn btn-primary" onClick={()=>handleClick('Increment')}>Increment</button>
                <button type="submit" className="btn btn-primary" onClick={()=>handleClick('Decrement')}>Decrement</button>
             </div>
             <h1>
                Value: {val1>0?val1:0}
             </h1>
             <div>
             <input type="text" class="form-control" id="lname" placeholder="Name" onChange={(e)=>handletextChange(e)}/>
             </div>
             <h2>
                Name: {text}
             </h2>
        </div>
    )
}

export default Hooks1;