import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { ErrorCard} from '../components/ResponseHandlers'
import axios from 'axios'
import {useRouter} from 'next/router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = ()=>{

    const router = useRouter()

    const [email, setEmail]=useState('')
    const [password, setPassword] =useState('')
    const [validated, setValidated] = useState(false);
    const [Username, setUsername] = useState('')
    const [error, setError] = useState(false)
    const auth = getAuth();

    const handleSubmit = async(event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);

        const displayName = Username
        createUserWithEmailAndPassword(auth, email, password, displayName).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
        });
            router.push('/')
        
      };

        
    return(
        <div>
            <section style={{width:'50%', marginLeft:'25%', border:'2px solid black', borderRadius:'1.5rem', marginTop:'13%', marginBottom:'11.5%',padding:'3%', boxShadow:'12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
                <h3>Sign Up</h3>
                {error ? <ErrorCard/> : <p></p>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required onChange={(e)=>setUsername(e.target.value)} type="Username" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder=" Enter Password" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            </section>
        </div>
    )
}


export default SignUp