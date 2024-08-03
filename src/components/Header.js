import { useNavigate } from 'react-router-dom';

const Header = () =>{

  const navigate = useNavigate(); 
    return(
        <header className="header">
        <div className="logo">ResuMagic</div>
        <div className="auth-buttons">
          <button className="sign-in" onClick={()=>navigate("/src/components/Login.js")}>Sign In</button>
          <button className="sign-up" onClick={()=>navigate("/src/components/Registration.js")} >Sign Up</button>
        </div>
      </header>
    )
}
export default Header;