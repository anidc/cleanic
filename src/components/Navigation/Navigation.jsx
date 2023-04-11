import "./navigation.scss"
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const Navigation = () => {
    const { currentUser } = useAuth()
    return (
        <nav>
            <div className="logo-div">
                <Link className="logo-link" to="/">Clean<span>ic</span></Link>
                <div className="nav-links">
                    <ul>
                        <li><Link className="link" to="/">Home</Link></li>
                        <li><Link className="link" to="/search">Cleanic-eri</Link></li>
                        <li>Ko smo mi?</li>
                    </ul>
                </div>
            </div>
            <div className="nav-links">
                <ul>
                    {currentUser && <li> <Link className="link" to={"/profile/" + currentUser.uid}>Profil</Link></li>}
                    {!currentUser && <li><Link className="link link-auth" to="/login">Prijavi se</Link></li>}
                    {!currentUser && <li className="registration"><Link className="link link-auth" to="/signup">Regisutruj se</Link></li>}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;