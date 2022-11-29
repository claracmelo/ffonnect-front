import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink, useLocation } from "react-router-dom";

const EditMember = (props) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate()
  const [member, setMember] = useState({});
  let { id } = useParams()
  let isDisabled = false
  let baseUrl = 'http://localhost:8000'

  const location = useLocation()
  let { direct_relation } = location.state
  console.log("direct_relation", props.members)
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
    if (e.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
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
      direct_relation: ""
    })
    navigate("/user/tree")
  }

  useEffect(() => {
    getOneMemberById(id)
    if (direct_relation.includes("friends")) {
      setMyRelation("friends")
      setRelationship(friends)
    }
    if (direct_relation.includes("parents")) {
      setMyRelation("parents")
      setRelationship(parents)
    }
    if (direct_relation.includes("partner")) {
      setMyRelation("partner")
      setRelationship(partner)
    }
    if (direct_relation.includes("children")) {
      setMyRelation("children")
      setRelationship(children)
    }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <h1>Edit Member</h1>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={member.name} onChange={handleChange} />
            <br />
            <label htmlFor="last_name">Last Name</label>
            <input id="last_name" type="text" name="last_name" value={member.last_name} onChange={handleChange} />
            <br />
            Choose Relationship: <select onChange={handleRelationChange}>
              <option value={member.relation = relation} onChange={handleChange}> {myRelation}</option>
              {/* Mapping through each member object in our member array
                    and returning an option element with the appropriate attributes / values.
                     */}
              {relationship?.map((relation) => <option key={relation.label} value={relation.value}>{relation.label}</option>)}
            </select>
            <br />
            <label htmlFor="last_name">DOB:</label>
            <input id="relation" type="datetime-local" name="dob" value={member.dob} onChange={handleChange} /><br />
            Dead?(Y/N)
            <input id="status" type="checkbox" checked={isSubscribed} name="status" value={member.status} onChange={handleChange} /><br />
            {
              isSubscribed ? isDisabled = false : isDisabled = true
            }
            <label htmlFor="dod">DOD</label>
            <input id="dod" type="datetime-local" name="dod" value={member.dod} onChange={handleChange} disabled={isDisabled} />
            
            <input id="input" className="footer" type="submit" value="Edit Member" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditMember