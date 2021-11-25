import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserSelection from '../components/UserSelection'
import socket from '../components/socket'
import ChatComponent from '../components/ChatComponent'
import { getMessaging, getToken } from 'firebase/messaging'

const Chat = ()=>{


    const[message, setMessage]=useState('')
    const[messages, setMessages] = useState([])
    const[online, setOnline] = useState([])
    const[selectedUser, setSelectedUser] = useState({})
   

  useEffect(()=>{
  
  },[])
    

    return(
    <div>
        <Row>
            <Col md={3}>
                <UserSelection users={online}  setSelectedUser={setSelectedUser}/>
            </Col>
            <Col md={7}>
            {}

                
            </Col>
        </Row>
    </div>
    )
}


export default Chat