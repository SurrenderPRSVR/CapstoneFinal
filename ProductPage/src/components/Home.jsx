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
    const styles = {
        body: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f0f0',
        },
        container: {
            padding: '20px',
            maxWidth: '600px',
            margin: 'auto',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
        heading: {
            fontSize: '24px',
            marginBottom: '10px',
        },
        styledForm: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
        },
        roundInput: {
            border: 'none',
            borderRadius: '25px',
            padding: '10px 20px',
            fontSize: '16px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease',
        },
        roundInputFocus: {
            outline: 'none',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)',
        },
        roundButton: {
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'box-shadow 0.3s ease',
        },
        roundButtonHover: {
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
        },
    };
    
        return(

            <div>
                <h1>Shabby Chic</h1>
                <h2>Login</h2>
                <form onSubmit={submitHandler} style={styles.styledForm}>
                    <input 
                        type="email" 
                        onChange={(event) => setEmail(event.target.value)} 
                        value={email} 
                        placeholder="Email" 
                        style={styles.roundInput} 
                        onFocus={(e) => e.currentTarget.style.boxShadow = styles.roundInputFocus.boxShadow}
                        onBlur={(e) => e.currentTarget.style.boxShadow = styles.roundInput.boxShadow}
                    />
                    <input
                        type="password" 
                        onChange={(event) => setPassword(event.target.value)} 
                        value={password} 
                        placeholder="Password" 
                        style={styles.roundInput} 
                        onFocus={(e) => e.currentTarget.style.boxShadow = styles.roundInputFocus.boxShadow}
                        onBlur={(e) => e.currentTarget.style.boxShadow = styles.roundInput.boxShadow}
                    />
                    <button type="submit" style={styles.roundButton}>
                        Submit
                    </button>
                </form>
            </div>
       );
   }

export default Home;