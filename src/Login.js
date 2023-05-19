import React, { useState } from 'react';
import img from './grass.jpg'
import './login.css'

function Login(){ //rfce for function
  const [text,setText] = useState()
  const [text1,setText1] = useState()

  const handletextChange=(e,type)=>{
    if(type==='Email')
    {
      setText(e.target.value)
    }
    if(type==='Pass')
    {
      setText1(e.target.value)
    }
    console.log(text,text1)
  }

  const handleClick=(e)=>{
    let userName=localStorage.getItem('Name')
    let password=localStorage.getItem('Password')
    if(text===userName && text1===password)
    {
      console.log("Success!")
      alert("Login Successful!")
    }
    else
    {
      console.log("Failed!")
      alert("Login Failed!")
    }

  }
    return(
        <div>
             <div class="row">
            <div class="col-md-6" style={{height:'100%'}}>
            <img src={img} className='img'/>
            </div>
            <div class="col-md-6" style={{height: '100%', backgroundColor: 'rgb(154, 238, 154)'}}>
            </div>
        </div>
        <div className="div1">
            <span align="center"><h1>LOGIN</h1></span>
        <form classsName='form1'>
            <div className="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: '90%', margin: 'auto'}} onChange={(e)=>handletextChange(e,'Email')}/>
              {text}
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" style={{width: '90%', margin: 'auto'}} onChange={(e)=>handletextChange(e,'Pass')}/>
              {text1}
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Remember Me</label>
              <a href="#" class="link-success" style={{marginLeft: '205px'}}>Forgot Password</a>
            </div>
            <input type="submit" class="btn btn-primary" style={{marginLeft: '100px', marginTop: '20px', color: 'white', backgroundColor: 'rgb(66, 214, 66)', width: '300px', borderRadius: '60px', fontSize: '20px'}} onClick={(e)=>handleClick(e)}/>
        </form>
            </div>
        </div>
    )
}

export default Login;