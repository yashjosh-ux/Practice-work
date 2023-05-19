import React, { useState } from "react";
import img from './grass.jpg'
import './register.css'

function Register(props){
  console.log('Login',props)
  const [text,setText] = useState();
  const [text1,setText1] = useState();
  const [text2,setText2] = useState();
  const [text3,setText3] = useState();

  const handletextChange=(e,type)=>{
    if(type==='FirstName')
    {
      setText(e.target.value)
      // console.log(text)
    }
    if(type==='LastName')
    {
      setText1(e.target.value)
      // console.log(text1)
    }
    if(type==='Mobile')
    {
      setText2(e.target.value)
      // console.log(text2)
    }
    if(type==='Password')
    {
      setText3(e.target.value)
      // console.log(text3)
    }
    console.log(text,text1,text2,text3)
  }
  const handleLogin=()=>{
    props.isLogin()
  }
  const handleChange=()=>{
    localStorage.setItem('Name',text)
    localStorage.setItem('Password',text3)
  }
    return(
        <div>
            <div className="row">
            <div className="col-md-6" style={{height:'100%'}}>
            <img src={img} className="img"></img>
            <div className="div2">Create your account here</div>
            </div>
            <div class="col-md-6" style={{border: '1px solid white', height:'100%'}}>
                  <form className="row-g-3">
                    <div className="col-md-6">
                        <label for="fname" className="form-label">First Name</label> <div>{text}</div>
                        <input type="text" className="form-control" id="fname" placeholder="First Name" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}} onChange={(e)=>handletextChange(e,'FirstName')}/>
                      </div>
                      <div class="col-md-6">
                        <label for="lname" class="form-label">Last Name</label> <div>{text1}</div>
                        <input type="text" class="form-control" id="lname" placeholder="Last Name"style={{backgroundColor: 'lightgrey', borderRadius: '20px'}} onChange={(e)=>handletextChange(e,'LastName')}/>
                      </div>
                      <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="abc@example.com" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}}/>
                      </div>
                      <div class="col-md-12">
                        <label for="mob" class="form-label">Mobile Number</label> <div>{text2}</div>
                        <input type="text" class="form-control" id="mob" placeholder="Enter Mobile Number" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}} onChange={(e)=>handletextChange(e,'Mobile')}/>
                      </div>
                      <div class="col-md-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}}/>
                      </div>
                      <div class="col-md-4">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}}/>
                      </div>
                      <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label><br></br>
                        <select id="inputState" class="form-select" style={{height: '30px', width:'200px', backgroundColor: 'lightgrey', borderRadius: '20px'}}>
                          <option selected>Choose...</option>
                          <option>Gujarat</option>
                          <option>Maharashtra</option>
                          <option>Rajasthan</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}}/>
                      </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">Password</label> <div>{text3}</div>
                      <input type="password" class="form-control" id="inputPassword4" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}} onChange={(e)=>handletextChange(e,'Password')}/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="inputPassword4" style={{backgroundColor: 'lightgrey', borderRadius: '20px'}}/>
                      </div>
                      <div class="col-12">
                      <button type="submit" class="btn btn-primary" style={{backgroundColor: 'rgb(26, 201, 26)', fontSize: '20px', width: '90%', borderRadius: '30px', border: '2px solid white', marginLeft: '30px', marginTop: '20px', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} onClick={(e)=>handleChange(e)}>Sign in</button>
                    </div><br></br>
                    <div style={{marginLeft: '210px', color: 'rgb(28, 113, 28)'}}>----------------------------- OR -----------------------------</div><br></br>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary" style={{backgroundColor: 'rgb(201, 84, 26)', fontSize: '20px', width: '90%', borderRadius: '30px', border: '2px solid white', marginLeft: '30px', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}}>Continue with Gmail</button>
                      </div><br></br>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary" style={{backgroundColor: 'rgb(26, 70, 201)', fontSize: '20px', width: '90%', borderRadius: '30px', border: '2px solid white', marginLeft: '30px', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}}>Continue with Facebook</button>
                      </div>
                    <div style={{marginLeft:'200px', fontSize:'18px'}}>Already Have An Account?
                     <button type="submit" class="link-success" style={{backgroundColor: 'rgb(26, 201, 26)', fontSize: '18px', width: '120px', borderRadius: '30px', border: '2px solid white', marginLeft: '20px', marginTop: '10px', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} onClick={()=>handleLogin()}>   Log In Here</button>
                    </div>
                  </form>
            </div>
        </div>
        </div>
    );
}

export default Register;