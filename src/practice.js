import React from "react";
import Practice1 from "./practice1";

function Practice(props){
    const {name,course} = props;
    console.log(name,course)
    return(
        <div style={{border:'1px solid blue',marginTop:'2px'}}>
            Hello from Practice! {props.name}
            <Practice1/>
        </div>
        
    );
}

export default Practice;