import { NavLink, useNavigate,Link} from 'react-router-dom';
import "../css/allMembers.css"

const AllMembers = (props) => {

  const navigate = useNavigate()


  return (
    <>
      <h2> Family & Friends Tree </h2>
      {props.members.map((member) => {
        return (
          // individual card
          <div className='card' key={member.id}>
            <div className='parent'>
              {/* above button */}
              <button><Link to='/new' state={{myRelation: 'parent' }}
              >+</Link></button>
            </div>
            <div className='middle'>
              <div className='friends'>
                {/* friends button */}
                <button><Link to='/new' state={{myRelation: 'friends' }}
              >+</Link></button>
              </div>
              <div className='card-id'>
                {/* show clickable name  */}
                <label style={{ textDecoration: "none", color: "blue" }} onClick={() => { navigate(`${member.id}`) }}>
                  {member.name}
                  {/* edit button */}
                  <i className="fa fa-edit " onClick={() => navigate(`/user/tree/${member.id}`)}></i>
                </label>
                <br />
                {/* show what relation to main user */}
                {member.relation}<br />
                {/* show relation id (at the moment to user) */}
                {member.relation_id.username}<br />
                {/* delete button */}
                <button onClick={() => props.delete(member)}>&times;</button>
                {/* children button */}
              </div>
              <div className='love'>
                {/* love button */}
                <button><Link to='/new' state={{myRelation: 'love' }}
              >+</Link></button>
              </div>
            </div>
            <div className='children'>
              <button><Link to="/new" state={{myRelation: 'children' }}>+</Link></button>
            </div>
          </div>
        )
      })
      }
      <div className='card-root'>
        <div className='parent'>
          {/* above button */}
          <button><NavLink to="/new">parent +</NavLink></button>
        </div>
        <div className='middle'>
          <div className='left'>
            {/* left button */}
            <button><NavLink to="/new">left +</NavLink></button>
          </div>
          <div className="pic">
            <img src="https://tinyurl.com/3f8jsu43" alt="user" className="main-profile-img" />
            <button className="btn-logout"><i className="fa fa-edit"></i></button>
          </div>
          <div className='right'>
            {/* right button */}
            <button><NavLink to="/new">right +</NavLink></button>
          </div>
        </div>
        <div className='children'>
          <button><NavLink to="/new">children +</NavLink></button>
        </div>
      </div>
    </>
  )
}
export default AllMembers