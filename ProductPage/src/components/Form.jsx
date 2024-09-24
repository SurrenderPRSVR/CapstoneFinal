import { useState } from "react";

function Form() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    function submitHandler(event){
        event.preventDefault();
        console.log("Date Submitted: ", {email, password});
    }

 return(
    <div>
        <h2>Customer Login</h2>
        <form onSubmit={submitHandler}>
            <input type="email" onChange={(event)=>{setEmail(event.target.value);}} value={email} placeholder="Email" />
            <input type="password" onChange={(event)=>{setPassword(event.target.value);}} value={password} placeholder="Password" />
            <button>Submit</button>
        </form>
    </div>
 );
}

export default Form;