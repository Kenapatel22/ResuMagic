import { useNavigate } from 'react-router-dom';

const Header = () =>{

  const navigate = useNavigate(); 
    return(
        <header className="header">
        <div className="logo">ResuMagic</div>
        <div className="auth-buttons">
          <button className="sign-in" onClick={()=>navigate("Login")}>Sign In</button>
          <button className="sign-up" onClick={()=>navigate("Registration")} >Sign Up</button>
        </div>
      </header>
    )
}
export default Header;