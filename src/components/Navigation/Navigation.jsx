import "./navigation.scss"
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Navigation = () => {
    const { currentUser } = useAuth()
    return (
        <nav>
            <div className="logo-div">
                Clean<span>ic</span>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search">Cleanic-eri</Link></li>
                    <li>Ko smo mi?</li>
                    {currentUser && <li> <Link to="/profile">Profil</Link></li>}
                    {!currentUser && <li><Link to="/login">Prijavi se</Link></li>}
                    {!currentUser && <li><Link to="/signup">Regisutruj se</Link></li>}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;