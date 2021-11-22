import Form  from "react-bootstrap/Form"
import Button from 'react-bootstrap/Button'
import {AiOutlineSend as Send} from 'react-icons/ai'


const ChatComponent = ({messages})=>{


    return(
        <div>
        <section>
                    {messages.map((el, i)=><div key={i} style={{borderRadius:'1.5rem 1.5rem', backgroundColor:'rgb(97, 203, 217)', width:'50%', margin:'4%', textAlign:'center'}}>
                        {el}
                    </div>
                    
                    )}
                    
                </section>
                <Form  onSubmit={(e)=>{newMessage(e)}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"style={{width:'90%', marginLeft:'5%', padding:'2%'}} >
                            <Form.Control onChange={(e)=>setMessage(e.target.value)} as="textarea" rows={3} value={message}/>
                            <Button type="submit" variant="dark"><Send/></Button>
                    </Form.Group>
                </Form>
        </div>
    )
}

export default ChatComponent