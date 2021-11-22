import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserSelection from '../components/UserSelection'
import socket from '../components/socket'
import ChatComponent from '../components/ChatComponent'

const Chat = ()=>{


    const[message, setMessage]=useState('')
    const[messages, setMessages] = useState([])
    const[online, setOnline] = useState([])
    const[selectedUser, setSelectedUser] = useState({})


    {
        users:[
            {
                username:'example',
                messages:[],
            }
        ]
    }


    const newMessage = (e)=>{
        e.preventDefault()
        let arr = [...messages, message]
        onMessage(message)
        setMessage('')
        setMessages(arr)
    }
    socket.on("users", (users) => {
        users.forEach((user) => {
          user = user.userID === socket.id;
        });
        // put the current user first, and then sort by username
        users = users.sort((a, b) => {
          if (a) return -1;
          if (b) return 1;
          if (a.username < b.username) return -1;
          return a.username > b.username ? 1 : 0;
        });
        setOnline(users)
      });

      socket.on("user connected", (user) => {
          setOnline([...online, user]);
      });

      socket.on("private message", ({ content, from }) => {
          console.log(content, from)
        for (let i = 0; i < online.length; i++) {
          const user = online[i];
          if (user.username === from) {
            let arr = [...messages, content]
            setMessages(arr)
            // if (user !== selectedUser) {
            //   user.hasNewMessages = true;
            // }
            break;
          }
        }
      });

      const onMessage=(content)=> {
        if (selectedUser) {
            console.log(selectedUser)
          socket.emit("private message", {
            content,
            to: selectedUser.username,
          });
        }
      }
    

    return(
    <div>
        <Row>
            <Col md={3}>
                <UserSelection users={online}  setSelectedUser={setSelectedUser}/>
            </Col>
            <Col md={7}>


                
            </Col>
        </Row>
    </div>
    )
}


export default Chat