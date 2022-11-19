import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

const EditMember = (props) => {

  const navigate = useNavigate()
  const [member, setMember] = useState({});
  let { id } = useParams()

  let baseUrl = 'http://localhost:8000'

  let relationship = [
    { label: "Spouse", value: "Spouse" },
    { label: "Sister", value: "Sister" },
    { label: "Brother", value: "Brother" },
    { label: "Mother", value: "Mother" },
    { label: "Father", value: "Father" }
  ]

  // Using state to keep track of what the selected fruit is
  let [relation, setRelation] = useState(member.relation)

  // Using this function to update the state of fruit
  // whenever a new option is selected from the dropdown
  let handleRelationChange = (e) => {
    setRelation(e.target.value)
  }

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
  }, [])


  const handleChange = (e) => {
    setMember((prev) => ({ ...member, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.editMember(member)
    setMember({
      name: "",
      relation: "",
      dob: "",
      status: "",
      dod: ""
    })
    navigate("/user/tree")
  }

  useEffect(() => {
    getOneMemberById(id)
  }, [])
  return (
    <>
      <h1>Edit Member</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={member.name} onChange={handleChange} />
        <br />
        <select onChange={handleRelationChange}>
          <option value={member.relation = relation} onChange={handleChange} name="status"> -- Select Relationship -- </option>
          {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
          {relationship.map((relation) => <option key={relation.label} value={relation.value}>{relation.label}</option>)}
        </select>
        <br />
        <input id="relation" type="date" name="dob" value={member.dob} onChange={handleChange} />
        <input id="status" type="checkbox" name="status" value={member.status} onChange={handleChange} />
        <input id="dod" type="date" name="dod" value={member.dod} onChange={handleChange} />
        <input type="submit" value="Edit Member" />
      </form>
    </>

  )
}

export default EditMember