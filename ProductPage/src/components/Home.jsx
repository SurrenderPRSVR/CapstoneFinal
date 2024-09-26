import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    function submitHandler(event){
        event.preventDefault();
        console.log("Date Submitted: ", {email, password});

        if (email && password) {
             
            navigate('/products');  // Navigate to the products page
        }
    }
    
    

 return(
    <div>
        <h1>Shabby Chic</h1>
        <h2>Login</h2>
        <form onSubmit={submitHandler}>
            <input 
                type="email" 
                onChange={(event)=>{setEmail(event.target.value);}} 
                value={email} 
                placeholder="Email" />

            <input
                type="password" 
                onChange={(event)=>{setPassword(event.target.value)}} 
                value={password} 
                placeholder="Password" />
            <button>Submit</button>
        </form>
    </div>
 );
}

export default Home;