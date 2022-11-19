import React from "react";
import { Route,Routes } from "react-router-dom";
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

const MainRoutes = (register) => {
    return (
        <div className="about">
 <Routes>
        <Route path="/" element={<Home />}/>          
          <Route path="/"element={<MainNav/>}/>
          <Route path="login" element={<Login login={login}/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="register" element={<Register register={register} />} />
        <Route path="new" element={<Protected user={user}><AddMember addMember={addMember} /></Protected>} />
        <Route path="user" element={<Protected user={user}><FFonnect members={members} delete={deleteMember} /></Protected>}>
        <Route path="" element={<Profile  />}/>
          <Route path="tree" element={<Tree />}>
          <Route path="members" element={<AllMembers />}/>
          </Route>
          <Route path="posts" element={<Posts />} />
          <Route path="history" element={<History />}/>
        </Route>
      </Routes>
        </div>
    )
}

export default MainRoutes;