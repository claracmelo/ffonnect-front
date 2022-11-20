import React, { useEffect, useState } from "react";
import { useNavigate,useLocation  } from "react-router-dom";


const AddMember = (props) => {
    const location = useLocation()
    const { myRelation,member_name } = location.state

    console.log("name",member_name)
    const [relationship,setRelationship] = useState([])

    // example
    let friends = [{ label: "Friend", value: "Friend" }]
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
        dod: "",
        direct_relation:""
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
            dod: "",
            direct_relation:""
        })
        navigate("/user/tree")
    }
    useEffect(()=>{
        if(myRelation === "friends"){
            setRelationship(friends)
        }
        if(myRelation === "parents"){
            setRelationship(parents)
        }
        if(myRelation === "partner"){
            setRelationship(partner)
        }
        if(myRelation === "children"){
            setRelationship(children)
        }                        
    },[])

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
                    {relationship?.map((relation) => <option key={relation.label} value={relation.value}>{relation.label}</option>)}
                </select>
                
                <br />
                <input id="relation" type="date" name="dob" value={member.dob} onChange={handleChange} />
                <input id="status" type="checkbox" name="status" value={member.status} onChange={handleChange} />
                <input id="dod" type="date" name="dod" value={member.dod} onChange={handleChange} />
                <input type="submit" value="Add Member" />
                <label id="direct_relation" type="text" name="direct_relation" value={member.direct_relation = myRelation+member.name}>direct id: {member.direct_relation}</label>
            </form>
        </>
    )
}

export default AddMember;