import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from "react-router-dom";

const EditMember = (props) => {
  console.log("direct_relation", props.members)
  const navigate = useNavigate()
  const [member, setMember] = useState({});
  let { id } = useParams()
  let baseUrl = 'http://localhost:8000'

  const [relationship, setRelationship] = useState([])
  let [myRelation, setMyRelation] = useState([])
  // example
  let friends = [{ label: "Friend", value: "Friend" }]
  let parents = [
    { label: "Father", value: "Father" },
    { label: "Great Grand Father", value: "Great Grand Father" },
    { label: "Great Great Grand Father", value: "Great Great Grand Father" },
    { label: "Great Great Great Grand Father", value: "Great Great Great Grand Father" },
    { label: "Grand Father", value: " Grand Father" },
    { label: "Mother", value: "Mother" },
    { label: "Grand Mother", value: "Grand Mother" },
    { label: "Great Grand Mother", value: "Great Grand Mother" },
    { label: "Great Great Grand Mother", value: "Great Great Grand Mother" },
    { label: "Great Great Great Grand Mother", value: "Great Great Great Grand Mother" } 
  ]
  let children = [
    { label: "Daughter", value: "Daughter" },
    { label: "Grand Daughter", value: "Grand Daughter" },
    { label: "Great Grand Daughter", value: "Great Grand Daughter" },
    { label: "Son", value: "Son" },
    { label: "Grand Son", value: "Grand Son" },
    { label: "Great Grand Son", value: "Great Grand Son" },
    { label: "Child", value: "Child" },
    { label: "Grand Child", value: "Grand Child" },
    { label: "Great Grand Child", value: "Great Grand Child" },

  ]
  let partner = [
    { label: "Husband", value: "Husband" },
    { label: "Wife", value: "Wife" },
    { label: "Boyfriend", value: "Boyfriend" },
    { label: "Girlfriend", value: "Girlfriend" },
    { label: "Partner", value: "Partner" }
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleChange = (e) => {
    setMember((prev) => ({ ...member, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.editMember(member)
    setMember({
      name: "",
      last_name: "",
      relation: "",
      dob: "",
      status: "",
      dod: "",
      direct_relation:""
    })
    navigate("/user/tree")
  }

  useEffect(() => {
    getOneMemberById(id)
    // if (direct_relation.includes("friends")) {
    //   setMyRelation("friends")
    //   setRelationship(friends)
    // }
    // if (direct_relation.includes("parents")) {
    //   setMyRelation("parents")
    //   setRelationship(parents)
    // }
    // if (direct_relation.includes("partner")) {
    //   setMyRelation("partner")
    //   setRelationship(partner)
    // }
    // if (direct_relation.includes("children")) {
    //   setMyRelation("children")
    //   setRelationship(children)
    // }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <h1>Edit Member</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={member.name} onChange={handleChange} />
        <br />
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" type="text" name="last_name" value={member.last_name} onChange={handleChange} />
        <br />
        <select onChange={handleRelationChange}>
          <option value={member.relation = relation} onChange={handleChange}> {myRelation}</option>
          {/* Mapping through each member object in our member array
                    and returning an option element with the appropriate attributes / values.
                     */}
          {relationship?.map((relation) => <option key={relation.label} value={relation.value}>{relation.label}</option>)}
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