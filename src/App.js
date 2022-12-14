import React, {useState,useEffect} from "react";
import { Route,Routes,useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import MainNav from "./components/MainNav";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Protected from "./components/Protected";
import AddMember from "./components/AddMember";
import FFonnect from "./pages/FFonnect";
import Tree from "./components/Tree";
import Posts from "./components/Posts";
import History from "./components/History";
import AllMembers from "./components/AllMembers";
import EditMember from "./components/EditMember";
import Profile from "./components/Profile";
import ShowMember from "./components/ShowMember";

let baseUrl = process.env.REACT_APP_BACKEND_URL

const App = () => {
  const [members,setMembers]=useState([])
  const [user,setUser]=useState()
  const [userData,setUserData]=useState()
  

  const navigate = useNavigate()
  const getMembers = () => {
      // fetch to the backend
      console.log("first members: ")
      fetch(baseUrl + "/api/v1/members/",{
        credentials: "include",headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        console.log(data.data)
        setMembers(data.data)
      })
    }

    const login = async (e) => {
      e.preventDefault()
      const url = baseUrl + '/api/v1/user/login'
      const loginBody = {
        // username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value
      }
      try {  
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(loginBody),
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: "include"
        })  
        console.log("BODY: ",loginBody)

        if (response.status === 200) {
          const jsonResponse = await response.json();
          const {data} = jsonResponse;
          // add new state for line below
          setUserData(data);
          console.log("this is the data",data)
          setUser(true) 
          console.log("here before get members")
          getMembers()
          navigate("/user/tree")
        }
      }
      catch (err) {
        console.log('Error => ', err);
      }
    }
    const logout = (data) => {
      setUserData.removeItem(data);
      setUser(false);
    };

  const register = async (e) => {
      e.preventDefault()
      console.log(e.target)
      const url = baseUrl + '/api/v1/user/register'
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            username: e.target.username.value,
            last_name: e.target.last_name.value,
            dob:e.target.dob.value,
            password: e.target.password.value,
            email: e.target.email.value
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        console.log(response)
        if (response.status === 201) {
          setUser(true) 
          console.log("worked register")
          getMembers()
          navigate("login")
        }
      }
      catch (err) {
        console.log('Error => ', err);
      }
    }   

    const addMember =(member)=>{
      fetch(baseUrl + "/api/v1/members/",{
        credentials: "include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:member.name,last_name:member.last_name,relation:member.relation,dob:member.dob,status:member.status,dod:member.dod,direct_relation:member.direct_relation, row:member.row})
      })
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        console.log(data.data)
        getMembers()
      })
    }
    const editMember =(member)=>{
      console.log("first edit member: ")
      fetch(baseUrl + `/api/v1/members/${member.id}`,{
        credentials: "include",method:"PUT",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name:member.name,last_name:member.last_name,relation:member.relation,dob:member.dob,status:member.status,dod:member.dod})
      })
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        console.log(data.data)
        getMembers()
      })
    }
    const deleteMember =(member)=>{
      fetch(baseUrl + `/api/v1/members/${member.id}`,{
        credentials: "include",
        method: "DELETE",
        headers:{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
         },
      })
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      })
      .then(data => {
        console.log(data.data)
        getMembers()
      })  
    }
    
    useEffect(()=>{
      getMembers()
    },[])
    
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>       
          <Route path="/"element={<MainNav/>}/>
          <Route path="login" element={<Login login={login}/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="register" element={<Register register={register} />} />
          {/* <Route path="all" element={<AllMembers members={members} delete={deleteMember}/>}/> */}
        <Route path="new" element={<Protected user={user}><AddMember addMember={addMember} /></Protected>} />
        <Route path="user" element={<Protected user={user}><FFonnect user={userData}/></Protected>}>
        <Route path="" element={<Profile />}/>
          <Route path="tree" element={<Tree />} >
          <Route path=":id" element ={<EditMember members={members} editMember={editMember}/>}/>
          <Route path="member/:id" element ={<ShowMember />}/>
          <Route path="" element={<AllMembers user={userData} members={members} delete={deleteMember}/>}/>
          </Route>
          <Route path="posts" element={<Posts />} />
          <Route path="history" element={<History />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
