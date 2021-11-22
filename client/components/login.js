import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { ErrorCard, Loader} from './ResponseHandlers'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import socket  from './socket'


const Login = ({setAuthenticated, setCurrentUser})=>{

    const router = useRouter()
    const [email, setEmail]=useState('')
    const [password, setPassword] =useState('')
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(false)
    const [load, setLoad] = useState(false)
    const client = axios.create({baseURL:'http://localhost:3001'})



    const handleSubmit = async(event) => {
        const form = event.currentTarget;
        setLoad(true)
        event.preventDefault()
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);

                

            const body ={
                email:email,
                password:password
            }

            const login = await client.post('/api/user/login', body)
            if(login.data.token){
                localStorage.setItem('token', login.data.token)
                setCurrentUser( {
                    userName:login.data.user.userName,
                    id:login.data.user.id
                })
                const User = login.data.user.userName
                socket.auth = { User };
                socket.connect();
                setAuthenticated(true)
                router.push('/chat')
            }
            setLoad(false)
      };

        useEffect(()=>{
            
              
              
        },[])

    return(
        <div>
            <section style={{width:'50%', marginLeft:'25%', border:'2px solid black', borderRadius:'1.5rem', marginTop:'13%', marginBottom:'11.5%',padding:'3%', boxShadow:'12px 12px 2px 1px rgba(0, 0, 255, .2)' }}>
                <h3>Login</h3>
                {error ? <ErrorCard/> : <p></p>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Form.Text className="text-muted">
                        Don&apos;t have an account? <Link href='/signup' passHref><a>Click here</a></Link>
                    </Form.Text>
                </Form.Group>

                {load ? <Loader/> : 
                <Button style={{marginTop:'2%'}} variant="dark" type="submit">
                    Submit
                </Button>
                }     
            </Form>
            </section>
        </div>
    )
}


export default Login