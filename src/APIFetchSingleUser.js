import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function APIFetshSingleUser(){

    const {id} = useParams();
    const URL = `https://reqres.in/api/users/${id}`;
    const [user,setUser] = useState([])
    const fetchSingleData = async() =>{
        return await axios.get(URL).then((Response)=>{
            setUser(Response.data.data)
        }) 
    }
    useEffect(()=>{
        fetchSingleData()
    },[])

    return(
        <>
        <div>
            <h2>User Data</h2>
                <p>{user.id}</p>
                <p>{user.first_name}{" "}{user.last_name}</p>
                <p>{user.email}</p>   
                <p><img src={user.avatar} /></p>                                              
        </div>
        </>
    )
}