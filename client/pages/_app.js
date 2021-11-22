import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react'
import socket from '../components/socket';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const client = axios.create({baseURL:'http://localhost:3001'})


  const checkSession = async()=>{ 
    const token = localStorage.getItem('token')
        
    if (token) {
      try {
        const session = await client.get('api/user/session')
        props.setAuthenticated(true)
        props.setCurrentUser(session.user)
        localStorage.setItem('user',JSON.stringify(session.user));
        console.log('authenticated')
        
        
        
      } catch (error) {
        setCurrentUser(null)
        setAuthenticated(false)
        socket.on('disconect', ()=>{
          console.log('disconected')
        })
        localStorage.clear()
        
      }
    }
  }

  useEffect(()=>{
  })

  return <Component setAuthenticated={setAuthenticated} setCurrentUser={setCurrentUser} currentUser={currentUser} authenticated={authenticated} {...pageProps} />
}

export default MyApp
