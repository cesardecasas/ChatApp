

const UserCard =({name, status, setSelectedUser, user})=>{

    return(
        <div onClick={()=>setSelectedUser(user)} style={{width:'99%', border:'1px black solid', textAlign:'center'}}>
            <p>{name}</p>
            <p>{status}</p>
        </div>
    )
}

export default UserCard