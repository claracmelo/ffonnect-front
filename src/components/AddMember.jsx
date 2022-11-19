import React, { useState } from "react";
import { useNavigate,useLocation  } from "react-router-dom";


const AddMember = (props) => {
    const location = useLocation()
    const { myRelation } = location.state
    console.log("this is the location", myRelation)

    let friends = { label: "Friend", value: "Friend" }
    let parents = [{ label: "Father", value: "Father" },
    { label: "Mother", value: "Mother" }
    ]
    let children = [
        { label: "Daughter", value: "Daughter" },
        { label: "Son", value: "Son" },
        { label: "Child", value: "Child" }
    ]
    let partner = [
        { label: "Husband", value: "Husband" },
        { label: "Wife", value: "Wife" },
        { label: "Boyfriend", value: "Boyfriend" },
        { label: "Girlfriend", value: "Girlfriend" },
        { label: "Partner", value: "Partner" }
    ]

    let relationship = [
        { label: "Spouse", value: "Spouse" },
        { label: "Sister", value: "Sister" },
        { label: "Brother", value: "Brother" },
        { label: "Mother", value: "Mother" },
        { label: "Father", value: "Father" }
    ]

    // Using state to keep track of what the selected relation is
    let [relation, setRelation] = useState(myRelation)

    // Using this function to update the state of relation
    // whenever a new option is selected from the dropdown
    let handleRelationChange = (e) => {
        setRelation(e.target.value)
    }

    const navigate = useNavigate()
    const [member, setMember] = useState({
        name: "",
        relation: "",
        dob: "",
        status: "",
        dod: ""
    })

    const handleChange = (e) => {
        setMember((prev) => ({ ...member, [e.target.name]: e.target.value }))

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMember(member)
        setMember({
            name: "",
            relation: "",
            dob: "",
            status: "",
            dod: ""
        })
        navigate("/user/tree")
    }
    return (
        <>
            <h1>Add Member</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={member.name} onChange={handleChange} />
                <br />
                <select onChange={handleRelationChange}>
                    <option value={member.relation = relation} onChange={handleChange}> {myRelation}</option>
                    {/* Mapping through each member object in our member array
                    and returning an option element with the appropriate attributes / values.
                     */}



                    {relationship.map((relation) => <option key={relation.label} value={relation.value}>{relation.label}</option>)}
                </select>
                <br />
                <input id="relation" type="date" name="dob" value={member.dob} onChange={handleChange} />
                <input id="status" type="checkbox" name="status" value={member.status} onChange={handleChange} />
                <input id="dod" type="date" name="dod" value={member.dod} onChange={handleChange} />
                <input type="submit" value="Add Member" />
            </form>
        </>
    )
}

export default AddMember;