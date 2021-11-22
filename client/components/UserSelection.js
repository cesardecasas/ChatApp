import UserCard from "./UserCard"
import Button from 'react-bootstrap/Button'
import socket from "./socket"
import { useRouter } from "next/router"

const UserSelection = ({users, setSelectedUser})=>{

    const router = useRouter()


return(
    <section style={{backgroundColor:'grey', height:'100%'}}>
        {users?.map((el, i)=><UserCard user={el} setSelectedUser={setSelectedUser} key={i} name={el.username} status={el.status} />)}
        <Button variant='dark' onClick={()=>{
            socket.on('disconect', ()=>{
                console.log('disconected')
              })
              router.push('/')
        }}>LogOff</Button>
    </section>
)
}

export default UserSelection