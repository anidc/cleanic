import { useAuth } from "../../contexts/AuthContext";
import "./profile.scss"
import profilePic from "../../images/profile-pic.jpg"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";


const Profile = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const getUserData = async () => {
        const ref = doc(db, "Users", currentUser.uid)
        const res = await getDoc(ref)

        if (!res.exists()) return
        const { name, surname, location, price } = res.data()
        if (name && surname) setUser({ name, surname, price, location })
    }
    useEffect(() => {
        // Redirect to login page if user is not authenticated
        if (!currentUser) {
            navigate('/login');
        }
        getUserData()
    }, [currentUser, navigate]);

    async function handleLogout() {
        setError("")
        try {
            await logout()
            navigate("/")
        } catch (error) {
            setError("Neuspjesna odjava")
        }
    }
    return (
        <div className="profile-page">
            <div className="profile-wrapper">
                <div className="gradient-profile">

                </div>
                <div className="content-profile">

                    <div className="left-profile">
                        <div className="profile-image-wrapper">
                            <img src={profilePic} alt="" />
                        </div>
                        <h3>{user?.name} {user?.surname}</h3>
                        <p>{user?.location}</p>
                        <p>Cijena po m2: {user?.price} KM</p>
                    </div>
                    <div className="middle-profile">
                        <Link to="/update-profile">Uredi profil</Link>
                    </div>
                    <div className="right-profile">
                        <button onClick={handleLogout}>Odjavi se</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;