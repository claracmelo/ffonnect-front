import MainNav from "../components/MainNav";
import "../css/home.css"


const Home = () => {
    return (
<div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">


        </div>
        <div className="title">
        <h1>Family & Friends </h1>
        connect
        </div>
        <div className="body">
          <div>
          <MainNav/>
          </div>
        </div>
        <div className="footer" >
            Clara Lima &nbsp; 
            <a href="https://github.com/claracmelo"><i className='fab fa-github'></i></a>
            &nbsp;
            <a href="https://linkedin.com/in/claracmelo"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    )


//     return (
//         <div className="home">
//             <h1>FFonnect</h1>
//             <MainNav/>
//         </div>
//     )
}

export default Home;