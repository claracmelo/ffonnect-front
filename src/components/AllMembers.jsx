import { useNavigate, Link } from 'react-router-dom';
import "../css/allMembers.css"
import pic from "../css/whistler.jpeg"

const AllMembers = (props) => {
  const navigate = useNavigate()
  let leftSide = 250

  return (
    <div className='tree'>
      <div className='title'><h2> Family & Friends Tree </h2></div>
      {console.log(props.members)}
      {props.members?.map((member) => {
        return (
          // individual car
          <>    
          
           <div className={
            `row${member.row===-1?"M1":
           member.row===-2?"M2":member.row===-3?"M3":
           member.row===-4?"M4":member.row}`} key={member.id} >   
            <div className={
              member.row === 0 ? 'card-root':
            member.row === 1 ? 'card1': 
            member.row === 2 ? `card2` : 
            member.row === 3 ? 'card3' : member.row === 4 ? 'card4' : 
            member.row === -1 ? 'cardM1' : member.row === -2 ? 'cardM2' : 
            member.row === -3 ? 'cardM3' : member.row === -4 ? 'cardM4' : "card-root"} 
            style={{ left: leftSide=leftSide>=650?leftSide=250:leftSide=leftSide+100}} >
              <div className='parent'>
                {/* above button */}
                <button><Link to='/new' state={{ member_name: `${member.name}`, myRelation: 'parents', userRow: member.row }}
                >+</Link></button>
              </div>
              <div className='middle'>
                <div className='friends'>
                  {/* friends button */}
                  <button><Link to='/new' state={{ member_name: `${member.name}`, myRelation: 'friends', userRow: `${member.row}` }}
                  >+</Link></button>
                </div>
                <div className='card-id'>
                  {/* show clickable name  */}
                  <label style={{ textDecoration: "none", color: "blue" }} onClick={() => { navigate(`member/${member.id}`) }}>
                    {member.name} </label>
                  {/* edit button */}
                  <Link to={`/user/tree/${member.id}`} state={{ direct_relation: `${member.direct_relation}` }} ><i className="fa fa-edit" /></Link>
                  {/* delete button */}
                  <button onClick={() => props.delete(member)}>&times;</button>

                  {/* <i className="fa fa-edit" onClick={() => navigate(`/user/tree/${member.id}`)} ></i> */}

                  <br />
                  {/* show what relation to main user */}
                  <br />
                  {/* show relation user */}
                  {member.direct_relation.includes("friends.") ? member.direct_relation.replace('friends.', '') : member.direct_relation.includes("parents.") ? member.direct_relation.replace('parents.', '') : member.direct_relation.includes("children.") ? member.direct_relation.replace('children.', '') : member.direct_relation.includes("partner.") ? member.direct_relation.replace('partner.', '') : member.direct_relation
                  }'s {member.relation}<br />
                  {/* delete button */}
                  {/* <button onClick={() => props.delete(member)}>&times;</button> */}
                  {/* children button */}
                </div>
                <div className='partner'>
                  {/* love button */}
                  <button><Link to='/new' state={{ member_name: `${member.name}`, myRelation: 'partner', userRow: `${member.row}` }}
                  >+</Link></button>
                </div>
              </div>
              <div className='children'>
                <button><Link to="/new" state={{ member_name: `${member.name}`, myRelation: 'children', userRow: `${member.row}` }}>+</Link></button>
              </div>
            </div>
          </div>
          </>
        )
      })
      }
      <div className='row0' >
        <div className='card-root' style={{ left: 350}} >
          <div className='parent'>
            {/* above button */}
            <button><Link to='/new' state={{ member_name: `${props.user.username}`, myRelation: 'parents', userRow: 0 }}
            >+</Link></button>
          </div>
          <div className='middle'>
            <div className='friends'>
              {/* friends button */}
              <button><Link to='/new' state={{ member_name: `${props.user.username}`, myRelation: 'friends', userRow: 0 }}
              >+</Link></button>
            </div>
            <div className='card-id'>
              <div className='pic-user'>
              <img src={pic} alt="user" />
              </div>
              <div className='user-name'>
                {props.user.username} {props.user.last_name} 
              </div>
              {/* <button className="btn-logout"><i className="fa fa-edit"></i></button> */}
            </div>
            <div className='partner'>
              {/* love button */}
              <button><Link to='/new' state={{ member_name: `${props.user.username}`, myRelation: 'partner', userRow: 0 }}
              >+</Link></button>
            </div>
          </div>
          <div className='children'>
            <button><Link to="/new" state={{ member_name: `${props.user.username}`, myRelation: 'children', userRow: 0 }}>+</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AllMembers