import {Routes, Route, useRevalidator} from 'react-router-dom';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserPortal from "./UserPortal.js";
import AdminPortal from './AdminPortal';
import APIUserPortal from './APIUserPortal';
import APIFetchSingleUser from './APIFetchSingleUser';

import axios from "axios";


function App() {
  const [users,setUsers] = useState([]);
  const [userid,setUserID] = useState(1);

    const fetchAPIInfo = async ()=>{
        return await axios.get("https://reqres.in/api/users?page=1").then((Response)=>{
            setUsers(Response.data.data);
        }).catch(console.error())
    }
    const getUserID= event =>{
      setUserID(event.target.value);
    }
    useEffect(()=>{
        fetchAPIInfo();
    },[])
    
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/user'>User</a></li>
            <li><a href='/admin'>Admin</a></li>
            <li><a href='/api/user'>API User</a></li>
            <li><input type="textarea" onChange={getUserID}/></li>
            <li><a href={'/api/singleuser/'+userid}>Seach User</a></li>
          </ul>
        </nav>
      </div>
      <main>
        <Routes>
          <Route exact path='/user' element={<UserPortal users={users}/>}/>
          <Route exact path="/admin" element={<AdminPortal/>}></Route>
          <Route exact path="/api/user" element={<APIUserPortal/>}></Route>
          <Route exact path="/api/singleuser/:id" element={<APIFetchSingleUser/>}></Route>
          <Route path="/" element={
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          }></Route>
        </Routes>
      </main>
      <footer>Created By Kailash</footer>
    </div>
  );
}

export default App;
