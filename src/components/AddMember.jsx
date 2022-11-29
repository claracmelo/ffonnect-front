import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";


const AddMember = (props) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const location = useLocation()
    let { member_name, myRelation, userRow } = location.state
    console.log("name", member_name, userRow)
    const [relationship, setRelationship] = useState([])
    const [row, setRow] = useState()
    let isDisabled = false
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
        last_name: "",
        relation: "",
        dob: "",
        status: "",
        dod: "",
        direct_relation: "",
        row: 0
    })

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
        props.addMember(member)
        setMember({
            name: "",
            last_name: "",
            relation: "",
            dob: "",
            status: "",
            dod: "",
            direct_relation: "",
            row: 0
        })
        navigate("/user/tree")
    }

    useEffect(() => {
        if (myRelation === "friends") {
            setRelationship(friends)
            setRow(userRow)
        } else
            if (myRelation === "parents") {
                setRelationship(parents)
                userRow += 1
                setRow(userRow)
                console.log("userRow", userRow)
                console.log("Row", setRow(userRow))
            } else
                if (myRelation === "partner") {
                    setRelationship(partner)
                    setRow(userRow)
                }
        if (myRelation === "children") {
            setRelationship(children)
            userRow -= 1
            setRow(userRow)
        }
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
                    <h1>Add Member</h1>
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
                        <label >DOB:</label>
                        <input id="relation" type="datetime-local" name="dob" value={member.dob} onChange={handleChange} /><br />
                        Dead?(Y/N)
                        <input id="status" type="checkbox" checked={isSubscribed} name="status" value={member.status} onChange={handleChange} /><br />
                        {
              isSubscribed ? isDisabled = false : isDisabled = true
            }
                        <label htmlFor="dod">DOD:</label>
                        <input id="dod" type="datetime-local" name="dod" value={member.dod} onChange={handleChange} disabled={isDisabled}/><br />
                        <label id="direct_relation" type="text" name="direct_relation" value={member.direct_relation = `${myRelation}.${member_name}`}>direct id: {member.direct_relation}</label><br />
                        <label id="row" type="number" name="row" value={member.row = row}>row - {row}</label>
                        <input type="submit" id="input" className="footer" value="Add Member" /><br />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddMember;