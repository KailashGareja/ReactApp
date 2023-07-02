import { useState,useEffect } from "react";
import axios from "axios";

export default function APIUserPortal(){
    
    const [users,setUsers] = useState([]);
    const [page,setPage] = useState(1);

    const fetchAPIInfo = async (page)=>{
        return await axios.get("https://reqres.in/api/users?page="+page).then((Response)=>{
            setUsers(Response.data.data);
        }).catch(console.error())
    }
    useEffect(()=>{
        fetchAPIInfo(page);
    },[page]);
    return(
        <>
            <div>
                <h1>Weclcome UserPortal</h1>
                <div>
                    <button onClick={()=>setPage(1)}>1</button>
                    <button onClick={()=>setPage(2)}>2</button>
                </div>
                <table border="1" align="center">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}{" "}{user.last_name}</td>
                                    <td>{user.email}</td>   
                                    <td><img src={user.avatar} /></td> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}