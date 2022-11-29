import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from "react-router-dom";
import "../css/modal.css";

const ShowMember = () => {
  let [member, setMember] = useState({});
  let { id } = useParams()

  const navigate = useNavigate()

  let baseUrl = 'http://localhost:8000'
  const getOneMemberById = (id) => {
    // fetch to the backend
    fetch(baseUrl + "/api/v1/members/" + id, {
      credentials: "include"
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        console.log("this is the data: ", data.data)
        setMember(data.data)
      })
  }
  useEffect(() => {
    getOneMemberById(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button>
            <NavLink to="/user/tree">&times;</NavLink>
          </button>
        </div>
        <div className="title">
          <h1>{member.name} {member.last_name}</h1>
        </div>
        <div className="body">
          <div>
          <label>Date of Birth: {member.dob.substring(0, 10)}</label><br />
          {
            member.status!=false?`Date of death(${member.status}): ${member.dod}`:`Date of death(${member.status}): Alive`
          }          
          <br />
          <label>Related to: {member.direct_relation}</label>
        </div>
        </div>
        <div className="footer">
          <button onClick={() => navigate('/user/tree')}>back</button>
        </div>
      </div>
    </div>
  )
}

export default ShowMember